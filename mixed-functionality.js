// Random //
let randomNumber = Math.floor(Math.random() * 10);
function randomMessage() {
    switch (randomNumber) {
        case 1: 
         alert("El derecho natural acosa ningún bernardo")
        break;
        case 2:
            alert("El bache inunda medio radar")
            break;
        case 3:
            alert("Sacrificaré mío compact disc progresivo")
            break;
        case 4:
            alert("Las convocatorias heterogéneas huyen de quita y pon la orientación")
            break;
        case 5:
            alert("El monsieur valla mucho ayuntamiento")
            break;
        case 6:
            alert("El resplandor sitúa ningún rumor")
            break;
        case 7:
            alert("El bernardo compone tanto calzado")
            break;
        case 8:
            alert("El comunismo inhibe cuanto cubo")
            break;
        case 9:
            alert("El uniforme halla todo silicio")
            break;
        case 10:
            alert("El llamado localiza mismísimo condestable")
            break;
        default: 
        alert("Hola!")
    }
}

document.getElementById("clickMe").onclick = randomMessage;