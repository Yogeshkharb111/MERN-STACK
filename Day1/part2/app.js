window.console.log("Hello from part2 of JS");

let juice = 50;
let gstOnJuice = 0.1;
let fries = 70;
let gstOnFood = 0.05;

let juiceBillAmount = juice + juice * gstOnJuice;  
let friesBillAmount = fries + fries * gstOnFood;   
const finalBill = juiceBillAmount + friesBillAmount;
console.log("finalBill:", finalBill);

function printBill(name, amount) {
    console.log("-------------");
    console.log("Your Bill for", name);
    console.log(" RS.", amount);
    console.log("-------------");
}

function calculateBillAmount(price, gst) {
    console.log("----Calculating----");
    let billAmount = price + price * gst;  
    return billAmount;
}

let res1 = calculateBillAmount(60, 0.1);
printBill("Mango Juice", res1);
let res2 = calculateBillAmount(60, 0.1);
printBill("Mango Juice", res2);
let res3 = calculateBillAmount(60, 0.2);
printBill("Mango Juice", res3);