// 'use strict';

// function greeting(name){
//     alert('Hello' + name);
// }

// function processUserInput(callback){
//     var name = prompt('please enter your name');
//     callback(name);
// }

// processUserInput(greeting);


// function div(askNum){
//     let askNum = prompt('What is your number'); 
//     if (askNum % 5 === 0 && askNum % 3 === 0){
//         console.log('eureka!');
//     }else if (askNum % 3 === 0){
//         console.log('divisible by 3');
//     }else if (askNum % 5 === 0){
//         console.log('divisible by 5');
//     }else{
//         console.log('not a number')
//     }
// }  
// console.log(div);

// function add(a,b) {
//     let sum = a + b;
//     return sum;
// }

// console.log(add(2,3));

//console.log("using script file")
/*this will alert 'Hello'
this will also alert 'world'*/
//this will prompt hello 
//alert('hello'); 
//this will prompt world
//alert('World');

// let isVar = true;
// console.log(isVar);

// isVar = false;
// console.log(isVar);

// String Conversion
// let value = true;
// value = String(value);
// console.log(value);
// console.log(typeof value);

// Number Conversion
// let number = '123';
// number = Number(number);
// console.log(number);
// console.log(typeof number);

// Boolean Conversion
// let condition = 1;
// condition = Boolean(1);
// console.log(condition);
// console.log(typeof condition);

//Operators
// console.log(2 ** 3); //2 * 2 * 2

// Comparison
// console.log(1 > 0);
// console.log(1 < 0);
// console.log(1 >= 0);
// console.log(1 <= 0);
// console.log(1 == 0);

// console.log('A' >= 'B');
// console.log('Glow' >= 'Glee');

// let rate = prompt('Please give your rate, 100');
// console.log(`your rate is ${rate}`);

// let question = confirm('are you single?');
// alert(question);

// let namE = prompt('Please type your name');
// alert(`Your name is ${namE}`);
// let agE = prompt('Please type your age');
// alert(`Your name is ${agE}`);
// let status = confirm('Are you single?');
//     if(status = true){
//         console.log('yes');
//     }else{
//         console.log('no');
//     }

// let year = prompt('What year you are born?');
// if (year ==1996){
//     alert('you are a 90s baby');
//     alert('you are awesome');
// }

// boolean conversion
// let condItion = (year == 1996);
// if (condItion){
//     alert('you are a 90s baby');
//     alert('you are awesome');
// }else if(year == 1995){
//     alert('you are so pretty');
// }else if(year == 1994){
//     alert('you are gorgeous');
// }else {
//     alert('you are not worthy');
// }    

// Conditional operator '?'
// let result = condItion ? alert('you are awesome') :
// (year == 1995) ? alert('you are pretty') :
// (year == 1994) ? alert('you are worthy') :
// alert('you not.');

// let askNum = prompt('What is your number');
// if (askNum % 5 === 0 && askNum % 3 === 0){
//     console.log('eureka!');
// }else if (askNum % 3 === 0){
//     console.log('divisible by 3');
// }else if (askNum % 5 === 0){
//     console.log('divisible by 5');
// }else{
//     console.log('not a number')
// }



// for (let x = 5; x > 0; x--){
//     console.log(x);
// }

// let x = 10;
 
// while (x > 0) {
//     console.log(x);
//     x--;
// }

// do {
//     console.log(x);
//     x--;
// } while(x > 0);

// let i = 1;
// while (i <= x){
//     for(let j = 1; j <= i; j++){
//         document.write('*');
//     }
//     document.write('<br/>');
//     i++;
// }

// do {
//     for(let j = 1; j <= i; j++){
//         document.write('*');
//     }
//     document.write('<br/>');
//     i++;
// } while (i <= x)


// let x = 2 + 7;
// switch (x) {
//     case 3: // if (x===1)
//         alert('Too small')
//         break;
//     case 4: // if (x===2)
//         alert('Exactly')
//         break;
//     case 5: 
//         alert('Too Large')
//         break;
//     default: // else
//         alert('I dont know such value')
// }

// let askNum = prompt('what is your number?')

// switch (true) {
//     case (askNum % 5 === 0 && askNum % 3 === 0): // if (x===1)
//         alert('Eureka')
//         break;
//     case (askNum % 5 === 0): // if (x===2)
//         alert('Divisible by 5')
//         break;
//     case (askNum % 3 === 0): 
//         alert('Divisible by 3')
//         break;
//     default: // else
//         alert('I dont know such value')
// }



// const displayName = function () {
//  // do something here
// }

// const displayAge = () => {
//     // do something here
// }

// // main
// function example() {
//     //do something here
//     displayName();
//     displayAge();
// }


let billAmount = [1240, 480, 2680, 1800, 420];
let billTip = [];
let totalBillPaid = [];
function tipCompute(cost) {
      if (cost < 500) {
        return cost * .2;
      }
      if (cost >= 500 && cost <= 2000) {
        return cost * .15;
      }
      return cost * .1;
    }
function makeBillTipArray(inputArray) {
    var length = inputArray.length;
    for (var i = 0; i < length; i++) {
        billTip[i] = tipCompute(inputArray[i]);
    }
}
function calculateTotal(billArray) {
    var length = billArray.length;
    for (var i = 0; i < length; i++) {
      totalBillPaid[i] = billArray[i] + tipCompute(billArray[i]);
    }
  }

  makeBillTipArray(billAmount);
  calculateTotal(billAmount);
  console.log('The bills are:' + billAmount);
  console.log(`The calculated tips are: ${billTip}`);
  console.log(`The calculated totals are: ${totalBillPaid}`);




//console.log(1240 + tip(1240),480 + tip(480),2680 + tip(2680));

// const victor = {
//     fullName: 'Victor Rivera',
//     weight: 70,
//     height: 3,
//     bmi: function(){
//        return this.weight/ (this.height ** 2);
//     }
// }
// const john = {
//     fullName: 'John Young',
//     weight: 80,
//     height: 4,
//     bmi: function(){
//        return this.weight / (this.height ** 2);
//     }
// };


// console.log(victor.bmi());

// const bills = {
//     value: [1240, 480, 2680, 1800, 420],
//     tips: function(){
//         if (this.value <= 500){
//             return this.value * 0.2;
//         }else if (this.value > 500 && this.value <=2000){
//             return this.value * 0.15;
//         }else if (this.value > 2000){
//             return this.value * 0.10;
//         }
//     }

// }

// console.log(bills.tips());