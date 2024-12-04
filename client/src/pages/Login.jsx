import "./Login.css";
import gimg from "../assets/google-icon.svg";
import logo from "../../public/SSlogo.png";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="right-container">Right Side container</div>
        <div className="left-container">
          <img src={logo} alt="icon" className="logo" />
          <h2>Skill Swap</h2>
          <div className="inputBox">
            <input type="email" required />
            <span>Email</span>
          </div>
          <span className="continue"><p>Continue</p></span>
          <h3 className="or">OR</h3>
          <div className="googlelogin">
          <img src={gimg} className="gimg" alt="googleicon" /> 
          <p>Continue With Google</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
