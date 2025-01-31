import "./Home.css";
import conImg from '../assets/connectImg.jpg'
import learnImg from '../assets/learnImg.jpg'
import shareImg from '../assets/shareImg.jpg'
const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to SkillSwap</h1>
          <p>
            Connect with the best talent, learn new skills, and share your
            knowledge effortlessly.
          </p>
          <button className="btn-primary">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose SkillSwap?</h2>
        <div className="features-grid">
          {/* Feature 1 */}
          <div className="feature-card">
            <img src={conImg} alt="Connect" />
            <h3>Seamless Connections</h3>
            <p>
              Find and connect with talented individuals who share your goals
              and passions.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="feature-card">
            <img src={learnImg} alt="Learn" />
            <h3>Learn from the Best</h3>
            <p>
              Gain valuable insights and skills from experienced professionals
              and peers.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="feature-card">
            <img src={shareImg} alt="Share" />
            <h3>Share Your Expertise</h3>
            <p>
              Showcase your skills and teach others to create a collaborative
              community.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Ready to SkillSwap?</h2>
        <p>Join us today and start your journey of connecting, learning, and sharing!</p>
        <button className="btn-primary">Sign Up Now</button>
      </section>
    </div>
  );
};

export default Home;
