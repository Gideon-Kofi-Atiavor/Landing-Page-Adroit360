import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`bg-gray-900 dark:bg-black text-gray-300 transition-all duration-1000 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Adroit 360
            </h3>
            <p className="text-sm leading-relaxed">
              We help brands grow through creative design, digital marketing,
              and innovative technology solutions.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MdEmail className="text-xl text-indigo-400" />
                <span>hello@adroit360.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MdPhone className="text-xl text-indigo-400" />
                <span>+1 (234) 567-890</span>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 my-10"></div>

        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Adroit 360. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
