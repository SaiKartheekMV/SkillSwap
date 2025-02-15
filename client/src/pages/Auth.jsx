import React, { useState } from "react";
import "./Auth.css"; // Import the updated CSS
import gimg from "../assets/google-icon.svg";
import limg from "../assets/linkedin-icon.svg";
import logo from "/SSlogo.png";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Signup

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between Login and Signup
  };

  return (
    <div className="auth-container">
      {/* Left Container (Login) */}
      <div className={`left-container ${isLogin ? "active" : "inactive"}`}>
        {isLogin ? (
          <>
            <img src={logo} alt="icon" className="logo" />
            <h2 className="h2">Skill Swap</h2>
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
            <div className="input-container">
              <input
                type="password"
                required
                className="input-field"
                placeholder=" "
              />
              <label className="input-label">Enter Your Password</label>
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
            <p className="toggle-link">
              Don&apos;t have an account?{" "}
              <a href="#" onClick={toggleForm}>
                Sign Up
              </a>
            </p>
          </>
        ) : (
          <div className="inactive-side">
            <h1>Join SkillSwap Today!</h1>
            <p>Unlock your potential with global experts.</p>
            <p>Grow your skills, connect with peers, and achieve your goals.</p>
          </div>
        )}
      </div>

      {/* Right Container (Signup) */}
      <div className={`right-container ${isLogin ? "inactive" : "active"}`}>
        {!isLogin ? (
          <>
            <h1>Why Join SkillSwap?</h1>
            <div className="moving-text">
              <h2>Learn. Connect. Grow.</h2>
            </div>
            <div className="input-container">
              <input
                type="text"
                required
                className="input-field"
                placeholder=" "
              />
              <label className="input-label">Full Name</label>
            </div>
            <div className="input-container">
              <input
                type="email"
                required
                className="input-field"
                placeholder=" "
              />
              <label className="input-label">Enter Your Email</label>
            </div>
            <div className="input-container">
              <input
                type="password"
                required
                className="input-field"
                placeholder=" "
              />
              <label className="input-label">Create Password</label>
            </div>
            <div className="input-container">
              <input
                type="password"
                required
                className="input-field"
                placeholder=" "
              />
              <label className="input-label">Confirm Password</label>
            </div>
            <span className="continue">
              <p>Sign Up</p>
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
            <p className="toggle-link">
              Already have an account?{" "}
              <a href="#" onClick={toggleForm}>
                Log In
              </a>
            </p>
          </>
        ) : (
          <div className="inactive-side">
            <h1>Welcome Back!</h1>
            <p>Log in to continue your journey with SkillSwap.</p>
            <p>Grow your skills, connect with peers, and achieve your goals.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;