export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center h-full">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base">{description}</p>


      
    </div>

    
  );
}
