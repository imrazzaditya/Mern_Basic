// import React, { useState } from 'react';

// const App = () => {
//   const [user, setData] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const username = e.target[0].value;
//     const city = e.target[1].value;

//     setData((prev) => {
//       return [...prev, { username, city }];
//     });

//     e.target.reset(); // Optional: Clears the form after submission
//   };

//   const handleDelete = (index) => {
//     setData((prev) => {
//         const temp = [...prev];
//         temp.splice[index,1];
//         return temp;
//     })
//   }

//   return (
//     <div>
//       <h2>User Form</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Name: </label>
//         <input type="text" name="username" />

//         <label>City: </label>
//         <input type="text" name="city" />

//         <button type="submit">Submit</button>
//       </form>

//       <div>
//         {user.map((elem, index) => (
//           <div key={index}>
//             <h3>{elem.username}</h3>
//             <p>{elem.city}</p>
//             <button onClick ={() => {
//                 console.log(index);
//                 handleDelete(index);
//             }}>
//                 Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;



import { useState } from "react";

const App = () => {
  const [editIndex, setEditIndex] = useState(-1);
  const [fruits, setFruits] = useState([
    { name: "Kiwi", color: "green", price: 600 },
    { name: "Banana", color: "yellow", price: 40 },
    { name: "Apple", color: "red", price: 200 },
    { name: "Mango", color: "yellow", price: 150 },
  ]);

  return (
    <div>
      {fruits.map((elem, idx) => {
        return (
          <div key={idx} style={{ backgroundColor: elem.color, padding: "10px", margin: "10px", borderRadius: "10px" }}>
            <h2>{elem.name}</h2>
            <h2>{elem.color}</h2>
            <h2>Rs. {elem.price}</h2>
            <button
              onClick={() => {
                setEditIndex(idx);
              }}
            >
              EDIT
            </button>

            {editIndex === idx && <p>Editing this fruit...</p>}
          </div>
        );
      })}
    </div>
  );
};

export default App;
