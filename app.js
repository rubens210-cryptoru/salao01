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
        name: "Gabriela Becker",
        role: "Creative Director & Hair Stylist",
        category: "cabelos",
        photoUrl: "",
        bio: "Com mais de 10 anos de experiência em salões de alta costura, Gabriela é especialista em cortes visagistas e mechas de transição suave que realçam a iluminação natural dos fios com saúde e brilho incomparável."
    },
    {
        id: "prof-2",
        name: "Larissa Souza",
        role: "Nail Designer & Expert Sculptor",
        category: "unhas",
        photoUrl: "",
        bio: "Referência em alongamento de unhas em gel e fibra de vidro realista. Seu foco está em criar extensões com espessura ultrafina, curvatura anatômica perfeita e técnicas autorais de blindagem e esmaltação premium."
    },
    {
        id: "prof-3",
        name: "Fernanda Costa",
        role: "Master Lash Designer & Lash Artist",
        category: "cilios",
        photoUrl: "",
        bio: "Especialista em visagismo do olhar, Fernanda realiza extensões fio a fio clássico e volume russo sob medida com fios inteligentes de seda. Também é especialista em Lash Lifting reconstrutor de cílios naturais."
    },
    {
        id: "prof-4",
        name: "Camila Ribeiro",
        role: "Terapia Capilar & Escovas de Luxo",
        category: "cabelos",
        photoUrl: "",
        bio: "Especializada em cosmetologia e saúde do couro cabeludo, Camila desenha cronogramas capilares personalizados e realiza rituais de nutrição profunda, combinando cuidados terapêuticos e acabamento de alta sofisticação."
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
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
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
    
    state.services = JSON.parse(localStorage.getItem("amelie_services"));
    state.professionals = JSON.parse(localStorage.getItem("amelie_professionals"));
    state.bookings = JSON.parse(localStorage.getItem("amelie_bookings"));
    state.gallery = JSON.parse(localStorage.getItem("amelie_gallery"));
}

// Persistência em disco simulado (LocalStorage)
function saveStateToLocalStorage() {
    localStorage.setItem("amelie_services", JSON.stringify(state.services));
    localStorage.setItem("amelie_professionals", JSON.stringify(state.professionals));
    localStorage.setItem("amelie_bookings", JSON.stringify(state.bookings));
    localStorage.setItem("amelie_gallery", JSON.stringify(state.gallery));
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
                    <a href="#galeria" class="specialist-organic-gallery"><i class="fa-solid fa-camera"></i> veja a galeria</a>
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
}

// --- RENDERIZADORES DO PORTAL DO CLIENTE ---
function renderServiceCards() {
    const grid = document.getElementById("servicesGrid");
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
    const filterBtn = document.querySelector(`.filter-btn[data-category="${category}"]`);
    if (filterBtn) {
        filterBtn.click();
    }
};

