const { log } = require("console");

const executar = require('../src/marminino');

const resultado = {
    1: "",
    2: "",
    3: "Mar",
    4: "Minino",
    5: "",
    6: "Mar",
    7: "",
    8: "Minino",
    9: "Mar",
    10: "",
    11: "",
    12: "MarMinino",
    13: "",
    14: "",
    15: "Mar",
    16: "Minino",
    17: "",
    18: "Mar",
    19: "",
    20: "Minino",
    21: "Mar",
    22: "",
    23: "",
    24: "MarMinino",
    25: "",
};


test('testa se a funcao obedece os requisitos', () => {
    log("===============================");

    for (let i = 1; i <= 4; i++) {
        let retorno = executar(i);

        log(`${i}: ${retorno}`);

        expect(resultado[i]).toBe(retorno);
    }
    log("===============================");

});
