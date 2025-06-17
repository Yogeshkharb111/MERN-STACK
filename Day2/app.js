
const printBillForAll = (txt) => {
    console.log("---------------");
    console.log("Your Final bill Amount for All is: ")
    console.log("Rs.", txt);
    console.log("---------------");
};
const printBillForFood = (txt) => {
    console.log("---------------");
    console.log("Your Final bill Amount for food is: ")
    console.log("Rs.", txt);
    console.log("---------------");
};
const printBillForFoodAndDrinks = (txt) => {
    console.log("---------------");
    console.log("Your Final bill Amount for food and Drinks is: ")
    console.log("Rs.", txt);
    console.log("---------------");
};

const calculateBillAmountForFood = (price) => {
    return price * 1.05;
};

const calculateBillAmountForClothes = (price) => {
    return price * 1.12;
};

const calculateBillAmountForDrinks = (price) => {
    return price * 1.2;
};

const totalBill = (clothes, drinks, food,cb) => {
    const finalAmount = calculateBillAmountForClothes(clothes) + calculateBillAmountForDrinks(drinks) + calculateBillAmountForFood(food);
    cb(finalAmount);
};
totalBill(100,400,100,printBillForAll)
totalBill(100,400,0,printBillForFoodAndDrinks)
totalBill(200,0,0,printBillForFood)


