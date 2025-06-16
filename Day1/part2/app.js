window.console.log("Hello from part2 of JS");

let juice=50;
let gstOnJuice=0.1;
let fries=70;
let gstOnFood=0.05;

let juiceBillAmount=juice+juice+gstOnJuice;
let friesBillAmount=fries+fries+gstOnFood;
const finalBill=juiceBillAmount+friesBillAmount;
console.log("finalBill:",finalBill)

console.log("START")

function calculateJuiceBillAmount() {
    let juice=50;
    let juiceBillAmount=juice+juice+gstOnJuice;
    console.log(juiceBillAmount)
}
console.log("MID")
calculateJuiceBillAmount();
console.log("END")



// function calculateFriesBillAmount() {
//     let fries=50;
//     let friesBillAmount=fries+fries+gstOnfries;
//     console.log(friesBillAmount)
// }