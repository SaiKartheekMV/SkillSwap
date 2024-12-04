import "./Login.css";
import gimg from "../assets/google-icon.svg";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="right-container">Right Side container</div>
        <div className="left-container">
          <img src="" alt="icon" />
          <h2>Skill Swap</h2>
          <div className="inputBox">
            <input type="email" required />
            <span>Email</span>
          </div>
          <h3 className="or">OR</h3>
          <div className="googlelogin">
          <img src={gimg} className="gimg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
