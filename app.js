/* ==========================================================================
   STUDIO FÊNIX - CORE JS APPLICATION
   ========================================================================== */

// --- DADOS INICIAIS (SEED) ---
const INITIAL_SERVICES = [
    {
        id: "srv-1",
        name: "Corte Fênix Signature",
        category: "cabelos",
        price: 180.00,
        duration: 60,
        description: "Corte personalizado de acordo com visagismo facial, incluindo lavagem terapêutica e escova finalizadora."
    },
    {
        id: "srv-2",
        name: "Balayage Champanhe & Contorno",
        category: "cabelos",
        price: 480.00,
        duration: 180,
        description: "Técnica francesa de clareamento sutil e transições suaves com proteção Plex para a integridade dos fios."
    },
    {
        id: "srv-3",
        name: "Terapia de Nutrição Sensorial",
        category: "cabelos",
        price: 150.00,
        duration: 45,
        description: "Tratamento profundo com óleos essenciais e massagem capilar estimulante na lavatório de massagem."
    },
    {
        id: "srv-4",
        name: "Manicure & Pedicure Premium",
        category: "unhas",
        price: 85.00,
        duration: 60,
        description: "Cuidado completo com esfoliação de sal marinho, hidratação profunda e esmaltação premium nacional ou importada."
    },
    {
        id: "srv-5",
        name: "Alongamento em Gel Realista",
        category: "unhas",
        price: 220.00,
        duration: 120,
        description: "Extensão de unhas esculpidas em gel de alta resistência, com acabamento fino, curvatura natural e esmaltação inclusa."
    },
    {
        id: "srv-6",
        name: "Banho de Gel Protetor",
        category: "unhas",
        price: 130.00,
        duration: 60,
        description: "Camada de gel sobre a unha natural para fortalecimento, brilho duradouro e prevenção de quebras cotidianas."
    },
    {
        id: "srv-7",
        name: "Extensão de Cílios Fio a Fio",
        category: "cilios",
        price: 160.00,
        duration: 90,
        description: "Aplicação individual de fios ultra-leves acoplados aos cílios naturais, garantindo olhar marcante com aspecto natural."
    },
    {
        id: "srv-8",
        name: "Volume Russo Premium",
        category: "cilios",
        price: 240.00,
        duration: 120,
        description: "Montagem de leques artesanais (fans) acoplados aos cílios naturais para máxima densidade, volume e sofisticação."
    },
    {
        id: "srv-9",
        name: "Lash Lifting & Lash Botox",
        category: "cilios",
        price: 140.00,
        duration: 60,
        description: "Curvatura e alinhamento dos próprios cílios naturais, com pigmentação escura e tratamento reconstrutor de queratina."
    }
];

const INITIAL_PROFESSIONALS = [
    {
        id: "prof-1",
        name: "Mayara Ferreira",
        role: "Creative Director & Mega Hair Specialist",
        category: "cabelos",
        photoUrl: "https://images.unsplash.com/photo-1595959183075-c1d4a7795362?auto=format&fit=crop&w=600&h=800&q=80",
        bio: "Reconhecida nacionalmente pela aplicação imperceptível de alongamentos e microcápsulas de queratina, Mayara une técnica e visagismo para devolver volume e comprimento de forma natural."
    },
    {
        id: "prof-2",
        name: "Fanny",
        role: "Master Lash & Eyebrow Designer",
        category: "cilios",
        photoUrl: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&h=800&q=80",
        bio: "Especialista em realçar a beleza do olhar por técnicas avançadas de extensão de cílios fio a fio e volume russo, além do design estratégico de sobrancelhas personalizado para cada rosto."
    },
    {
        id: "prof-3",
        name: "Larissa",
        role: "Nail Designer & Expert Manicure",
        category: "unhas",
        photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&h=800&q=80",
        bio: "Especialista em alongamento em gel, nail art minimalista e cutilagem russa. Focada no cuidado com a saúde natural das unhas e acabamento fino de alta durabilidade."
    },
    {
        id: "prof-4",
        name: "Joelly",
        role: "Hair Therapist & Treatment Expert",
        category: "cabelos",
        photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&h=800&q=80",
        bio: "Focada em terapia capilar e cronogramas de recuperação dos fios. Joelly realiza diagnósticos detalhados e rituais profundos de nutrição sensorial para resgatar a saúde e o brilho do cabelo."
    }
];

const INITIAL_GALLERY = [
    {
        id: "gal-1",
        title: "Mechas Mel Quente",
        imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "gal-2",
        title: "Alongamento em Fibra de Vidro",
        imageUrl: "https://images.unsplash.com/photo-1604654894610-df49068857af?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "gal-3",
        title: "Extensão de Cílios Volume Russo",
        imageUrl: "https://images.unsplash.com/photo-1582236313373-c2c50291cc16?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "gal-4",
        title: "Corte Bob Repicado",
        imageUrl: "https://images.unsplash.com/photo-1595959183075-c1d4a7795362?auto=format&fit=crop&w=600&q=80"
    }
];

const INITIAL_BOOKINGS = [
    {
        id: "BK-84729",
        clientName: "Juliana Mendes",
        clientPhone: "(11) 98765-4321",
        serviceId: "srv-2",
        serviceName: "Balayage Champanhe & Contorno",
        category: "cabelos",
        professionalId: "prof-1",
        professionalName: "Gabriela Becker",
        date: "2026-06-03",
        time: "14:00",
        price: 480.00,
        status: "confirmado",
        createdAt: "2026-06-01T14:30:00.000Z"
    },
    {
        id: "BK-91823",
        clientName: "Beatriz Vianna",
        clientPhone: "(11) 99122-3344",
        serviceId: "srv-5",
        serviceName: "Alongamento em Gel Realista",
        category: "unhas",
        professionalId: "prof-2",
        professionalName: "Larissa Souza",
        date: "2026-06-04",
        time: "10:00",
        price: 220.00,
        status: "pendente",
        createdAt: "2026-06-02T09:15:00.000Z"
    },
    {
        id: "BK-20394",
        clientName: "Amanda Lima",
        clientPhone: "(11) 99344-5566",
        serviceId: "srv-7",
        serviceName: "Extensão de Cílios Fio a Fio",
        category: "cilios",
        professionalId: "prof-3",
        professionalName: "Fernanda Costa",
        date: "2026-06-03",
        time: "09:30",
        price: 160.00,
        status: "concluido",
        createdAt: "2026-05-30T10:00:00.000Z"
    }
];

// --- ESTADO GERAL DA APLICAÇÃO ---
let state = {
    services: [],
    professionals: [],
    bookings: [],
    gallery: [],
    locks: [], // Bloqueios de Agenda
    currentWizardStep: 1,
    selectedService: null,
    selectedProfessional: null,
    selectedDate: null,
    selectedTimeSlot: null,
    activeClientFilter: "todos",
    currentCalendarDate: new Date(2026, 5, 2) // Junho de 2026 como base da simulação
};

// --- INICIALIZAÇÃO DO APP ---
document.addEventListener("DOMContentLoaded", () => {
    // 1. Carregar Dados de State do LocalStorage ou Seed
    initLocalStorageData();
    
    // 2. Renderizar Elementos Visuais na Cliente
    renderServiceCards();
    renderClientSpecialists();
    renderClientGallery();
    
    // 3. Inicializar Listeners de Eventos Gerais
    initEventListeners();
    
    // 4. Efeito de Scroll no Header
    window.addEventListener("scroll", () => {
        const header = document.getElementById("header");
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }
    });
    
    // 5. Inicializar Scroll Reveal
    initScrollReveal();
});

// Inicialização segura de dados persistentes
function initLocalStorageData() {
    if (!localStorage.getItem("amelie_services")) {
        localStorage.setItem("amelie_services", JSON.stringify(INITIAL_SERVICES));
    }
    if (!localStorage.getItem("amelie_professionals")) {
        localStorage.setItem("amelie_professionals", JSON.stringify(INITIAL_PROFESSIONALS));
    }
    if (!localStorage.getItem("amelie_bookings")) {
        localStorage.setItem("amelie_bookings", JSON.stringify(INITIAL_BOOKINGS));
    }
    if (!localStorage.getItem("amelie_gallery")) {
        localStorage.setItem("amelie_gallery", JSON.stringify(INITIAL_GALLERY));
    }
    if (!localStorage.getItem("amelie_locks")) {
        localStorage.setItem("amelie_locks", JSON.stringify([]));
    }
    
    state.services = JSON.parse(localStorage.getItem("amelie_services"));
    state.professionals = JSON.parse(localStorage.getItem("amelie_professionals"));
    state.bookings = JSON.parse(localStorage.getItem("amelie_bookings"));
    state.gallery = JSON.parse(localStorage.getItem("amelie_gallery"));
    state.locks = JSON.parse(localStorage.getItem("amelie_locks"));
}

// Persistência em disco simulado (LocalStorage)
function saveStateToLocalStorage() {
    localStorage.setItem("amelie_services", JSON.stringify(state.services));
    localStorage.setItem("amelie_professionals", JSON.stringify(state.professionals));
    localStorage.setItem("amelie_bookings", JSON.stringify(state.bookings));
    localStorage.setItem("amelie_gallery", JSON.stringify(state.gallery));
    localStorage.setItem("amelie_locks", JSON.stringify(state.locks));
}

