// 1. Configuración de Fecha
const fechaInicio = new Date(2023, 11, 28, 0, 0); 

// 2. Estrellas de fondo
function crearEstrellas() {
    const container = document.getElementById('stars-container');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 'px';
        star.style.width = size;
        star.style.height = size;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(star);
    }
}
crearEstrellas();

// 3. Saludo dinámico
let hora = new Date().getHours();
let saludo = document.getElementById("titulo");
saludo.innerText = (hora < 12) ? "¡Buenos días, amor! Feliz mes 💙😺" : "¡Buenas noches, amor! Feliz mes 💙😺";

const razones = [
    "💙Me gusta mucho tu mirada.💙",
    "💙Eres la mejor persona que he conocido.💙",
    "💙Me alegraste la vida.💙",
    "💙Amo cómo me tratas.💙"
];

// 4. Efecto clic pantalla
document.addEventListener('click', (e) => {
    confetti({
        particleCount: 5,
        spread: 30,
        origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
        colors: ['#d63384', '#0047ab', '#ffffff']
    });
});

// 5. Escritura automática
function escribirMensaje() {
    let i = 0;
    let texto = "Siempre estaremos juntos jj nunca se librara de mi 🙀💙 Eres lo mejor que me ha pasado. Te amo!💙";
    let contenedor = document.getElementById("mensaje-oculto");
    contenedor.innerHTML = "";
    contenedor.classList.remove("hidden");

    function escribir() {
        if (i < texto.length) {
            contenedor.innerHTML += texto.charAt(i);
            i++;
            setTimeout(escribir, 50);
        }
    }
    escribir();
}

// 6. Función Sorpresa
function mostrarSorpresa() {
    const musica = document.getElementById("musica");
    musica.volume = 0.5;
    musica.play();
    
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    escribirMensaje();
    
    document.getElementById("pregunta-amor").classList.remove("hidden");
    document.getElementById("btn-principal").classList.add("hidden");

    let textoRazon = document.getElementById("texto-razon");
    textoRazon.innerText = razones[Math.floor(Math.random() * razones.length)];
}

// 7. BOTÓN ESCURRIDIZO (Arreglado)
function moverBotonNo(boton) {
    boton.style.position = "fixed"; // Pasa a fixed para poder moverse libremente
    const x = Math.random() * (window.innerWidth - boton.offsetWidth - 20);
    const y = Math.random() * (window.innerHeight - boton.offsetHeight - 20);
    boton.style.left = x + "px";
    boton.style.top = y + "px";
}

function amorConfirmado() {
    confetti({ particleCount: 200, spread: 100, colors: ['#2ecc71', '#0047ab'] });
    alert("Se que me amas mucho jj Yo te amo más 😻💙");
    document.getElementById("btn-no").style.display = "none";
}

// 8. Contador
function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;
    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    document.getElementById("tiempo").innerText = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}
setInterval(actualizarContador, 1000);
actualizarContador();