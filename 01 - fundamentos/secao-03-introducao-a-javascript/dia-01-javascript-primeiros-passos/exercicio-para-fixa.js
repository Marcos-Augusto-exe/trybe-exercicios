var myName = "Marcos";
var birthCity = "Recife";
var birthYear = 1995;
console.log(myName, birthCity, birthYear);

var base = 5;
var heigth = 8;
var area = base * heigth;
console.log(area);

var perimeter = 5 + 5 + 8 + 8;
console.log(perimeter);

const nota = 55

if(nota >= 80){
  console.log("Parabéns, você faz parte do grupo de pessoas aprovadas!");
}else if(nota <= 80 && nota >= 60){
  console.log("Você está na nossa lista de espera.");
}else if(nota < 60){
  console.log("Infelizmente, você reprovou.");
}

let currentHour = 10;
let message = "";

if(currentHour >= 22){
  message = "Não deveríamos comer nada, é hora de dormir";
}
else if(currentHour >= 18 && currentHour < 22){
  message = "Rango da noite, vamos jantar :D"
}
else if(currentHour >= 14 && currentHour < 18){
  message = "Vamos fazer um bolo pro café da tarde?"
}
else if(currentHour >= 11 && currentHour < 14){
  message = "Hora do almoço!!!"
}
else if(currentHour >= 4 && currentHour < 11){
  message = "Hmmm, cheiro de café recém-passado"
} 
console.log(message);

let weekDay = "segunda-feira";
 
if(weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira"){
  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}else{
  console.log("FINALMENTE, descanso merecido! UwU!");
}

//===============================================================

let pessoaCandidata = 'lista';

switch (pessoaCandidata) {
  case 'aprovada':
    console.log('Parábens, Você foi aprovada!');
    
    break;

  case 'lista':
      console.log('Você está na lista de espera.');
      
      break;

  case 'reprovada':
        console.log('Você foi reprovada.');
        
        break;  

  default:
    console.log('Informação incorreta.');
    break;
}