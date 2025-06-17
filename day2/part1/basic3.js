//Use of arrow function

const printBil = (txt) => {
    console.log("...........................");
    console.log("Rs", txt);
    console.log("............................");
};


const calculateBillForFood = (price) => {
    return price*1.05;
};

const calculateBillForClothes = (price) => {
 return price*1.8;
};

const calculateBillForDrinks = (food,clothes,drinks) => {
    return price*0.5;
};
const generatedBill =(food,clothes,drinks,cb)=>{
    const foodprice = calculateBillForFood(food);
    const clothesprice = calculateBillForClothes(clothes);
    const drinkprice = calculateBillForDrinks(drinks);

    const finalBill = foodprice
}
