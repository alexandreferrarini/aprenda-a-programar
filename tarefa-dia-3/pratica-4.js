let numero = 1500450271;
let i = 1;
let totalDivisivel = 0;

while (i <= numero) {
    if (numero % i === 0) {
        totalDivisivel ++;
    }
    i++;
}

if (totalDivisivel <= 2) {
    console.log(`Sim, o número ${numero} é primo!`);
} else {
    console.log(`Não, o número ${numero} não é primo!`);
}