// Renderizar as Especialistas na tela inicial
function renderClientSpecialists() {
    const grid = document.getElementById("specialistsOrganicGrid");
    if (!grid) return;
    grid.innerHTML = "";
    
    state.professionals.forEach(pro => {
        const card = document.createElement("div");
        card.className = "specialist-organic-card";
        
        // Iniciais para o avatar de fallback
        const initials = pro.name ? pro.name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase() : "";
        
        card.innerHTML = `
            <div class="specialist-organic-img-wrapper">
                <img class="specialist-organic-img" src="${pro.photoUrl || ''}" alt="${pro.name || 'Profissional'}" onerror="this.style.display='none';">
                <div class="specialist-organic-placeholder">${initials}</div>
            </div>
            <div class="specialist-organic-info">
                <div>
                    <h3 class="specialist-organic-name">${pro.name || ''}</h3>
                    <span class="specialist-organic-role">${pro.role || ''}</span>
                    <p class="specialist-organic-bio">${pro.bio || ''}</p>
                </div>
                <div class="specialist-organic-footer">
                    <button class="btn-organic-book" onclick="openBookingWizard('${pro.category}', null, '${pro.id}')">Agende seu horário</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Renderizar a Galeria de Clientes na tela inicial
function renderClientGallery() {
    const grid = document.getElementById("clientGalleryGrid");
    if (!grid) return;
    grid.innerHTML = "";
    
    state.gallery.forEach(item => {
        const div = document.createElement("div");
        div.className = "gallery-item";
        
        div.innerHTML = `
            <img src="${item.imageUrl || ''}" alt="${item.title || 'Trabalho'}" onerror="this.style.opacity='0';">
            <div class="gallery-item-overlay">
                <h4 class="gallery-item-title">${item.title || ''}</h4>
            </div>
        `;
        grid.appendChild(div);
    });
}

// --- CONTROLES DE EVENTOS PRINCIPAIS ---
function initEventListeners() {
    // Filtros de Categoria na página de Serviços
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterButtons.forEach(b => b.classList.remove("active"));
            
            // Suporta cliques nos ícones também
            const targetBtn = e.target.closest(".filter-btn");
            if (targetBtn) {
                targetBtn.classList.add("active");
                state.activeClientFilter = targetBtn.dataset.category;
                renderServiceCards();
            }
        });
    });
    
    // Toggle Admin Portal
    const btnAdminAccess = document.getElementById("btnAdminAccess");
    if (btnAdminAccess) {
        btnAdminAccess.addEventListener("click", () => {
            openAdminPinModal();
        });
    }
    
    const btnAdminAccessFooter = document.getElementById("btnAdminAccessFooter");
    if (btnAdminAccessFooter) {
        btnAdminAccessFooter.addEventListener("click", (e) => {
            e.preventDefault();
            openAdminPinModal();
        });
    }
    
    const btnExitAdmin = document.getElementById("btnExitAdmin");
    if (btnExitAdmin) {
        btnExitAdmin.addEventListener("click", () => {
            exitAdminPortal();
        });
    }
    
    // Abas de Navegação Interna Admin
    const adminTabs = document.querySelectorAll(".admin-tab-btn");
    adminTabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            adminTabs.forEach(t => t.classList.remove("active"));
            
            const targetTab = e.target.closest(".admin-tab-btn");
            if (targetTab) {
                targetTab.classList.add("active");
                const selectedTabName = targetTab.dataset.tab;
                showAdminTabContent(selectedTabName);
            }
        });
    });
    
    // Filtros de Busca e Filtros de Data na Tabela do Admin
    const adminSearchInput = document.getElementById("adminSearchInput");
    if (adminSearchInput) adminSearchInput.addEventListener("input", renderAdminBookingsTable);
    
    const adminDateFilter = document.getElementById("adminDateFilter");
    if (adminDateFilter) adminDateFilter.addEventListener("change", renderAdminBookingsTable);
    
    const adminStatusFilter = document.getElementById("adminStatusFilter");
    if (adminStatusFilter) adminStatusFilter.addEventListener("change", renderAdminBookingsTable);

    const clientHistorySearchInput = document.getElementById("clientHistorySearchInput");
    if (clientHistorySearchInput) {
        clientHistorySearchInput.addEventListener("input", searchClientHistory);
    }
    
    // Botão de alternar tema no Admin
    const btnToggleAdminTheme = document.getElementById("btnToggleAdminTheme");
    if (btnToggleAdminTheme) {
        btnToggleAdminTheme.addEventListener("click", toggleAdminTheme);
    }

    // Escutar mudanças no Checkbox de Termos (Tolerância de Atraso)
    const termsCheckbox = document.getElementById("clientTermsCheckbox");
    if (termsCheckbox) {
        termsCheckbox.addEventListener("change", () => {
            const btnNext = document.getElementById("btnWizardNext");
            if (state.currentWizardStep === 4 && btnNext) {
                btnNext.disabled = !termsCheckbox.checked;
                if (btnNext.disabled) {
                    btnNext.style.opacity = "0.5";
                    btnNext.style.cursor = "not-allowed";
                } else {
                    btnNext.style.opacity = "1";
                    btnNext.style.cursor = "pointer";
                }
            }
        });
    }

    // Escutar input de serviço personalizado para deselecionar serviços pré-cadastrados
    const wizardCustomServiceInput = document.getElementById("wizardCustomServiceInput");
    if (wizardCustomServiceInput) {
        wizardCustomServiceInput.addEventListener("input", () => {
            if (wizardCustomServiceInput.value.trim() !== "") {
                document.querySelectorAll(".wizard-service-option").forEach(el => el.classList.remove("selected"));
                state.selectedService = null;
            }
        });
    }
}

// --- RENDERIZADORES DO PORTAL DO CLIENTE ---
function renderServiceCards() {
    const grid = document.getElementById("servicesGrid");
    if (!grid) return;
    grid.innerHTML = "";
    
    const filtered = state.activeClientFilter === "todos" 
        ? state.services 
        : state.services.filter(s => s.category === state.activeClientFilter);
        
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--color-text-muted);">
                <i class="fa-solid fa-tags" style="font-size: 40px; margin-bottom: 16px; color: var(--color-gold);"></i>
                <p>Nenhum serviço disponível nesta categoria.</p>
            </div>
        `;
        return;
    }
    
    filtered.forEach(service => {
        const card = document.createElement("div");
        card.className = `service-card cat-${service.category}`;
        
        card.innerHTML = `
            <div class="service-header">
                <span class="service-badge cat-${service.category}">${service.category}</span>
                <span class="service-price">R$ ${service.price.toFixed(2)}</span>
            </div>
            <h3 class="service-title">${service.name}</h3>
            <p class="service-desc">${service.description}</p>
            <div class="service-footer">
                <span class="service-duration">
                    <i class="fa-regular fa-clock"></i> ${service.duration} minutos
                </span>
                <button class="btn-card-book" onclick="openBookingWizard('${service.category}', '${service.id}')" title="Agendar este serviço">
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Permite filtrar dinamicamente navegando no menu ou rodapé
window.filterServicesCategory = function(category) {
    openClientServicesModal();
    filterModalServices(category);
};

// --- WIZARD DE AGENDAMENTO (PASSO A PASSO) ---
window.openBookingWizard = function(preSelectedCategory = "todos", preSelectedServiceId = null, preSelectedProId = null) {
    state.currentWizardStep = 1;
    state.selectedService = null;
    state.selectedProfessional = null;
    state.selectedDate = null;
    state.selectedTimeSlot = null;
    
    // Limpar campos de formulário
    document.getElementById("clientNameInput").value = "";
    document.getElementById("clientPhoneInput").value = "";
    document.getElementById("clientNotesInput").value = "";
    const customInput = document.getElementById("wizardCustomServiceInput");
    if (customInput) customInput.value = "";
    
    const termsCheckbox = document.getElementById("clientTermsCheckbox");
    if (termsCheckbox) termsCheckbox.checked = false;
    
    // Configura data padrão do calendário para o mês base (Junho 2026)
    state.currentCalendarDate = new Date(2026, 5, 2);
    
    // Atualizar UI dos passos e exibir modal
    updateWizardUI();
    document.getElementById("bookingWizardModal").classList.add("active");
    
    // Identificar a categoria e pré-selecionar o serviço se aplicável
    let proCategoryFilter = preSelectedCategory;
    if (preSelectedServiceId) {
        const srv = state.services.find(s => s.id === preSelectedServiceId);
        if (srv) {
            state.selectedService = srv;
            proCategoryFilter = srv.category;
        }
    }
    
    // Renderizar lista de profissionais no Passo 1
    renderWizardProfessionals(proCategoryFilter);
    
    // Se uma profissional foi pré-selecionada, marca-a e avança automaticamente
    if (preSelectedProId) {
        setTimeout(() => {
            const element = document.querySelector(`.wizard-pro-card[data-id="${preSelectedProId}"]`);
            if (element) {
                element.click();
                goNextWizardStep(); // Avança automaticamente para o passo 2
            }
        }, 100);
    }
};

window.closeBookingWizard = function() {
    document.getElementById("bookingWizardModal").classList.remove("active");
};

function updateWizardUI() {
    // 1. Mostrar/Ocultar painéis correspondentes
    for (let i = 1; i <= 5; i++) {
        const panel = document.getElementById(`panelStep${i}`);
        if (i === state.currentWizardStep) {
            panel.classList.remove("hidden");
        } else {
            panel.classList.add("hidden");
        }
        
        // Atualizar indicadores visuais na barra de progresso
        const indicator = document.querySelector(`.step-indicator[data-step="${i}"]`);
        if (i < state.currentWizardStep) {
            indicator.className = "step-indicator completed";
        } else if (i === state.currentWizardStep) {
            indicator.className = "step-indicator active";
        } else {
            indicator.className = "step-indicator";
        }
    }
    
    // 2. Ajustar linha de progresso
    const progressPct = ((state.currentWizardStep - 1) / 4) * 90; // 0% a 90%
    document.getElementById("wizardProgressLine").style.width = `${progressPct}%`;
    
    // 3. Ajustar visibilidade de botões do rodapé
    const btnBack = document.getElementById("btnWizardBack");
    const btnNext = document.getElementById("btnWizardNext");
    
    if (state.currentWizardStep === 1) {
        btnBack.classList.add("hidden");
        btnNext.classList.remove("hidden");
        btnNext.innerHTML = "Avançar";
        btnNext.disabled = false;
        btnNext.style.opacity = "1";
        btnNext.style.cursor = "pointer";
    } else if (state.currentWizardStep === 4) {
        btnBack.classList.remove("hidden");
        btnNext.classList.remove("hidden");
        btnNext.innerHTML = 'Confirmar Agendamento <i class="fa-solid fa-check"></i>';
        
        // Controlar ativação baseada no checkbox do Termo de Aceite
        const termsCheckbox = document.getElementById("clientTermsCheckbox");
        if (termsCheckbox) {
            btnNext.disabled = !termsCheckbox.checked;
            if (btnNext.disabled) {
                btnNext.style.opacity = "0.5";
                btnNext.style.cursor = "not-allowed";
            } else {
                btnNext.style.opacity = "1";
                btnNext.style.cursor = "pointer";
            }
        }
    } else if (state.currentWizardStep === 5) {
        btnBack.classList.add("hidden");
        btnNext.classList.remove("hidden");
        btnNext.innerHTML = 'Concluir <i class="fa-solid fa-thumbs-up"></i>';
        btnNext.disabled = false;
        btnNext.style.opacity = "1";
        btnNext.style.cursor = "pointer";
    } else {
        btnBack.classList.remove("hidden");
        btnNext.classList.remove("hidden");
        btnNext.innerHTML = "Avançar";
        btnNext.disabled = false;
        btnNext.style.opacity = "1";
        btnNext.style.cursor = "pointer";
    }
}

// Passo 2: Procedimentos baseados na profissional selecionada
function renderWizardServices() {
    const container = document.getElementById("wizardServicesContainer");
    if (!container) return;
    container.innerHTML = "";
    
    const customInput = document.getElementById("wizardCustomServiceInput");
    
    if (!state.selectedProfessional) {
        container.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 20px; color: var(--color-text-muted);">Por favor, selecione uma especialista no passo anterior.</div>`;
        return;
    }
    
    // Filtrar serviços: prioriza linkedServices definidos no admin, senão usa categoria
    const pro = state.selectedProfessional;
    let availableServices;
    
    if (pro.linkedServices && pro.linkedServices.length > 0) {
        // Usa os serviços vinculados manualmente pelo admin
        availableServices = state.services.filter(s => pro.linkedServices.includes(s.id));
    } else {
        // Fallback: filtra pela categoria da profissional
        availableServices = state.services.filter(s => s.category === pro.category);
    }
    
    availableServices.forEach(srv => {
        const option = document.createElement("div");
        option.className = "wizard-service-option";
        option.dataset.id = srv.id;
        if (state.selectedService && state.selectedService.id === srv.id) {
            option.classList.add("selected");
        }
        
        option.innerHTML = `
            <div class="wizard-service-info">
                <h4>${srv.name} <span class="service-badge cat-${srv.category}" style="font-size: 8px; padding: 2px 6px;">${srv.category}</span></h4>
                <p>${srv.description ? srv.description.substring(0, 70) : ""}...</p>
            </div>
            <div class="wizard-service-price-meta">
                <div class="wizard-service-price">R$ ${srv.price.toFixed(2)}</div>
                <div class="wizard-service-dur">${srv.duration} min</div>
            </div>
        `;
        
        option.addEventListener("click", () => {
            if (customInput) customInput.value = "";
            
            document.querySelectorAll(".wizard-service-option").forEach(el => el.classList.remove("selected"));
            option.classList.add("selected");
            state.selectedService = state.services.find(s => s.id === srv.id);
        });
        
        container.appendChild(option);
    });
}

// Passo 1: Seleção de Especialista (com filtro opcional por categoria)
function renderWizardProfessionals(categoryFilter = "todos") {
    const container = document.getElementById("wizardProsContainer");
    if (!container) return;
    container.innerHTML = "";
    
    const eligiblePros = categoryFilter === "todos" 
        ? state.professionals 
        : state.professionals.filter(p => p.category === categoryFilter);
        
    eligiblePros.forEach(pro => {
        const card = document.createElement("div");
        card.className = "wizard-pro-card";
        card.dataset.id = pro.id;
        if (state.selectedProfessional && state.selectedProfessional.id === pro.id) {
            card.classList.add("selected");
        }
        
        // Iniciais para o avatar
        const initials = pro.name ? pro.name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase() : "";
        
        card.innerHTML = `
            <div class="wizard-pro-avatar">${initials}</div>
            <h4 class="wizard-pro-name">${pro.name}</h4>
            <p class="wizard-pro-role">${pro.role}</p>
        `;
        
        card.addEventListener("click", () => {
            const oldPro = state.selectedProfessional;
            const newPro = state.professionals.find(p => p.id === pro.id);
            
            if (!oldPro || oldPro.id !== newPro.id) {
                // Se mudou de profissional, limpa o serviço selecionado e o input
                state.selectedService = null;
                const customInput = document.getElementById("wizardCustomServiceInput");
                if (customInput) customInput.value = "";
            }
            
            document.querySelectorAll(".wizard-pro-card").forEach(el => el.classList.remove("selected"));
            card.classList.add("selected");
            state.selectedProfessional = newPro;
            
            renderWizardServices();
        });
        
        container.appendChild(card);
    });
}

// Passo 3: Renderizador do Calendário Customizado
function renderWizardCalendar() {
    const monthLabel = document.getElementById("calendarMonthLabel");
    const daysContainer = document.getElementById("calendarDaysContainer");
    daysContainer.innerHTML = "";
    
    const year = state.currentCalendarDate.getFullYear();
    const month = state.currentCalendarDate.getMonth();
    
    // Nomes dos meses em português
    const monthsPt = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    monthLabel.textContent = `${monthsPt[month]} ${year}`;
    
    // Dias no mês e primeiro dia da semana
    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    
    // Data atual na simulação (02 de Junho de 2026)
    const todaySimulated = new Date(2026, 5, 2);
    
    // Inserir blocos vazios antes do primeiro dia
    for (let i = 0; i < firstDayIndex; i++) {
        const emptyDiv = document.createElement("div");
        daysContainer.appendChild(emptyDiv);
    }
    
    // Renderizar dias
    for (let day = 1; day <= totalDays; day++) {
        const dateObj = new Date(year, month, day);
        const dayDiv = document.createElement("div");
        dayDiv.className = "calendar-day";
        dayDiv.textContent = day;
        
        const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        
        // Bloquear datas no passado (antes de 02/06/2026) ou Domingos/Segundas (salão fechado) ou dias inteiros bloqueados
        const isPast = dateObj < todaySimulated;
        const dayOfWeek = dateObj.getDay();
        const isClosed = dayOfWeek === 0 || dayOfWeek === 1; // 0 = Domingo, 1 = Segunda
        
        // Verificar se há bloqueio de dia inteiro (timeType === "all") para esta data (do profissional selecionado ou todo o salão)
        const currentLocks = localStorage.getItem("amelie_locks") ? JSON.parse(localStorage.getItem("amelie_locks")) : state.locks;
        const isAllDayLocked = currentLocks.some(l => 
            l.date === dateString && 
            (l.professionalId === "all" || (state.selectedProfessional && l.professionalId === state.selectedProfessional.id)) && 
            l.timeType === "all"
        );
        
        if (isPast || isClosed || isAllDayLocked) {
            dayDiv.classList.add("disabled");
            if (isAllDayLocked) {
                dayDiv.title = "Agenda Bloqueada";
            }
        } else {
            if (state.selectedDate === dateString) {
                dayDiv.classList.add("selected");
            }
            
            dayDiv.addEventListener("click", () => {
                document.querySelectorAll(".calendar-day").forEach(el => el.classList.remove("selected"));
                dayDiv.classList.add("selected");
                state.selectedDate = dateString;
                state.selectedTimeSlot = null; // reseta horário ao trocar o dia
                renderWizardTimeSlots();
            });
        }
        
        daysContainer.appendChild(dayDiv);
    }
    
    // Caso nenhum dia esteja selecionado e o calendário mude, reseta horários
    renderWizardTimeSlots();
}

window.prevMonth = function() {
    // Impedir de voltar antes de Junho 2026 na simulação
    const minMonth = new Date(2026, 5, 1);
    const candidate = new Date(state.currentCalendarDate.getFullYear(), state.currentCalendarDate.getMonth() - 1, 1);
    if (candidate >= minMonth) {
        state.currentCalendarDate = candidate;
        renderWizardCalendar();
    } else {
        showToast("Não permitimos agendamentos em meses passados.", "error");
    }
};

window.nextMonth = function() {
    state.currentCalendarDate = new Date(state.currentCalendarDate.getFullYear(), state.currentCalendarDate.getMonth() + 1, 1);
    renderWizardCalendar();
};

// Passo 3b: Slots de Horários Dinâmicos
function renderWizardTimeSlots() {
    const container = document.getElementById("timeSlotsContainer");
    container.innerHTML = "";
    
    if (!state.selectedDate) {
        container.innerHTML = `<div style="grid-column: 1/-1; font-size:12px; color:var(--color-text-muted); text-align:center; padding: 20px;">Por favor, selecione uma data no calendário.</div>`;
        return;
    }
    
    // Slots de Horários do Salão (09:00 às 19:00 com intervalos de 1h)
    const baseSlots = [
        "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"
    ];
    // Recarregar agendamentos e bloqueios salvos no LocalStorage para garantir sincronia total em tempo real
    const currentBookings = localStorage.getItem("amelie_bookings") ? JSON.parse(localStorage.getItem("amelie_bookings")) : state.bookings;
    const currentLocks = localStorage.getItem("amelie_locks") ? JSON.parse(localStorage.getItem("amelie_locks")) : state.locks;
    
    // Encontrar horários já agendados para este profissional nesta data (com status confirmado ou pendente)
    const bookedSlots = currentBookings
        .filter(b => b.date === state.selectedDate && b.professionalId === state.selectedProfessional.id && (b.status === "confirmado" || b.status === "pendente"))
        .map(b => b.time);
        
    baseSlots.forEach(time => {
        const slotBtn = document.createElement("button");
        slotBtn.className = "slot-btn";
        slotBtn.textContent = time;
        
        const isBooked = bookedSlots.includes(time);
        
        // Verificar se há bloqueio para este horário específico
        const isLocked = currentLocks.some(l => {
            if (l.date !== state.selectedDate) return false;
            // Se o bloqueio for de outro profissional e não do salão todo, não se aplica
            if (l.professionalId !== "all" && l.professionalId !== state.selectedProfessional.id) return false;
            
            if (l.timeType === "all") {
                return true;
            } else if (l.timeType === "custom") {
                return (time >= l.startHour && time < l.endHour);
            }
            return false;
        });
        
        if (isBooked || isLocked) {
            slotBtn.classList.add("disabled");
            slotBtn.title = isBooked ? "Horário Ocupado" : "Horário Bloqueado";
            slotBtn.style.pointerEvents = "none";
            slotBtn.style.opacity = "0.4";
        } else {
            if (state.selectedTimeSlot === time) {
                slotBtn.classList.add("selected");
            }
            
            slotBtn.addEventListener("click", () => {
                document.querySelectorAll(".slot-btn").forEach(el => el.classList.remove("selected"));
                slotBtn.classList.add("selected");
                state.selectedTimeSlot = time;
            });
        }
        
        container.appendChild(slotBtn);
    });
}

// Controladores de Avanço/Recuo do Wizard
window.goBackWizardStep = function() {
    if (state.currentWizardStep > 1) {
        state.currentWizardStep--;
        updateWizardUI();
    }
};

window.goNextWizardStep = function() {
    // Validações de Passo
    if (state.currentWizardStep === 1) {
        if (!state.selectedProfessional) {
            showToast("Por favor, selecione uma de nossas especialistas para prosseguir.", "error");
            return;
        }
        // Ao avançar do passo 1 pro 2, carrega os serviços da profissional
        renderWizardServices();
    }
    
    else if (state.currentWizardStep === 2) {
        // Capturar serviço personalizado se digitado
        const customInput = document.getElementById("wizardCustomServiceInput");
        const customValue = customInput ? customInput.value.trim() : "";
        
        if (customValue !== "") {
            state.selectedService = {
                id: "custom",
                name: customValue,
                price: 0.00,
                duration: 60,
                category: state.selectedProfessional.category
            };
        }
        
        if (!state.selectedService) {
            showToast("Por favor, selecione o serviço desejado ou digite um procedimento personalizado.", "error");
            return;
        }
        
        // Renderiza calendário
        renderWizardCalendar();
    }
    
    else if (state.currentWizardStep === 3) {
        if (!state.selectedDate || !state.selectedTimeSlot) {
            showToast("Selecione uma data e um horário disponível.", "error");
            return;
        }
    }
    
    else if (state.currentWizardStep === 4) {
        // Validar formulário de dados da cliente
        const nameInput = document.getElementById("clientNameInput");
        const phoneInput = document.getElementById("clientPhoneInput");
        const notesInput = document.getElementById("clientNotesInput");
        
        // Validação explícita: Nome obrigatório
        if (!nameInput || !nameInput.value.trim()) {
            showToast("Por favor, preencha seu nome completo.", "error");
            if (nameInput) { nameInput.style.borderColor = "var(--color-danger)"; nameInput.focus(); }
            return;
        }
        nameInput.style.borderColor = "";
        
        // Validação explícita: WhatsApp obrigatório
        if (!phoneInput || !phoneInput.value.trim()) {
            showToast("Por favor, informe seu número de WhatsApp para que possamos confirmar o agendamento.", "error");
            if (phoneInput) { phoneInput.style.borderColor = "var(--color-danger)"; phoneInput.focus(); }
            return;
        }
        phoneInput.style.borderColor = "";
        
        const clientName = nameInput.value.trim();
        const clientPhone = phoneInput.value.trim();
        const clientNotes = notesInput ? notesInput.value.trim() : "";
        
        // Criar o agendamento real e persistir no State
        const finalBooking = createNewBooking(clientName, clientPhone, clientNotes);
        
        // Renderizar o ticket no Passo 5
        renderBookingTicket(finalBooking);
    }
    
    else if (state.currentWizardStep === 5) {
        // Fechar wizard de agendamento ao clicar em concluir
        closeBookingWizard();
        return;
    }
    
    state.currentWizardStep++;
    updateWizardUI();
};

// Salvando agendamento no sistema
function createNewBooking(name, phone, notes) {
    const bookingCode = `BK-${Math.floor(10000 + Math.random() * 90000)}`;
    const newBooking = {
        id: bookingCode,
        clientName: name,
        clientPhone: phone,
        serviceId: state.selectedService.id,
        serviceName: state.selectedService.name,
        category: state.selectedService.category,
        professionalId: state.selectedProfessional.id,
        professionalName: state.selectedProfessional.name,
        date: state.selectedDate,
        time: state.selectedTimeSlot,
        price: state.selectedService.price,
        status: "pendente", // Pendente por padrão para fluxo de confirmação do admin
        notes: notes,
        createdAt: new Date().toISOString()
    };
    
    state.bookings.unshift(newBooking); // Insere no início
    saveStateToLocalStorage();
    showToast("Agendamento criado com sucesso!", "success");
    
    // Se o painel administrativo estiver ativo, atualiza a tabela/gráficos
    if (!document.getElementById("adminPortal").classList.contains("hidden")) {
        renderAdminDashboard();
    }
    
    return newBooking;
}

// Renderização do Comprovante Visual (Passo 5)
function renderBookingTicket(booking) {
    const ticketCodeDisplay = document.getElementById("ticketCodeDisplay");
    if (ticketCodeDisplay) ticketCodeDisplay.textContent = booking.id;
    
    const ticketService = document.getElementById("ticketService");
    if (ticketService) ticketService.textContent = booking.serviceName;
    
    const ticketPro = document.getElementById("ticketPro");
    if (ticketPro) ticketPro.textContent = booking.professionalName;
    
    const ticketClient = document.getElementById("ticketClient");
    if (ticketClient) ticketClient.textContent = booking.clientName;
    
    const ticketTime = document.getElementById("ticketTime");
    if (ticketTime) ticketTime.textContent = booking.time;
    
    // Formatar data: AAAA-MM-DD para DD/MM/AAAA
    const parts = booking.date.split("-");
    const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
    const ticketDate = document.getElementById("ticketDate");
    if (ticketDate) ticketDate.textContent = formattedDate;
}


// --- ACESSO ADMINISTRATIVO E SEGURANÇA (LOCK SCREEN) ---
function openAdminPinModal() {
    document.getElementById("adminPinInput").value = "";
    document.getElementById("adminPinError").classList.add("hidden");
    document.getElementById("adminPinModal").classList.add("active");
}

window.closeAdminPinModal = function() {
    document.getElementById("adminPinModal").classList.remove("active");
};

window.submitAdminPin = function() {
    const pin = document.getElementById("adminPinInput").value;
    const errorMsg = document.getElementById("adminPinError");
    
    if (pin === "1234") {
        closeAdminPinModal();
        enterAdminPortal();
    } else {
        errorMsg.classList.remove("hidden");
        document.getElementById("adminPinInput").value = "";
        document.getElementById("adminPinInput").focus();
    }
};

function enterAdminPortal() {
    document.getElementById("clientPortal").classList.add("hidden");
    document.getElementById("adminPortal").classList.remove("hidden");
    
    // Ajustar visibilidade de botões do Header
    document.getElementById("btnAdminAccess").classList.add("hidden");
    document.getElementById("navMenu").classList.add("hidden");
    
    // Renderizar informações completas do Admin
    renderAdminDashboard();
    
    showToast("Acesso ao Painel Admin autorizado.", "success");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function exitAdminPortal() {
    document.getElementById("clientPortal").classList.remove("hidden");
    document.getElementById("adminPortal").classList.add("hidden");
    
    document.getElementById("btnAdminAccess").classList.remove("hidden");
    document.getElementById("navMenu").classList.remove("hidden");
    
    // Retorna ao modo clássico de cores do salão
    document.body.classList.remove("admin-dark-theme");
    document.getElementById("btnToggleAdminTheme").innerHTML = '<i class="fa-solid fa-moon"></i> Tema Escuro';
    
    showToast("Você saiu do Painel Admin.", "info");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleAdminTheme() {
    const isDark = document.body.classList.toggle("admin-dark-theme");
    const btn = document.getElementById("btnToggleAdminTheme");
    
    if (isDark) {
        btn.innerHTML = '<i class="fa-solid fa-sun"></i> Tema Claro';
    } else {
        btn.innerHTML = '<i class="fa-solid fa-moon"></i> Tema Escuro';
    }
}

// Navegação das Abas Internas do Dashboard Admin
function showAdminTabContent(tabName) {
    const allContents = document.querySelectorAll(".admin-tab-content");
    allContents.forEach(el => el.classList.add("hidden"));
    
    if (tabName === "metricas") {
        document.getElementById("tabContentMetricas").classList.remove("hidden");
        renderAdminDashboardMetrics();
    } else if (tabName === "agendamentos") {
        document.getElementById("tabContentAgendamentos").classList.remove("hidden");
        renderAdminBookingsTable();
    } else if (tabName === "servicos") {
        document.getElementById("tabContentServicos").classList.remove("hidden");
        renderAdminServicesCrudGrid();
    } else if (tabName === "profissionais") {
        document.getElementById("tabContentProfissionais").classList.remove("hidden");
        renderAdminProsCrudGrid();
    } else if (tabName === "galeria") {
        const tabContentGaleria = document.getElementById("tabContentGaleria");
        if (tabContentGaleria) tabContentGaleria.classList.remove("hidden");
        renderAdminGalleryCrudGrid();
    } else if (tabName === "bloqueios") {
        document.getElementById("tabContentBloqueios").classList.remove("hidden");
        loadLockProSelectOptions();
        renderAdminLocks();
    } else if (tabName === "backup") {
        document.getElementById("tabContentBackup").classList.remove("hidden");
    }
}


// --- CENTRAL ADMINISTRATIVA (CONTROLE E RENDERIZAÇÃO) ---

// Renderiza todas as abas quando acessa o painel
function renderAdminDashboard() {
    renderAdminDashboardMetrics();
    renderAdminBookingsTable();
    renderAdminServicesCrudGrid();
    renderAdminProsCrudGrid();
    renderAdminGalleryCrudGrid();
    loadLockProSelectOptions();
    renderAdminLocks();
}

// 1. ABA 1: MÉTRICAS, RANKING E GRÁFICOS SVG
function renderAdminDashboardMetrics() {
    const activeBookings = state.bookings.filter(b => b.status !== "cancelado");
    
    // Obter data atual para simulação (padrão é 2026-06-02 com base no metadata)
    const todayString = "2026-06-02";
    const currentMonthString = "2026-06"; // Junho 2026
    
    // Atualizar labels no cabeçalho
    const todayLabel = document.getElementById("adminTodayDateLabel");
    if (todayLabel) todayLabel.textContent = "02/06/2026";
    
    // Total de Agendados
    document.getElementById("valTotalBookings").textContent = activeBookings.length;
    
    // Total de Serviços Activos
    document.getElementById("valTotalServices").textContent = state.services.length;
    
    // Total de Profissionais
    document.getElementById("valTotalPros").textContent = state.professionals.length;
    
    // Faturamento Total Geral
    const revenue = activeBookings.reduce((sum, b) => sum + b.price, 0);
    document.getElementById("valRevenue").textContent = `R$ ${revenue.toFixed(2)}`;
    
    // Previsão de Faturamento (Hoje)
    const revenueToday = activeBookings
        .filter(b => b.date === todayString)
        .reduce((sum, b) => sum + b.price, 0);
    document.getElementById("valRevenueToday").textContent = `R$ ${revenueToday.toFixed(2)}`;
    
    // Faturamento do Mês (Somente confirmados e concluidos do mês atual da simulação)
    const revenueMonth = activeBookings
        .filter(b => b.date.startsWith(currentMonthString) && (b.status === "confirmado" || b.status === "concluido"))
        .reduce((sum, b) => sum + b.price, 0);
    document.getElementById("valRevenueMonth").textContent = `R$ ${revenueMonth.toFixed(2)}`;

    // Renderizar tabela "Resumo de Hoje"
    renderTodaySummaryTable(todayString);
    
    // Faturamento e Proporções por Categoria
    let revCabelos = 0;
    let revUnhas = 0;
    let revCilios = 0;
    
    activeBookings.forEach(b => {
        if (b.category === "cabelos") revCabelos += b.price;
        else if (b.category === "unhas") revUnhas += b.price;
        else if (b.category === "cilios") revCilios += b.price;
    });
    
    document.getElementById("lblValCabelos").textContent = `R$ ${revCabelos.toFixed(2)}`;
    document.getElementById("lblValUnhas").textContent = `R$ ${revUnhas.toFixed(2)}`;
    document.getElementById("lblValCilios").textContent = `R$ ${revCilios.toFixed(2)}`;
    
    // Cálculo de Percentuais para Donut Chart
    const totalRevCalculated = revCabelos + revUnhas + revCilios;
    let pctCabelos = 0;
    let pctUnhas = 0;
    let pctCilios = 0;
    
    if (totalRevCalculated > 0) {
        pctCabelos = (revCabelos / totalRevCalculated) * 100;
        pctUnhas = (revUnhas / totalRevCalculated) * 100;
        pctCilios = (revCilios / totalRevCalculated) * 100;
    } else {
        // Se zerado, distribui igualmente para design
        pctCabelos = 33.3; pctUnhas = 33.3; pctCilios = 33.3;
    }
    
    document.getElementById("lblPctCabelos").textContent = `${pctCabelos.toFixed(1)}%`;
    document.getElementById("lblPctUnhas").textContent = `${pctUnhas.toFixed(1)}%`;
    document.getElementById("lblPctCilios").textContent = `${pctCilios.toFixed(1)}%`;
    
    // Atualizar Donut Chart SVG (Circunferência do círculo R=70 é 440)
    const circ = 440;
    
    const strokeCabelos = (pctCabelos / 100) * circ;
    const strokeUnhas = (pctUnhas / 100) * circ;
    const strokeCilios = (pctCilios / 100) * circ;
    
    const donutCabelos = document.getElementById("donutSegCabelos");
    const donutUnhas = document.getElementById("donutSegUnhas");
    const donutCilios = document.getElementById("donutSegCilios");
    
    donutCabelos.setAttribute("stroke-dasharray", `${strokeCabelos} ${circ}`);
    donutCabelos.setAttribute("stroke-dashoffset", `0`);
    
    donutCabelos.getBoundingClientRect(); // Trigger layout reflow
    
    donutUnhas.setAttribute("stroke-dasharray", `${strokeUnhas} ${circ}`);
    donutUnhas.setAttribute("stroke-dashoffset", `-${strokeCabelos}`);
    
    donutCilios.setAttribute("stroke-dasharray", `${strokeCilios} ${circ}`);
    donutCilios.setAttribute("stroke-dashoffset", `-${strokeCabelos + strokeUnhas}`);
    
    // Ranking de Serviços
    renderRankingServices();
}

// Renderiza a lista de agendamentos de Hoje organizada por horário
function renderTodaySummaryTable(todayString) {
    const tbody = document.getElementById("adminTodayScheduleBody");
    if (!tbody) return;
    tbody.innerHTML = "";
    
    // Filtrar agendamentos de hoje ordenados por horário
    const todayBookings = state.bookings
        .filter(b => b.date === todayString)
        .sort((a, b) => a.time.localeCompare(b.time));
        
    if (todayBookings.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 20px; color: var(--color-text-muted);">
                    Nenhuma cliente agendada para hoje.
                </td>
            </tr>
        `;
        return;
    }
    
    todayBookings.forEach(booking => {
        const tr = document.createElement("tr");
        
        // WhatsApp Link
        const cleanPhone = booking.clientPhone ? booking.clientPhone.replace(/\D/g, '') : '';
        const phoneFormatted = cleanPhone.length >= 10 ? '55' + cleanPhone : '';
        const templateMsg = `Olá ${booking.clientName}, confirmamos seu horário hoje no Studio Fênix às ${booking.time} para o serviço de ${booking.serviceName}. Te aguardamos!`;
        const encodedText = encodeURIComponent(templateMsg);
        const whatsappLink = `https://wa.me/${phoneFormatted}?text=${encodedText}`;
        
        const statusOptions = ['pendente', 'confirmado', 'concluido', 'cancelado'];
        const statusSelectHtml = `<select class="form-input admin-status-select" onchange="changeBookingStatus('${booking.id}', this.value)" style="padding: 4px 8px; font-size: 11px; font-weight: 700; width: 110px; border-radius: 20px; text-transform: capitalize; cursor: pointer;">
            ${statusOptions.map(s => `<option value="${s}" ${booking.status === s ? 'selected' : ''}>${s.charAt(0).toUpperCase() + s.slice(1)}</option>`).join('')}
        </select>`;
        
        tr.innerHTML = `
            <td><strong style="color: var(--color-gold); font-size: 14px;">${booking.time}</strong></td>
            <td>
                <div><strong>${booking.clientName}</strong></div>
                <div style="font-size: 11px; color: var(--color-text-muted);">${booking.clientPhone || 'N/A'}</div>
            </td>
            <td>${booking.serviceName}</td>
            <td><strong>${booking.professionalName}</strong></td>
            <td>${statusSelectHtml}</td>
            <td>
                <div class="table-actions">
                    ${phoneFormatted ? `
                        <a href="${whatsappLink}" target="_blank" class="action-icon-btn confirm" title="Lembrete via WhatsApp" style="color: #25D366; text-decoration: none;">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                    ` : ''}
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function renderRankingServices() {
    const list = document.getElementById("rankingServicesList");
    list.innerHTML = "";
    
    // Contabilizar aparições dos serviços nos agendamentos
    const counts = {};
    state.bookings.forEach(b => {
        counts[b.serviceName] = (counts[b.serviceName] || 0) + 1;
    });
    
    // Ordenar por popularidade
    const sorted = Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 4); // Top 4
        
    if (sorted.length === 0) {
        list.innerHTML = `<li style="font-size:12px; color:var(--color-text-muted); text-align:center;">Sem agendamentos suficientes ainda.</li>`;
        return;
    }
    
    sorted.forEach(([name, count], index) => {
        const medals = ['🥇', '🥈', '🥉', '✨'];
        const medal = medals[index] || '✨';
        
        const li = document.createElement("li");
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.fontSize = "13px";
        li.style.borderBottom = "1px dashed rgba(42,36,33,0.05)";
        li.style.paddingBottom = "8px";
        
        li.innerHTML = `
            <span>${medal} <strong>${name}</strong></span>
            <span class="service-badge cat-cabelos" style="font-size:10px; font-weight:700;">${count} agendamento(s)</span>
        `;
        list.appendChild(li);
    });
}

// 2. ABA 2: TABELA DE AGENDAMENTOS (BUSCA, FILTRO, AÇÕES)
function renderAdminBookingsTable() {
    const body = document.getElementById("adminBookingsTableBody");
    body.innerHTML = "";
    
    const searchText = document.getElementById("adminSearchInput").value.toLowerCase();
    const filterDate = document.getElementById("adminDateFilter").value;
    const filterStatus = document.getElementById("adminStatusFilter").value;
    
    let filtered = state.bookings;
    
    // Aplicar filtros
    if (searchText) {
        filtered = filtered.filter(b => b.clientName.toLowerCase().includes(searchText) || b.id.toLowerCase().includes(searchText));
    }
    if (filterDate) {
        filtered = filtered.filter(b => b.date === filterDate);
    }
    if (filterStatus !== "todos") {
        filtered = filtered.filter(b => b.status === filterStatus);
    }
    
    if (filtered.length === 0) {
        body.innerHTML = `
            <tr>
                <td colspan="8" style="text-align: center; padding: 30px; color: var(--color-text-muted);">
                    Nenhum agendamento encontrado para os filtros selecionados.
                </td>
            </tr>
        `;
        return;
    }
    
    filtered.forEach(booking => {
        const tr = document.createElement("tr");
        
        const dateParts = booking.date.split("-");
        const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
        
        // Clean phone for WhatsApp link
        const cleanPhone = booking.clientPhone ? booking.clientPhone.replace(/\D/g, '') : '';
        let phoneFormatted = cleanPhone;
        if (cleanPhone.length === 10 || cleanPhone.length === 11) {
            phoneFormatted = '55' + cleanPhone;
        }
        
        const templateMsg = `Olá ${booking.clientName}, recebemos seu pedido de agendamento no Studio Fênix para o serviço de ${booking.serviceName} com a ${booking.professionalName} no dia ${formattedDate} às ${booking.time}. Podemos confirmar?`;
        const encodedText = encodeURIComponent(templateMsg);
        const whatsappLink = `https://wa.me/${phoneFormatted}?text=${encodedText}`;
        
        // Status select HTML
        const statusOptions = ['pendente', 'confirmado', 'concluido', 'cancelado'];
        const statusSelectHtml = `<select class="form-input admin-status-select" onchange="changeBookingStatus('${booking.id}', this.value)" style="padding: 5px 8px; font-size: 11px; font-weight: 700; min-width: 110px; border-radius: 20px; text-transform: capitalize; cursor: pointer;">
            ${statusOptions.map(s => `<option value="${s}" ${booking.status === s ? 'selected' : ''}>${s.charAt(0).toUpperCase() + s.slice(1)}</option>`).join('')}
        </select>`;
        
        tr.innerHTML = `
            <td><strong>${booking.id}</strong></td>
            <td>
                <div><strong>${booking.clientName}</strong></div>
                <div style="display: flex; align-items: center; gap: 8px; margin-top: 4px;">
                    <span style="font-size: 11px; color: var(--color-text-muted);">${booking.clientPhone || 'N/A'}</span>
                </div>
            </td>
            <td>
                <div>${booking.serviceName}</div>
                <span class="service-badge cat-${booking.category}" style="font-size:8px; padding:2px 6px;">${booking.category}</span>
            </td>
            <td>${booking.professionalName}</td>
            <td>
                <div>${formattedDate}</div>
                <div style="font-size:11px; font-weight:600; color:var(--color-gold);">${booking.time}</div>
            </td>
            <td><strong>R$ ${booking.price.toFixed(2)}</strong></td>
            <td>${statusSelectHtml}</td>
            <td>
                <div class="table-actions">
                    ${phoneFormatted ? `
                        <a href="${whatsappLink}" target="_blank" class="action-icon-btn confirm" title="Confirmar via WhatsApp" style="color: #25D366; text-decoration: none;">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                    ` : ''}
                    ${booking.status !== "concluido" && booking.status !== "cancelado" ? `
                        <button class="action-icon-btn done" onclick="changeBookingStatus('${booking.id}', 'concluido')" title="Marcar como Concluído">
                            <i class="fa-solid fa-circle-check"></i>
                        </button>
                        <button class="action-icon-btn cancel" onclick="changeBookingStatus('${booking.id}', 'cancelado')" title="Cancelar Agendamento">
                            <i class="fa-solid fa-ban"></i>
                        </button>
                    ` : `
                        <span style="color:var(--color-text-muted); font-size:11px;">Finalizado</span>
                    `}
                    <button class="action-icon-btn cancel" onclick="deleteBookingIndividual('${booking.id}')" title="Excluir Agendamento" style="color: var(--color-danger); border-color: rgba(220,53,69,0.15); background: rgba(220,53,69,0.04);">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
            </td>
        `;
        
        body.appendChild(tr);
    });
}

window.changeBookingStatus = function(bookingId, newStatus) {
    const booking = state.bookings.find(b => b.id === bookingId);
    if (booking) {
        booking.status = newStatus;
        saveStateToLocalStorage();
        renderAdminDashboard(); // Atualiza painel inteiro
        
        const statusMap = {
            confirmado: "Agendamento confirmado!",
            concluido: "Atendimento concluído!",
            cancelado: "Agendamento cancelado!"
        };
        showToast(statusMap[newStatus], "info");
    }
};

// 3. ABA 3: GERENCIAR SERVIÇOS (CRUD)
function renderAdminServicesCrudGrid() {
    const grid = document.getElementById("adminServicesCrudGrid");
    grid.innerHTML = "";
    
    state.services.forEach(srv => {
        const card = document.createElement("div");
        card.className = "crud-card";
        
        card.innerHTML = `
            <div>
                <div class="crud-card-header">
                    <span class="service-badge cat-${srv.category}">${srv.category}</span>
                    <span class="service-duration"><i class="fa-regular fa-clock"></i> ${srv.duration} min</span>
                </div>
                <h4 class="crud-card-title">${srv.name}</h4>
                <p class="crud-card-desc">${srv.description}</p>
            </div>
            <div class="crud-card-footer">
                <span class="crud-card-price">R$ ${srv.price.toFixed(2)}</span>
                <div class="crud-actions">
                    <button class="crud-action-btn edit" onclick="openServiceModal('${srv.id}')" title="Editar Serviço">
                        <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button class="crud-action-btn delete" onclick="deleteService('${srv.id}')" title="Excluir Serviço">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

window.openServiceModal = function(serviceId = null) {
    const modal = document.getElementById("crudServiceModal");
    const title = document.getElementById("crudServiceTitle");
    const form = document.getElementById("crudServiceForm");
    
    form.reset();
    document.getElementById("crudServiceId").value = "";
    
    if (serviceId) {
        title.textContent = "Editar Serviço";
        const srv = state.services.find(s => s.id === serviceId);
        if (srv) {
            document.getElementById("crudServiceId").value = srv.id;
            document.getElementById("crudServiceName").value = srv.name;
            document.getElementById("crudServiceCategory").value = srv.category;
            document.getElementById("crudServicePrice").value = srv.price;
            document.getElementById("crudServiceDuration").value = srv.duration;
            document.getElementById("crudServiceDesc").value = srv.description;
        }
    } else {
        title.textContent = "Novo Serviço";
    }
    
    modal.classList.add("active");
};

window.closeServiceModal = function() {
    document.getElementById("crudServiceModal").classList.remove("active");
};

window.saveService = function() {
    const id = document.getElementById("crudServiceId").value;
    const name = document.getElementById("crudServiceName").value.trim();
    const category = document.getElementById("crudServiceCategory").value;
    const price = parseFloat(document.getElementById("crudServicePrice").value);
    const duration = parseInt(document.getElementById("crudServiceDuration").value);
    const description = document.getElementById("crudServiceDesc").value.trim();
    
    if (id) {
        // Editando
        const srv = state.services.find(s => s.id === id);
        if (srv) {
            srv.name = name;
            srv.category = category;
            srv.price = price;
            srv.duration = duration;
            srv.description = description;
            showToast("Serviço atualizado!", "success");
        }
    } else {
        // Criando Novo
        const newId = `srv-${Date.now()}`;
        state.services.push({ id: newId, name, category, price, duration, description });
        showToast("Novo serviço cadastrado!", "success");
    }
    
    saveStateToLocalStorage();
    closeServiceModal();
    renderServiceCards(); // Atualiza frontpage da cliente
    renderAdminDashboard(); // Atualiza painel admin
};

window.deleteService = function(serviceId) {
    if (confirm("Tem certeza que deseja excluir permanentemente este serviço?")) {
        state.services = state.services.filter(s => s.id !== serviceId);
        saveStateToLocalStorage();
        renderServiceCards();
        renderAdminDashboard();
        showToast("Serviço removido com sucesso.", "info");
    }
};

// 4. ABA 4: GERENCIAR EQUIPE (CRUD)
function renderAdminProsCrudGrid() {
    const grid = document.getElementById("adminProsCrudGrid");
    grid.innerHTML = "";
    
    state.professionals.forEach(pro => {
        const card = document.createElement("div");
        card.className = "crud-card";
        
        const initials = pro.name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
        
        card.innerHTML = `
            <div style="display:flex; gap:16px; align-items:center; margin-bottom:12px;">
                <div class="wizard-pro-avatar" style="margin-bottom:0; width:50px; height:50px; font-size:18px;">${initials}</div>
                <div>
                    <h4 class="crud-card-title">${pro.name}</h4>
                    <span class="service-badge cat-${pro.category}">${pro.category}</span>
                </div>
            </div>
            <p class="crud-card-desc" style="margin-bottom:12px;">${pro.role}</p>
            <div class="crud-card-footer" style="padding-top:12px; margin-top:auto;">
                <span style="font-size:11px; color:var(--color-text-muted);">Especialista</span>
                <div class="crud-actions">
                    <button class="crud-action-btn edit" onclick="openProfessionalModal('${pro.id}')" title="Editar Profissional">
                        <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button class="crud-action-btn delete" onclick="deleteProfessional('${pro.id}')" title="Excluir Profissional">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

window.openProfessionalModal = function(proId = null) {
    const modal = document.getElementById("crudProModal");
    const title = document.getElementById("crudProTitle");
    const form = document.getElementById("crudProForm");
    
    if (form) form.reset();
    if (document.getElementById("crudProId")) document.getElementById("crudProId").value = "";
    
    // Renderizar checkboxes de serviços vinculados
    renderProServiceCheckboxes(proId);
    
    if (proId) {
        if (title) title.textContent = "Editar Profissional";
        const pro = state.professionals.find(p => p.id === proId);
        if (pro) {
            if (document.getElementById("crudProId")) document.getElementById("crudProId").value = pro.id;
            if (document.getElementById("crudProName")) document.getElementById("crudProName").value = pro.name;
            if (document.getElementById("crudProCategory")) document.getElementById("crudProCategory").value = pro.category;
            if (document.getElementById("crudProRole")) document.getElementById("crudProRole").value = pro.role;
            if (document.getElementById("crudProPhoto")) document.getElementById("crudProPhoto").value = pro.photoUrl || "";
            if (document.getElementById("crudProBio")) document.getElementById("crudProBio").value = pro.bio || "";
        }
    } else {
        if (title) title.textContent = "Nova Profissional";
    }
    
    if (modal) modal.classList.add("active");
};

// Renderizar os checkboxes de serviços vinculados no modal da profissional
function renderProServiceCheckboxes(proId = null) {
    const container = document.getElementById("crudProServicesCheckboxes");
    if (!container) return;
    container.innerHTML = "";
    
    const pro = proId ? state.professionals.find(p => p.id === proId) : null;
    const linkedServiceIds = (pro && pro.linkedServices) ? pro.linkedServices : [];
    
    if (state.services.length === 0) {
        container.innerHTML = '<span style="font-size:12px; color:var(--color-text-muted);">Nenhum serviço cadastrado ainda.</span>';
        return;
    }
    
    state.services.forEach(srv => {
        const isChecked = linkedServiceIds.includes(srv.id);
        const div = document.createElement("div");
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.gap = "10px";
        div.innerHTML = `
            <input type="checkbox" class="crud-pro-service-cb" value="${srv.id}" ${isChecked ? 'checked' : ''} style="width:18px; height:18px; accent-color: var(--color-gold); cursor: pointer; flex-shrink: 0;">
            <label style="font-size: 13px; cursor: pointer; display: flex; align-items: center; gap: 6px;">
                <span class="service-badge cat-${srv.category}" style="font-size:8px; padding:2px 5px;">${srv.category}</span>
                ${srv.name} <span style="font-size:11px; color:var(--color-text-muted);">(R$ ${srv.price.toFixed(2)})</span>
            </label>
        `;
        container.appendChild(div);
    });
}

window.closeProfessionalModal = function() {
    const modal = document.getElementById("crudProModal");
    if (modal) modal.classList.remove("active");
};

window.saveProfessional = function() {
    const idInput = document.getElementById("crudProId");
    const id = idInput ? idInput.value : "";
    const nameInput = document.getElementById("crudProName");
    const name = nameInput ? nameInput.value.trim() : "";
    const categoryInput = document.getElementById("crudProCategory");
    const category = categoryInput ? categoryInput.value : "";
    const roleInput = document.getElementById("crudProRole");
    const role = roleInput ? roleInput.value.trim() : "";
    const photoInput = document.getElementById("crudProPhoto");
    const photoUrl = photoInput ? photoInput.value.trim() : "";
    const bioInput = document.getElementById("crudProBio");
    const bio = bioInput ? bioInput.value.trim() : "";
    
    // Capturar serviços vinculados (checkboxes marcados)
    const serviceCheckboxes = document.querySelectorAll(".crud-pro-service-cb:checked");
    const linkedServices = Array.from(serviceCheckboxes).map(cb => cb.value);
    
    if (!name || !category || !role) {
        showToast("Por favor, preencha todos os campos obrigatórios.", "error");
        return;
    }
    
    if (id) {
        // Editando
        const pro = state.professionals.find(p => p.id === id);
        if (pro) {
            pro.name = name;
            pro.category = category;
            pro.role = role;
            pro.photoUrl = photoUrl;
            pro.bio = bio;
            pro.linkedServices = linkedServices;
            showToast("Profissional atualizada!", "success");
        }
    } else {
        // Criando Novo
        const newId = `prof-${Date.now()}`;
        state.professionals.push({ id: newId, name, category, role, photoUrl, bio, linkedServices });
        showToast("Nova especialista integrada à equipe!", "success");
    }
    
    saveStateToLocalStorage();
    closeProfessionalModal();
    renderClientSpecialists(); // Atualiza listagem de clientes
    renderAdminDashboard(); // Atualiza painel admin
};

window.deleteProfessional = function(proId) {
    if (confirm("Tem certeza que deseja remover esta profissional da equipe técnica?")) {
        state.professionals = state.professionals.filter(p => p.id !== proId);
        saveStateToLocalStorage();
        renderClientSpecialists(); // Atualiza listagem de clientes
        renderAdminDashboard();
        showToast("Profissional removida com sucesso.", "info");
    }
};


// --- TOAST NOTIFICATIONS (SISTEMA DE AVISOS FLUTUANTES) ---
function showToast(message, type = "success") {
    const container = document.getElementById("toastContainer");
    
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    
    const icons = {
        success: '<i class="fa-solid fa-circle-check" style="color:var(--color-success);"></i>',
        error: '<i class="fa-solid fa-circle-exclamation" style="color:var(--color-danger);"></i>',
        info: '<i class="fa-solid fa-circle-info" style="color:var(--color-info);"></i>'
    };
    
    toast.innerHTML = `
        ${icons[type] || icons.success}
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    
    // Acionar a animação de entrada com pequeno atraso
    setTimeout(() => {
        toast.classList.add("active");
    }, 50);
    
    // Auto remover após 3.5 segundos
    setTimeout(() => {
        toast.classList.remove("active");
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 3500);
}

// --- PORTFOLIO GALLERY CRUD HANDLERS (ADMIN) ---
function renderAdminGalleryCrudGrid() {
    const grid = document.getElementById("adminGalleryCrudGrid");
    if (!grid) return;
    grid.innerHTML = "";
    
    state.gallery.forEach(item => {
        const card = document.createElement("div");
        card.className = "crud-card";
        
        card.innerHTML = `
            <div style="display:flex; gap:16px; align-items:center; margin-bottom:12px;">
                <img src="${item.imageUrl || ''}" alt="${item.title || 'Trabalho'}" style="width:60px; height:60px; object-fit:cover; border-radius: var(--radius-md);" onerror="this.style.opacity='0';">
                <div>
                    <h4 class="crud-card-title">${item.title || ''}</h4>
                </div>
            </div>
            <div class="crud-card-footer" style="padding-top:12px; margin-top:auto;">
                <span style="font-size:11px; color:var(--color-text-muted);">Trabalho</span>
                <div class="crud-actions">
                    <button class="crud-action-btn edit" onclick="openGalleryModal('${item.id}')" title="Editar Trabalho">
                        <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button class="crud-action-btn delete" onclick="deleteGalleryItem('${item.id}')" title="Excluir Trabalho">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

window.openGalleryModal = function(galleryId = null) {
    const modal = document.getElementById("crudGalleryModal");
    const title = document.getElementById("crudGalleryTitle");
    const form = document.getElementById("crudGalleryForm");
    
    if (form) form.reset();
    const idInput = document.getElementById("crudGalleryId");
    if (idInput) idInput.value = "";
    
    if (galleryId) {
        if (title) title.textContent = "Editar Trabalho";
        const item = state.gallery.find(g => g.id === galleryId);
        if (item) {
            if (document.getElementById("crudGalleryId")) document.getElementById("crudGalleryId").value = item.id;
            if (document.getElementById("crudGalleryTitleInput")) document.getElementById("crudGalleryTitleInput").value = item.title;
            if (document.getElementById("crudGalleryImageInput")) document.getElementById("crudGalleryImageInput").value = item.imageUrl;
        }
    } else {
        if (title) title.textContent = "Novo Trabalho";
    }
    
    if (modal) modal.classList.add("active");
};

window.closeGalleryModal = function() {
    const modal = document.getElementById("crudGalleryModal");
    if (modal) modal.classList.remove("active");
};

window.saveGalleryItem = function() {
    const idInput = document.getElementById("crudGalleryId");
    const id = idInput ? idInput.value : "";
    const titleInput = document.getElementById("crudGalleryTitleInput");
    const title = titleInput ? titleInput.value.trim() : "";
    const imageInput = document.getElementById("crudGalleryImageInput");
    const imageUrl = imageInput ? imageInput.value.trim() : "";
    
    if (!title || !imageUrl) {
        showToast("Por favor, preencha todos os campos.", "error");
        return;
    }
    
    if (id) {
        // Editando
        const item = state.gallery.find(g => g.id === id);
        if (item) {
            item.title = title;
            item.imageUrl = imageUrl;
            showToast("Trabalho atualizado!", "success");
        }
    } else {
        // Criando Novo
        const newId = `gal-${Date.now()}`;
        state.gallery.push({ id: newId, title, imageUrl });
        showToast("Novo trabalho adicionado à galeria!", "success");
    }
    
    saveStateToLocalStorage();
    closeGalleryModal();
    renderClientGallery();
    renderAdminGalleryCrudGrid();
};

window.deleteGalleryItem = function(galleryId) {
    if (confirm("Tem certeza que deseja excluir este trabalho da galeria?")) {
        state.gallery = state.gallery.filter(g => g.id !== galleryId);
        saveStateToLocalStorage();
        renderClientGallery();
        renderAdminGalleryCrudGrid();
        showToast("Trabalho removido com sucesso.", "info");
    }
};

// --- CLIENT SERVICES MODAL CONTROL AND RENDERERS ---
window.openClientServicesModal = function() {
    renderClientServicesList("todos");
    const modal = document.getElementById("clientServicesModal");
    if (modal) modal.classList.add("active");
};

window.closeClientServicesModal = function() {
    const modal = document.getElementById("clientServicesModal");
    if (modal) modal.classList.remove("active");
};

window.filterModalServices = function(category) {
    const buttons = document.querySelectorAll("[data-modal-category]");
    buttons.forEach(btn => {
        if (btn.getAttribute("data-modal-category") === category) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    renderClientServicesList(category);
};

function renderClientServicesList(categoryFilter = "todos") {
    const container = document.getElementById("clientServicesModalList");
    if (!container) return;
    container.innerHTML = "";
    
    const filtered = categoryFilter === "todos"
        ? state.services
        : state.services.filter(s => s.category === categoryFilter);
        
    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; padding:40px; color:var(--color-text-muted);">
                Nenhum serviço cadastrado nesta categoria.
            </div>
        `;
        return;
    }
    
    filtered.forEach(srv => {
        const div = document.createElement("div");
        div.style.display = "flex";
        div.style.justifyContent = "space-between";
        div.style.alignItems = "center";
        div.style.padding = "16px";
        div.style.background = "var(--color-bg-primary)";
        div.style.borderRadius = "var(--radius-md)";
        div.style.border = "1px solid rgba(42,36,33,0.04)";
        div.style.gap = "16px";
        
        div.innerHTML = `
            <div style="flex-grow:1; text-align:left;">
                <h4 style="font-family:var(--font-heading); font-size:16px; font-weight:700; color:var(--color-text-main); margin-bottom:4px;">${srv.name}</h4>
                <p style="font-size:12.5px; color:var(--color-text-muted); line-height:1.5; margin-bottom:0;">${srv.description}</p>
            </div>
            <div style="display:flex; align-items:center; gap:24px; min-width:200px; justify-content:flex-end; flex-shrink:0;">
                <div style="text-align:right;">
                    <div style="font-family:var(--font-heading); font-size:16px; font-weight:700; color:var(--color-text-main);">R$ ${srv.price.toFixed(2)}</div>
                    <div style="font-size:11px; color:var(--color-text-muted);"><i class="fa-regular fa-clock"></i> ${srv.duration} min</div>
                </div>
                <button class="btn btn-primary" onclick="closeClientServicesModal(); openBookingWizard('${srv.category}', '${srv.id}');" style="padding:10px 20px; font-size:12px; border-radius: 20px;">
                    Agendar
                </button>
            </div>
        `;
        container.appendChild(div);
    });
}

// --- FUNCIONALIDADES DE BLOQUEIO DE AGENDA ---
window.toggleLockHoursVisibility = function() {
    const lockTypeSelect = document.getElementById("lockTypeSelect");
    const lockHoursContainer = document.getElementById("lockHoursContainer");
    if (lockTypeSelect && lockHoursContainer) {
        if (lockTypeSelect.value === "custom") {
            lockHoursContainer.classList.remove("hidden");
        } else {
            lockHoursContainer.classList.add("hidden");
        }
    }
};

window.loadLockProSelectOptions = function() {
    const select = document.getElementById("lockProSelect");
    if (!select) return;
    
    // Manter a primeira opção de "Todo o Salão"
    select.innerHTML = '<option value="all">Todo o Salão (Todas as Especialistas)</option>';
    
    state.professionals.forEach(pro => {
        const option = document.createElement("option");
        option.value = pro.id;
        option.textContent = pro.name;
        select.appendChild(option);
    });
};

window.saveBlock = function() {
    const lockProSelect = document.getElementById("lockProSelect");
    const lockDate = document.getElementById("lockDate");
    const lockTypeSelect = document.getElementById("lockTypeSelect");
    const lockStartHour = document.getElementById("lockStartHour");
    const lockEndHour = document.getElementById("lockEndHour");
    
    if (!lockProSelect || !lockDate || !lockTypeSelect) return;
    
    const professionalId = lockProSelect.value;
    const date = lockDate.value;
    const timeType = lockTypeSelect.value;
    
    if (!date) {
        showToast("Por favor, selecione uma data para o bloqueio.", "error");
        return;
    }
    
    let startHour = "";
    let endHour = "";
    
    if (timeType === "custom") {
        if (!lockStartHour || !lockEndHour) return;
        startHour = lockStartHour.value;
        endHour = lockEndHour.value;
        
        // Validar se hora de término é posterior à de início
        if (startHour >= endHour) {
            showToast("O horário de término deve ser após o horário de início.", "error");
            return;
        }
    }
    
    const newLock = {
        id: `lock-${Date.now()}`,
        professionalId,
        date,
        timeType,
        startHour,
        endHour
    };
    
    state.locks.push(newLock);
    saveStateToLocalStorage();
    showToast("Bloqueio de agenda criado com sucesso!", "success");
    
    // Limpar form
    lockDate.value = "";
    lockTypeSelect.value = "all";
    toggleLockHoursVisibility();
    
    // Atualizar UI do admin
    renderAdminLocks();
};

window.deleteBlock = function(id) {
    if (confirm("Tem certeza que deseja remover este bloqueio de agenda?")) {
        state.locks = state.locks.filter(l => l.id !== id);
        saveStateToLocalStorage();
        renderAdminLocks();
        showToast("Bloqueio removido com sucesso.", "info");
    }
};

window.renderAdminLocks = function() {
    const tbody = document.getElementById("adminLocksTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";
    
    if (state.locks.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="4" style="text-align: center; color: var(--color-text-muted); padding: 20px;">
                    Nenhum bloqueio de agenda cadastrado.
                </td>
            </tr>
        `;
        return;
    }
    
    // Ordenar bloqueios por data recente
    const sortedLocks = [...state.locks].sort((a, b) => b.date.localeCompare(a.date));
    
    sortedLocks.forEach(l => {
        // Encontrar nome da profissional
        let proName = "Todo o Salão";
        if (l.professionalId !== "all") {
            const pro = state.professionals.find(p => p.id === l.professionalId);
            proName = pro ? pro.name : "Profissional Inexistente";
        }
        
        // Formatar período
        let periodStr = "Dia Inteiro";
        if (l.timeType === "custom") {
            periodStr = `${l.startHour} às ${l.endHour}`;
        }
        
        // Formatar data para DD/MM/AAAA
        const parts = l.date.split("-");
        const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
        
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${proName}</strong></td>
            <td>${formattedDate}</td>
            <td><span class="badge ${l.timeType === 'all' ? 'badge-danger' : 'badge-warning'}" style="background: ${l.timeType === 'all' ? 'rgba(220,53,69,0.1)' : 'rgba(255,193,7,0.1)'}; color: ${l.timeType === 'all' ? '#dc3545' : '#ffc107'}; font-size:11px; font-weight:600; padding:4px 8px; border-radius:4px;">${periodStr}</span></td>
            <td>
                <button class="btn btn-danger" onclick="deleteBlock('${l.id}')" style="padding: 6px 12px; font-size: 11px; background: transparent; border: 1px solid var(--color-danger); color: var(--color-danger); border-radius: 4px; cursor: pointer;">
                    <i class="fa-regular fa-trash-can"></i> Excluir
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
};

// --- FUNCIONALIDADES DE BACKUP & SEGURANÇA ---
window.exportSystemBackup = function() {
    try {
        const backupData = {
            services: state.services,
            professionals: state.professionals,
            bookings: state.bookings,
            gallery: state.gallery,
            locks: state.locks
        };
        
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `studio_fenix_backup_${new Date().toISOString().slice(0,10)}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        showToast("Backup baixado com sucesso!", "success");
    } catch (e) {
        showToast("Erro ao exportar backup.", "error");
        console.error(e);
    }
};

window.handleBackupRestoreSelect = function(input) {
    const displaySpan = document.getElementById("backupFileNameDisplay");
    const confirmBtn = document.getElementById("btnConfirmRestore");
    
    if (input.files && input.files[0]) {
        const file = input.files[0];
        if (displaySpan) {
            displaySpan.innerHTML = `<i class="fa-solid fa-file-circle-check" style="margin-right: 8px; color: var(--color-success);"></i>${file.name}`;
        }
        if (confirmBtn) {
            confirmBtn.removeAttribute("disabled");
            confirmBtn.style.opacity = "1";
            confirmBtn.style.cursor = "pointer";
        }
    } else {
        if (displaySpan) {
            displaySpan.innerHTML = `<i class="fa-regular fa-file-code" style="margin-right: 8px;"></i>Selecionar arquivo de backup...`;
        }
        if (confirmBtn) {
            confirmBtn.setAttribute("disabled", "true");
            confirmBtn.style.opacity = "0.5";
            confirmBtn.style.cursor = "not-allowed";
        }
    }
};

window.restoreSystemBackup = function() {
    const input = document.getElementById("backupRestoreInput");
    if (!input || !input.files || !input.files[0]) {
        showToast("Selecione um arquivo de backup primeiro.", "error");
        return;
    }
    
    if (!confirm("Atenção: A restauração substituirá todos os agendamentos, equipe, serviços e bloqueios atuais por completo. Deseja continuar?")) {
        return;
    }
    
    const file = input.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const parsed = JSON.parse(e.target.result);
            
            // Validação simples
            if (!parsed.services || !parsed.professionals || !parsed.bookings) {
                showToast("Arquivo de backup inválido. Chaves obrigatórias ausentes.", "error");
                return;
            }
            
            // Atualizar o state
            state.services = parsed.services;
            state.professionals = parsed.professionals;
            state.bookings = parsed.bookings;
            state.gallery = parsed.gallery || [];
            state.locks = parsed.locks || [];
            
            // Persistir
            saveStateToLocalStorage();
            
            // Re-renderizar tudo
            renderServiceCards();
            renderClientSpecialists();
            renderClientGallery();
            renderAdminDashboard();
            
            showToast("Backup restaurado com sucesso!", "success");
            
            // Resetar inputs
            input.value = "";
            const displaySpan = document.getElementById("backupFileNameDisplay");
            if (displaySpan) {
                displaySpan.innerHTML = `<i class="fa-regular fa-file-code" style="margin-right: 8px;"></i>Selecionar arquivo de backup...`;
            }
            const confirmBtn = document.getElementById("btnConfirmRestore");
            if (confirmBtn) {
                confirmBtn.setAttribute("disabled", "true");
                confirmBtn.style.opacity = "0.5";
                confirmBtn.style.cursor = "not-allowed";
            }
        } catch (err) {
            showToast("Erro ao processar arquivo JSON de backup.", "error");
            console.error(err);
        }
    };
    
    reader.readAsText(file);
};

// --- CONSULTA DE HISTÓRICO E FIDELIZAÇÃO DE CLIENTES ---
window.searchClientHistory = function() {
    const input = document.getElementById("clientHistorySearchInput");
    const container = document.getElementById("clientHistoryResultContainer");
    if (!input || !container) return;
    
    const query = input.value.trim().toLowerCase();
    if (!query) {
        container.innerHTML = `
            <div style="text-align: center; color: var(--color-text-muted); font-size: 13px;">
                <i class="fa-solid fa-magnifying-glass" style="font-size: 24px; margin-bottom: 8px; display: block; color: var(--color-gold);"></i>
                Digite o nome ou número de WhatsApp para consultar o perfil e histórico completo da cliente.
            </div>
        `;
        return;
    }
    
    // Filtrar agendamentos que contêm o nome ou telefone correspondentes
    const matches = state.bookings.filter(b => 
        (b.clientName && b.clientName.toLowerCase().includes(query)) ||
        (b.clientPhone && b.clientPhone.replace(/\D/g, '').includes(query.replace(/\D/g, '')))
    );
    
    if (matches.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; color: var(--color-text-muted); font-size: 13px;">
                <i class="fa-solid fa-face-frown" style="font-size: 24px; margin-bottom: 8px; display: block; color: var(--color-danger);"></i>
                Nenhuma cliente encontrada com os dados digitados.
            </div>
        `;
        return;
    }
    
    // Agrupar correspondências por cliente único
    const clientsMap = {};
    matches.forEach(b => {
        const key = (b.clientPhone || b.clientName).trim().toLowerCase();
        if (!clientsMap[key]) {
            clientsMap[key] = {
                name: b.clientName,
                phone: b.clientPhone,
                bookings: []
            };
        }
        clientsMap[key].bookings.push(b);
    });
    
    const clients = Object.values(clientsMap);
    
    if (clients.length > 1) {
        let html = `<h4 style="font-family: var(--font-heading); font-size: 14px; margin-bottom: 10px; color: var(--color-gold); font-weight:700;">Selecione a Cliente (${clients.length} encontradas):</h4>`;
        html += `<div style="display: flex; flex-direction: column; gap: 8px;">`;
        clients.forEach(c => {
            html += `
                <div style="padding: 10px 15px; background: var(--color-bg-primary); border: 1px solid rgba(42,36,33,0.05); border-radius: var(--radius-sm); display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: 0.2s;" 
                     onclick="renderClientHistoryDetails('${c.phone.replace(/'/g, "\\'")}', '${c.name.replace(/'/g, "\\'")}')"
                     onmouseover="this.style.borderColor='var(--color-gold)'" 
                     onmouseout="this.style.borderColor='rgba(42,36,33,0.05)'">
                    <div>
                        <strong style="color: var(--color-text-main); font-size:13.5px;">${c.name}</strong>
                        <span style="font-size: 12px; color: var(--color-text-muted); margin-left: 10px;">${c.phone}</span>
                    </div>
                    <span style="font-size: 11px; background: var(--color-gold-light); color: var(--color-gold); padding: 2px 8px; border-radius: 20px; font-weight:600;">
                        ${c.bookings.length} agendamento(s)
                    </span>
                </div>
            `;
        });
        html += `</div>`;
        container.innerHTML = html;
    } else {
        renderSingleClientHistoryDetails(clients[0]);
    }
};

window.renderClientHistoryDetails = function(phone, name) {
    const container = document.getElementById("clientHistoryResultContainer");
    if (!container) return;
    
    const clientBookings = state.bookings.filter(b => 
        (b.clientPhone && b.clientPhone === phone) || 
        (!b.clientPhone && b.clientName === name)
    );
    
    if (clientBookings.length === 0) return;
    
    renderSingleClientHistoryDetails({
        name: clientBookings[0].clientName,
        phone: clientBookings[0].clientPhone,
        bookings: clientBookings
    });
};

function renderSingleClientHistoryDetails(client) {
    const container = document.getElementById("clientHistoryResultContainer");
    if (!container) return;
    
    const bookings = client.bookings;
    const total = bookings.length;
    const completed = bookings.filter(b => b.status === "concluido").length;
    const confirmed = bookings.filter(b => b.status === "confirmado").length;
    const pending = bookings.filter(b => b.status === "pendente").length;
    const cancelled = bookings.filter(b => b.status === "cancelado").length;
    
    const spent = bookings
        .filter(b => b.status === "concluido" || b.status === "confirmado")
        .reduce((sum, b) => sum + (b.price || 0), 0);
        
    let loyaltyBadge = "Nova Cliente";
    let badgeStyle = "background: rgba(0,123,255,0.1); color: #007bff;";
    if (completed >= 5) {
        loyaltyBadge = "Cliente VIP Fênix";
        badgeStyle = "background: var(--color-gold-light); color: var(--color-gold); border: 1px solid var(--color-gold);";
    } else if (completed >= 2) {
        loyaltyBadge = "Cliente Frequente";
        badgeStyle = "background: rgba(40,167,69,0.1); color: #28a745;";
    }
    
    const pros = {};
    const services = {};
    bookings.forEach(b => {
        if (b.professionalName) pros[b.professionalName] = (pros[b.professionalName] || 0) + 1;
        if (b.serviceName) services[b.serviceName] = (services[b.serviceName] || 0) + 1;
    });
    
    const topPro = Object.keys(pros).reduce((a, b) => pros[a] > pros[b] ? a : b, "N/A");
    const topService = Object.keys(services).reduce((a, b) => services[a] > services[b] ? a : b, "N/A");
    
    let html = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 15px; border-bottom: 1px solid rgba(197, 160, 89, 0.15); padding-bottom: 12px; margin-bottom: 15px;">
            <div>
                <h3 style="font-family: var(--font-heading); font-size: 18px; margin: 0; color: var(--color-text-main); font-weight: 700;">
                    ${client.name}
                </h3>
                <span style="font-size: 13px; color: var(--color-text-muted);"><i class="fa-solid fa-phone" style="font-size:11px; margin-right:4px;"></i> ${client.phone}</span>
            </div>
            <span class="badge" style="font-size: 11px; font-weight: 700; padding: 6px 12px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px; ${badgeStyle}">
                <i class="fa-solid fa-crown" style="margin-right: 4px;"></i> ${loyaltyBadge}
            </span>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 12px; margin-bottom: 20px;">
            <div style="background: var(--color-bg-primary); padding: 12px; border-radius: var(--radius-sm); border: 1px solid rgba(42,36,33,0.03); text-align: center;">
                <span style="font-size: 11px; color: var(--color-text-muted); display: block; text-transform: uppercase; letter-spacing: 0.5px;">Agendamentos</span>
                <strong style="font-size: 20px; color: var(--color-text-main); display: block; margin-top: 4px;">${total}</strong>
            </div>
            <div style="background: var(--color-bg-primary); padding: 12px; border-radius: var(--radius-sm); border: 1px solid rgba(42,36,33,0.03); text-align: center;">
                <span style="font-size: 11px; color: var(--color-success); display: block; text-transform: uppercase; letter-spacing: 0.5px;">Concluídos</span>
                <strong style="font-size: 20px; color: var(--color-success); display: block; margin-top: 4px;">${completed}</strong>
            </div>
            <div style="background: var(--color-bg-primary); padding: 12px; border-radius: var(--radius-sm); border: 1px solid rgba(42,36,33,0.03); text-align: center;">
                <span style="font-size: 11px; color: var(--color-danger); display: block; text-transform: uppercase; letter-spacing: 0.5px;">Cancelados</span>
                <strong style="font-size: 20px; color: var(--color-danger); display: block; margin-top: 4px;">${cancelled}</strong>
            </div>
            <div style="background: var(--color-bg-primary); padding: 12px; border-radius: var(--radius-sm); border: 1px solid rgba(42,36,33,0.03); text-align: center;">
                <span style="font-size: 11px; color: var(--color-gold); display: block; text-transform: uppercase; letter-spacing: 0.5px;">Faturamento</span>
                <strong style="font-size: 20px; color: var(--color-gold); display: block; margin-top: 4px;">R$ ${spent.toFixed(2)}</strong>
            </div>
        </div>
        
        <div style="display: flex; gap: 20px; flex-wrap: wrap; margin-bottom: 20px; padding: 12px 15px; background: rgba(197, 160, 89, 0.04); border-radius: var(--radius-sm); font-size: 13px; color: var(--color-text-main);">
            <div><i class="fa-solid fa-star" style="color: var(--color-gold); margin-right: 4px;"></i> <strong>Serviço Favorito:</strong> ${topService}</div>
            <div><i class="fa-solid fa-heart" style="color: var(--color-rose); margin-right: 4px;"></i> <strong>Profissional Favorita:</strong> ${topPro}</div>
        </div>
        
        <h4 style="font-family: var(--font-heading); font-size: 14px; margin-bottom: 12px; color: var(--color-text-main); border-bottom: 1px solid rgba(42,36,33,0.05); padding-bottom: 6px;">Histórico de Visitas:</h4>
        <div style="max-height: 200px; overflow-y: auto; display: flex; flex-direction: column; gap: 8px; padding-right: 5px;">
    `;
    
    const sorted = [...bookings].sort((a, b) => {
        const da = `${a.date}T${a.time}`;
        const db = `${b.date}T${b.time}`;
        return db.localeCompare(da);
    });
    
    sorted.forEach(b => {
        const parts = b.date.split("-");
        const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
        
        let statusBadgeStyle = "background: rgba(255,193,7,0.1); color: #ffc107;";
        if (b.status === "concluido") statusBadgeStyle = "background: rgba(40,167,69,0.1); color: #28a745;";
        if (b.status === "confirmado") statusBadgeStyle = "background: rgba(0,123,255,0.1); color: #007bff;";
        if (b.status === "cancelado") statusBadgeStyle = "background: rgba(220,53,69,0.1); color: #dc3545;";
        
        html += `
            <div style="padding: 10px 15px; background: var(--color-bg-primary); border-left: 3px solid ${b.status === 'concluido' ? 'var(--color-success)' : b.status === 'cancelado' ? 'var(--color-danger)' : 'var(--color-gold)'}; border-radius: var(--radius-xs); display: flex; justify-content: space-between; align-items: center; font-size: 12.5px; gap: 10px;">
                <div>
                    <strong style="color: var(--color-text-main);">${b.serviceName}</strong>
                    <div style="color: var(--color-text-muted); font-size: 11.5px; margin-top: 2px;">
                        Com <strong>${b.professionalName}</strong> em ${formattedDate} às ${b.time}
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 10px; flex-shrink: 0;">
                    <span style="font-weight: 700; color: var(--color-text-main);">R$ ${(b.price || 0).toFixed(2)}</span>
                    <span style="font-size: 10px; font-weight:700; padding: 2px 8px; border-radius: 4px; text-transform: uppercase; ${statusBadgeStyle}">
                        ${b.status}
                    </span>
                </div>
            </div>
        `;
    });
    
    html += `</div>`;
    container.innerHTML = html;
}

// --- EXCLUSÃO DE AGENDAMENTOS ---
window.deleteBookingIndividual = function(id) {
    if (confirm("Tem certeza que deseja excluir este agendamento?")) {
        state.bookings = state.bookings.filter(b => b.id !== id);
        saveStateToLocalStorage();
        
        // Atualizar visualizações
        renderAdminBookingsTable();
        renderAdminDashboardMetrics();
        
        // Limpar busca de histórico se estiver aberta
        const historySearch = document.getElementById("clientHistorySearchInput");
        if (historySearch && historySearch.value.trim() !== "") {
            searchClientHistory();
        }
        
        showToast("Agendamento excluído com sucesso.", "info");
    }
};

window.deleteAllBookings = function() {
    if (confirm("ATENÇÃO: Tem certeza que deseja excluir TODOS os agendamentos cadastrados? Esta ação não pode ser desfeita.")) {
        state.bookings = [];
        saveStateToLocalStorage();
        
        // Atualizar visualizações
        renderAdminBookingsTable();
        renderAdminDashboardMetrics();
        
        // Limpar busca de histórico
        const historySearch = document.getElementById("clientHistorySearchInput");
        if (historySearch) historySearch.value = "";
        searchClientHistory();
        
        showToast("Todos os agendamentos foram excluídos.", "info");
    }
};

// --- ANIMAÇÕES DE SCROLL REVEAL (FADE IN UP) ---
function initScrollReveal() {
    const selectors = [
        ".hero-content", ".hero-image-wrapper", ".specialist-organic-card", 
        ".service-card", ".quick-card", ".testimonial-card", 
        ".btn-instagram", ".section-header", ".gallery-item"
    ];
    
    selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add("reveal-element");
        });
    });
    
    // Configurar o IntersectionObserver
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    };
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                revealObserver.unobserve(entry.target); // Para de observar após animar
            }
        });
    }, observerOptions);
    
    // Iniciar observação
    document.querySelectorAll(".reveal-element").forEach(el => {
        revealObserver.observe(el);
    });
}

