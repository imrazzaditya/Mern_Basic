// //function re-run ---> componenet re-rendering
// //react re-render's component either on 'state' or 'prop' change
// //hook --> function given to use by react

// import {useState} from "react";



// const App = () => {
//   //let searchText = "Adi";
//   const [monitor, remote ] = useState();
//   const handleSearch = (e) => {
//     const value = e.target.value;
//     //searchText = value;
//     remote(value);
// console.log(monitor);
// };

// return (
//   <div>
//     <input type="text" onKeyUp= {handleSearch} />
//     <h2>{monitor}</h2>
//   </div>
// );
// };

// export default App;











// import {useState} from "react";
// const App = () => {
//   const [monitor, remote ] = useState(0);
//   console.log(monitor);

//   const handleClick = () => {
//     remote(monitor+1);
//     remote(monitor+2);   //React accepts always the last updation you make.
//     console.log(monitor);
//   }

// return (
//   <div>
//     <button onClick={handleClick}>Click mE</button>
//     <h2>{monitor}</h2>
//   </div>
// );
// };

// export default App;

//Line 46 is handled here.....like how toh accept multiple call backs one after the other

// import {useState} from "react";
// const App = () => {
//   const [monitor, remote ] = useState(0);

//   const handleClick = () => {
//     remote((prev) => {
//       return prev+1;
//     });
//     remote((prev) => {
//       return prev+1;
//     });
//     console.log(monitor);
//   };

// return (
//   <div>
//     <button onClick={handleClick}>Click mE</button>
//     <h2>{monitor}</h2>
//   </div>
// );
// };

// export default App








// import {useState} from "react";

// const App =() => {
//   const [monitor,remote] = useState(() => {
// const val = localStorage.getItem("counter-value");
// if(val) {
//   return parseInt(val);
// }else{
//   return 0;
// }
//   });
//   console.log(monitor);

//   const handleIncrement = () => {
//     remote((prev) => {
//       const newValue = prev + 1;
//       localStorage.setItem("counter-value",newValue);
//       return newValue;
//     });
//   };

//   const handleDecrement = () => {
//     remote((prev) => {
//       const newValue =prev-1;
//       localStorage.setItem("counter-value",newValue);
//       return newValue;
//     });
//   };

//   const handleReset = () => {
//     remote(0);
//     localStorage.setItem("counter-value",0);
//   };
//   return (
//     <div>
//       <button onClick={handleIncrement}>+</button>
//       <button onClick={handleDecrement}>-</button>
//       <button onClick={handleReset}>Reset</button>
//       <h2>{monitor}</h2>
//     </div>
//   );
// };

// export default App;



// import { useState } from "react";
// const App = () => {
//   const [arr, setArr] = useState(["kiwi","banana"]);
//   console.log("new array --->",arr);

//   const handleAddFruit = () => {
//     const temp = [...arr];
//     temp.push("Mango");
//     console.log("arr:",temp);
//     setArr(temp);
//   }
//   return (
//     <div>
//       <ul>
//       {arr.map((elem) => {
//         return <li>{elem}</li>;
//       })}
//     </ul>
//     <button onClick={handleAddFruit}>Add Mango</button>
//     </div>  
// );
// };

// export default App;



import { useState } from "react";
const App = () => {
  const [arr, setArr] = useState(["kiwi","banana"]);
  console.log("new array --->",arr);

  const handleAddFruit = () => {
    setArr((prev) => {
      const temp = [...prev];
      temp.push("Mango");
      console.log("temp:",temp);
      return temp;
    });
  };
  return (
    <div>
      <ul>
      {arr.map((elem) => {
        return <li>{elem}</li>;
      })}
    </ul>
    <button onClick={handleAddFruit}>Add Mango</button>
    </div>  
);
};

export default App;