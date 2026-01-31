// Datos de propiedades (mismo que app.js)
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
        coordenadas: { lat: 6.2088, lng: -75.5677 },
        imagen: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        imagenes: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop"
        ],
        estado: "nueva",
        fecha: "Hace 2 días",
        descripcion: "Hermosa casa familiar con amplio jardín, perfecta para familias grandes. Cerca de colegios y centros comerciales. Cuenta con espacios amplios, iluminación natural y acabados de alta calidad. La casa cuenta con 4 habitaciones amplias, 3 baños completos, sala comedor integrado, cocina moderna con isla, zona de lavandería independiente y un hermoso jardín trasero ideal para reuniones familiares.",
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
        coordenadas: { lat: 6.2054, lng: -75.5631 },
        imagen: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        imagenes: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&h=800&fit=crop"
        ],
        estado: "destacada",
        fecha: "Hace 5 horas",
        descripcion: "Apartamento de lujo con vista panorámica a la ciudad. Acabados de alta calidad y amenities premium. Cocina integral, walk-in closet y balcón privado. El edificio cuenta con gimnasio, piscina, sauna y zona de BBQ.",
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
        coordenadas: { lat: 6.1743, lng: -75.5889 },
        imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        imagenes: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1572331165267-854da2b00df6?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
        ],
        estado: "",
        fecha: "Hace 1 día",
        descripcion: "Diseño minimalista con piscina privada. Ideal para quienes buscan tranquilidad cerca de la ciudad. Jardín zen y área de BBQ. La casa tiene amplios ventanales que permiten la entrada de luz natural durante todo el día.",
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
        coordenadas: { lat: 6.2208, lng: -75.5742 },
        imagen: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
        imagenes: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&h=800&fit=crop"
        ],
        estado: "destacada",
        fecha: "Hace 3 días",
        descripcion: "Espectacular penthouse con 360° de vista. Terraza privada, jacuzzi y acabados de lujo. El apartamento más exclusivo de la ciudad. Incluye 2 parqueaderos privados, cuarto de servicio con baño y bodega.",
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
        coordenadas: { lat: 6.2106, lng: -75.4953 },
        imagen: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
        imagenes: [
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=1200&h=800&fit=crop"
        ],
        estado: "nueva",
        fecha: "Hace 6 horas",
        descripcion: "Casa campestre con ambiente familiar. Perfecta para fines de semana o vivir rodeado de naturaleza. Huerta orgánica y zona de fogata. A solo 30 minutos del centro de Medellín.",
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
        coordenadas: { lat: 6.2452, lng: -75.5917 },
        imagen: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop",
        imagenes: [
            "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&h=800&fit=crop"
        ],
        estado: "",
        fecha: "Hace 4 días",
        descripcion: "Moderno apartamento en zona exclusiva de Laureles. Cerca de restaurantes y parques. Perfecto para parejas jóvenes. El edificio tiene terraza común y zona de coworking.",
        agente: "Ana María Jiménez",
        telefono: "+57 319 678 9012",
        email: "ana@propiedades.com"
    }
];

let favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
let currentImageIndex = 0;
let currentProperty = null;

// Formatear precio
function formatPrecioCOP(precio) {
    return '$' + precio.toLocaleString('es-CO', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}

// Inicializar
 document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = parseInt(urlParams.get('id'));
    
    currentProperty = propiedadesDB.find(p => p.id === propertyId);
    
    if (!currentProperty) {
        document.getElementById('propertyDetail').innerHTML = `
            <div class="container" style="padding: 100px 20px; text-align: center;">
                <h2>Propiedad no encontrada</h2>
                <p>La propiedad que buscas no existe o ha sido eliminada.</p>
                <a href="index.html" class="btn btn-primary" style="margin-top: 20px;">Ver todas las propiedades</a>
            </div>
        `;
        return;
    }
    
    renderPropertyDetail();
});

