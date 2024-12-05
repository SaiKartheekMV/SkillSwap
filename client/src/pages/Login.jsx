import "./Login.css";
import gimg from "../assets/google-icon.svg";
import limg from "../assets/linkedin-icon.svg";
import logo from "/SSlogo.png";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="right-container">Right Side container</div>
        <div className="left-container">
          <img src={logo} alt="icon" className="logo" />
          <h2>Skill Swap</h2>
          <p className="tag-line">
            <span className="span-1">Connect</span>
            <span className="span-2">Collaborate</span>
            <span className="span-3">Grow</span>
          </p>
          <div className="input-container">
            <input
              type="text"
              required
              className="input-field"
              placeholder=" "
            />
            <label className="input-label">Enter Your Email</label>
          </div>
          <span className="continue">
            <p>Continue</p>
          </span>
          <span className="or">OR</span>
          <div className="googlelogin">
            <img src={gimg} className="img" alt="google-icon" />
            <p>Continue With Google</p>
          </div>
          <div className="linkedinlogin">
            <img src={limg} className="img" alt="linkedin-icon" />
            <p>Continue With Linkedin</p>
          </div>
          <div className="forget">
            <a className="fog-pd" href="">
              Forget password?
            </a>
            <a className="fog-un" href="">
              Forget Username?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
