export default function Contact() {
  return (
    <section className="bg-[#f6f1e9] py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-[#4b3b2a]">
          Contact Us
        </h2>
        <p className="mt-3 text-[#7a6a58]">
          We’d love to hear from you. Please fill out the form below.
        </p>
      </div>

      <form className="mt-12 max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-[#4b3b2a]">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="mt-2 w-full rounded-lg border border-[#d6cfc4] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c2a57c]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-[#4b3b2a]">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-2 w-full rounded-lg border border-[#d6cfc4] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c2a57c]"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-[#4b3b2a]">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="mt-2 w-full rounded-lg border border-[#d6cfc4] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c2a57c]"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-[#4b3b2a] text-white py-3 rounded-lg font-medium hover:bg-[#3a2e21] transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
