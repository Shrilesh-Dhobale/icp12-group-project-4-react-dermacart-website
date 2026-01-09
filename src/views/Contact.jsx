import { useState } from "react";
import { FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // reset message after 4 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#f7f3ee] px-6 py-16">
      <div className="mx-auto max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-center text-[#4b3b2a]">
          Contact Us
        </h2>
        <p className="mt-2 text-center text-[#6b5a47]">
          We are here to help you
        </p>

        {/* Success Message */}
        {submitted && (
          <div className="mt-6 rounded-lg bg-green-100 text-green-700 px-4 py-3 text-center font-medium">
            ✅ Your message has been sent successfully!
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-[#4b3b2a]">
              Full Name
            </label>
            <input
              type="text"
              required
              className="mt-2 w-full rounded-lg border border-[#d6cfc4] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b89b7a]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[#4b3b2a]">
              Email Address
            </label>
            <input
              type="email"
              required
              className="mt-2 w-full rounded-lg border border-[#d6cfc4] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b89b7a]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-[#4b3b2a]">
              Message
            </label>
            <textarea
              rows="4"
              required
              className="mt-2 w-full rounded-lg border border-[#d6cfc4] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b89b7a]"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#4b3b2a] py-3 text-white font-semibold hover:bg-[#b89b7a] transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Icons */}
        <div className="mt-10 text-center">
          <p className="text-[#4b3b2a] font-medium mb-4">
            Connect with us
          </p>

          <div className="flex justify-center gap-8 text-2xl text-[#4b3b2a]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#b89b7a] transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#b89b7a] transition"
            >
              <FaTwitter />
            </a>

            <a
              href="mailto:support@dermacart.com"
              className="hover:text-[#b89b7a] transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
