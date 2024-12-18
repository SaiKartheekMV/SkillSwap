
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {Route, Routes, BrowserRouter} from 'react-router-dom'


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path = "/dashboard" element = {<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;