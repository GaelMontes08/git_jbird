// Random //
let randomNumber = Math.floor(Math.random() * 10);
function RandomMessage() {
    switch (randomNumber) {
        case 1: 
         return "El derecho natural acosa ningún bernardo"
        break;
        case 2:
            return "El bache inunda medio radar"
            break;
        case 3:
            return "Sacrificaré mío compact disc progresivo"
            break;
        case 4:
            return "Las convocatorias heterogéneas huyen de quita y pon la orientación"
            break;
        case 5:
            return "El monsieur valla mucho ayuntamiento"
            break;
        case 6:
            return "El resplandor sitúa ningún rumor"
            break;
        case 7:
            return "El bernardo compone tanto calzado"
            break;
        case 8:
            return "El comunismo inhibe cuanto cubo"
            break;
        case 9:
            return "El uniforme halla todo silicio"
            break;
        case 10:
            return "El llamado localiza mismísimo condestable"
            break;
        default: 
        return "Hola!"
    }
}

console.log(RandomMessage());