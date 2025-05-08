// Ruta al archivo JSON
const jsonUrl = 'cartelera.json';

// Contenedor de la cartelera
const carteleraContainer = document.getElementById('cartelera');

// Función para cargar y renderizar la cartelera
fetch(jsonUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
    })
    .then((data) => {
        data.forEach((pelicula) => {
            // Crear el HTML de cada tarjeta
            const card = document.createElement('div');
            card.className = 'card col-12 col-lg-5 col-xl-4';

            card.innerHTML = `
                <div class="ratio ratio-16x9">
                    <iframe
                        src="${pelicula.video}"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${pelicula.titulo}</h5>
                    <p class="card-text">${pelicula.descripcion}</p>
                    <a href="${pelicula.video}" class="btn btn-primary" target="_blank">Ver más</a>
                </div>
            `;

            // Añadir la tarjeta al contenedor
            carteleraContainer.appendChild(card);
        });
    })
    .catch((error) => console.error('Error al cargar el JSON:', error));