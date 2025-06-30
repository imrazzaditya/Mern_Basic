

//function re-run ---> componenet re-rendering
//react re-render's component either on 'state' or 'prop' change
//hook --> function given to use by react

import {useState} from "react";



const App = () => {
  const [monitor, remote ] = useState(0);
  console.log(monitor);

  const handleClick = () => {
    remote(monitor+1);
    console.log(monitor);
  }

return (
  <div>
    <button onClick={handleClick}>Click mE</button>
    <h2>{monitor}</h2>
  </div>
);
};

export default App;