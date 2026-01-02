import { useState, useEffect } from "react";
import { HiArrowUp } from "react-icons/hi";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) { // show button after scrolling 300px
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 rounded-full bg-indigo-600 text-white shadow-lg transition-opacity duration-500 
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      aria-label="Scroll to top"
    >
      <HiArrowUp size={24} />
    </button>
  );
}
