// Datos de ejemplo de propiedades - Medellín, Colombia
const propiedadesDB = [
    {
        id: 1,
        titulo: "Moderna casa familiar con jardín",
        precio: 850000000,
        habitaciones: 4,
        banos: 3,
        metros: 210,
        tipo: "casa",
        direccion: "El Poblado, Medellín",
        imagen: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        estado: "nueva",
        fecha: "Hace 2 días",
        descripcion: "Hermosa casa familiar con amplio jardín, perfecta para familias grandes. Cerca de colegios y centros comerciales.",
        agente: "Carlos Martínez",
        telefono: "+57 300 123 4567",
        email: "carlos@propiedades.com"
    },
    {
        id: 2,
        titulo: "Lujoso apartamento en zona exclusiva",
        precio: 1200000000,
        habitaciones: 3,
        banos: 2,
        metros: 145,
        tipo: "apartamento",
        direccion: "Castropol, Medellín",
        imagen: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        estado: "destacada",
        fecha: "Hace 5 horas",
        descripcion: "Apartamento de lujo con vista panorámica a la ciudad. Acabados de alta calidad y amenities premium.",
        agente: "María González",
        telefono: "+57 310 234 5678",
        email: "maria@propiedades.com"
    },
    {
        id: 3,
        titulo: "Casa minimalista con piscina",
        precio: 650000000,
        habitaciones: 3,
        banos: 2,
        metros: 165,
        tipo: "casa",
        direccion: "Envigado, Antioquia",
        imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        estado: "",
        fecha: "Hace 1 día",
        descripcion: "Diseño minimalista con piscina privada. Ideal para quienes buscan tranquilidad cerca de la ciudad.",
        agente: "Andrés López",
        telefono: "+57 320 345 6789",
        email: "andres@propiedades.com"
    },
    {
        id: 4,
        titulo: "Penthouse con vista panorámica",
        precio: 2100000000,
        habitaciones: 4,
        banos: 4,
        metros: 280,
        tipo: "apartamento",
        direccion: "Las Palmas, Medellín",
        imagen: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
        estado: "destacada",
        fecha: "Hace 3 días",
        descripcion: "Espectacular penthouse con 360° de vista. Terraza privada, jacuzzi y acabados de lujo.",
        agente: "Laura Rodríguez",
        telefono: "+57 315 456 7890",
        email: "laura@propiedades.com"
    },
    {
        id: 5,
        titulo: "Acogedora casa campestre",
        precio: 480000000,
        habitaciones: 2,
        banos: 1,
        metros: 95,
        tipo: "casa",
        direccion: "Santa Elena, Medellín",
        imagen: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
        estado: "nueva",
        fecha: "Hace 6 horas",
        descripcion: "Casa campestre con ambiente familiar. Perfecta para fines de semana o vivir rodeado de naturaleza.",
        agente: "Pedro Sánchez",
        telefono: "+57 318 567 8901",
        email: "pedro@propiedades.com"
    },
    {
        id: 6,
        titulo: "Apartamento con vista a la ciudad",
        precio: 920000000,
        habitaciones: 2,
        banos: 2,
        metros: 110,
        tipo: "apartamento",
        direccion: "Laureles, Medellín",
        imagen: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop",
        estado: "",
        fecha: "Hace 4 días",
        descripcion: "Moderno apartamento en zona exclusiva de Laureles. Cerca de restaurantes y parques.",
        agente: "Ana María Jiménez",
        telefono: "+57 319 678 9012",
        email: "ana@propiedades.com"
    }
];

// Estado global
let propiedades = [...propiedadesDB];
let propiedadesMostradas = 6;
let favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
let tabActivo = 'venta';

// Formatear precio en pesos colombianos
function formatPrecioCOP(precio) {
    return '$' + precio.toLocaleString('es-CO', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    renderizarPropiedades(propiedades.slice(0, propiedadesMostradas));
    actualizarContadorResultados();
    inicializarFiltros();
    inicializarTabs();
});

