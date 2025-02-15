import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth"; // Combined Login and Signup component
import Home from "./pages/Home";

function App() {
  const ConditionalNavbar = () => {
    const location = useLocation();
    const hideNavbarRoutes = ["/", "/auth"]; // Hide Navbar on Auth page
    return !hideNavbarRoutes.includes(location.pathname) ? <Navbar /> : null;
  };

  return (
    <BrowserRouter>
      {/* Conditionally render Navbar */}
      <ConditionalNavbar />

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Auth />} /> {/* Combined Login and Signup */}
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;