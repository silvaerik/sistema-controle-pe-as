// bibiolteca que recebe valores digitados pelo usuário.
readlinesync = require('readline-sync')

// Variaveis 
let nome = readlinesync.question("Qual seu nome: ");
console.log("Seja bem Vindo "+nome+ "  ao Sistema de Controle de Peças. ");
let saldoinicial = parseFloat(readlinesync.question("Digite Saldo Inicial de Pecas: "));
console.log("O seu saldo Inicial é de "+saldoinicial+ " Pecas.");
let um = "(Compras)-Entrada"
let dois = "(Vendas)-Saida"

// variável utilizada no loop
i = 0;

// loop do while para direcionar as opçöes do menu
do{   
let menu = parseFloat(readlinesync.question("DIGITE (1) PARA ENTRADA DE PECAS OU (2) PARA SAIDA DE PECAS: "));

// condiçóes se a opcao for entrada
if(menu == 1) {
    console.log(um);
    let entrada = parseFloat(readlinesync.question("Digite a quantidade: "));
    let saldoatualizado = saldoinicial+entrada;
console.log("O seu saldo agora é de "+saldoatualizado+ " Pecas. ");
i = readlinesync.question("Deseja continuar? (s) para sim ou pressione qualquer tecla para finalizar o sistema: ");

// condiçöes se a opçäo for saida
}else if(menu == 2) {
    console.log(dois);

    let baixa = parseFloat(readlinesync.question("Digite a quantidade a ser baixada: "));
    
    // condiçäo se a baixa for maior que o saldo inicial
    if(saldoinicial<baixa){
        console.log("O seu saldo é insuficiente para essa baixa. ");
        console.log("ATENCAO: A SUA BAIXA NAO FOI REALIZADA...");
        i = readlinesync.question("Digite (s) para voltar ao menu principal ou pressione qualquer tecla para Sair: ");  
    
        // condiçäo se a baixa for menor que o saldo inicial
    }else {
        let saldoatualizado = saldoinicial-baixa;    
console.log("O seu saldo agora é de "+saldoatualizado+ " Peças. ");
i = readlinesync.question("Digite (s) para continuar ou pressione qualquer tecla para sair: ");
}

// se a opçáo do menu for diferente de 1 ou de 2.
}else {
    console.log("Opcao Invalida. Digite (s) para voltar ao Menu Principal ou (e) para Sair: ");
}

}while(i == "s");
console.log(" O Sistema foi Finalizado. Até Mais "+nome+ ". ");