// Renderizar propiedades
function renderizarPropiedades(props) {
    const grid = document.getElementById('propertiesGrid');
    
    if (props.length === 0) {
        grid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 60px;">
                <p style="font-size: 18px; color: var(--text-light); margin-bottom: 16px;">No se encontraron propiedades</p>
                <button class="btn btn-primary" onclick="resetearFiltros()">Ver todas las propiedades</button>
            </div>
        `;
        document.getElementById('loadMoreContainer').style.display = 'none';
        return;
    }
    
    grid.innerHTML = props.map(prop => {
        const esFavorito = favoritos.includes(prop.id);
        return `
        <div class="property-card" onclick="verDetalle(${prop.id})">
            <div class="property-image">
                <img src="${prop.imagen}" alt="${prop.titulo}" loading="lazy">
                ${prop.estado ? `<span class="property-badge badge-${prop.estado}">${prop.estado === 'nueva' ? 'Nueva' : 'Destacada'}</span>` : ''}
                <button class="property-favorite ${esFavorito ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorito(${prop.id}, this)" title="${esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="${esFavorito ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                </button>
            </div>
            <div class="property-info">
                <div class="property-price">${formatPrecioCOP(prop.precio)}</div>
                <div class="property-details">
                    <span title="${prop.habitaciones} habitaciones">🛏️ ${prop.habitaciones}</span>
                    <span title="${prop.banos} baños">🚿 ${prop.banos}</span>
                    <span title="${prop.metros} metros cuadrados">📐 ${prop.metros} m²</span>
                </div>
                <div class="property-address">${prop.direccion}</div>
                <div class="property-meta">
                    <span class="property-type">${prop.tipo}</span>
                    <span class="property-date">${prop.fecha}</span>
                </div>
            </div>
        </div>
    `}).join('');
    
    // Actualizar visibilidad de botón "cargar más"
    const hayMas = propiedadesMostradas < propiedades.length;
    document.getElementById('loadMoreContainer').style.display = hayMas ? 'block' : 'none';
    document.getElementById('noMoreResults').style.display = hayMas ? 'none' : 'block';
    
    animarEntrada();
}

// Actualizar contador de resultados
function actualizarContadorResultados() {
    const count = document.getElementById('resultadosCount');
    if (count) {
        count.textContent = `${propiedades.length} propiedades encontradas`;
    }
}

// Inicializar filtros
function inicializarFiltros() {
    // Los filtros ahora usan onclick en HTML
}

// Filtrar por categoría
function filtrarPor(categoria) {
    // Actualizar UI de chips
    const chips = document.querySelectorAll('.filter-chip');
    chips.forEach(c => c.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filtrar propiedades
    let filtradas = propiedadesDB;
    
    if (categoria === 'casa') {
        filtradas = propiedadesDB.filter(p => p.tipo === 'casa');
        document.getElementById('tituloResultados').textContent = 'Casas en venta';
    } else if (categoria === 'apartamento') {
        filtradas = propiedadesDB.filter(p => p.tipo === 'apartamento');
        document.getElementById('tituloResultados').textContent = 'Apartamentos en venta';
    } else if (categoria === 'nueva') {
        filtradas = propiedadesDB.filter(p => p.estado === 'nueva');
        document.getElementById('tituloResultados').textContent = 'Propiedades nuevas';
    } else if (categoria === 'descuento') {
        filtradas = propiedadesDB.filter(p => p.precio < 600000000);
        document.getElementById('tituloResultados').textContent = 'Propiedades con descuento';
    } else {
        document.getElementById('tituloResultados').textContent = 'Propiedades destacadas';
    }
    
    propiedades = filtradas;
    propiedadesMostradas = 6;
    renderizarPropiedades(propiedades.slice(0, propiedadesMostradas));
    actualizarContadorResultados();
}

// Resetear filtros
function resetearFiltros() {
    propiedades = [...propiedadesDB];
    propiedadesMostradas = 6;
    renderizarPropiedades(propiedades.slice(0, propiedadesMostradas));
    actualizarContadorResultados();
    
    // Resetear chips
    const chips = document.querySelectorAll('.filter-chip');
    chips.forEach(c => c.classList.remove('active'));
    chips[0].classList.add('active');
    
    document.getElementById('tituloResultados').textContent = 'Propiedades destacadas';
}

// Inicializar tabs
function inicializarTabs() {
    // Tabs ahora usan onclick en HTML
}

// Cambiar tab
function cambiarTab(tab) {
    tabActivo = tab;
    
    // Actualizar UI
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    
    if (tab === 'alquiler') {
        mostrarToast('Próximamente: Propiedades en alquiler', 'info');
        // Por ahora mostrar mensaje de próximamente
        document.getElementById('propertiesGrid').innerHTML = `
            <div class="coming-soon" style="grid-column: 1/-1; text-align: center; padding: 60px;">
                <div style="font-size: 48px; margin-bottom: 16px;">🏗️</div>
                <h3 style="margin-bottom: 8px;">Próximamente</h3>
                <p style="color: var(--text-light);">Estamos trabajando en la sección de alquileres.<br>Vuelve pronto para descubrir las mejores opciones.</p>
                <button class="btn btn-primary" style="margin-top: 16px;" onclick="cambiarTabVenta()">Ver propiedades en venta</button>
            </div>
        `;
        document.getElementById('loadMoreContainer').style.display = 'none';
        document.getElementById('tituloResultados').textContent = 'Alquileres - Próximamente';
        document.getElementById('resultadosCount').textContent = '';
    } else {
        resetearFiltros();
    }
}

function cambiarTabVenta() {
    const tabVenta = document.querySelector('[data-tab="venta"]');
    if (tabVenta) {
        tabVenta.click();
    }
    resetearFiltros();
}

// Buscar propiedades
function buscarPropiedades() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const tipoPropiedad = document.getElementById('tipoPropiedad').value;
    const precioMax = document.getElementById('precioMax').value;
    
    let filtradas = propiedadesDB;
    
    // Filtro por texto
    if (searchInput) {
        filtradas = filtradas.filter(p => 
            p.titulo.toLowerCase().includes(searchInput) ||
            p.direccion.toLowerCase().includes(searchInput)
        );
    }
    
    // Filtro por tipo
    if (tipoPropiedad) {
        filtradas = filtradas.filter(p => p.tipo === tipoPropiedad);
    }
    
    // Filtro por precio
    if (precioMax) {
        filtradas = filtradas.filter(p => p.precio <= parseInt(precioMax));
    }
    
    propiedades = filtradas;
    propiedadesMostradas = 6;
    renderizarPropiedades(propiedades.slice(0, propiedadesMostradas));
    actualizarContadorResultados();
    
    // Scroll a resultados
    document.querySelector('.properties-section').scrollIntoView({ behavior: 'smooth' });
    
    // Actualizar título
    if (searchInput || tipoPropiedad || precioMax) {
        document.getElementById('tituloResultados').textContent = 'Resultados de búsqueda';
    }
}

// Cargar más propiedades
function cargarMas() {
    const btn = event.target;
    btn.textContent = 'Cargando...';
    btn.disabled = true;
    
    setTimeout(() => {
        propiedadesMostradas += 3;
        renderizarPropiedades(propiedades.slice(0, propiedadesMostradas));
        btn.textContent = 'Cargar más propiedades';
        btn.disabled = false;
    }, 800);
}

// Ver detalle de propiedad
function verDetalle(id) {
    const prop = propiedadesDB.find(p => p.id === id);
    const esFavorito = favoritos.includes(prop.id);
    
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="property-detail">
            <div class="detail-image">
                <img src="${prop.imagen}" alt="${prop.titulo}">
                ${prop.estado ? `<span class="property-badge badge-${prop.estado}">${prop.estado === 'nueva' ? 'Nueva' : 'Destacada'}</span>` : ''}
            </div>
            <div class="detail-info">
                <h2>${prop.titulo}</h2>
                <div class="detail-price">${formatPrecioCOP(prop.precio)}</div>
                <div class="detail-address">📍 ${prop.direccion}</div>
                <div class="detail-features">
                    <span>🛏️ ${prop.habitaciones} Habitaciones</span>
                    <span>🚿 ${prop.banos} Baños</span>
                    <span>📐 ${prop.metros} m²</span>
                </div>
                <div class="detail-description">
                    <h4>Descripción</h4>
                    <p>${prop.descripcion}</p>
                </div>
                <div class="detail-agent">
                    <h4>Agente de contacto</h4>
                    <p><strong>${prop.agente}</strong></p>
                    <p>📞 ${prop.telefono}</p>
                    <p>✉️ ${prop.email}</p>
                </div>
                <div class="detail-actions">
                    <button class="btn btn-primary btn-large" onclick="contactarAgente(${prop.id})">Contactar agente</button>
                    <button class="btn btn-outline" onclick="toggleFavorito(${prop.id}); cerrarModal(); mostrarToast('${esFavorito ? 'Eliminado de favoritos' : 'Agregado a favoritos'}', '${esFavorito ? 'info' : 'success'}')">
                        ${esFavorito ? '❤️ Quitar de favoritos' : '🤍 Agregar a favoritos'}
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Contactar agente
function contactarAgente(id) {
    const prop = propiedadesDB.find(p => p.id === id);
    mostrarToast(`Contactando a ${prop.agente}...`, 'success');
    setTimeout(() => {
        alert(`¡Gracias por tu interés!\n\nEl agente ${prop.agente} se pondrá en contacto contigo pronto.\n\nTeléfono: ${prop.telefono}\nEmail: ${prop.email}`);
    }, 500);
}

// Toggle favorito
function toggleFavorito(id, btnElement) {
    const index = favoritos.indexOf(id);
    
    if (index > -1) {
        favoritos.splice(index, 1);
        mostrarToast('Eliminado de favoritos', 'info');
        if (btnElement) {
            btnElement.classList.remove('active');
            btnElement.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
            `;
            btnElement.title = 'Agregar a favoritos';
        }
    } else {
        favoritos.push(id);
        mostrarToast('Agregado a favoritos ❤️', 'success');
        if (btnElement) {
            btnElement.classList.add('active');
            btnElement.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
            `;
            btnElement.title = 'Quitar de favoritos';
        }
    }
    
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

// Modales y UI
function mostrarLogin() {
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="auth-form">
            <h2>Iniciar sesión</h2>
            <p>Accede a tu cuenta para guardar favoritos y recibir alertas</p>
            <form onsubmit="event.preventDefault(); login();">
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="tu@email.com" required>
                </div>
                <div class="form-group">
                    <label>Contraseña</label>
                    <input type="password" placeholder="••••••••" required>
                </div>
                <button type="submit" class="btn btn-primary btn-large" style="width: 100%;">Iniciar sesión</button>
            </form>
            <p class="form-footer">¿No tienes cuenta? <a href="#" onclick="mostrarRegistro(); return false;">Regístrate</a></p>
        </div>
    `;
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function login() {
    mostrarToast('¡Bienvenido! Sesión iniciada correctamente', 'success');
    cerrarModal();
}

function mostrarRegistro() {
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="auth-form">
            <h2>Crear cuenta</h2>
            <p>Regístrate para acceder a todas las funcionalidades</p>
            <form onsubmit="event.preventDefault(); registro();">
                <div class="form-group">
                    <label>Nombre completo</label>
                    <input type="text" placeholder="Tu nombre" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="tu@email.com" required>
                </div>
                <div class="form-group">
                    <label>Contraseña</label>
                    <input type="password" placeholder="••••••••" required>
                </div>
                <button type="submit" class="btn btn-primary btn-large" style="width: 100%;">Crear cuenta</button>
            </form>
            <p class="form-footer">¿Ya tienes cuenta? <a href="#" onclick="mostrarLogin(); return false;">Inicia sesión</a></p>
        </div>
    `;
}

function registro() {
    mostrarToast('¡Cuenta creada! Bienvenido a Propiedades', 'success');
    cerrarModal();
}

function mostrarPublicar() {
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="publish-form">
            <h2>Publicar propiedad</h2>
            <p>Llena los datos de tu propiedad para publicarla</p>
            <form onsubmit="event.preventDefault(); publicar();">
                <div class="form-group">
                    <label>Título de la propiedad</label>
                    <input type="text" placeholder="Ej: Casa moderna en El Poblado" required>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Tipo</label>
                        <select required>
                            <option value="">Seleccionar</option>
                            <option value="casa">Casa</option>
                            <option value="apartamento">Apartamento</option>
                            <option value="local">Local comercial</option>
                            <option value="terreno">Terreno</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Precio (COP)</label>
                        <input type="number" placeholder="850000000" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Habitaciones</label>
                        <input type="number" min="0" placeholder="3">
                    </div>
                    <div class="form-group">
                        <label>Baños</label>
                        <input type="number" min="0" placeholder="2">
                    </div>
                    <div class="form-group">
                        <label>Metros²</label>
                        <input type="number" min="0" placeholder="150">
                    </div>
                </div>
                <div class="form-group">
                    <label>Dirección</label>
                    <input type="text" placeholder="Barrio, Medellín" required>
                </div>
                <div class="form-group">
                    <label>Descripción</label>
                    <textarea rows="3" placeholder="Describe tu propiedad..."></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-large" style="width: 100%;">Publicar propiedad</button>
            </form>
        </div>
    `;
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function publicar() {
    mostrarToast('¡Propiedad publicada exitosamente!', 'success');
    setTimeout(() => {
        cerrarModal();
        mostrarToast('Tu propiedad será revisada y publicada en breve', 'info');
    }, 1000);
}

function mostrarAgentes(event) {
    if (event) event.preventDefault();
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="agents-list">
            <h2>Nuestros agentes</h2>
            <p>Agentes verificados en Medellín</p>
            <div class="agents-grid">
                ${propiedadesDB.slice(0, 3).map((p, i) => `
                    <div class="agent-card">
                        <div class="agent-avatar">👤</div>
                        <h4>${p.agente}</h4>
                        <p>📞 ${p.telefono}</p>
                        <button class="btn btn-outline" onclick="contactarAgente(${p.id})">Contactar</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function mostrarVender(event) {
    if (event) event.preventDefault();
    document.querySelector('.cta-section').scrollIntoView({ behavior: 'smooth' });
}

function mostrarProximamente(event) {
    if (event) event.preventDefault();
    mostrarToast('Próximamente disponible', 'info');
}

function cerrarModal(event) {
    if (event && event.target !== document.getElementById('modalOverlay')) return;
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// Toast notifications
function mostrarToast(mensaje, tipo = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${tipo}`;
    toast.textContent = mensaje;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            container.removeChild(toast);
        }, 300);
    }, 3000);
}

// Animación de entrada para propiedades
function animarEntrada() {
    const cards = document.querySelectorAll('.property-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Manejo de formulario de búsqueda
document.getElementById('searchInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        buscarPropiedades();
    }
});