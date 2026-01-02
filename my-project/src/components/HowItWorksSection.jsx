export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-32 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-6">
          How We Work With You
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-20 text-lg">
          A simple, transparent process designed to deliver results fast and efficiently.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Step 1 */}
          <div className="text-center p-10 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <div className="text-pink-600 text-5xl font-bold mb-6">01</div>
            <h3 className="text-xl font-semibold mb-4">Quick call (20 minutes)</h3>
            <p className="text-gray-600">
              We learn about your projects, tech stack, and where your current capacity is breaking.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center p-10 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <div className="text-pink-600 text-5xl font-bold mb-6">02</div>
            <h3 className="text-xl font-semibold mb-4">Shape the engagement</h3>
            <p className="text-gray-600">
              We agree on the model: white-label, dedicated squad, or project-based. You see a clear plan, timeline, and monthly cost.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center p-10 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <div className="text-pink-600 text-5xl font-bold mb-6">03</div>
            <h3 className="text-xl font-semibold mb-4">Onboard our team</h3>
            <p className="text-gray-600">
              We join your tools (Slack, Jira, GitHub, Notion, etc.). We set sprint length, demo days, and communication rhythm.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center p-10 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <div className="text-pink-600 text-5xl font-bold mb-6">04</div>
            <h3 className="text-xl font-semibold mb-4">Build and iterate</h3>
            <p className="text-gray-600">
              We ship in 2-week sprints with demos, code reviews, and regular check-ins. You get predictable output and transparent progress.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
