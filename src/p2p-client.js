/**
 * P2P Client - BuscaLogo Frontend
 * 
 * Cliente que se conecta ao servidor central para:
 * - Enviar queries de busca
 * - Receber resultados em tempo real
 * - Gerenciar paginação
 * - Organizar resultados por relevância
 */

class P2PClient {
  constructor() {
    this.serverConnection = null;
    this.isConnected = false;
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
    
    // Estado da busca
    this.currentQuery = null;
    this.searchResults = [];
    this.searchProgress = null;
    this.searchTimeout = null;
    
    // Paginação
    this.currentPage = 1;
    this.resultsPerPage = 10;
    this.totalResults = 0;
    
    // Callbacks
    this.onResultsUpdate = null;
    this.onProgressUpdate = null;
    this.onConnectionChange = null;
    
    this.init();
  }
  
  /**
   * Inicializa o cliente
   */
  async init() {
    try {
      console.log('🚀 P2P Client iniciando...');
      
      // Conecta ao servidor
      await this.connectToServer();
      
      console.log('✅ P2P Client inicializado');
      
    } catch (error) {
      console.error('❌ Erro ao inicializar P2P Client:', error);
    }
  }
  
  /**
   * Conecta ao servidor central
   */
  async connectToServer() {
    try {
      if (this.serverConnection) {
        this.serverConnection.close();
      }
      
      // Gera ID único para este frontend
      const frontendId = `frontend_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      // Conecta ao servidor
      const serverUrl = `ws://localhost:3001`;
      this.serverConnection = new WebSocket(serverUrl);
      
      this.serverConnection.onopen = () => {
        console.log('🔗 Conectado ao servidor central');
        this.isConnected = true;
        this.reconnectAttempts = 0;
        
        // Notifica mudança de conexão
        if (this.onConnectionChange) {
          this.onConnectionChange(true);
        }
        
        // Envia identificação
        this.sendToServer({
          type: 'FRONTEND_IDENTIFY',
          frontendId: frontendId,
          action: 'IDENTIFY',
          timestamp: Date.now()
        });
      };
      
      this.serverConnection.onmessage = (event) => {
        this.handleServerMessage(event.data);
      };
      
      this.serverConnection.onclose = () => {
        console.log('🔌 Desconectado do servidor central');
        this.isConnected = false;
        
        // Notifica mudança de conexão
        if (this.onConnectionChange) {
          this.onConnectionChange(false);
        }
        
        this.handleServerDisconnection();
      };
      
      this.serverConnection.onerror = (error) => {
        console.error('❌ Erro na conexão com servidor:', error);
        this.isConnected = false;
        
        // Notifica mudança de conexão
        if (this.onConnectionChange) {
          this.onConnectionChange(false);
        }
      };
      
    } catch (error) {
      console.error('❌ Erro ao conectar ao servidor:', error);
      this.scheduleReconnect();
    }
  }
  
  /**
   * Agenda reconexão ao servidor
   */
  scheduleReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      const delay = Math.min(1000 * Math.pow(2, this.reconnectAttempts), 30000); // Exponential backoff
      
      console.log(`🔄 Tentativa de reconexão ${this.reconnectAttempts}/${this.maxReconnectAttempts} em ${delay}ms`);
      
