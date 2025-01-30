import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Home from "./pages/Home";


function App() {
  const ConditionalNavbar = () => {
    const location = useLocation();
    const hideNavbarRoutes = ["/"];
    return !hideNavbarRoutes.includes(location.pathname) ? <Navbar /> : null;
  };

  return (
    <BrowserRouter>
      {/* Conditionally render Navbar */}
      <ConditionalNavbar />

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
