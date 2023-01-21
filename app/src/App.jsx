import { useState } from "react";
import axios from "axios";
import "./styles.css";

function App() {
  const [icon, setIcon] = useState();

  function onSubmitForm(e) {
    e.preventDefault();

    axios.get("http://localhost:3333")
      .then(res => console.log(res))
  }

  function onChangeIcon(e) {
    const url = URL.createObjectURL(e.target.files[0])
    setIcon(url);
  }

  return (
    <div className="wrapper">  
      <form 
        className="form"
        onSubmit={(e) => onSubmitForm(e)}
      >
        <header>
          <h2>icon</h2>
          
          <div>
            <img src={icon} />
          </div>

          <input type="file" onChange={(e) => onChangeIcon(e)} />
        </header>

        <label>
          name: <input type="text" />
        </label>
        
        <label>
          email: <input id="name" type="email" />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
