import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./../index.css"

const Home = () => {
  return (
    <>
      <Navbar />
     

      <section className="bg-[rgb(247,220,186)] min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div>
            <h1 className="text-5xl font-bold">
              Healthy Skin <br />
              <span className="text-green-700">Starts With Care</span>
            </h1>

            <p className="text-gray-600 mt-4">
              Discover dermatologist-approved skincare products.
            </p>

            <div className="mt-6 flex gap-4">
              <button className="bg-green-800 text-white px-6 py-3 rounded-full">
                Explore Products
              </button>
              <button className="border border-green-800 px-6 py-3 rounded-full">
                Learn More
              </button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              Why Choose DermaCart?
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>✔ Dermatologist Tested</li>
              <li>✔ Suitable for All Skin Types</li>
              <li>✔ Clean Ingredients</li>
              <li>✔ Trusted Brands</li>
            </ul>
          </div>

        </div>
      </section>
       <Footer/>
    </>
    
  );
  
};

export default Home;