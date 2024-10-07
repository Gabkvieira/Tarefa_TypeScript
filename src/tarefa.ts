function calculaMultiplicacao(numero1: number, numero2: number): number {
    return numero1 * numero2;
}

console.log(calculaMultiplicacao(10,20));

function saudacao(nome: string): string {
    return (`Olá, ${nome}`);
}

console.log(saudacao('Gabriel'));

function saudacao2(nome: string): string {
    return 'Olá, ' + nome;
}

console.log(saudacao2('Gabriel'));