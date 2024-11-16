// script.js

document.getElementById('girar-btn').addEventListener('click', function() {
    // Seleccionamos la ruleta y el botón
    const ruleta = document.getElementById('ruleta');
    const resultado = document.getElementById('resultado');
    
    // Generamos un ángulo aleatorio para el giro
    const giroAleatorio = Math.floor(Math.random() * 360);

    // Iniciamos el giro de la ruleta
    ruleta.style.transition = "transform 5s ease-out"; // 5 segundos de transición
    ruleta.style.transform = `rotate(${3600 + giroAleatorio}deg)`; // Gira 10 veces más el ángulo aleatorio

    // Después de que termine el giro, determinamos el premio
    setTimeout(function() {
        const premios = [
            "1 Chupito",
            "Una Copa",
            "2 Tragos",
            "3 Traguitos",
            "Un Tequila",
            "Pedir a otro"
        ];

        // Calculamos en qué sección cayó la ruleta
        const premioIndex = Math.floor(((giroAleatorio % 360) + 60) / 60);
        resultado.textContent = `¡Premio: ${premios[premioIndex]}!`;
    }, 5000); // 5 segundos después del giro
});
