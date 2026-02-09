import React from 'react'

const Booking = () => {
  return (
     <div className="bg-[#16130F] py-20 px-6 md:px-20">
      <div className="max-w-3xl mx-auto">
        <p className="text-2xl uppercase tracking-wide text-[#E85D04]/80 mb-3">
          Book a Session
        </p>
        <h2 className="text-3xl md:text-4xl text-white mb-4">
          Let’s Work Together
        </h2>
        <p className="text-[#B5B5B5] mb-10">
          Tell us about your project and we’ll get back to you shortly.
        </p>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-transparent border border-[#2A2A2A] px-4 py-3 text-white placeholder-[#777] focus:outline-none focus:border-[#E85D04]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-transparent border border-[#2A2A2A] px-4 py-3 text-white placeholder-[#777] focus:outline-none focus:border-[#E85D04]"
          />
          <textarea
            rows="4"
            placeholder="Tell us about your shoot"
            className="w-full bg-transparent border border-[#2A2A2A] px-4 py-3 text-white placeholder-[#777] focus:outline-none focus:border-[#E85D04]"
          />
          <button
            type="submit"
            className="bg-[#E85D04] text-black px-8 py-3 rounded-md font-medium hover:opacity-90 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking