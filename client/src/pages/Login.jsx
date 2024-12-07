import "./Login.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import gimg from "../assets/google-icon.svg";
import limg from "../assets/linkedin-icon.svg";
import logo from "/SSlogo.png";

const Login = () => {
  const [text] = useTypewriter({
    words: [
      "Unlock your potential with global expertise",
      "Grow with global experts",
      "Learn. Connect. Grow",
    ],
    loop: true,
    typeSpeed: 60, // Slightly faster typing speed for better engagement
    deleteSpeed: 50, // Faster delete speed for a smoother transition
    delaySpeed: 1000, // Shortened delay between words to keep users engaged
  });
  

  return (
    <>
      <div className="container">
        <div className="right-container">
          <h1>Why Join SkillSwap?</h1>
          <span className="moving-text">
            <h2>{text}</h2>
            <span className="cursor">
              <Cursor />
            </span>
          </span>
        </div>
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
          <p className="signup-link">
            Don&apos;t have an account? <a href="/">Sign Up</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
