.
Abrace o Futuro ONG - Landing Page (SPA)
Projeto de uma Landing Page institucional para uma ONG fictícia, desenvolvido como uma Single Page Application (SPA) utilizando HTML5, CSS3 e JavaScript puro. O foco principal é a Transparência, a Navegação Rápida e o Engajamento do Usuário (Doações e Voluntariado).

🚀 Tecnologias Utilizadas
Este projeto foi construído puramente com tecnologias front-end para demonstrar o desenvolvimento de uma SPA sem frameworks externos.

Tecnologia	Descrição
HTML5	Estrutura semântica básica do projeto.
CSS3	Estilização principal, incluindo layout responsivo básico (Header/Footer).
JavaScript (ES6+)	Motor do SPA. Responsável pelo roteamento de Hash (#), injeção de conteúdo dinâmico (innerHTML) e lógica de validação de formulários.
Design Inline (CSS)	Estilos críticos aplicados diretamente ao HTML (via JS) para garantir visualização imediata do conteúdo injetado.

Exportar para as Planilhas

✨ Características Principais
O projeto simula uma experiência de navegação moderna e rápida, típica de aplicações de página única.

Single Page Application (SPA): Navegação instantânea entre as páginas (Home, Projetos, Contato, etc.) sem recarregamento total da página, graças ao roteamento baseado em Hash (#) e manipulação do DOM.

Conteúdo Dinâmico: Todo o conteúdo das páginas (incluindo o HTML complexo de formulários e grids) é armazenado em strings JavaScript e injetado sob demanda (simulando uma API/Fetch).

Formulários Funcionais: Implementação de formulários de Contato, Doação e Cadastro com lógica de validação front-end em JavaScript puro.

Estrutura Modular: O código JavaScript é organizado em funções (loadPageContent, Maps, handleFormSubmit) para facilitar a manutenção e a expansão.

Design Institucional: Foco na clareza e destaque visual para os pilares da ONG (Transparência, Doação).

⚙️ Estrutura do Projeto
A organização dos arquivos segue uma convenção profissional para a separação de responsabilidades.

/a-abrace-o-futuro-ong
├── index.html          # Ponto de entrada e estrutura básica (Header, Footer, <main id="spa-content">)
├── css/
│   └── style.css       # Estilos globais e responsividade (ajustar caminhos no index.html)
├── js/
│   └── script.js       # Toda a lógica da SPA, roteamento e conteúdo das páginas (ajustar caminhos no index.html)
└── img/
    └── *.jpg           # Diretório para ativos de imagem (ex: projeto-digital.jpg)
🚀 Como Executar Localmente
Para visualizar e testar o projeto:

Clone o Repositório:

Bash

git clone [LINK DO SEU REPOSITÓRIO]
cd a-abrace-o-futuro-ong
Abra com um Servidor Local:

Recomendamos o uso da extensão Live Server no VS Code.

Alternativamente, arraste o arquivo index.html para o seu navegador.

Teste a Navegação: Clique nos links do menu para verificar o roteamento SPA, a injeção de conteúdo e a funcionalidade dos formulários.

📝 Rotas Implementadas (Exemplos)
URL (Simulada)	Conteúdo Injetado	Status
/ ou /#home	Página Inicial	Completa
/#projetos	Detalhes dos Projetos (com suporte a <img>)	Completa
/#contato	Formulário de Contato com validação	Completa
/#voluntariado	Página de Engajamento com CTA para Contato	Completa
/#auditoria	Relatórios de Transparência	Completa
/#termos	Termos de Uso (Página Legal)	Completa


Exportar para as Planilhas

👥 Contribuição
Contribuições, sugestões e relatórios de bugs são bem-vindos! Sinta-se à vontade para abrir uma issue ou enviar um pull request.