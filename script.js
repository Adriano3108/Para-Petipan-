// 1. Configuración de Fecha
const fechaInicio = new Date(2023, 11, 28, 0, 0); 

// --- PUNTO 1: LÓGICA DEL LOADER (PANTALLA DE CARGA) ---
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1000);
    }, 2500); // Se muestra por 2.5 segundos
});

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

// 3. Saludo dinámico (Tus frases originales)
let hora = new Date().getHours();
let saludo = document.getElementById("titulo");
saludo.innerText = (hora < 12) ? "Buenos días petipan con pollo jj Feliz mes 💙😺" : "Buenas noches ratapollo OwO Feliz mes 💙😺";

const razones = [
    "💙Me gusta mucho tu mirada.💙",
    "💙Eres la mejor persona que he conocido.💙",
    "💙Me alegraste la vida.💙",
    "💙Amo cómo me tratas.💙"
];

// 4. Efecto clic pantalla
document.addEventListener('click', (e) => {
    // Evitamos que salte confetti si hace clic en los botones para no saturar
    if (e.target.tagName !== 'BUTTON') {
        confetti({
            particleCount: 5,
            spread: 30,
            origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
            colors: ['#d63384', '#0047ab', '#ffffff']
        });
    }
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
    
    // --- PUNTO 3: MOSTRAR ONDAS DE MÚSICA ---
    const waves = document.getElementById("waves");
    if(waves) waves.style.display = "flex";

    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    escribirMensaje();
    
    document.getElementById("pregunta-amor").classList.remove("hidden");
    document.getElementById("btn-principal").classList.add("hidden");

    let textoRazon = document.getElementById("texto-razon");
    textoRazon.innerText = razones[Math.floor(Math.random() * razones.length)];
}

// 7. BOTÓN ESCURRIDIZO
function moverBotonNo(boton) {
    boton.style.position = "fixed"; 
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

// 8. Contadores (PUNTO 4: LÓGICA DEL PRÓXIMO 28)
function actualizarContadores() {
    const ahora = new Date();
    
    // Contador de tiempo juntos
    const diferencia = ahora - fechaInicio;
    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    document.getElementById("tiempo").innerText = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    // Lógica para el próximo 28 de cada mes
    let proximo28 = new Date(ahora.getFullYear(), ahora.getMonth(), 28, 0, 0, 0);
    
    // Si hoy ya es pasado el 28, calcular para el 28 del mes que viene
    if (ahora >= proximo28) {
        proximo28.setMonth(proximo28.getMonth() + 1);
    }

    const diffCita = proximo28 - ahora;
    let dC = Math.floor(diffCita / (1000 * 60 * 60 * 24));
    let hC = Math.floor((diffCita % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mC = Math.floor((diffCita % (1000 * 60 * 60)) / (1000 * 60));

    const countdownElem = document.getElementById("countdown-cita");
    if(countdownElem) {
        countdownElem.innerText = `${dC}d ${hC}h ${mC}m`;
    }
}

setInterval(actualizarContadores, 1000);
actualizarContadores();