document.documentElement.classList.add('js-enabled');

// Contenido dinámico
const content = document.getElementById('main-content');

// Función para actualizar el texto del cuadro y redirigir al enlace
function updatePlaylistText(text, link) {
  alert(text); // Muestra el texto en un cuadro de alerta
  window.open(link, '_blank'); // Abre el enlace en una nueva pestaña
}

// Función para redirigir directamente a un enlace
function redirectTo(link) {
  window.open(link, '_blank');
}

document.getElementById('card-entrenos').addEventListener('click', () => {
  content.innerHTML = `
    <h3>Entrenos</h3>
    <p>Rutinas, ejercicios y guías.</p>
  `;
});

document.getElementById('card-retos').addEventListener('click', () => {
  content.innerHTML = `
    <h3>Retos</h3>
    <p>Retos mensuales para la comunidad.</p>
  `;
});

document.getElementById('card-otro').addEventListener('click', () => {
  content.innerHTML = `
    <h3>Más</h3>
    <p>Información adicional, contacto y proyectos.</p>
  `;
});

console.log("JS cargado correctamente.");