// Renderizar detalle de propiedad
function renderPropertyDetail() {
    const prop = currentProperty;
    const esFavorito = favoritos.includes(prop.id);
    
    const mainImage = prop.imagenes[0];
    const thumbnails = prop.imagenes.slice(1);
    
    document.getElementById('propertyDetail').innerHTML = `
        <div class="container">
            <!-- Breadcrumb -->
            <nav class="breadcrumb">
                <a href="index.html">Inicio</a>
                <span>/</span>
                <a href="index.html">${prop.tipo === 'casa' ? 'Casas' : 'Apartamentos'}</a>
                <span>/</span>
                <span>${prop.titulo}</span>
            </nav>
            
            <!-- Header Info -->
            <div class="property-header">
                <div class="property-title-section">
                    <h1>${prop.titulo}</h1>
                    <p class="property-address-large">📍 ${prop.direccion}</p>
                </div>
                <div class="property-actions-header">
                    <button class="btn btn-favorite ${esFavorito ? 'active' : ''}" onclick="toggleFavorito()">
                        ${esFavorito ? '❤️' : '🤍'} ${esFavorito ? 'Guardado' : 'Guardar'}
                    </button>
                    <button class="btn btn-share" onclick="compartir()">
                        📤 Compartir
                    </button>
                </div>
            </div>
            
            <!-- Photo Gallery -->
            <div class="photo-gallery">
                <div class="main-photo-container">
                    <img id="mainPhoto" src="${mainImage}" alt="${prop.titulo}">
                    ${prop.estado ? `<span class="gallery-badge badge-${prop.estado}">${prop.estado === 'nueva' ? 'Nueva' : 'Destacada'}</span>` : ''}
                    <button class="gallery-nav prev" onclick="changeImage(-1)">‹</button>
                    <button class="gallery-nav next" onclick="changeImage(1)">›</button>
                    <div class="photo-counter">
                        <span id="currentPhoto">1</span> / <span id="totalPhotos">${prop.imagenes.length}</span>
                    </div>
                </div>
                
                <div class="thumbnails-grid">
                    ${prop.imagenes.map((img, idx) => `
                        <div class="thumbnail ${idx === 0 ? 'active' : ''}" onclick="setMainImage(${idx})">
                            <img src="${img}" alt="Foto ${idx + 1}">
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Property Info Grid -->
            <div class="property-info-grid">
                <div class="property-main-info">
                    <!-- Price -->
                    <div class="price-section">
                        <div class="main-price">${formatPrecioCOP(prop.precio)}</div>
                        <div class="price-per-meter">${formatPrecioCOP(Math.round(prop.precio / prop.metros))} / m²</div>
                    </div>
                    
                    <!-- Quick Stats -->
                    <div class="quick-stats">
                        <div class="stat-box">
                            <span class="stat-value">${prop.habitaciones}</span>
                            <span class="stat-label">Habitaciones</span>
                        </div>
                        <div class="stat-box">
                            <span class="stat-value">${prop.banos}</span>
                            <span class="stat-label">Baños</span>
                        </div>
                        <div class="stat-box">
                            <span class="stat-value">${prop.metros}</span>
                            <span class="stat-label">m² construidos</span>
                        </div>
                        <div class="stat-box">
                            <span class="stat-value">${prop.tipo === 'casa' ? 'Casa' : 'Apto'}</span>
                            <span class="stat-label">Tipo</span>
                        </div>
                    </div>
                    
                    <!-- Description -->
                    <div class="description-section">
                        <h2>Descripción</h2>
                        <p>${prop.descripcion}</p>
                    </div>
                    
                    <!-- Features -->
                    <div class="features-section">
                        <h2>Características</h2>
                        <div class="features-list">
                            <div class="feature-item">✓ ${prop.habitaciones} Habitaciones</div>
                            <div class="feature-item">✓ ${prop.banos} Baños</div>
                            <div class="feature-item">✓ ${prop.metros} m² totales</div>
                            <div class="feature-item">✓ ${prop.tipo === 'casa' ? 'Casa' : 'Apartamento'}</div>
                            <div class="feature-item">✓ Iluminación natural</div>
                            <div class="feature-item">✓ Excelente ubicación</div>
                        </div>
                    </div>
                    
                    <!-- Location -->
                    <div class="location-section">
                        <h2>Ubicación</h2>
                        <p>📍 ${prop.direccion}</p>
                        <div class="google-map-container">
                            <iframe 
                                width="100%" 
                                height="400" 
                                style="border:0; border-radius: 12px;" 
                                loading="lazy" 
                                allowfullscreen 
                                referrerpolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.~ !3d${prop.coordenadas.lat}!4d${prop.coordenadas.lng}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMzEuNyJOIDc1wrAzNCcwMy43Ilc!5e0!3m2!1ses!2sco!4v1706680000000!5m2!1ses!2sco">
                            </iframe>
                        </div>
                        <div class="map-actions">
                            <a href="https://www.google.com/maps/search/?api=1&query=${prop.coordenadas.lat},${prop.coordenadas.lng}" 
                               target="_blank" 
                               class="btn btn-outline">
                                📍 Ver en Google Maps
                            </a>
                            <a href="https://www.waze.com/ul?ll=${prop.coordenadas.lat},${prop.coordenadas.lng}&navigate=yes" 
                               target="_blank" 
                               class="btn btn-outline">
                               🚗 Abrir en Waze
                            </a>
                        </div>
                    </div>
                </div>
                
                <!-- Contact Card (Sticky) -->
                <div class="contact-card-container">
                    <div class="contact-card">
                        <div class="contact-header">
                            <div class="agent-avatar-large">👤</div>
                            <div class="agent-info">
                                <h3>${prop.agente}</h3>
                                <p>Agente verificado</p>
                            </div>
                        </div>
                        
                        <div class="contact-price">
                            <span class="label">Precio</span>
                            <span class="value">${formatPrecioCOP(prop.precio)}</span>
                        </div>
                        
                        <div class="contact-buttons">
                            <a href="https://wa.me/${prop.telefono.replace(/\D/g, '')}" class="btn btn-whatsapp" target="_blank">
                                💬 WhatsApp
                            </a>
                            <a href="tel:${prop.telefono}" class="btn btn-phone">
                                📞 Llamar
                            </a>
                            <button class="btn btn-email" onclick="mostrarEmailForm()">
                                ✉️ Email
                            </button>
                        </div>
                        
                        <div class="contact-details">
                            <p><strong>Tel:</strong> ${prop.telefono}</p>
                            <p><strong>Email:</strong> ${prop.email}</p>
                        </div>
                        
                        <div class="safety-note">
                            <p>🔒 Nunca envíes dinero sin ver la propiedad personalmente</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Similar Properties -->
            <div class="similar-properties">
                <h2>Propiedades similares</h2>
                <div class="similar-grid" id="similarProperties">
                    <!-- Loaded dynamically -->
                </div>
            </div>
        </div>
    `;
    
    // Load similar properties
    loadSimilarProperties();
}

// Change main image
function changeImage(direction) {
    const totalImages = currentProperty.imagenes.length;
    currentImageIndex = (currentImageIndex + direction + totalImages) % totalImages;
    updateGallery();
}

// Set main image from thumbnail
function setMainImage(index) {
    currentImageIndex = index;
    updateGallery();
}

// Update gallery display
function updateGallery() {
    const mainPhoto = document.getElementById('mainPhoto');
    const currentPhotoSpan = document.getElementById('currentPhoto');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    mainPhoto.src = currentProperty.imagenes[currentImageIndex];
    currentPhotoSpan.textContent = currentImageIndex + 1;
    
    thumbnails.forEach((thumb, idx) => {
        thumb.classList.toggle('active', idx === currentImageIndex);
    });
}

// Load similar properties
function loadSimilarProperties() {
    const similar = propiedadesDB
        .filter(p => p.id !== currentProperty.id && p.tipo === currentProperty.tipo)
        .slice(0, 3);
    
    const container = document.getElementById('similarProperties');
    if (!container) return;
    
    if (similar.length === 0) {
        container.innerHTML = '<p style="color: var(--text-light);">No hay propiedades similares disponibles</p>';
        return;
    }
    
    container.innerHTML = similar.map(prop => `
        <a href="propiedad.html?id=${prop.id}" class="similar-property-card">
            <div class="similar-image">
                <img src="${prop.imagen}" alt="${prop.titulo}">
            </div>
            <div class="similar-info">
                <div class="similar-price">${formatPrecioCOP(prop.precio)}</div>
                <div class="similar-title">${prop.titulo}</div>
                <div class="similar-address">${prop.direccion}</div>
                <div class="similar-features">
                    <span>${prop.habitaciones} hab</span> • 
                    <span>${prop.banos} baños</span> • 
                    <span>${prop.metros} m²</span>
                </div>
            </div>
        </a>
    `).join('');
}

// Toggle favorito
function toggleFavorito() {
    const index = favoritos.indexOf(currentProperty.id);
    const btn = document.querySelector('.btn-favorite');
    
    if (index > -1) {
        favoritos.splice(index, 1);
        btn.innerHTML = '🤍 Guardar';
        btn.classList.remove('active');
        mostrarToast('Eliminado de favoritos', 'info');
    } else {
        favoritos.push(currentProperty.id);
        btn.innerHTML = '❤️ Guardado';
        btn.classList.add('active');
        mostrarToast('Guardado en favoritos', 'success');
    }
    
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

// Compartir
function compartir() {
    if (navigator.share) {
        navigator.share({
            title: currentProperty.titulo,
            text: `Mira esta propiedad: ${currentProperty.titulo} en ${currentProperty.direccion}`,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(window.location.href);
        mostrarToast('Link copiado al portapapeles', 'success');
    }
}

// Mostrar formulario de email
function mostrarEmailForm() {
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="email-form">
            <h2>Contactar al agente</h2>
            <p>Enviar mensaje sobre: <strong>${currentProperty.titulo}</strong></p>
            <form onsubmit="event.preventDefault(); enviarEmail();">
                <div class="form-group">
                    <label>Tu nombre</label>
                    <input type="text" placeholder="Nombre completo" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="tu@email.com" required>
                </div>
                <div class="form-group">
                    <label>Teléfono</label>
                    <input type="tel" placeholder="+57 300 000 0000">
                </div>
                <div class="form-group">
                    <label>Mensaje</label>
                    <textarea rows="4" placeholder="Hola, me interesa esta propiedad...">Hola, me interesa la propiedad "${currentProperty.titulo}" en ${currentProperty.direccion}. Me gustaría recibir más información.</textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-large" style="width: 100%;">Enviar mensaje</button>
            </form>
        </div>
    `;
    document.getElementById('modalOverlay').classList.add('active');
}

