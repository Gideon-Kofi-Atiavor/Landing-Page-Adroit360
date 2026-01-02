import ServiceCard from './ServiceCard';

export default function WhatWeDoSection() {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-white-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-10">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr bg-white-40 rounded-3xl p-8 shadow-3xl">
    
          <ServiceCard
            icon="🎨"
            title="Branding"
            description="Effective branding delves deep into consumer research to put forward a strategy that fulfills the wants and needs of your target market. Once we have perfected your brand identity we work on bringing your company to life."
          />

          <ServiceCard
            icon="📷"
            title="Photography"
            description="We have a team of creative photographers who have experience in a wide range of photography. Event coverage, portraits, and professional headshots. We cover the entire process and ensure the end product matches your brand’s specific aesthetic."
          />

          <ServiceCard
            icon="📱"
            title="Digital Marketing"
            description="Our digital marketing team creates a strategic content calendar that features our client’s vision and speaks to the heart of its publics. Our content managers create a post that is engaging and enhances the brand presence of their business online."
          />

          <ServiceCard
            icon="💻"
            title="Software Development"
            description="We develop tailored IT software applications that serve the very needs of clients on all IT-enabled gadgets. As a software development company, our team of experts have the ability to employ emerging new technologies that address complex problems facing businesses. Our software application solutions give more flexibility and a competitive advantage to businesses."
          />

          <ServiceCard
            icon="🌍"
            title="Web Design & Development"
            description="As a web agency, we are always obsessed with every detail that will ensure the building of a very robust website for companies and businesses which is appealing to their clients yet easily navigable to all. Our team of graphic designers’, project managers, and marketers will work hand in hand with your company to ensure your vision is translated into your website which helps to communicate your objectives well to your publics."
          />

          <ServiceCard
            icon="✨"
            title="Creative Design"
            description="Our reliable creative design team at Adroit 360 view branding and packaging design as a critical tool to create brand awareness. We collaborate with our clients to define organization profiles and engaging designs, flash animation, landing pages, and 3D signage that appeals to the emotions and interest of its publics."
          />
        </div>
      </div>
    </section>
  );
}
