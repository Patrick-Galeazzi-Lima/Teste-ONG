document.addEventListener('DOMContentLoaded', function() {
    // --- Lógica do Menu Hamburguer ---
    
    // Seleciona o botão do hamburguer (o elemento que será clicado)
    const toggleButton = document.querySelector('.hamburger-toggle');
    
    // Seleciona o menu de navegação (o elemento que será aberto/fechado)
    const mainNav = document.getElementById('mainNav');

    if (toggleButton && mainNav) {
        // Função principal para abrir/fechar o menu
        const toggleMenu = function() {
            mainNav.classList.toggle('menu-open');
            toggleButton.classList.toggle('active');
            document.body.classList.toggle('menu-active');
        };

        // 1. Adiciona o listener de clique ao botão
        toggleButton.addEventListener('click', toggleMenu);
        
        // 2. Fecha o menu ao clicar em um link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('menu-open');
                toggleButton.classList.remove('active');
                document.body.classList.remove('menu-active');
            });
        });
    }


    // --- Lógica do Pop-up de Doação (doacao.html) ---
    const form = document.getElementById('donationForm');
    const modal = document.getElementById('confirmationModal');

    if (form && modal) {
        const closeBtn = modal.querySelector('.close-btn');

        // 1. Oculta o modal ao clicar no 'X'
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        // 2. Oculta o modal ao clicar fora dele
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        // 3. Simula o envio do formulário e mostra o pop-up
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            if (form.checkValidity()) {
                console.log('Dados de doação enviados com sucesso (Simulação)');
                modal.style.display = "block";
                form.reset();
            } else {
                console.error('Formulário inválido. Preencha todos os campos obrigatórios.');
            }
        });
    }

});