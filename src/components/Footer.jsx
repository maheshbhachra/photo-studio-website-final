import React from 'react'

const Footer = () => {
  return (
      <div className="bg-[#0F0F0F] px-6 md:px-20 py-12">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-[#E85D04]/90 text-lg font-medium">
            Pixel Perfection Studio
          </h3>
            <p className="text-[#777] text-sm mt-1">
            Capturing moments that last forever.
            </p>
        </div>

        <div className="flex gap-6 text-md text-[#B5B5B5]">
          <a href="#" className="hover:text-[#E85D04] transition">
            Instagram
          </a>
          <a href="#" className="hover:text-[#E85D04] transition">
            Facebook
          </a>
          <a href="#" className="hover:text-[#E85D04] transition">
            Twitter
          </a>
        </div>
        
        <p className="text-[#555] text-sm text-center md:text-right">
          © 2026 LensCraft Studio. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer