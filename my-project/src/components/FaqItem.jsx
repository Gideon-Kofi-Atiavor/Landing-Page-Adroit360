import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

export default function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left focus:outline-none"
      >
        <span className="font-medium text-gray-900">{question}</span>
        <span className="text-indigo-500">
          {isOpen ? <HiChevronUp /> : <HiChevronDown />}
        </span>
      </button>

      {isOpen && (
        <p className="mt-3 text-gray-700">{answer}</p>
      )}
    </div>
  );
}
