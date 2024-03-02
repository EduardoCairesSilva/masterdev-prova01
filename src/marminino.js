function executar(numero) {
    if (numero % 3 === 0 && numero % 4 === 0) {
        return "MarMinino;"
    } else if (numero % 3 === 0) {
        return "Mar";
    } else if (numero % 4 === 0) {
        return "Minino";
    } else {
        return "";
    }
}
module.exports = executar;
