window.console.log("Hello from part2 of JS");

let juice=50;
let gstOnJuice=0.1;
let fries=70;
let gstOnFood=0.05;

let juiceBillAmount=juice+juice+gstOnJuice;
let friesBillAmount=fries+fries+gstOnFood;
const finalBill=juiceBillAmount+friesBillAmount;
console.log("finalBill:",finalBill)


function calculateJuiceBillAmount(juice,gstOnJuice) {
    //let gstOnJuice=0.1
    let juiceBillAmount=juice+juice+gstOnJuice;
    console.log(juiceBillAmount)
}

calculateJuiceBillAmount(60,0.1);
calculateJuiceBillAmount(60,0.2);
calculateJuiceBillAmount(60,0.3);




// function calculateFriesBillAmount() {
//     let fries=50;
//     let friesBillAmount=fries+fries+gstOnfries;
//     console.log(friesBillAmount)
// }