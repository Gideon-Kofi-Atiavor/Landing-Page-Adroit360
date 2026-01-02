export default function PricingSection() {
  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-20">
          Simple, transparent engagement models
        </h2>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="rounded-3xl border border-gray-200 p-10 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">
              Agency Overflow Squad
            </h3>

            <p className="text-gray-600 mb-8">
              Perfect for agencies needing extra capacity
            </p>

            <ul className="space-y-4 text-gray-700 mb-10">
              <li>✓ 2 full-stack engineers + QA</li>
              <li>✓ White-label, under your brand</li>
              <li>✓ Ideal for ongoing client projects</li>
            </ul>

            <button className="w-full rounded-full border border-gray-300 py-3 font-semibold hover:bg-gray-100 transition">
              Get started
            </button>
          </div>

          {/* Card 2 – Most Popular */}
          <div className="relative rounded-3xl bg-white p-10 shadow-xl border-2 border-pink-500 scale-105">

            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-100 text-pink-600 text-sm font-semibold px-4 py-1 rounded-full">
              ⭐ Most popular
            </div>

            <h3 className="text-2xl font-semibold mb-2">
              Startup Product Squad
            </h3>

            <p className="text-gray-600 mb-8">
              Best value for growing startups
            </p>

            <ul className="space-y-4 text-gray-700 mb-10">
              <li>✓ 2–3 full-stack engineers + QA</li>
              <li>✓ Part-time PM included</li>
              <li>✓ Embedded into your team and roadmap</li>
            </ul>

            <button className="w-full rounded-full bg-pink-600 text-white py-3 font-semibold hover:bg-pink-700 transition">
              Get started
            </button>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-gray-200 p-10 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">
              Fixed-scope MVP Build
            </h3>

            <p className="text-gray-600 mb-8">
              Complete project delivery
            </p>

            <ul className="space-y-4 text-gray-700 mb-10">
              <li>✓ Discovery + design + build + launch</li>
              <li>✓ Web or mobile product</li>
              <li>✓ Full documentation included</li>
            </ul>

            <button className="w-full rounded-full border border-gray-300 py-3 font-semibold hover:bg-gray-100 transition">
              Get started
            </button>
          </div>

        </div>

        {/* Footer note */}
        <p className="text-center text-gray-500 mt-16">
          Flexible pricing depends on scope, stack, and timelines. We’ll always agree on this up front.
        </p>

      </div>
    </section>
  );
}
