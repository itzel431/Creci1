// Función para mostrar la sección seleccionada
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

// Modal de consejos
const modalContent = {
    baño: "Consejos para el baño del bebé...",
    pañal: "Consejos para el cambio de pañal...",
    alimentación: "Consejos de alimentación...",
    dormir: "Posturas recomendadas para dormir..."
};

function showModal(topic) {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modalTitle').textContent = topic.charAt(0).toUpperCase() + topic.slice(1);
    document.getElementById('modalText').textContent = modalContent[topic];
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Álbum de fotos
document.getElementById('photoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const gallery = document.getElementById('photoGallery');
    const newPhoto = document.createElement('div');
    newPhoto.textContent = "Foto agregada";
    gallery.appendChild(newPhoto);
});

// Salud: Simulación de gráfico (requeriría Chart.js o similar para gráficos reales)
function saveHealthData() {
    alert("Datos de salud guardados");
}

// Ruidos blancos
function playSound(soundType) {
    alert("Reproduciendo sonido de " + soundType);
}

// Pantalla de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('loginScreen').style.display = 'none';
    showSection('consejos');  // Comienza en la sección de Consejos
});
