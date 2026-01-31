// Datos de ejemplo de propiedades
const propiedades = [
    {
        id: 1,
        titulo: "Moderna casa familiar con jardín",
        precio: 285000,
        habitaciones: 4,
        banos: 3,
        metros: 210,
        tipo: "casa",
        direccion: "Barrio Los Robles, Ciudad de México",
        imagen: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        estado: "nueva",
        fecha: "Hace 2 días"
    },
    {
        id: 2,
        titulo: "Lujoso apartamento en zona exclusiva",
        precio: 420000,
        habitaciones: 3,
        banos: 2,
        metros: 145,
        tipo: "apartamento",
        direccion: "Polanco, Ciudad de México",
        imagen: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        estado: "destacada",
        fecha: "Hace 5 horas"
    },
    {
        id: 3,
        titulo: "Casa minimalista con alberca",
        precio: 195000,
        habitaciones: 3,
        banos: 2,
        metros: 165,
        tipo: "casa",
        direccion: "Zapopan, Jalisco",
        imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        estado: "",
        fecha: "Hace 1 día"
    },
    {
        id: 4,
        titulo: "Penthouse con vista panorámica",
        precio: 680000,
        habitaciones: 4,
        banos: 4,
        metros: 280,
        tipo: "apartamento",
        direccion: "Santa Fe, Ciudad de México",
        imagen: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
        estado: "destacada",
        fecha: "Hace 3 días"
    },
    {
        id: 5,
        titulo: "Acogedora casa de campo",
        precio: 145000,
        habitaciones: 2,
        banos: 1,
        metros: 95,
        tipo: "casa",
        direccion: "Valle de Bravo, Estado de México",
        imagen: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
        estado: "nueva",
        fecha: "Hace 6 horas"
    },
    {
        id: 6,
        titulo: "Departamento cerca del mar",
        precio: 320000,
        habitaciones: 2,
        banos: 2,
        metros: 110,
        tipo: "apartamento",
        direccion: "Playa del Carmen, Quintana Roo",
        imagen: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop",
        estado: "",
        fecha: "Hace 4 días"
    }
];

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    renderizarPropiedades(propiedades);
    inicializarFiltros();
    inicializarTabs();
});

// Renderizar propiedades
function renderizarPropiedades(props) {
    const grid = document.getElementById('propertiesGrid');
    
    if (props.length === 0) {
        grid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 60px;">
                <p style="font-size: 18px; color: var(--text-light);">No se encontraron propiedades</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = props.map(prop => `
        <div class="property-card" onclick="verDetalle(${prop.id})">
            <div class="property-image">
                <img src="${prop.imagen}" alt="${prop.titulo}" loading="lazy">
                ${prop.estado ? `<span class="property-badge badge-${prop.estado}">${prop.estado === 'nueva' ? 'Nueva' : 'Destacada'}</span>` : ''}
                <button class="property-favorite" onclick="event.stopPropagation(); toggleFavorito(${prop.id})">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                </button>
            </div>
            <div class="property-info">
                <div class="property-price">$${prop.precio.toLocaleString()}</div>
                <div class="property-details">
                    <span>🛏️ ${prop.habitaciones}</span>
                    <span>🚿 ${prop.banos}</span>
                    <span>📐 ${prop.metros} m²</span>
                </div>
                <div class="property-address">${prop.direccion}</div>
                <div class="property-meta">
                    <span class="property-type">${prop.tipo}</span>
                    <span class="property-date">${prop.fecha}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Inicializar filtros
function inicializarFiltros() {
    const chips = document.querySelectorAll('.filter-chip');
    
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            // Quitar active de todos
            chips.forEach(c => c.classList.remove('active'));
            // Agregar active al clickeado
            chip.classList.add('active');
            
            // Filtrar propiedades
            const filtro = chip.textContent.toLowerCase();
            let filtradas = propiedades;
            
            if (filtro === 'casas') {
                filtradas = propiedades.filter(p => p.tipo === 'casa');
            } else if (filtro === 'apartamentos') {
                filtradas = propiedades.filter(p => p.tipo === 'apartamento');
            } else if (filtro === 'nuevas') {
                filtradas = propiedades.filter(p => p.estado === 'nueva');
            } else if (filtro === 'con descuento') {
                filtradas = propiedades.filter(p => p.precio < 200000);
            }
            
            renderizarPropiedades(filtradas);
        });
    });
}

// Inicializar tabs de búsqueda
function inicializarTabs() {
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
}

// Buscar propiedades
function buscarPropiedades() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const tipoPropiedad = document.getElementById('tipoPropiedad').value;
    const precioMax = document.getElementById('precioMax').value;
    
    let filtradas = propiedades;
    
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
    
    renderizarPropiedades(filtradas);
    
    // Scroll a resultados
    document.querySelector('.properties-section').scrollIntoView({ behavior: 'smooth' });
}

// Ver detalle de propiedad
function verDetalle(id) {
    const prop = propiedades.find(p => p.id === id);
    alert(`Detalle de propiedad: ${prop.titulo}\n\nPrecio: $${prop.precio.toLocaleString()}\nDirección: ${prop.direccion}\n\nEn el MVP completo, esto abriría una página de detalle.`);
}

// Toggle favorito
function toggleFavorito(id) {
    console.log('Propiedad', id, 'marcada como favorita');
    // Aquí se implementaría la lógica de favoritos
}

// Simular carga de más propiedades
document.querySelector('.btn-outline')?.addEventListener('click', function() {
    this.textContent = 'Cargando...';
    setTimeout(() => {
        this.textContent = 'Cargar más propiedades';
        alert('En el MVP completo, aquí cargaría más propiedades desde el servidor');
    }, 1000);
});

// Manejo de formulario de búsqueda
document.getElementById('searchInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        buscarPropiedades();
    }
});

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

// Ejecutar animación al cargar
window.addEventListener('load', animarEntrada);