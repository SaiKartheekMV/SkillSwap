
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import {Route, Routes, BrowserRouter} from 'react-router-dom'


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Login/>}/>
        <Route path = "/dashboard" element = {<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;