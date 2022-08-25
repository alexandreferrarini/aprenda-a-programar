let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

console.log("Informações dos produtos:");
if (produtoA.internacional) {
    valorComImposto = produtoA.valor * 1.2;   
} else {
    valorComImposto = produtoA.valor * 1.12;       
}

console.log(`\nProduto: ${produtoA.nome}\nValor Unitário: ${produtoA.valor}\nInternacional: ${produtoA.internacional}\nValor com Impostos: ${valorComImposto}`);

if (produtoB.internacional) {
    valorComImposto = produtoB.valor * 1.2;   
} else {
    valorComImposto = produtoB.valor * 1.12;       
}

console.log(`\nProduto: ${produtoB.nome}\nValor Unitário: ${produtoB.valor}\nInternacional: ${produtoB.internacional}\nValor com Impostos: ${valorComImposto}`);

if (produtoC.internacional) {
    valorComImposto = produtoC.valor * 1.2;   
} else {
    valorComImposto = produtoC.valor * 1.12;       
}

console.log(`\nProduto: ${produtoC.nome}\nValor Unitário: ${produtoC.valor}\nInternacional: ${produtoC.internacional}\nValor com Impostos: ${valorComImposto}`);