// --- WIZARD DE AGENDAMENTO (PASSO A PASSO) ---
window.openBookingWizard = function(preSelectedCategory = "todos", preSelectedServiceId = null) {
    state.currentWizardStep = 1;
    state.selectedService = null;
    state.selectedProfessional = null;
    state.selectedDate = null;
    state.selectedTimeSlot = null;
    
    // Limpar campos de formulário
    document.getElementById("clientNameInput").value = "";
    document.getElementById("clientPhoneInput").value = "";
    document.getElementById("clientNotesInput").value = "";
    const termsCheckbox = document.getElementById("clientTermsCheckbox");
    if (termsCheckbox) termsCheckbox.checked = false;
    
    // Configura data padrão do calendário para o mês base (Junho 2026)
    state.currentCalendarDate = new Date(2026, 5, 2);
    
    // Atualizar UI dos passos e exibir modal
    updateWizardUI();
    document.getElementById("bookingWizardModal").classList.add("active");
    
    // Renderizar lista do Passo 1
    renderWizardServices(preSelectedCategory);
    
    // Se um serviço específico foi selecionado, marca-o
    if (preSelectedServiceId) {
        setTimeout(() => {
            const element = document.querySelector(`.wizard-service-option[data-id="${preSelectedServiceId}"]`);
            if (element) {
                element.click();
                goNextWizardStep(); // Avança automaticamente se o serviço já foi escolhido
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

// Passo 1: Serviços do Wizard
function renderWizardServices(categoryFilter = "todos") {
    const container = document.getElementById("wizardServicesContainer");
    container.innerHTML = "";
    
    // Filtrar serviços elegíveis
    const availableServices = state.services;
    
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
                <p>${srv.description.substring(0, 70)}...</p>
            </div>
            <div class="wizard-service-price-meta">
                <div class="wizard-service-price">R$ ${srv.price.toFixed(2)}</div>
                <div class="wizard-service-dur">${srv.duration} min</div>
            </div>
        `;
        
        option.addEventListener("click", () => {
            document.querySelectorAll(".wizard-service-option").forEach(el => el.classList.remove("selected"));
            option.classList.add("selected");
            state.selectedService = state.services.find(s => s.id === srv.id);
        });
        
        container.appendChild(option);
    });
}

// Passo 2: Profissionais baseados na categoria do serviço selecionado
function renderWizardProfessionals() {
    const container = document.getElementById("wizardProsContainer");
    container.innerHTML = "";
    
    if (!state.selectedService) return;
    
    // Filtra profissionais habilitados para a categoria do serviço
    const eligiblePros = state.professionals.filter(p => p.category === state.selectedService.category);
    
    eligiblePros.forEach(pro => {
        const card = document.createElement("div");
        card.className = "wizard-pro-card";
        card.dataset.id = pro.id;
        if (state.selectedProfessional && state.selectedProfessional.id === pro.id) {
            card.classList.add("selected");
        }
        
        // Iniciais para o avatar
        const initials = pro.name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
        
        card.innerHTML = `
            <div class="wizard-pro-avatar">${initials}</div>
            <h4 class="wizard-pro-name">${pro.name}</h4>
            <p class="wizard-pro-role">${pro.role}</p>
        `;
        
        card.addEventListener("click", () => {
            document.querySelectorAll(".wizard-pro-card").forEach(el => el.classList.remove("selected"));
            card.classList.add("selected");
            state.selectedProfessional = state.professionals.find(p => p.id === pro.id);
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
        
        // Bloquear datas no passado (antes de 02/06/2026) ou Domingos/Segundas (salão fechado)
        const isPast = dateObj < todaySimulated;
        const dayOfWeek = dateObj.getDay();
        const isClosed = dayOfWeek === 0 || dayOfWeek === 1; // 0 = Domingo, 1 = Segunda
        
        if (isPast || isClosed) {
            dayDiv.classList.add("disabled");
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
    
    // Encontrar horários já agendados para este profissional nesta data
    const bookedSlots = state.bookings
        .filter(b => b.date === state.selectedDate && b.professionalId === state.selectedProfessional.id && b.status !== "cancelado")
        .map(b => b.time);
        
    baseSlots.forEach(time => {
        const slotBtn = document.createElement("button");
        slotBtn.className = "slot-btn";
        slotBtn.textContent = time;
        
        const isBooked = bookedSlots.includes(time);
        
        if (isBooked) {
            slotBtn.classList.add("disabled");
            slotBtn.title = "Horário Ocupado";
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
        if (!state.selectedService) {
            showToast("Por favor, selecione o serviço desejado para prosseguir.", "error");
            return;
        }
        // Ao avançar do passo 1 pro 2, carrega especialistas
        renderWizardProfessionals();
    }
    
    else if (state.currentWizardStep === 2) {
        if (!state.selectedProfessional) {
            showToast("Por favor, selecione uma de nossas especialistas.", "error");
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
        
        if (!nameInput.checkValidity() || !phoneInput.checkValidity()) {
            showToast("Por favor, preencha todos os campos obrigatórios (*).", "error");
            return;
        }
        
        // Criar o agendamento real e persistir no State
        const finalBooking = createNewBooking(
            nameInput.value.trim(),
            phoneInput.value.trim(),
            notesInput.value.trim()
        );
        
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
        status: "confirmado", // Confirmado por padrão simulando aprovação imediata
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
    document.getElementById("ticketCodeDisplay").textContent = booking.id;
    document.getElementById("ticketService").textContent = booking.serviceName;
    document.getElementById("ticketPro").textContent = booking.professionalName;
    document.getElementById("ticketClient").textContent = booking.clientName;
    document.getElementById("ticketTime").textContent = booking.time;
    
    // Formatar data: AAAA-MM-DD para DD/MM/AAAA
    const parts = booking.date.split("-");
    const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
    document.getElementById("ticketDate").textContent = formattedDate;

    // Gerar link do WhatsApp para confirmação automática com dados formatados
    const message = `Olá Studio Fênix! Gostaria de confirmar meu agendamento:\n\n` +
                    `*Código:* ${booking.id}\n` +
                    `*Cliente:* ${booking.clientName}\n` +
                    `*Serviço:* ${booking.serviceName}\n` +
                    `*Especialista:* ${booking.professionalName}\n` +
                    `*Data:* ${formattedDate}\n` +
                    `*Horário:* ${booking.time}`;
                    
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "5511999998888"; // Número do salão
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
    
    const btnWhatsapp = document.getElementById("btnWhatsappConfirm");
    if (btnWhatsapp) {
        btnWhatsapp.href = whatsappUrl;
    }
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
}

// 1. ABA 1: MÉTRICAS, RANKING E GRÁFICOS SVG
function renderAdminDashboardMetrics() {
    const activeBookings = state.bookings.filter(b => b.status !== "cancelado");
    
    // Total de Agendados
    document.getElementById("valTotalBookings").textContent = activeBookings.length;
    
    // Total de Serviços Activos
    document.getElementById("valTotalServices").textContent = state.services.length;
    
    // Total de Profissionais
    document.getElementById("valTotalPros").textContent = state.professionals.length;
    
    // Faturamento Mensal (Somatório de Preços)
    const revenue = activeBookings.reduce((sum, b) => sum + b.price, 0);
    document.getElementById("valRevenue").textContent = `R$ ${revenue.toFixed(2)}`;
    
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
        
        tr.innerHTML = `
            <td><strong>${booking.id}</strong></td>
            <td>
                <div><strong>${booking.clientName}</strong></div>
                <div style="font-size: 11px; color: var(--color-text-muted);">${booking.clientPhone}</div>
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
            <td><span class="status-badge ${booking.status}">${booking.status}</span></td>
            <td>
                <div class="table-actions">
                    ${booking.status === "pendente" ? `
                        <button class="action-icon-btn confirm" onclick="changeBookingStatus('${booking.id}', 'confirmado')" title="Confirmar Agendamento">
                            <i class="fa-solid fa-calendar-check"></i>
                        </button>
                    ` : ""}
                    ${booking.status !== "concluido" && booking.status !== "cancelado" ? `
                        <button class="action-icon-btn done" onclick="changeBookingStatus('${booking.id}', 'concluido')" title="Marcar como Concluído">
                            <i class="fa-solid fa-circle-check"></i>
                        </button>
                        <button class="action-icon-btn cancel" onclick="changeBookingStatus('${booking.id}', 'cancelado')" title="Cancelar Agendamento">
                            <i class="fa-solid fa-ban"></i>
                        </button>
                    ` : ""}
                    ${booking.status === "concluido" || booking.status === "cancelado" ? `
                        <span style="color:var(--color-text-muted); font-size:11px;">Sem ações</span>
                    ` : ""}
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
            showToast("Profissional atualizada!", "success");
        }
    } else {
        // Criando Novo
        const newId = `prof-${Date.now()}`;
        state.professionals.push({ id: newId, name, category, role, photoUrl, bio });
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
