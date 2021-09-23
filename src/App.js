import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import FormTest from './components/form';




const testDiv = (

  <div>
      <p>penis</p>
  </div>
)
const testDiv2 = (
  <div>
      <p>penos</p>
  </div>
)
function App() {
  const [hidenDiv, setHidenDiv] = useState(false);

  const toggleHiden = () => {
      setHidenDiv(!hidenDiv)
      console.log('test')
  }


  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
      <div>
        <FormTest/>
      </div>

      </body>
    </div>
  );
}

export default App;
