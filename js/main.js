let posY = 0;
let velY = 0;
let gravita = 0.5;
let timer = null;

function avviaCaduta() {
    if (timer !== null) return;

    timer = setInterval(function() {
        velY += gravita;
        posY += velY;

        if (posY >= 155) {
            posY = 155;
            velY = -velY * 0.7; // Rimbalzo

            if (Math.abs(velY) < 1) {
                clearInterval(timer);
                timer = null;
            }
        }

        document.getElementById("oggetto").style.top = posY + "px";
        document.getElementById("testo-velocita").innerText = "Velocità: " + velY.toFixed(1) + " px/frame";
    }, 1000 / 60);
}

function resetCaduta() {
    clearInterval(timer);
    timer = null;
    posY = 0;
    velY = 0;
    document.getElementById("oggetto").style.top = "0px";
    document.getElementById("testo-velocita").innerText = "Velocità: 0 px/frame";
}