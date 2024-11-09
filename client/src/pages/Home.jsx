import React from "react";

const Home = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <header className="bg-blue-800 text-white h-screen flex flex-col items-center justify-center">
        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to <span className="text-yellow-400">Kaam Bolo</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            Your trusted platform to connect with skilled, verified workers for
            any service you need. Quality service, at your fingertips.
          </p>
          <a
            href="#features"
            className="bg-yellow-400 text-black px-8 py-3 rounded-md text-lg font-semibold hover:bg-yellow-500 transition duration-300"
          >
            Discover More
          </a>
        </div>
      </header>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            How It Works
          </h2>
          <div className="flex flex-wrap justify-center">
            <FeatureCard
              title="Post Your Job"
              description="Simply post what you need, and let workers find you."
            />
            <FeatureCard
              title="Connect with Pros"
              description="Chat with nearby professionals and choose the best."
            />
            <FeatureCard
              title="Enjoy Reliable Service"
              description="Get high-quality work done quickly and reliably."
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Why Choose Kaam Bolo?
          </h2>
          <div className="flex flex-wrap justify-center">
            <FeatureCard
              title="Trusted Workers"
              description="All workers are verified and have ratings to ensure quality services."
            />
            <FeatureCard
              title="Location-Based"
              description="Find skilled professionals in your locality for faster service."
            />
            <FeatureCard
              title="Easy Registration"
              description="Workers can register and showcase their skills effortlessly."
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Our Service Categories
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <CategoryCard title="Plumbing" />
            <CategoryCard title="Electrician" />
            <CategoryCard title="Painting" />
            <CategoryCard title="Carpentry" />
            <CategoryCard title="Cleaning" />
            <CategoryCard title="Appliance Repair" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            What Our Users Say
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <TestimonialCard
              name="Amit Patel"
              feedback="Kaam Bolo made it easy for me to find a reliable plumber in minutes!"
            />
            <TestimonialCard
              name="Reena Sharma"
              feedback="As an electrician, Kaam Bolo helped me connect with more clients and grow my business."
            />
            <TestimonialCard
              name="Sanya Verma"
              feedback="The best platform to find trustworthy services in my area."
            />
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="py-16 bg-blue-800 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Sign up today to find the perfect worker for your needs or register
            as a service provider and connect with clients in your area.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="/signup"
              className="bg-yellow-400 text-black px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 transition duration-300"
            >
              Sign Up
            </a>
            <a
              href="/find-a-service"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 hover:text-black transition duration-300"
            >
              Find a Service
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-800 text-white py-6 text-center">
        <p className="text-sm">
          &copy; 2024 Kaam Bolo. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ title, description }) => (
  <div className="bg-white shadow-lg p-6 m-4 rounded-lg w-64 hover:shadow-xl transition duration-300">
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

// Category Card Component
const CategoryCard = ({ title }) => (
  <div className="bg-blue-100 shadow-lg p-6 m-4 rounded-lg w-56 hover:shadow-xl transition duration-300">
    <h3 className="text-xl font-semibold">{title}</h3>
  </div>
);

// Testimonial Card Component
const TestimonialCard = ({ name, feedback }) => (
  <div className="bg-white shadow-lg p-6 m-4 rounded-lg w-80 hover:shadow-xl transition duration-300">
    <p className="text-gray-700 italic">"{feedback}"</p>
    <h4 className="text-lg font-semibold mt-4">- {name}</h4>
  </div>
);

export default Home;
