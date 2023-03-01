// let a = 15;
// let b = 5;

// console.log('Adição ' + (a + b));

// console.log('Subtração ' + (a - b));

// console.log('Multiplicação ' + (a * b));

// console.log('Divisão ' + (a / b));

// console.log('Modulo ' + (a % b));

// //========================================================

// let nun1 = 20;
// let nun2 = 15;

// if(nun1 > nun2){
//   console.log(nun1 + ' é maior que ' + nun2);
// }else{
//   console.log(nun2 + ' é maior que ' + nun1);
// }

// //============================================================

// let n1 = 10;
// let n2 = 20;
// let n3 = 15;

// if(n1 > n2 && n1 > n3){
//   console.log(n1 + ' é maior que ' + n2 + ' e ' + n3);
// }else if(n1 < n2 && n2 > n3){
//   console.log(n2 + ' é maior que ' + n1 + ' e ' + n3);
// }else{
//   console.log(n3 + ' é maior que ' + n1 + ' e ' + n2);
// }

// //=====================================================

// let numero = 10;
// if(numero > 0){
//   console.log('positive');
// }else if(numero < 0){
//   console.log('negative');
// }else{
//   console.log('zero');
// }

// //======================================================

// let angulo1 = 30;
// let angulo2 = 95;
// let angulo3 = 55;

// let somaAngolos = angulo1 + angulo2 + angulo3;
// let verificarAngolosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

// if (verificarAngolosPositivos) {
//   if(somaAngolos === 180){
//     console.log(true);
//   }else{
//     console.log(false);
//   }
// }else{
//   console.log('Ângulo inválido');
// } 

// //==============================================================

// let peçasDeXadrez = 'cavalo'; // 'peão', 'bispo', 'rei', 'torre', 'dama',  

// switch (peçasDeXadrez.toLowerCase()) {
//   case 'peão':
//     console.log('Peão -> avança uma casa para frente. Se for o primeiro movimento, avança duas casas.');
//     break;

//   case 'bispo':
//       console.log('Bispo -> Se move na diagonal quantas casas quiser.');
//       break;
  
//   case 'cavalo':
//         console.log('Cavalo -> Pode saltar sobre outra peça.');
//         break;

//   case 'torre':
//     console.log('Torre -> Pode se mover quantas casas quiser (Horizontal e Vertical).');
//     break;

//   case 'dama':
//     console.log('Dama -> Pode se mover para qualquer direção (Diagonal, horizontal e vertical).');
//     break;

//   case 'rei':
//     console.log('Rei -> Pode se mover uma casa para qualquer direção (Diagonal, horizontal e vertical).');
//     break;
    
//   default:
//     console.log('Peça inválida!');
//     break;
// }

// //========================================================

// let nota = 60;

// if(nota < 0 || nota > 100){
//   console.log('Errro: nota inválida!');
// }else if(nota >= 90){
//   console.log('A');
// }else if(nota >= 80){
//   console.log('B');
// }else if(nota >= 70){
//   console.log('C');
// }else if(nota >= 60){
//   console.log('D');
// }else if(nota >= 50){
//   console.log('E');
// }else{
//   console.log('F');
// }

// //===================================================
/*
let a = 5;
let b = 8;
let c = 7;
let par = false;

if((a % 2 === 0 || b % 2 ===0 || c % 2 === 0)){
  par = true;
  console.log(par);
}
*/
//=================================================================
/*
let a = 2;
let b = 8;
let c = 9;
let impar = false;

if((a % 2 !== 0 || b % 2 !==0 || c % 2 !== 0)){
  impar = true;
  console.log(impar);
}
*/
//===================================================
/*
let custoProduto = 2;
let valorVenda = 6;

if(custoProduto >= 0 && valorVenda >= 0){
  let totalCustoProduto = custoProduto * 1.2;
  let lucroTotal = (valorVenda - totalCustoProduto) * 1000
  console.log(lucroTotal);
}else{
  console.log("Erro: os valores não podem ser negativos!");
}
*/


/*
let aliquotaINSS;
let aliquotaIR;
let salarioBruto = 3000.00

if(salarioBruto <= 1556.94){
  aliquotaINSS = salarioBruto * 0.08
}else if(salarioBruto <= 2594.92){
  aliquotaINSS = salarioBruto * 0.09
}else if(salarioBruto <= 5189.82){
  aliquotaINSS = salarioBruto * 0.11
}else{
  aliquotaINSS = 570.88
};

let salarioBase = salarioBruto - aliquotaINSS;

if(salarioBase <= 1903.98){
  aliquotaIR = 0;
}else if(salarioBase <= 2826.65){
  aliquotaIR = (salarioBase * 0.075) - 142.80;
}else if(salarioBase <= 3751.05){
  aliquotaIR = (salarioBase * 0.15) - 354.80
}else if(salarioBase <= 4664.68){
  aliquotaIR = (salarioBase * 0.225) - 636.13
}else{
  aliquotaIR = (salarioBase * 0.275) - 869.36
};
console.log(salarioBase - aliquotaIR);
*/

//======================================================





