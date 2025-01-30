

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to SkillSwap</h1>
          <p className="text-xl mb-8">
            Connect with the best talent, learn new skills, and share your knowledge effortlessly.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose SkillSwap?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src="/assets/connect.svg"
                alt="Connect"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Seamless Connections</h3>
              <p>
                Find and connect with talented individuals who share your goals and passions.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src="/assets/learn.svg"
                alt="Learn"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Learn from the Best</h3>
              <p>
                Gain valuable insights and skills from experienced professionals and peers.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src="/assets/share.svg"
                alt="Share"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Share Your Expertise</h3>
              <p>
                Showcase your skills and teach others to create a collaborative community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to SkillSwap?</h2>
          <p className="text-xl mb-6">
            Join us today and start your journey of connecting, learning, and sharing!
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
