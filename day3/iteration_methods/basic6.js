 //<-----------Array Iteration----------------->
 const arr = ["cat", "dog", "fish", "bird"];    

 // Using a for loop to iterate through the array
 for (let i = 0; i < arr.length; i++) {
     console.log(arr[i]);
 }

    // Using forEach to iterate through the array
    arr.forEach(function(item) {
        console.log(item);
    });

    // // Using for...of to iterate through the array
    // for (const item of arr) {
    //     console.log(item);
    // }

    // // Using for...in to iterate through the array (not recommended for arrays)
    // for (const index in arr) {
    //     console.log(arr[index]);
    // }

    // // Using map to create a new array with the same items
    // const newArr = arr.map(function(item) {
    //     return item.toUpperCase();
    // });

    // console.log(newArr);

    // // Using filter to create a new array with items that meet a condition
    // const filteredArr = arr.filter(function(item) {
    //     return item.length > 3; // Filter items with length greater than 3
    // });

    // console.log(filteredArr);

    // // Using reduce to accumulate a value from the array

    // const concatenatedString = arr.reduce(function(accumulator, item) {
    //     return accumulator + item + " ";
    // }, "");

    // console.log(concatenatedString.trim()); // Trim to remove trailing space

    // // Using find to get the first item that meets a condition

    // const foundItem = arr.find(function(item) {
    //     return item.startsWith("d"); // Find the first item that starts with 'd'
    // });

    // console.log(foundItem); // Output: "dog"

    // // Using some to check if any item meets a condition
    // const hasLongItem = arr.some(function(item) {
    //     return item.length > 3; // Check if any item has length greater than 3
    // });


    // console.log(hasLongItem); // Output: true

