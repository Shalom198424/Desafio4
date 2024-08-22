function adivinaElNumero() {
    const numeroAdivinar = Math.floor(Math.random() *11);
    const intentos = 3;
    console.log("¡Bienvenido al juego de adivinar el numero!");
    console.log(`Tiene ${intentos} intentos para adivinar el número que estoy pensando entre 0 y 10.`);
    for (let i = 0; i < intentos; i++) {
        const adivinanza = prompt("Introduce tu número:");
        if (adivinanza !== null) {
            const numeroIngresado = parseInt(adivinanza, 10);
            if (numeroIngresado === numeroAdivinar) {
                console.log("¡Felicidades! Has adivinado el número.");
                return;
            } else {
                console.log("Incorrecto. Intenta de nuevo.");
            }
        } else {
            console.log("Entrada cancelada.");
            return;
        }
    }
    console.log(`Lo siento, no has adivinado el número. Era el ${numeroAdivinar}.`);
}
adivinaElNumero();