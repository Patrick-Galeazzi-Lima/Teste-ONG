// --- Funções de Componentes (Mantidas do código anterior) ---

function showToast(message, type = 'info') {
    // ... (código da função showToast) ...
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
        <p>${message}</p>
        <button type="button" class="toast-close" aria-label="Fechar">&times;</button>
    `;

    container.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);

    toast.querySelector('.toast-close').addEventListener('click', () => {
        closeToast(toast);
    });

    setTimeout(() => {
        closeToast(toast);
    }, 5000);
}

function closeToast(toastElement) {
    if (toastElement) {
        toastElement.classList.remove('show');
        setTimeout(() => toastElement.remove(), 300);
    }
}

function toggleInlineAlert(show) {
    const alert = document.getElementById('inline-alert');
    if (alert) {
        if (show) {
            alert.classList.remove('hidden');
        } else {
            alert.classList.add('hidden');
        }
    }
}

// --- Nova Lógica de Validação Visual de Formulário ---

/**
 * Realiza a validação visual de um campo do formulário.
 * @param {HTMLElement} input - O elemento de input a ser validado.
 * @returns {boolean} - Retorna true se o campo for válido, false caso contrário.
 */
function validateInput(input) {
    const formGroup = input.closest('.form-group');
    if (!formGroup) return true; // Se não estiver dentro de um form-group, ignora

    // 1. Limpa estados anteriores
    formGroup.classList.remove('error', 'success');
    
    // 2. Verifica validade
    if (input.checkValidity()) {
        formGroup.classList.add('success');
        return true;
    } else {
        formGroup.classList.add('error');
        return false;
    }
}

// --- Lógica Principal da Página ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica do Formulário de Contato com Validação Visual
    const contactForm = document.getElementById('contact-form');
    const submitButton = document.getElementById('submit-button');
    const formInputs = contactForm ? contactForm.querySelectorAll('.form-input') : [];
    
    if (contactForm) {
        // Adiciona validação visual em tempo real para melhor UX
        formInputs.forEach(input => {
            // Valida ao sair do campo (blur)
            input.addEventListener('blur', () => validateInput(input));
            // Valida ao digitar (input) - apenas para email/mensagem, evita frustração no nome
            if (input.type === 'email' || input.tagName === 'TEXTAREA') {
                input.addEventListener('input', () => validateInput(input));
            }
        });
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // 3. Revalida todos os campos na submissão
            let formIsValid = true;
            formInputs.forEach(input => {
                if (!validateInput(input)) {
                    formIsValid = false;
                }
            });

            if (!formIsValid) {
                // Rola para o primeiro erro para melhor usabilidade
                const firstError = contactForm.querySelector('.form-group.error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                showToast('Por favor, corrija os erros do formulário.', 'error');
                return; // Impede a submissão
            }

            // --- Lógica de Simulação de Envio (Apenas se o formulário for válido) ---
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;

            console.log("Formulário de Contato Submetido. Simulação de processamento...");
            
            const success = Math.random() < 0.8; // Aumenta a chance de sucesso na simulação

            setTimeout(() => {
                submitButton.textContent = 'Enviar Mensagem';
                submitButton.disabled = false;

                if (success) {
                    showToast('Mensagem enviada com sucesso! Em breve entraremos em contato.', 'success');
                    contactForm.reset(); 
                    formInputs.forEach(input => input.closest('.form-group').classList.remove('success', 'error')); // Limpa o estado visual
                    toggleInlineAlert(false); 
                } else {
                    showToast('Ocorreu um erro ao enviar. Tente novamente.', 'error');
                    toggleInlineAlert(true); 
                }
            }, 1500); 
        });
    }

    // 2. Lógica do Modal de Doação (Mantida do código anterior)
    const modal = document.getElementById('donation-modal');
    const openModalButton = document.getElementById('open-donation-modal');
    const closeModalButton = document.getElementById('close-modal');
    const donationForm = document.getElementById('donation-form');

    function openModal() {
        if (modal) modal.classList.remove('hidden');
    }
    
    function closeModal() {
        if (modal) modal.classList.add('hidden');
    }

    if (openModalButton) openModalButton.addEventListener('click', openModal);
    if (closeModalButton) closeModalButton.addEventListener('click', closeModal);
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    document.querySelectorAll('.donation-option').forEach(button => {
        button.addEventListener('click', (e) => {
            // Remove seleção de todos e adiciona ao clicado
            document.querySelectorAll('.donation-option').forEach(btn => btn.classList.remove('selected'));
            e.currentTarget.classList.add('selected');

            document.getElementById('custom-amount').value = '';
        });
    });

    if (donationForm) {
        donationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const customAmount = document.getElementById('custom-amount').value;
            const selectedButton = document.querySelector('.donation-option.selected');
            
            let amount = customAmount || (selectedButton ? selectedButton.dataset.amount : '');

            if (!amount || Number(amount) < 1) {
                showToast('Por favor, insira um valor válido para doação.', 'error');
                return;
            }

            console.log(`Doação de R$ ${amount} processada.`);
            closeModal();
            showToast(`Doação de R$ ${amount} recebida! Muito obrigado pelo seu apoio.`, 'info');
        });
    }

    // 3. Lógica do Menu Mobile (Assumimos que está em script.js ou aqui, conforme o código anterior)
});