
// using IF statement

    let askNum = prompt('What is your number'); 
    if (askNum % 5 === 0 && askNum % 3 === 0){
        console.log('eureka!');
    }else if (askNum % 3 === 0){
        console.log('divisible by 3');
    }else if (askNum % 5 === 0){
        console.log('divisible by 5');
    }else{
        console.log('not a number')
    }



// using switch case statement

switch (true) {
    case (askNum % 5 === 0 && askNum % 3 === 0): 
        console.log('Eureka')
        break;
    case (askNum % 5 === 0): 
        console.log('Divisible by 5')
        break;
    case (askNum % 3 === 0): 
        console.log('Divisible by 3')
        break;
    default: 
        console.log('I dont know such value')
}



// exercise (tip and total)
let billAmount = [1240, 480, 2680, 1800, 420];
let tip = [];
let totalBill = [];
function tipCompute(cost) {
      if (cost < 500) {
        return cost * .2;
      }
      else if (cost >= 500 && cost <= 2000) {
        return cost * .15;
      }
      else {
      return cost * .1;
    }
}
function makeBillTipArray(bill) {
    for (var i = 0; i < bill.length; i++) {
        tip[i] = tipCompute(bill[i]);
    }
}
function calculateTotal(bill) {
    for (var i = 0; i < bill.length; i++) {
      totalBill[i] = bill[i] + tipCompute(bill[i]);
    }
  }

  makeBillTipArray(billAmount);
  calculateTotal(billAmount);
  console.log('The bills are:' + ' ' + billAmount);
  console.log(`The calculated tips are: ${tip}`);
  console.log(`The calculated totals are: ${totalBill}`);

// comparing two BMI
 const victor = {
    fullName: 'Victor Rivera',
    weight: 70,
    height: 3,
    bmi: function(){
       return this.weight/ (this.height ** 2);
    }
};
 const john = {
    fullName: 'John Young',
    weight: 100,
    height: 2,
    bmi: function(){
       return this.weight / (this.height ** 2);
    }
};

function compare(name1, name2){
    let bmi1 = name1.bmi();
    let bmi2 = name2.bmi();

    if(bmi1 < bmi2){
        console.log(`${name2.fullName} is bigger with a BMI of ${bmi2}`)
    }
    else if(bmi2 < bmi1){
        console.log(`${name1.fullName} is bigger with a BMI of ${bmi1}`)
    }
    else {
        console.log('THEY HAVE EQUAL BMI')
    }
}

compare(victor, john);



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