      setTimeout(() => {
        this.connectToServer();
      }, delay);
    } else {
      console.error('❌ Máximo de tentativas de reconexão atingido');
    }
  }
  
  /**
   * Gerencia desconexão do servidor
   */
  handleServerDisconnection() {
    if (this.isConnected) {
      this.scheduleReconnect();
    }
  }
  
  /**
   * Envia mensagem para o servidor
   */
  sendToServer(message) {
    if (this.serverConnection && this.serverConnection.readyState === WebSocket.OPEN) {
      try {
        this.serverConnection.send(JSON.stringify(message));
      } catch (error) {
        console.error('❌ Erro ao enviar mensagem para servidor:', error);
      }
    } else {
      console.warn('⚠️ Servidor não conectado, mensagem não enviada');
    }
  }
  
  /**
   * Processa mensagens do servidor
   */
  handleServerMessage(data) {
    try {
      const message = JSON.parse(data);
      const { type, queryId, query, results, progress, stats } = message;
      
      switch (type) {
        case 'WELCOME':
          console.log('👋 Servidor enviou boas-vindas:', message.message);
          break;
          
        case 'FRONTEND_IDENTIFIED':
          console.log('✅ Frontend identificado pelo servidor:', message.frontendId);
          break;
          
        case 'SEARCH_STARTED':
          this.handleSearchStarted(message);
          break;
          
        case 'SEARCH_PROGRESS':
          this.handleSearchProgress(message);
          break;
          
        case 'SEARCH_COMPLETED':
          this.handleSearchCompleted(message);
          break;
          
        case 'SEARCH_ERROR':
          this.handleSearchError(message);
          break;
          
        default:
          console.log('📨 Mensagem do servidor:', type, message);
      }
      
    } catch (error) {
      console.error('❌ Erro ao processar mensagem do servidor:', error);
    }
  }
  
  /**
   * Processa início de busca
   */
  handleSearchStarted(message) {
    const { queryId, query, peersCount } = message;
    
    console.log(`🔍 Busca iniciada: "${query}" (${queryId}) - ${peersCount} peers`);
    
    this.currentQuery = {
      id: queryId,
      query: query,
      peersCount: peersCount,
      startTime: Date.now()
    };
    
    this.searchResults = [];
    this.currentPage = 1;
    this.totalResults = 0;
    
    // Notifica início da busca
    if (this.onProgressUpdate) {
      this.onProgressUpdate({
        status: 'started',
        query: query,
        peersCount: peersCount,
        progress: 0
      });
    }
    
    // Define timeout para a busca
    this.searchTimeout = setTimeout(() => {
      if (this.currentQuery && this.currentQuery.id === queryId) {
        console.log(`⏰ Busca ${queryId} expirou`);
        this.handleSearchTimeout(queryId);
      }
    }, 20000); // 20 segundos
  }
  
  /**
   * Processa progresso da busca
   */
  handleSearchProgress(message) {
    const { queryId, progress } = message;
    
    if (this.currentQuery && this.currentQuery.id === queryId) {
      console.log(`📊 Progresso da busca ${queryId}: ${progress.percentage}% (${progress.responded}/${progress.total})`);
      
      // Atualiza progresso
      this.searchProgress = progress;
      
      // Notifica atualização de progresso
      if (this.onProgressUpdate) {
        this.onProgressUpdate({
          status: 'progress',
          query: this.currentQuery.query,
          peersCount: this.currentQuery.peersCount,
          progress: progress.percentage,
          responded: progress.responded,
          total: progress.total
        });
      }
    }
  }
  
  /**
   * Processa conclusão da busca
   */
  handleSearchCompleted(message) {
    const { queryId, query, status, results, stats } = message;
    
    if (this.currentQuery && this.currentQuery.id === queryId) {
      console.log(`✅ Busca ${queryId} completada: ${results.length} resultados em ${stats.duration}ms`);
      
      // Limpa timeout
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
        this.searchTimeout = null;
      }
      
      // Verifica se não há peers conectados
      if (status === 'no_peers') {
        console.log('⚠️ Nenhum peer conectado, mostrando mensagem de fallback');
        
        // Notifica conclusão com status especial
        if (this.onProgressUpdate) {
          this.onProgressUpdate({
            status: 'no_peers',
            query: query,
            peersCount: 0,
            progress: 100,
            totalResults: 0,
            duration: 0,
            message: stats.message || 'Nenhuma extensão conectada'
          });
        }
        
        // Limpa resultados
        this.searchResults = [];
        this.totalResults = 0;
        this.currentPage = 1;
        
        return;
      }
      
      // Processa resultados normais
      this.searchResults = this.processSearchResults(results);
      this.totalResults = this.searchResults.length;
      this.currentPage = 1;
      
      // Notifica conclusão
      if (this.onProgressUpdate) {
        this.onProgressUpdate({
          status: 'completed',
          query: query,
          peersCount: stats.totalPeers,
          progress: 100,
          totalResults: this.totalResults,
          duration: stats.duration
        });
      }
      
      // Notifica atualização de resultados
      if (this.onResultsUpdate) {
        this.onResultsUpdate({
          results: this.searchResults, // Envia TODOS os resultados
          currentPage: this.currentPage,
          totalPages: this.getTotalPages(),
          totalResults: this.totalResults
        });
      }
      
      // Limpa query atual
      this.currentQuery = null;
      
    } else if (queryId.startsWith('fallback_')) {
      // Query de fallback (não há peers)
      console.log('⚠️ Busca de fallback processada (sem peers)');
      
      // Limpa timeout se existir
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
        this.searchTimeout = null;
      }
      
      // Notifica status de fallback
      if (this.onProgressUpdate) {
        this.onProgressUpdate({
          status: 'no_peers',
          query: query,
          peersCount: 0,
          progress: 100,
          totalResults: 0,
          duration: 0,
          message: stats.message || 'Nenhuma extensão conectada'
        });
      }
      
      // Limpa resultados
      this.searchResults = [];
      this.totalResults = 0;
      this.currentPage = 1;
      this.currentQuery = null;
    }
  }
  
  /**
   * Processa erro na busca
   */
  handleSearchError(message) {
    const { error, frontendId } = message;
    
    console.error(`❌ Erro na busca: ${error}`);
    
    // Notifica erro
    if (this.onProgressUpdate) {
      this.onProgressUpdate({
        status: 'error',
        error: error
      });
    }
    
    // Limpa estado
    this.currentQuery = null;
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = null;
    }
  }
  
  /**
   * Processa timeout da busca
   */
  handleSearchTimeout(queryId) {
    if (this.currentQuery && this.currentQuery.id === queryId) {
      console.log(`⏰ Busca ${queryId} expirou`);
      
      // Notifica timeout
      if (this.onProgressUpdate) {
        this.onProgressUpdate({
          status: 'timeout',
          query: this.currentQuery.query
        });
      }
      
      // Limpa estado
      this.currentQuery = null;
      this.searchTimeout = null;
    }
  }
  
  /**
   * Processa e organiza resultados da busca
   */
  processSearchResults(results) {
    try {
      // Remove duplicatas por URL
      const uniqueResults = [];
      const seenUrls = new Set();
      
      results.forEach(result => {
        if (!seenUrls.has(result.url)) {
          seenUrls.add(result.url);
          uniqueResults.push(result);
        }
      });
      
      // Ordena por relevância (score)
      uniqueResults.sort((a, b) => {
        const scoreA = a.score || 0;
        const scoreB = b.score || 0;
        
        if (scoreB !== scoreA) {
          return scoreB - scoreA;
        }
        
        // Em caso de empate, ordena por timestamp (mais recente primeiro)
        return (b.timestamp || 0) - (a.timestamp || 0);
      });
      
      return uniqueResults;
      
    } catch (error) {
      console.error('❌ Erro ao processar resultados:', error);
      return results;
    }
  }
  
  /**
   * Realiza busca no servidor
   */
  async search(query, page = 1, limit = 20) {
    try {
      if (!this.isConnected) {
        throw new Error('Não conectado ao servidor');
      }
      
      if (!query || query.trim().length === 0) {
        throw new Error('Query vazia');
      }
      
      console.log(`🔍 Enviando busca: "${query}"`);
      
      // Envia query para o servidor
      this.sendToServer({
        type: 'QUERY_FROM_FRONTEND',
        query: query.trim(),
        frontendId: `frontend_${Date.now()}`,
        page: page,
        limit: limit,
        timestamp: Date.now()
      });
      
      return true;
      
    } catch (error) {
      console.error('❌ Erro ao realizar busca:', error);
      throw error;
    }
  }
  
  /**
   * Obtém resultados da página atual
   */
  getCurrentPageResults() {
    const startIndex = (this.currentPage - 1) * this.resultsPerPage;
    const endIndex = startIndex + this.resultsPerPage;
    return this.searchResults.slice(startIndex, endIndex);
  }
  
  /**
   * Obtém total de páginas
   */
  getTotalPages() {
    return Math.ceil(this.totalResults / this.resultsPerPage);
  }
  
  /**
   * Vai para página específica
   */
  goToPage(page) {
    if (page >= 1 && page <= this.getTotalPages()) {
      this.currentPage = page;
      
      // Notifica atualização de resultados
      if (this.onResultsUpdate) {
        this.onResultsUpdate({
          results: this.getCurrentPageResults(),
          currentPage: this.currentPage,
          totalPages: this.getTotalPages(),
          totalResults: this.totalResults
        });
      }
      
      return true;
    }
    return false;
  }
  
  /**
   * Próxima página
   */
  nextPage() {
    return this.goToPage(this.currentPage + 1);
  }
  
  /**
   * Página anterior
   */
  previousPage() {
    return this.goToPage(this.currentPage - 1);
  }
  
  /**
   * Define callbacks
   */
  setCallbacks(onResultsUpdate, onProgressUpdate, onConnectionChange) {
    this.onResultsUpdate = onResultsUpdate;
    this.onProgressUpdate = onProgressUpdate;
    this.onConnectionChange = onConnectionChange;
  }
  
  /**
   * Obtém status da conexão
   */
  getConnectionStatus() {
    return {
      isConnected: this.isConnected,
      currentQuery: this.currentQuery,
      searchProgress: this.searchProgress,
      totalResults: this.totalResults,
      currentPage: this.currentPage,
      totalPages: this.getTotalPages()
    };
  }
  
  /**
   * Limpa resultados da busca
   */
  clearSearch() {
    this.searchResults = [];
    this.currentQuery = null;
    this.searchProgress = null;
    this.currentPage = 1;
    this.totalResults = 0;
    
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = null;
    }
    
    // Notifica limpeza
    if (this.onResultsUpdate) {
      this.onResultsUpdate({
        results: [],
        currentPage: 1,
        totalPages: 0,
        totalResults: 0
      });
    }
  }
  
  /**
   * Desconecta do servidor
   */
  disconnect() {
    if (this.serverConnection) {
      this.serverConnection.close();
    }
  }
}

export default P2PClient;
