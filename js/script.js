const messages = [
    "Eres la razón de mi sonrisa.",
    "Cada momento contigo es especial.",
    "No puedo imaginar mi vida sin ti.",
    "Tu amor ilumina mi mundo.",
    "comprendes mi locura ",
    "Cada día contigo es un regalo.",
    "Eres mi inspiración constante.",
    "Cada momento compartido contigo",
    "se convierte en un hermoso recuerdo",
    "Tu amor y tu ternura me hacen sentir completo y afortunado",
    "Quiero que sepas que siempre estaré aquí para ti,",
    "para celebrar tus triunfos, para apoyarte en los desafíos ",
    "para compartir todos los momentos que la vida nos tiene preparados.",
    "Gracias por ser la razón detrás de mis sonrisa",
    "Renegona,Pleitista,pero tierna y sencilla",
    "espero pasar mas momentos juntos bebe",
    "Mi ojitos Hermosos",
    "Con todo mi amor,",
    "Atentamente",
    "tu Ing Cursi te quiero ",
    
];

const messageElement = document.getElementById("message");
const changeMessageButton = document.getElementById("changeMessage");

let currentIndex = 0;


changeMessageButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % messages.length;
    messageElement.textContent = messages[currentIndex];
});
