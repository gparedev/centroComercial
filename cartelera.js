document.addEventListener('DOMContentLoaded', () => {
    // Ruta al archivo JSON
    const jsonUrl = 'cartelera.json';

    // Contenedores de las carteleras
    const carteleraSmall = document.getElementById('cartelera-small');
    const carteleraLarge = document.getElementById('cartelera-large');

    // Función para cargar y renderizar la cartelera
    fetch(jsonUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then((data) => {
            data.forEach((pelicula, index) => {
                // Crear tarjeta para pantallas pequeñas
                const cardSmall = `
                    <div
                        class="card movie-card col-12"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-${index}"
                        style="cursor: pointer"
                    >
                        <img
                            src="${pelicula.imagen}"
                            class="card-img-top cartelera-img"
                            alt="Póster de ${pelicula.titulo}"
                        />
                        <div class="card-body text-center">
                            <h5 class="card-title">${pelicula.titulo}</h5>
                        </div>
                    </div>
                `;
                carteleraSmall.innerHTML += cardSmall;

                // Crear tarjeta para pantallas grandes
                const cardLarge = `
                    <div
                        class="card movie-card col-12 col-md-3"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-${index}"
                        style="cursor: pointer"
                    >
                        <img
                            src="${pelicula.imagen}"
                            class="card-img-top cartelera-img"
                            alt="Póster de ${pelicula.titulo}"
                        />
                        <div class="card-body text-center">
                            <h5 class="card-title">${pelicula.titulo}</h5>
                        </div>
                    </div>
                `;
                carteleraLarge.innerHTML += cardLarge;

                // Crear modal compartido
                const modal = `
                    <div
                        class="modal fade"
                        id="modal-${index}"
                        tabindex="-1"
                        aria-labelledby="modalLabel-${index}"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel-${index}">${pelicula.titulo}</h5>
                                    <button
                                        type="button"
                                        class="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div class="modal-body">
                                    <div class="ratio ratio-16x9">
                                        <iframe
                                            src="${pelicula.video}"
                                            title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen
                                        ></iframe>
                                    </div>
                                    <p class="mt-3">${pelicula.descripcion}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                document.body.insertAdjacentHTML('beforeend', modal);
            });
        })
        .catch((error) => console.error('Error al cargar el JSON:', error));
});
