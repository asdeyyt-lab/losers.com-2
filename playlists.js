// Función para actualizar el texto del cuadro y redirigir al enlace
function updatePlaylistText(text, link) {
  alert(text); // Muestra el texto en un cuadro de alerta
  window.open(link, '_blank'); // Abre el enlace en una nueva pestaña
}

// Función para redirigir directamente a un enlace
function redirectTo(link) {
  window.open(link, '_blank');
}

// Manejo de doble y triple click para los botones principales
const playlistData = {
  metal: {
    default: 'Metal',
    subtext: 'pa echar pechito',
    link: 'https://open.spotify.com/playlist/6U7tVZo3wecBJUvmDhoyAy?si=1a49b7be510c4a4e'
  },
  grindei: {
    default: 'GrinDei',
    subtext: 'pa mutar esa espaldita',
    link: 'https://open.spotify.com/playlist/0wtaN4Y0uNpahw4F93Bc6X?si=ec878a6f33b04e75'
  },
  rocksito: {
    default: 'Rockcito',
    subtext: 'pára anchar esos fideos',
    link: 'https://open.spotify.com/playlist/0uh2sx0yOzUOC3NBxJaQJN?si=c1ce83964b474b45'
  },
  despecho: {
    default: 'Despecho',
    subtext: 'mañana no caminamos',
    link: 'https://open.spotify.com/playlist/1ek3CgfhuWl48aNztA6MTa?si=21ef2c418651475d'
  }
};

function setupMultiClick() {
  Object.keys(playlistData).forEach(id => {
    const btn = document.getElementById(id);
    let clickState = 0;
    btn.addEventListener('click', function() {
      if (clickState === 0) {
        btn.textContent = playlistData[id].subtext;
        clickState = 1;
      } else if (clickState === 1) {
        window.open(playlistData[id].link, '_blank');
        btn.textContent = '';
        clickState = 2;
      } else {
        btn.textContent = playlistData[id].default;
        clickState = 0;
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', setupMultiClick);