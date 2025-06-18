// let juice = 50;
// let gstOnjuice = 0.1;
// let fries = 70;
// let gstOnfood = 0.05;

// let juiceBill = juice + juice * gstOnjuice;
// let friesBill = fries + fries * gstOnfood;

// const finalBill = juiceBill + friesBill;
// console.log("finalBill: ", finalBill);


 //   <------------------------------------------------------------------------->


// console.log("START");

// function calculateJuiceBill(){
//     let juice = 50;
//     let gstOnjuice = 0.1;
//     let juiceBill = juice + juice*gstOnjuice;
//     console.log(juiceBill);
// }

// console.log("MID");

// calculateJuiceBill();

// console.log("END");


// function calculateJuiceBill(juice){    // parameter

//     let gstOnjuice = 0.1;
//     let juiceBill = juice + juice*gstOnjuice;
//     console.log(juiceBill);
// }

// calculateJuiceBill(60);  //argument
// calculateJuiceBill(100);
// calculateJuiceBill(120);

const res1 = calculateBill(60,0.1);
printBill("Mango Juice",res1);

function printBill(name,amount){
    console.log("................");
    console.log("Your Bill for",name);
    console.log("Rs: ",amount);
    console.log(".......................");
}

function calculateBill(price,gst){    // parameter

    console.log(".....Calculating.....")
    let bill = price + price*gst;
    return bill;
}


const res2 = calculateBill(80,0.1);
printBill("Orange Juice",res2);

const res3 = calculateBill(100,0.05);
printBill("Fries",res3);

function printBill(name,amount){
    console.log("................");
    console.log("Your Bill for",name);
    console.log("$: ",amount);
}