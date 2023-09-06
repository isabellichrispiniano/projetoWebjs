console.log("Escolha uma operação\n")
console.log("1-Soma\n2-Subtração\n3-Multiplicação\n4-divisão")

let opcao, operacao, num1, num2, resultado ;
opcao = 2
num1 = 100
num2 = 50
 function somaNum(num1,num2){
    return (num1+num2);
 }
 function Subtração(num1,num2){
    return (num1-num2);
 }
 function Multiplicação(num1,num2){
    return (num1*num2);
 }
 function Divisão(num1,num2){
    return (num1/num2);
 }
 
switch(opcao){
    case 1: operacao = "Soma";
       resultado = somaNum(num1,num2)
    break;
    case 2: operacao = "Subtração";
       resultado = Subtração(num1,num2)
    break;
    case 3: operacao = "Multiplicação";
       resultado = Multiplicação(num1,num2)
    break;
    case 4: operacao = "Divisão";
       resultado = Divisão(num1,num2)
    break;
}
console.log(`Você escolheu ${operacao}`);


 console.log(`Operação escolhida ${operacao}`);
 console.log(`Você escolheu os números ${num1} e ${num2}`);
 console.log (`Resultado da operação ${resultado}`);

 