import { HiCube, HiDeviceMobile, HiOfficeBuilding } from "react-icons/hi";

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      icon: HiCube,
      title: "Beverage logistics platform",
      description:
        "We built and scaled an ordering and logistics system for a major beverage brand, handling thousands of orders and complex delivery rules."
    },
    {
      icon: HiDeviceMobile,
      title: "Telco customer tools",
      description:
        "We supported a telecom giant with digital tools that improved customer experience and internal workflows."
    },
    {
      icon: HiOfficeBuilding,
      title: "Legal and enterprise platforms",
      description:
        "We delivered secure, workflow-heavy platforms for institutional and legal clients, with strict uptime and data requirements."
    }
  ];

  return (
    <section 
      id="case-studies" 
      className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-20">
          What we’ve delivered
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {caseStudies.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl border border-gray-200 p-10 shadow-sm hover:shadow-xl transition"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-900 mb-6">
                  <Icon className="text-pink-500 w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
