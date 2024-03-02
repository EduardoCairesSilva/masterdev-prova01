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

for (let i = 1; i <= 100; i++) {
    let resultado = executar(i);
    console.log(i, resultado);
}
module.exports = executar;
