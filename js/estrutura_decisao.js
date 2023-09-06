//estrutura de decisão
let a = 10;
let b = 20;


//Utilizando o else para responder a parte false
if(a>b){
    console.log("A é maior que B");
}
else{
    console.log("A não é maior que B");
}

//Utilizando a estrutura de decisão else e if
let saudacao, periodo;

console.log(`\tDigite: \n1- Bom dia \n2- Boa tarde \n3- Boa noite`);

saudacao;
periodo = 1 

if(periodo === 1){
   saudacao = "Bom dia";
}else if(periodo === 2){
    saudacao = "Boa tarde"
}else if(periodo === 3){
    saudacao = "Boa noite"
}else{
    saudacao = "Nenhum período encontrado"
}
console.log(`Você selecionou ${saudacao}`)