import { useState, useEffect } from "react";
import axios from "axios";
import Login from "./pages/Login";


function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/test')
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Error connecting to the server:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Skill Swap</h1>
      <p>{message}</p>
      <Login/>
    </div>
  );
}

export default App;