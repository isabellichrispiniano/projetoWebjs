//introdução a funções javascript
//criando uma função
function somaNumero(){
    let num1 , num2, resp=0;
    num1 = 10;
    num2 = 20;

    resp = num1+num2;

    console.log(`O resultado da soma ${resp}`);
}
//executtando uma função
somaNumero();


//Criando função com parâmetros
function somaValorParametros(num3, num4){
    let resp = 0;
    resp = num3+num4;
    console.log(`O resultado da soma é ${resp}`);
}
//executando a função
somaValorParametros(20,30);

//criando função com parâmetros e com return
function somaNum(num5, num6){
    let resp = 0;
    resp = num5+num6;
    return resp;
}
//executando função com parâmetros e com return
let resposta = somaNum(60,30);
console.log(`O resultado da soma é ${resposta}`);


//criando função com parâmetros e com return
function somaNumeros(num7,num8){
    return(num7+num8);
}

//executando função com parâmetros e com return
console.log(`O resultado da soma é ${somaNumeros(70,90)}`);
