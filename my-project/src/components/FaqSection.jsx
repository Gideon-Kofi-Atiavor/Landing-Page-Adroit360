import FaqItem from "./FaqItem";

export default function FaqSection() {
  const faqs = [
    {
      question: "Where is your team based?",
      answer: "Our engineering hub is in Accra, Ghana. Our U.S. entity allows you to contract and pay locally while we deliver from Ghana."
    },
    {
      question: "What time zones do you work in?",
      answer: "We overlap with U.S. mornings and early afternoons, making daily stand-ups and real-time collaboration easy."
    },
    {
      question: "Who owns the code and IP?",
      answer: "You do. All IP and code we create as part of the engagement belongs to you or your client."
    },
    {
      question: "Do you work directly with our clients?",
      answer: "Up to you. For agencies, we can work fully white-label, or join selected calls as your 'engineering team'."
    },
    {
      question: "What tech stack do you work with?",
      answer: "Mainly JavaScript/TypeScript (React, Next.js, Node), Python, modern cloud platforms (AWS, Azure), plus common databases and CI/CD tooling."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-pink-50 border-t  transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-10">
          Questions teams usually asks US
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
