// Objeto que mapeia rotas para o conteúdo HTML
const routes = {
    // Rota de índice/início
    'home': { 
        title: 'Início - Transformando Vidas',
        content: `
            <section class="relative bg-white pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
                </section>
            <section class="bg-indigo-50 py-16">
                </section>
        `
    },
    
    // Outras rotas da SPA (para contexto)
    'about': { 
        title: 'O que Fazemos - Projetos',
        content: `
            <section class="py-20 bg-white">
                </section>
        `
    },
    
    'contact': { 
        title: 'Contato e Doação - Junte-se a Nós',
        content: `
            <section class="py-20 bg-gray-50">
                </section>
        `
    },
    
    '404': { 
        title: 'Página Não Encontrada (404)',
        content: `
            <section class="py-20 min-h-[50vh] flex items-center justify-center bg-gray-50">
                </section>
        `
    }
};

const root = document.getElementById('app-root');
const pageTitle = document.getElementById('page-title');
const navLinks = document.querySelectorAll('.nav-link');
// ... outras variáveis do DOM

// --- Funções de Navegação SPA ---

/**
 * Renderiza o conteúdo da rota especificada no #app-root, implementando o mecanismo da SPA.
 * @param {string} routeName - O nome da rota (ex: 'home', 'about')
 * @param {boolean} pushState - Se deve adicionar um novo estado ao histórico do navegador
 */
function renderRoute(routeName, pushState = true) {
    const route = routes[routeName] || routes['404'];
    
    // 1. Atualiza o conteúdo principal
    root.innerHTML = route.content;
    
    // 2. Atualiza o título da página
    pageTitle.textContent = 'Apoio Comunitário - ' + route.title;

    // 3. Atualiza o URL e o histórico do navegador (Mecanismo SPA)
    const newHash = '#' + routeName;
    if (window.location.hash !== newHash && pushState) {
        // Usa history.pushState para mudar o URL sem recarregar a página
        history.pushState({ route: routeName }, route.title, newHash);
    }
    
    // 4. Atualiza a classe de link ativo na navegação
    updateActiveLink(routeName);
    
    // ... restante da lógica de rolagem e listeners ...
}