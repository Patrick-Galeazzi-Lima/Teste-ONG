document.addEventListener('DOMContentLoaded', () => {
    // === 1. CAPTURA DE ELEMENTOS CRÍTICOS ===
    const spaContent = document.getElementById('spa-content');
    if (!spaContent) {
        console.error("Erro: Elemento <main id='spa-content'> não encontrado. A SPA não pode inicializar.");
        // Se este erro for reportado no console do navegador, significa que o index.html está incorreto.
        return; 
    }
    
    const mainNav = document.getElementById('mainNav');
    const hamburgerToggle = document.querySelector('.hamburger-toggle');

    // === 2. MAPA DE ROTAS E TÍTULOS (Inalterado) ===
    const routeMap = {

        'home': { title: 'Home | Abrace o Futuro ONG' },
        'projetos': { title: 'Projetos | Abrace o Futuro ONG' },
        'parcerias': { title: 'Parcerias | Abrace o Futuro ONG' },
        'sobre': { title: 'Quem Somos | Abrace o Futuro ONG' },
        'contato': { title: 'Contato | Abrace o Futuro ONG' },
        'doacao': { title: 'Doação | Abrace o Futuro ONG' },
        'cadastro': { title: 'Cadastro | Abrace o Futuro ONG' },
        'login': { title: 'Login | Abrace o Futuro ONG' },
        'auditoria': { title: 'Auditoria | Abrace o Futuro ONG' },
        'politica': { title: 'Política de Privacidade | Abrace o Futuro ONG' },
        // Rotas placeholder
        'faq': { title: 'FAQ | Abrace o Futuro ONG', isPlaceholder: true },
        'imprensa': { title: 'Imprensa | Abrace o Futuro ONG', isPlaceholder: true },
        'carreiras': { title: 'Carreiras | Abrace o Futuro ONG', isPlaceholder: true },
        'dashboard': { title: 'Meu Painel | Abrace o Futuro ONG', isPlaceholder: true },
        'historico': { title: 'Histórico | Abrace o Futuro ONG', isPlaceholder: true },
        'termos': { title: 'Termos de Uso | Abrace o Futuro ONG', isPlaceholder: true },
        'politica': { title: 'Política de Privacidade | Abrace o Futuro ONG', isPlaceholder: true },
        'certificacoes': { title: 'Certificações | Abrace o Futuro ONG', isPlaceholder: true },
        'voluntariado': { title: 'Seja Voluntário | Abrace o Futuro ONG', isPlaceholder: true },
        'recuperar-senha': { title: 'Recuperar Senha | Abrace o Futuro ONG', isPlaceholder: true },
    };

    // === 3. FUNÇÃO DE CARREGAMENTO DE CONTEÚDO (Com HTML Completo) ===
    function loadPageContent(route) {
        // A sintaxe é a mesma da última resposta, contendo o HTML em strings.
        // O conteúdo COMPLETO da página 'home' (seção 2 da resposta anterior)
        // e das demais páginas estão inseridos aqui.
        switch (route) {
            case 'politica':
        return `
            <section class="hero-section" style="background-color: #1a1a1a; color: white; padding: 80px 25px; text-align: center;">
                <h1 style="font-size: 2.8em; margin-bottom: 10px; font-weight: 800;">POLÍTICA DE PRIVACIDADE</h1>
                <p style="font-size: 1.2em; max-width: 800px; margin: 0 auto; color: #CCCCCC;">
                    Seus dados são tratados com o máximo rigor e segurança. Conheça nosso compromisso.
                </p>
            </section>

            <section class="content-section" style="max-width: 900px; margin: 40px auto; padding: 25px; line-height: 1.6;">
                
                <h2 style="margin-top: 30px; margin-bottom: 15px; color: var(--cor-destaque-acao-vibrante);">1. DADOS COLETADOS</h2>
                <p style="margin-bottom: 20px;">
                    Coletamos apenas dados estritamente necessários para processar doações e gerenciar contas de voluntários e doadores. Isso inclui:
                </p>
                <ul style="list-style-type: disc; margin-left: 40px; margin-bottom: 20px;">
                    <li>**Dados de Cadastro:** Nome completo, e-mail e senha (armazenada de forma criptografada).</li>
                    <li>**Dados de Doação:** Valor, frequência e forma de pagamento. Não armazenamos informações completas de cartão de crédito; estas são processadas por parceiros de pagamento certificados (PCI-DSS).</li>
                    <li>**Dados de Navegação (Cookies):** Coletamos dados anônimos para análise de tráfego e melhoria da experiência do usuário (Google Analytics).</li>
                </ul>

                <h2 style="margin-top: 30px; margin-bottom: 15px; color: var(--cor-destaque-acao-vibrante);">2. USO DAS INFORMAÇÕES</h2>
                <p style="margin-bottom: 20px;">
                    As informações coletadas são utilizadas exclusivamente para os seguintes fins:
                </p>
                <ul style="list-style-type: disc; margin-left: 40px; margin-bottom: 20px;">
                    <li>Processar transações de doação e emitir recibos fiscais.</li>
                    <li>Enviar comunicados sobre o impacto dos projetos e relatórios de transparência.</li>
                    <li>Melhorar a experiência de navegação e a oferta de serviços da ONG.</li>
                </ul>
                <p style="margin-bottom: 20px; font-weight: bold;">
                    Não compartilhamos, vendemos ou alugamos suas informações pessoais a terceiros para fins de marketing.
                </p>

                <h2 style="margin-top: 30px; margin-bottom: 15px; color: var(--cor-destaque-acao-vibrante);">3. SEGURANÇA E RETENÇÃO</h2>
                <p style="margin-bottom: 20px;">
                    Adotamos medidas de segurança técnicas e administrativas, como criptografia SSL, para proteger seus dados contra acesso não autorizado. Seus dados são retidos pelo tempo necessário para cumprir as obrigações legais e garantir a prestação de contas.
                </p>

                <h2 style="margin-top: 30px; margin-bottom: 15px; color: var(--cor-destaque-acao-vibrante);">4. SEUS DIREITOS (LGPD)</h2>
                <p style="margin-bottom: 20px;">
                    Você tem o direito de acessar, corrigir ou solicitar a exclusão dos seus dados a qualquer momento. Para exercer esses direitos, entre em contato através da nossa página de Contato.
                </p>
                <a href="#contato" class="btn-destaque nav-link" style="margin-top: 15px; display: inline-block; background-color: #555;">Fale com o Encarregado de Dados (DPO)</a>

            </section>

            <section style="background-color: #f5f5f5; padding: 40px; text-align: center; margin-top: 40px;">
                <p style="font-size: 0.9em; color: #555;">Esta política pode ser atualizada. Data da Última Revisão: Outubro de 2025.</p>
            </section>
        `;

    case 'voluntariado':
        return `
            <section class="hero-section" style="background-color: #1a1a1a; color: white; padding: 80px 25px; text-align: center;">
                <h1 style="font-size: 2.8em; margin-bottom: 10px; font-weight: 800;">SEJA VOLUNTÁRIO. FAÇA A DIFERENÇA.</h1>
                <p style="font-size: 1.2em; max-width: 800px; margin: 0 auto; color: #CCCCCC;">
                    Sua paixão e suas habilidades são o combustível dos nossos projetos. Junte-se à comunidade Abrace o Futuro.
                </p>
            </section>

            <section class="content-section" style="max-width: 1000px; margin: 40px auto; padding: 25px; text-align: center;">
                
                <h2 style="margin-bottom: 40px; color: var(--cor-destaque-acao-vibrante);">Por Que Ser um Voluntário?</h2>
                
                <div class="benefits-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; text-align: left;">
                    
                    <div class="benefit-card" style="padding: 20px; border: 1px solid #ddd; border-radius: 6px;">
                        <h3 style="margin-bottom: 10px;">Impacto Direto</h3>
                        <p style="font-size: 0.95em; color: #555;">Veja de perto o resultado do seu esforço nos projetos de educação e sustentabilidade que financiamos.</p>
                    </div>

                    <div class="benefit-card" style="padding: 20px; border: 1px solid #ddd; border-radius: 6px;">
                        <h3 style="margin-bottom: 10px;">Desenvolvimento Profissional</h3>
                        <p style="font-size: 0.95em; color: #555;">Use suas habilidades de forma significativa e ganhe experiência valiosa em gestão de projetos sociais.</p>
                    </div>

                    <div class="benefit-card" style="padding: 20px; border: 1px solid #ddd; border-radius: 6px;">
                        <h3 style="margin-bottom: 10px;">Comunidade</h3>
                        <p style="font-size: 0.95em; color: #555;">Conecte-se com pessoas apaixonadas por causas sociais e construa uma rede de contatos engajados.</p>
                    </div>
                </div>
                
                <h2 style="margin-top: 60px; margin-bottom: 30px; color: var(--cor-destaque-acao-vibrante);">Nossas Áreas de Necessidade</h2>
                
                <div class="areas-list" style="max-width: 700px; margin: 0 auto; text-align: left;">
                    <ul style="list-style: none; padding: 0;">
                        <li style="background-color: #f5f5f5; padding: 15px; margin-bottom: 10px; border-left: 4px solid var(--cor-destaque-acao-vibrante); border-radius: 4px;">
                            **Tecnologia e Educação:** Mentoria em programação, aulas de informática básica, suporte técnico.
                        </li>
                        <li style="background-color: #f5f5f5; padding: 15px; margin-bottom: 10px; border-left: 4px solid var(--cor-destaque-acao-vibrante); border-radius: 4px;">
                            **Comunicação e Marketing:** Criação de conteúdo, gerenciamento de redes sociais, fotografia e vídeo.
                        </li>
                        <li style="background-color: #f5f5f5; padding: 15px; margin-bottom: 10px; border-left: 4px solid var(--cor-destaque-acao-vibrante); border-radius: 4px;">
                            **Logística e Campo:** Apoio em eventos de plantio, coleta de materiais e organização de doações locais.
                        </li>
                    </ul>
                </div>
                
                <h2 style="margin-top: 60px; margin-bottom: 20px;">Pronto para Começar?</h2>
                <p style="margin-bottom: 30px; font-size: 1.1em;">
                    Preencha o formulário de contato e nos diga como você quer ajudar. Nossa equipe retornará o mais breve possível!
                </p>

                <a href="#contato" class="btn-destaque nav-link" 
                    style="background-color: var(--cor-destaque-acao-vibrante); padding: 15px 40px; font-size: 1.2em; display: inline-block;">
                    Entrar em Contato e Aplicar
                </a>

            </section>`;

  
            case 'termos':
        return `
            <section class="hero-section" style="background-color: #1a1a1a; color: white; padding: 80px 25px; text-align: center;">
                <h1 style="font-size: 2.8em; margin-bottom: 10px; font-weight: 800;">TERMOS DE USO</h1>
                <p style="font-size: 1.2em; max-width: 800px; margin: 0 auto; color: #CCCCCC;">
                    Leia atentamente as regras e condições que regem a utilização dos serviços da Abrace o Futuro ONG.
                </p>
            </section>

            <section class="content-section" style="max-width: 900px; margin: 40px auto; padding: 25px; line-height: 1.6;">
                
                <h2 style="margin-top: 30px; margin-bottom: 15px; color: var(--cor-destaque-acao-vibrante);">1. ACEITAÇÃO DOS TERMOS</h2>
                <p style="margin-bottom: 20px;">
                    Ao acessar e utilizar este website ("Site"), você concorda com estes Termos de Uso e com a nossa Política de Privacidade. Se você não concorda com qualquer um dos termos, não deve usar o Site. Estes Termos podem ser atualizados periodicamente, e você será notificado sobre mudanças substanciais.
                </p>

                <h2 style="margin-top: 30px; margin-bottom: 15px; color: var(--cor-destaque-acao-vibrante);">2. SERVIÇOS OFERECIDOS</h2>
                <p style="margin-bottom: 20px;">
                    A Abrace o Futuro ONG fornece uma plataforma para a divulgação de projetos sociais e ambientais, e a arrecadação de fundos para apoiar tais projetos. Os serviços incluem, mas não se limitam a:
                </p>
                <ul style="list-style-type: disc; margin-left: 40px; margin-bottom: 20px;">
                    <li>Doações recorrentes e pontuais.</li>
                    <li>Informações detalhadas sobre a aplicação dos recursos e auditorias.</li>
                    <li>Cadastro e gerenciamento de conta do usuário.</li>
                </ul>

                <h2 style="margin-top: 30px; margin-bottom: 15px; color: var(--cor-destaque-acao-vibrante);">3. DOAÇÕES E USO DOS RECURSOS</h2>
                <h3 style="margin-top: 20px; margin-bottom: 10px;">3.1. Transparência</h3>
                <p style="margin-bottom: 20px;">
                    Nosso compromisso é aplicar **98% da verba** arrecadada diretamente nos projetos e despesas operacionais essenciais, conforme detalhado em nossos <a href="#auditoria" class="nav-link" style="color: var(--cor-destaque-acao-vibrante);">Relatórios de Auditoria</a>.
                </p>
                
                <h3 style="margin-top: 20px; margin-bottom: 10px;">3.2. Cancelamento e Reembolso</h3>
                <p style="margin-bottom: 20px;">
                    Doações mensais podem ser canceladas a qualquer momento através do Painel do Usuário. Doações pontuais não são reembolsáveis, exceto em casos de erro de processamento ou determinação legal.
                </p>

                <h2 style="margin-top: 30px; margin-bottom: 15px; color: var(--cor-destaque-acao-vibrante);">4. CADASTRO DE USUÁRIO</h2>
                <p style="margin-bottom: 20px;">
                    Você é responsável pela veracidade e exatidão dos dados fornecidos no seu cadastro. A senha é pessoal e intransferível. Qualquer atividade realizada através da sua conta é de sua inteira responsabilidade.
                </p>

                <h2 style="margin-top: 30px; margin-bottom: 15px; color: var(--cor-destaque-acao-vibrante);">5. DISPOSIÇÕES GERAIS</h2>
                <p style="margin-bottom: 20px;">
                    Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Fica eleito o Foro da Comarca de São Paulo, Estado de São Paulo, para dirimir quaisquer dúvidas ou litígios decorrentes destes Termos, com renúncia a qualquer outro.
                </p>

            </section>

            <section style="background-color: #f5f5f5; padding: 40px; text-align: center; margin-top: 40px;">
                <p style="font-size: 0.9em; color: #555;">Última Atualização: 27 de Outubro de 2025.</p>
                <a href="#politica" class="nav-link" style="color: var(--cor-destaque-acao-vibrante); font-weight: 600; margin-top: 10px; display: inline-block;">Leia nossa Política de Privacidade</a>
            </section>`;
    // ... (o restante dos cases e o default)

            case 'home':
                return `
                    <section class="hero-section" style="background-color: #1a1a1a; color: white; padding: 120px 25px; text-align: center;">
                        <h1 style="font-size: 3.2em; margin-bottom: 15px; font-weight: 800; text-transform: uppercase;">
                            O FUTURO QUE VOCÊ ABRAÇA HOJE.
                        </h1>
                        <p style="font-size: 1.3em; max-width: 900px; margin: 0 auto 40px; color: #CCCCCC;">
                            Financiamos projetos de sustentabilidade e educação com transparência total. Seja a mudança que o mundo precisa.
                        </p>
                        <a href="#doacao" class="btn-destaque nav-link" 
                            style="background-color: var(--cor-destaque-acao-vibrante); padding: 15px 40px; font-size: 1.2em;">
                            DOE AGORA E VEJA O IMPACTO
                        </a>
                    </section>
                    <section class="content-section impact-numbers" style="background-color: white; padding: 40px 20px;">
                        <div class="stats-grid" style="display: flex; justify-content: space-around; flex-wrap: wrap; text-align: center; gap: 30px;">
                            <div class="stat-item">
                                <h3 style="font-size: 2.5em; color: var(--cor-destaque-acao-vibrante); margin-bottom: 5px;">25</h3>
                                <p style="text-transform: uppercase; font-weight: 600; color: #333;">Projetos Ativos</p>
                            </div>
                            <div class="stat-item">
                                <h3 style="font-size: 2.5em; color: var(--cor-destaque-acao-vibrante); margin-bottom: 5px;">+5K</h3>
                                <p style="text-transform: uppercase; font-weight: 600; color: #333;">Vidas Impactadas</p>
                            </div>
                            <div class="stat-item">
                                <h3 style="font-size: 2.5em; color: var(--cor-destaque-acao-vibrante); margin-bottom: 5px;">98%</h3>
                                <p style="text-transform: uppercase; font-weight: 600; color: #333;">Verba Aplicada</p>
                            </div>
                        </div>
                    </section>
                    <section class="content-section" style="padding: 60px 25px;">
                        <h2 style="text-align: center; margin-bottom: 40px;">Nossas Principais Áreas de Atuação</h2>
                        <div class="projects-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
                            <div class="project-card" style="background-color: #f5f5f5; padding: 20px; border-radius: 6px; text-align: left;">
                                <h3 style="color: #333; margin-bottom: 10px;">Educação Digital Inclusiva</h3>
                                <p>Focamos em levar tecnologia e conhecimento para comunidades carentes, preparando jovens para o mercado de trabalho do futuro.</p>
                                <a href="#projetos" style="color: var(--cor-destaque-acao-vibrante); font-weight: 600; margin-top: 15px; display: block;" class="nav-link">Ver Projeto &rarr;</a>
                            </div>
                            <div class="project-card" style="background-color: #f5f5f5; padding: 20px; border-radius: 6px; text-align: left;">
                                <h3 style="color: #333; margin-bottom: 10px;">Sustentabilidade Urbana</h3>
                                <p>Ações de reflorestamento, reciclagem e conscientização ambiental em grandes centros urbanos, buscando cidades mais verdes.</p>
                                <a href="#projetos" style="color: var(--cor-destaque-acao-vibrante); font-weight: 600; margin-top: 15px; display: block;" class="nav-link">Ver Projeto &rarr;</a>
                            </div>
                            <div class="project-card" style="background-color: #f5f5f5; padding: 20px; border-radius: 6px; text-align: left;">
                                <h3 style="color: #333; margin-bottom: 10px;">Relatórios de Transparência</h3>
                                <p>Nosso pilar de prestação de contas. Publicamos a cada trimestre como e onde o seu dinheiro está sendo aplicado.</p>
                                <a href="#auditoria" class="nav-link" style="color: var(--cor-destaque-acao-vibrante); font-weight: 600; margin-top: 15px; display: block;">Ver Relatórios &rarr;</a>
                            </div>
                        </div>
                    </section>
                    <section style="background-color: #333333; color: white; padding: 50px; text-align: center;">
                        <h2 style="color: white;">Quer Ir Além da Doação?</h2>
                        <p style="margin-bottom: 30px;">Junte-se a nós como voluntário ou proponha uma parceria empresarial.</p>
                        <a href="#voluntariado" class="btn-destaque nav-link" 
                            style="background-color: white; color: #333333; margin-right: 15px;">
                            Quero Ser Voluntário
                        </a>
                        <a href="#parcerias" class="btn-destaque nav-link" 
                            style="background-color: #555555; color: white;">
                            Propor Parceria
                        </a>
                    </section>`;
            
            case 'projetos':
                return `
                    <section class="hero-section" style="background-color: #1a1a1a; color: white; padding: 80px 25px; text-align: center;">
                        <h1 style="font-size: 2.8em; margin-bottom: 10px; font-weight: 800;">NOSSOS PROJETOS DE IMPACTO</h1>
                        <p style="font-size: 1.2em; max-width: 800px; margin: 0 auto; color: #CCCCCC;">
                            Conheça as iniciativas que transformamos em realidade com a sua ajuda.
                        </p>
                    </section>
                    <section class="content-section" style="padding: 60px 25px; max-width: 1000px; margin: 0 auto;">
                        <div class="project-list" style="display: grid; gap: 40px;">
                            
                            <div class="project-full" style="display: flex; align-items: center; gap: 30px; border-bottom: 1px solid #ccc; padding-bottom: 30px;">
                                <div style="flex-grow: 1;">
                                    <h2 style="color: var(--cor-destaque-acao-vibrante); margin-bottom: 10px;">1. Futuro Digital</h2>
                                    <p style="margin-bottom: 15px;">Programa de bolsas e mentoria em TI para jovens de baixa renda. Nosso foco é a inclusão digital e profissional.</p>
                                    <ul style="list-style-type: disc; margin-left: 20px; font-size: 0.9em; color: #555;">
                                        <li>Status: Em Andamento (Fase 3/5)</li>
                                        <li>Meta de 2025: Formar 500 novos profissionais.</li>
                                    </ul>
                                    <a href="#doacao" class="btn-destaque nav-link" style="margin-top: 15px; display: inline-block;">Apoie este Projeto</a>
                                </div>
                                
                                <div style="flex-shrink: 0; width: 250px; height: 150px; border-radius: 6px; overflow: hidden;">
                                    <img src="img/informatica.jpg" alt="Jovens em laboratório de informática" 
                                         style="width: 100%; height: 100%; object-fit: cover; display: block;">
                                </div>
                            </div>

                            <div class="project-full" style="display: flex; align-items: center; gap: 30px; border-bottom: 1px solid #ccc; padding-bottom: 30px;">
                                <div style="flex-grow: 1;">
                                    <h2 style="color: var(--cor-destaque-acao-vibrante); margin-bottom: 10px;">2. Cidades Verdes</h2>
                                    <p style="margin-bottom: 15px;">Iniciativa para plantar 10.000 mudas em áreas urbanas de São Paulo e Rio de Janeiro, combatendo ilhas de calor.</p>
                                    <ul style="list-style-type: disc; margin-left: 20px; font-size: 0.9em; color: #555;">
                                        <li>Status: Concluído (120% da meta)</li>
                                        <li>Próximo Passo: Monitoramento e manutenção das áreas.</li>
                                    </ul>
                                    <a href="#auditoria" class="btn-destaque nav-link" style="margin-top: 15px; display: inline-block; background-color: #555;">Ver Prestação de Contas</a>
                                </div>
                                
                                <div style="flex-shrink: 0; width: 250px; height: 150px; border-radius: 6px; overflow: hidden;">
                                    <img src="img/voluntarios.jpg" alt="Pessoas plantando árvores em área urbana" 
                                         style="width: 100%; height: 100%; object-fit: cover; display: block;">
                                </div>
                            </div>

                        </div>
                    </section>`;

            case 'parcerias':
                return `
                    <section class="hero-section" style="background-color: #1a1a1a; color: white; padding: 80px 25px; text-align: center;">
                        <h1 style="font-size: 2.8em; margin-bottom: 10px; font-weight: 800;">CONSTRUA O FUTURO CONOSCO</h1>
                        <p style="font-size: 1.2em; max-width: 800px; margin: 0 auto; color: #CCCCCC;">
                            Seja um parceiro institucional e amplie seu impacto social e ambiental através de nossos projetos.
                        </p>
                    </section>
                    <section class="content-section" style="padding: 60px 25px; max-width: 1000px; margin: 0 auto; text-align: center;">
                        <h2 style="margin-bottom: 40px; color: var(--cor-destaque-acao-vibrante);">Por que fazer parceria com a Abrace o Futuro?</h2>
                        <div class="benefits-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; text-align: left;">
                            <div style="padding: 20px; background-color: #f5f5f5; border-left: 4px solid var(--cor-destaque-acao-vibrante); border-radius: 4px;">
                                <h3 style="margin-bottom: 10px;">Transparência Garantida</h3>
                                <p>Todos os recursos são auditados e você recebe relatórios trimestrais detalhados do uso da verba.</p>
                            </div>
                            <div style="padding: 20px; background-color: #f5f5f5; border-left: 4px solid var(--cor-destaque-acao-vibrante); border-radius: 4px;">
                                <h3 style="margin-bottom: 10px;">Reconhecimento de Marca</h3>
                                <p>Associe sua empresa a projetos sociais e ambientais de alto impacto, melhorando seu ESG.</p>
                            </div>
                            <div style="padding: 20px; background-color: #f5f5f5; border-left: 4px solid var(--cor-destaque-acao-vibrante); border-radius: 4px;">
                                <h3 style="margin-bottom: 10px;">Projetos Customizados</h3>
                                <p>Possibilidade de co-criar projetos que se alinhem perfeitamente com os valores e a missão da sua empresa.</p>
                            </div>
                        </div>
                        <h2 style="margin-top: 60px; margin-bottom: 30px;">Inicie sua Parceria</h2>
                        <a href="#contato" class="btn-destaque nav-link" style="padding: 15px 40px; font-size: 1.1em; background-color: var(--cor-destaque-acao-vibrante); color: white;">Entre em Contato com a Diretoria</a>
                    </section>`;
            
            case 'sobre':
                return `
                    <section class="hero-section" style="background-color: #1a1a1a; color: white; padding: 80px 25px; text-align: center;">
                        <h1 style="font-size: 2.8em; margin-bottom: 10px; font-weight: 800;">NOSSA MISSÃO</h1>
                        <p style="font-size: 1.2em; max-width: 800px; margin: 0 auto; color: #CCCCCC;">
                            Somos uma ONG dedicada a financiar e executar projetos que promovem a sustentabilidade e a educação de forma transparente.
                        </p>
                    </section>
                    <section class="content-section" style="padding: 60px 25px; max-width: 900px; margin: 0 auto; text-align: left;">
                        <div style="display: flex; gap: 40px; align-items: flex-start;">
                            <div style="flex: 2;">
                                <h2 style="margin-bottom: 20px;">Nossa História</h2>
                                <p style="margin-bottom: 15px;">Fundada em 2018 por um grupo de ativistas e educadores, a Abrace o Futuro nasceu da necessidade de conectar doadores e projetos de alto impacto, garantindo que 98% de cada doação chegue à ponta.</p>
                                <p>Nosso pilar é a **Transparência**. Acreditamos que o doador tem o direito de saber exatamente onde e como seu dinheiro está transformando vidas. Por isso, somos auditados anualmente por uma empresa independente.</p>
                                <a href="#auditoria" class="btn-destaque nav-link" style="margin-top: 20px; display: inline-block; background-color: #555;">Veja Nossos Relatórios</a>
                            </div>
                            <div style="flex: 1; text-align: center; padding: 20px; background-color: #f5f5f5; border-radius: 8px;">
                                <h3 style="margin-bottom: 10px; color: var(--cor-destaque-acao-vibrante);">Valores</h3>
                                <ul style="list-style: none; padding: 0;">
                                    <li style="margin-bottom: 5px;">Integridade</li>
                                    <li style="margin-bottom: 5px;">Inovação Social</li>
                                    <li style="margin-bottom: 5px;">Compromisso Comunitário</li>
                                </ul>
                            </div>
                        </div>
                    </section>`;

            case 'contato':
                return `
                    <section class="hero-section" style="background-color: #1a1a1a; color: white; padding: 80px 25px; text-align: center;">
                        <h1 style="font-size: 2.8em; margin-bottom: 10px; font-weight: 800;">FALE CONOSCO</h1>
                        <p style="font-size: 1.2em; max-width: 700px; margin: 0 auto; color: #CCCCCC;">
                            Envie sua mensagem e responderemos o mais breve possível.
                        </p>
                    </section>
                    <section class="content-section" style="max-width: 700px; margin: 40px auto; padding: 25px; text-align: left;">
                        <form id="contactForm" action="/enviar-contato" method="POST" style="background-color: #f5f5f5; padding: 30px; border-radius: 8px;">
                            <h2 style="text-align: center; margin-bottom: 30px;">Formulário de Contato</h2>
                            
                            <div class="form-group" style="margin-bottom: 15px;">
                                <label for="nome" style="display: block; margin-bottom: 5px; font-weight: 600;">Seu Nome:</label>
                                <input type="text" id="nome" name="nome" required data-validation-type="text" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
                                <span class="validation-message">O nome é obrigatório.</span>
                            </div>
                            <div class="form-group" style="margin-bottom: 15px;">
                                <label for="email" style="display: block; margin-bottom: 5px; font-weight: 600;">Seu E-mail:</label>
                                <input type="email" id="email" name="email" required data-validation-type="email" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
                                <span class="validation-message">Por favor, insira um e-mail válido.</span>
                            </div>
                            <div class="form-group" style="margin-bottom: 15px;">
                                <label for="assunto" style="display: block; margin-bottom: 5px; font-weight: 600;">Assunto:</label>
                                <select id="assunto" name="assunto" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
                                    <option value="" disabled selected>Selecione um assunto</option>
                                    <option value="doacao">Dúvidas sobre Doação</option>
                                    <option value="parceria">Proposta de Parceria</option>
                                    <option value="voluntariado">Voluntariado</option>
                                    <option value="outros">Outros Assuntos</option>
                                </select>
                                <span class="validation-message">O assunto é obrigatório.</span>
                            </div>
                            <div class="form-group" style="margin-bottom: 25px;">
                                <label for="mensagem" style="display: block; margin-bottom: 5px; font-weight: 600;">Mensagem:</label>
                                <textarea id="mensagem" name="mensagem" rows="6" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;"></textarea>
                                <span class="validation-message">A mensagem é obrigatória.</span>
                            </div>

                            <button aria-expanded="false" aria-controls="menu-principal" 
                                    style="background-color: var(--cor-destaque-acao-vibrante); color: white; width: 100%; padding: 15px; font-size: 1.1em;">
                                Enviar Mensagem
                            </button>
                        </form>
                    </section>`;

            case 'doacao':
                return `
                    <section class="hero-section" style="background-color: #1a1a1a; color: white; padding: 80px 25px; text-align: center;">
                        <h1 style="font-size: 2.8em; margin-bottom: 10px; font-weight: 800;">TRANSFORME VIDAS COM SUA DOAÇÃO</h1>
                        <p style="font-size: 1.2em; max-width: 800px; margin: 0 auto; color: #CCCCCC;">
                            Escolha o valor e a frequência da sua contribuição. Sua generosidade é 98% aplicada nos projetos.
                        </p>
                    </section>
                    <section class="content-section" style="max-width: 700px; margin: 40px auto; padding: 25px; text-align: center;">
                        <h2 style="margin-bottom: 30px;">Escolha Sua Contribuição</h2>
                        
                        <div class="donation-options" style="display: flex; justify-content: space-around; gap: 20px; margin-bottom: 40px;">
                            <div style="flex: 1; padding: 20px; border: 2px solid #ccc; border-radius: 8px; cursor: pointer;">
                                <h3>Mensal</h3>
                                <p>Apoio contínuo e maior previsibilidade.</p>
                            </div>
                            <div style="flex: 1; padding: 20px; border: 2px solid var(--cor-destaque-acao-vibrante); border-radius: 8px; cursor: pointer;">
                                <h3>Única</h3>
                                <p>Contribuição pontual e imediata.</p>
                            </div>
                        </div>

                        <form id="donationForm" action="/processar-doacao" method="POST" style="background-color: #f5f5f5; padding: 30px; border-radius: 8px; text-align: left;">
                            <h3 style="text-align: center; margin-bottom: 20px;">Detalhes da Doação</h3>
                            
                            <div class="form-group" style="margin-bottom: 15px;">
                                <label for="valor" style="display: block; margin-bottom: 5px; font-weight: 600;">Valor (R$):</label>
                                <input type="number" id="valor" name="valor" required min="10" placeholder="Mínimo R$ 10,00" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
                            </div>
                            <div class="form-group" style="margin-bottom: 25px;">
                                <label for="forma_pagamento" style="display: block; margin-bottom: 5px; font-weight: 600;">Forma de Pagamento:</label>
                                <select id="forma_pagamento" name="forma_pagamento" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
                                    <option value="" disabled selected>Selecione</option>
                                    <option value="cartao">Cartão de Crédito</option>
                                    <option value="pix">PIX</option>
                                    <option value="boleto">Boleto Bancário</option>
                                </select>
                            </div>

                            <button aria-expanded="false" aria-controls="menu-principal"
                                    style="background-color: var(--cor-destaque-acao-vibrante); color: white; width: 100%; padding: 15px; font-size: 1.1em;">
                                Doar Agora
                            </button>
                        </form>
                    </section>`;

            case 'cadastro':
                return `
                    <section class="hero-section" style="background-color: #1a1a1a; color: white; padding: 80px 25px; text-align: center;">
                        <h1 style="font-size: 2.8em; margin-bottom: 10px; font-weight: 800;">CRIE SUA CONTA GRATUITA</h1>
                        <p style="font-size: 1.2em; max-width: 700px; margin: 0 auto; color: #CCCCCC;">
                            Gerencie suas doações, acompanhe seu impacto e cadastre-se para ser voluntário.
                        </p>
                    </section>
                    <section class="content-section" style="max-width: 500px; margin: 40px auto; padding: 25px; text-align: left;">
                        <form id="cadastroForm" action="/registrar" method="POST" style="background-color: #f5f5f5; padding: 30px; border-radius: 8px;">
                            <h2 style="text-align: center; margin-bottom: 30px;">Dados Pessoais</h2>
                            <div class="form-group" style="margin-bottom: 15px;">
                                <label for="nome_completo" style="display: block; margin-bottom: 5px; font-weight: 600;">Nome Completo:</label>
                                <input type="text" id="nome_completo" name="nome_completo" required data-validation-type="text" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
                                <span class="validation-message">O nome é obrigatório.</span>
                            </div>
                            <div class="form-group" style="margin-bottom: 15px;">
                                <label for="email_cadastro" style="display: block; margin-bottom: 5px; font-weight: 600;">E-mail:</label>
                                <input type="email" id="email_cadastro" name="email_cadastro" required data-validation-type="email" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
                                <span class="validation-message">Por favor, insira um email válido.</span>
                            </div>
                            <div class="form-group" style="margin-bottom: 15px;">
                                <label for="senha" style="display: block; margin-bottom: 5px; font-weight: 600;">Senha:</label>
                                <input type="password" id="senha" name="senha" required data-validation-type="password" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
                                <span class="validation-message">A senha deve ter pelo menos 8 caracteres.</span>
                            </div>
                            <div class="form-group" style="margin-bottom: 25px;">
                                <label for="confirma_senha" style="display: block; margin-bottom: 5px; font-weight: 600;">Confirme a Senha:</label>
                                <input type="password" id="confirma_senha" name="confirma_senha" required data-validation-type="password_confirm" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
                                <span class="validation-message">As senhas não coincidem.</span>
                            </div>
                            <button aria-expanded="false" aria-controls="menu-principal"
                                    style="background-color: var(--cor-destaque-acao-vibrante); color: white; width: 100%; padding: 15px; font-size: 1.1em;">
                                Finalizar Cadastro
                            </button>
                            <p style="text-align: center; margin-top: 20px;">
                                Já tem uma conta? <a href="#login" class="nav-link" style="color: var(--cor-destaque-acao-vibrante); font-weight: 600;">Faça Login</a>
                            </p>
                        </form>
                    </section>
                    <section style="background-color: #333333; color: white; padding: 40px; text-align: center; margin-top: 40px;">
                        <h3 style="color: var(--cor-destaque-acao-vibrante); margin-bottom: 15px;">O que você ganha ao se registrar?</h3>
                        <p style="max-width: 800px; margin: 0 auto; color: #CCCCCC;">
                            Acesso a relatórios exclusivos, gerenciamento fácil das suas doações e prioridade em convites para eventos de voluntariado.
                        </p>
                    </section>`;

            case 'login':
                return `
                    <section class="hero-section" style="background-color: #1a1a1a; color: white; padding: 80px 25px; text-align: center;">
                        <h1 style="font-size: 2.8em; margin-bottom: 10px; font-weight: 800;">BEM-VINDO(A) DE VOLTA!</h1>
                        <p style="font-size: 1.2em; max-width: 700px; margin: 0 auto; color: #CCCCCC;">
                            Acesse sua conta para gerenciar suas doações e acompanhar seu impacto.
                        </p>
                    </section>
                    <section class="content-section" style="max-width: 400px; margin: 40px auto; padding: 25px; text-align: left;">
                        <form id="loginForm" action="/autenticar" method="POST" style="background-color: #f5f5f5; padding: 30px; border-radius: 8px;">
                            <h2 style="text-align: center; margin-bottom: 30px;">Acessar Portal</h2>
                            <div class="form-group" style="margin-bottom: 15px;">
                                <label for="email_login" style="display: block; margin-bottom: 5px; font-weight: 600;">E-mail:</label>
                                <input type="email" id="email_login" name="email_login" required data-validation-type="email" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
                                <span class="validation-message">Por favor, insira um email válido.</span>
                            </div>
                            <div class="form-group" style="margin-bottom: 25px;">
                                <label for="senha_login" style="display: block; margin-bottom: 5px; font-weight: 600;">Senha:</label>
                                <input type="password" id="senha_login" name="senha_login" required data-validation-type="password" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
                                <span class="validation-message">A senha é obrigatória.</span>
                            </div>
                            <button aria-expanded="false" aria-controls="menu-principal" 
                                    style="background-color: var(--cor-destaque-acao-vibrante); color: white; width: 100%; padding: 15px; font-size: 1.1em;">
                                Entrar
                            </button>
                            <p style="text-align: center; margin-top: 20px;">
                                <a href="#cadastro" class="nav-link" style="color: var(--cor-destaque-acao-vibrante); font-weight: 600;">Criar uma nova conta</a> | 
                                <a href="#recuperar-senha" class="nav-link" style="color: #666; font-weight: 400;">Esqueceu a senha?</a>
                            </p>
                        </form>
                    </section>
                    <section style="background-color: #333333; color: white; padding: 40px; text-align: center; margin-top: 40px;">
                        <h3 style="color: var(--cor-destaque-acao-vibrante); margin-bottom: 15px;">Dúvidas?</h3>
                        <p style="max-width: 800px; margin: 0 auto; color: #CCCCCC;">
                            Se você tiver problemas para acessar sua conta, entre em contato com nosso suporte.
                        </p>
                    </section>`;

            case 'auditoria':
                return `
                    <section class="hero-section" style="background-color: #1a1a1a; color: white; padding: 80px 25px; text-align: center;">
                        <h1 style="font-size: 2.8em; margin-bottom: 10px; font-weight: 800;">TRANSPARÊNCIA TOTAL. ZERO DÚVIDA.</h1>
                        <p style="font-size: 1.2em; max-width: 800px; margin: 0 auto; color: #CCCCCC;">
                            Abaixo você encontra todos os relatórios financeiros e de impacto auditados por empresas independentes.
                        </p>
                    </section>
                    <section class="content-section" style="padding: 60px 25px; max-width: 900px; margin: 0 auto; text-align: left;">
                        <h2 style="text-align: center; margin-bottom: 40px; color: var(--cor-destaque-acao-vibrante);">Relatórios Disponíveis para Download</h2>
                        <div class="reports-list" style="display: grid; gap: 15px;">
                            <div class="report-item" style="background-color: #f5f5f5; padding: 20px; border-left: 5px solid var(--cor-destaque-acao-vibrante); border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <h3 style="margin-bottom: 5px;">Relatório Anual de Auditoria (2025)</h3>
                                    <p style="font-size: 0.9em; color: #666;">Prestação de Contas completa e parecer legal.</p>
                                </div>
                                <a href="download/auditoria-2025.pdf" target="_blank" style="color: #1a1a1a; font-weight: 600; text-decoration: none; padding: 8px 15px; background-color: white; border: 1px solid #ccc; border-radius: 4px;">Baixar PDF</a>
                            </div>
                            <div class="report-item" style="background-color: #f5f5f5; padding: 20px; border-left: 5px solid var(--cor-destaque-acao-vibrante); border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <h3 style="margin-bottom: 5px;">Relatório de Impacto Social (Q4 2024)</h3>
                                    <p style="font-size: 0.9em; color: #666;">Dados de vidas impactadas e progresso dos projetos.</p>
                                </div>
                                <a href="download/impacto-q4-2024.pdf" target="_blank" style="color: #1a1a1a; font-weight: 600; text-decoration: none; padding: 8px 15px; background-color: white; border: 1px solid #ccc; border-radius: 4px;">Baixar PDF</a>
                            </div>
                            <div class="report-item" style="background-color: #f5f5f5; padding: 20px; border-left: 5px solid var(--cor-destaque-acao-vibrante); border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <h3 style="margin-bottom: 5px;">Plano de Governança 2025-2026</h3>
                                    <p style="font-size: 0.9em; color: #666;">Metas e diretrizes futuras da organização.</p>
                                </div>
                                <a href="download/governanca-2026.pdf" target="_blank" style="color: #1a1a1a; font-weight: 600; text-decoration: none; padding: 8px 15px; background-color: white; border: 1px solid #ccc; border-radius: 4px;">Baixar PDF</a>
                            </div>
                        </div>
                    </section>
                    <section style="background-color: #333333; color: white; padding: 50px; text-align: center; margin-top: 40px;">
                        <h2 style="color: white; margin-bottom: 20px;">Auditoria Concluída?</h2>
                        <a href="#home" class="btn-destaque nav-link" 
                            style="background-color: var(--cor-destaque-acao-vibrante); color: #1a1a1a; padding: 15px 40px; font-size: 1.1em; display: inline-block;">
                            Voltar para a Página Inicial
                        </a>
                    </section>`;
                    // ... dentro da função loadPageContent(route)

            // Conteúdo Placeholder para páginas não criadas
            default:
                if (routeMap[route] && routeMap[route].isPlaceholder) {
                    return `<section class="hero-section" style="background-color: #f0f0f0; color: #333; padding: 100px 25px; text-align: center;">
                        <h1 style="font-size: 3em; margin-bottom: 15px;">Página "${route.charAt(0).toUpperCase() + route.slice(1)}" (Placeholder)</h1>
                        <p style="font-size: 1.1em;">O conteúdo desta página ainda não foi definido. Crie o HTML limpo correspondente para substituí-lo.</p>
                    </section>`;
                }
                return `<section style="padding: 100px; text-align: center;"><h1>404</h1><p>Rota não encontrada: #${route}</p></section>`;
        }
    }
    // FIM DA FUNÇÃO loadPageContent


    // === 4. LÓGICA DE ROTEAMENTO (SPA) ===
    async function navigate(hash) {
        const route = hash.substring(1) || 'home'; 
        const routeData = routeMap[route] || { title: 'Página Desconhecida' };
        
        // 1. Carregar e injetar conteúdo
        const content = loadPageContent(route);
        spaContent.innerHTML = content;
        document.title = routeData.title;
        window.scrollTo(0, 0); 

        // 2. Reconfigurar Links e Formulários
        setupPageListeners();
        
        // 3. Fechar menu mobile (se estiver aberto)
        if (mainNav) mainNav.classList.remove('open');
        if (hamburgerToggle) hamburgerToggle.classList.remove('is-active');

        // 4. Salva o estado no histórico
        if (window.location.hash !== hash) {
            history.pushState(null, null, hash);
        }
    }

    function setupPageListeners() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.removeEventListener('click', handleNavLinkClick); 
            link.addEventListener('click', handleNavLinkClick); 
        });

        document.querySelectorAll('form').forEach(form => {
            form.removeEventListener('submit', handleFormSubmit);
            if (form.id === 'cadastroForm' || form.id === 'contactForm' || form.id === 'loginForm') {
                 form.addEventListener('submit', handleFormSubmit);
            }
        });
    }

    function handleNavLinkClick(event) {
        event.preventDefault(); 
        const newHash = event.currentTarget.getAttribute('href'); 
        navigate(newHash);
    }

    window.addEventListener('popstate', () => {
        navigate(window.location.hash);
    });

    // === 5. LÓGICA DE VALIDAÇÃO DE FORMULÁRIO (Simplificada e Mantida) ===
    function validateField(input) {
        const validationType = input.getAttribute('data-validation-type');
        const validationMessage = input.nextElementSibling;

        input.classList.remove('error');
        if (validationMessage) validationMessage.style.display = 'none';

        if (input.required && input.value.trim() === '') {
            input.classList.add('error');
            if (validationMessage) validationMessage.style.display = 'block';
            return false;
        }

        switch (validationType) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value)) {
                    input.classList.add('error');
                    if (validationMessage) validationMessage.style.display = 'block';
                    return false;
                }
                break;
            case 'password':
                if (input.value.length < 8 && input.id !== 'senha_login') {
                    input.classList.add('error');
                    if (validationMessage) validationMessage.style.display = 'block';
                    return false;
                }
                break;
            case 'password_confirm':
                const passwordInput = document.getElementById('senha');
                if (passwordInput && input.value !== passwordInput.value) {
                    input.classList.add('error');
                    if (validationMessage) validationMessage.style.display = 'block';
                    return false;
                }
                break;
            case 'text':
                if (input.required && input.value.trim().length < 3) {
                    input.classList.add('error');
                    if (validationMessage) validationMessage.style.display = 'block';
                    return false;
                }
                break;
        }
        return true;
    }

    function handleFormSubmit(event) {
        if (event.target.id === 'cadastroForm' || event.target.id === 'contactForm' || event.target.id === 'loginForm') {
            event.preventDefault();
            let isValid = true;

            event.target.querySelectorAll('input, select, textarea').forEach(input => {
                if (input.hasAttribute('data-validation-type') || input.required) {
                    if (!validateField(input)) {
                        isValid = false;
                    }
                }
            });

            if (isValid) {
                alert(`Formulário ${event.target.id.replace('Form', '')} enviado com sucesso! (Ação de envio simulada)`);
                event.target.reset(); 
            } else {
                alert("Por favor, corrija os erros no formulário.");
            }
        }
    }


    // === 6. LÓGICA DO MENU HAMBURGER (Mantida) ===
    if (hamburgerToggle && mainNav) {
        hamburgerToggle.addEventListener('click', () => {
            mainNav.classList.toggle('open');
            hamburgerToggle.classList.toggle('is-active');
        });
    }

    // === 7. INICIALIZAÇÃO ===
    // Inicia a aplicação carregando a página inicial ou a rota do hash
    navigate(window.location.hash);
}); 