function enviarEmail() {
    mostrarToast('Mensaje enviado. El agente te contactará pronto.', 'success');
    cerrarModal();
}

// Modal functions
function mostrarPublicar() {
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="publish-form">
            <h2>Publicar propiedad</h2>
            <p>Llena los datos de tu propiedad para publicarla</p>
            <form onsubmit="event.preventDefault(); publicar();">
                <div class="form-group">
                    <label>Título</label>
                    <input type="text" placeholder="Ej: Casa moderna en El Poblado" required>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Tipo</label>
                        <select required>
                            <option value="">Seleccionar</option>
                            <option value="casa">Casa</option>
                            <option value="apartamento">Apartamento</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Precio (COP)</label>
                        <input type="number" placeholder="850000000" required>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-large" style="width: 100%;">Publicar</button>
            </form>
        </div>
    `;
    document.getElementById('modalOverlay').classList.add('active');
}

function publicar() {
    mostrarToast('Propiedad publicada exitosamente', 'success');
    cerrarModal();
}

function cerrarModal() {
    document.getElementById('modalOverlay').classList.remove('active');
}

function mostrarProximamente(event) {
    if (event) event.preventDefault();
    mostrarToast('Próximamente disponible', 'info');
}

// Toast
function mostrarToast(mensaje, tipo) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${tipo}`;
    toast.textContent = mensaje;
    container.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => container.removeChild(toast), 300);
    }, 3000);
}