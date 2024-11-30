import { useState, useEffect } from "react";
import axios from "axios";

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
      <h1 className="text-center text-2xl font-bold mt-5">
        Welcome to SkillSwap
      </h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
