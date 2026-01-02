
import heroImage from '../assets/hero.png';
export default function HeroSection() {
  return (
    <section className="pt-28 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Build with a senior engineering team for the cost of one U.S. hire
          </h1>

          <p className="text-lg text-gray-600 mb-6 max-w-xl">
            We are Adroit 360. Our Ghana-based engineers build systems for brands
            like Coca-Cola, MTN and IFC. Now we support U.S. agencies and startups
            with full product teams at a fraction of U.S. rates.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li>✔ Senior full-stack and AI engineers</li>
            <li>✔ Native English, live timezone overlap</li>
            <li>✔ Enterprise delivery standards</li>
            <li>✔ U.S. company, U.S. contracts, Ghana delivery</li>
          </ul>

          <button className="mt-6 px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition duration-300">
            <span>📞</span>
          Book a 20min Call
      </button>

      <div className="mt-4 flex items-center gap-2 text-gray-600 text-sm">
    <span>📧</span>
    <p> Or email us at <a href="mailto:hello@adroit360.com" className="hover:underline">hello@adroit360usa.com</a></p>
    

      
    
  </div>
        </div>

        {/* The image on the right side of the page */}
        <div className="flex justify-center lg:justify-end min-h-full mt-10 md:mt-0">
  <img
    src={heroImage}
    alt="Adroit 360 team"
    className="max-w-xl h-auto rounded-3xl shadow-xl animate-zoomIn"
  />
</div>

      </div>
    </section>
  );
}
