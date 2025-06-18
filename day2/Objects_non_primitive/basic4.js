// Creating an object with properties
// Object is a collection of key-value pairs
// const cse008 = {
//     name: " Aditya",
//     adress: "Jharkhand",
//     bloodGroup: "O+",
//     age: 20,
// };

// console.log(cse008);

// const studentName = cse008.name; // Accessing the name property
// console.log("studentName: ",studentName); 

// //update the value of property
// cse008.bloodGroup = "B+";

// //Add a key-value pair to the object
// cse008.college = "LPU";
// console.log("cse008:",cse008);

// delete cse008.adress; // Deleting the adress property


// // Creating another object with different properties
// const cse70 = {
//     name: "Virat",
//     adress: "Delhi",
//     bloodGroup: "A+",
//     age: 30,
// };

// console.log(cse70);


const person ={
    name: "Aditya",
    height: 180,
    weight: 100,
    college: "LPU",
    rollno:45,
    getBMI: function() {            //=> is not used with 'this' keyword

        const bmi = this.weight / ((this.height / 100) ** 2);
        console.log(`BMI for ${this.name} is ${bmi}`);

    };
    
}

person.getBMI();
person.weight = 90;
