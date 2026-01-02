import { MdEmail } from "react-icons/md";
import { HiCalendar } from "react-icons/hi";

export default function GetInTouchSection() {
  return (
    <section className="bg-pink-600 py-8">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">

        {/* Title */}
        <h2 className="text-5xl font-extrabold mb-6">
          Let’s see if we’re a fit
        </h2>

        {/* Description */}
        <p className="text-lg text-pink-100 max-w-2xl mx-auto mb-12">
          If you run an agency or startup and need more engineering capacity, let’s talk.
          We’ll keep it simple: a short call, zero pressure, and clear next steps only if it makes sense.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-8">
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-full transition"
          >
            <HiCalendar className="text-xl" />
            Book a 20-minute call
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center justify-center gap-2 text-pink-100 text-sm">
          <MdEmail className="text-lg" />
          <span>
            Or email{" "}
            <a
              href="mailto:hello@us.adroit360.com"
              className="underline hover:text-white"
            >
              hello@us.adroit360.com
            </a>{" "}
            with a short description of what you’re building.
          </span>
        </div>

      </div>
    </section>
  );
}
