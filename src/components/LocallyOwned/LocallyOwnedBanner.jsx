import React from 'react'

const LocallyOwnedBanner = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-stretch justify-between rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white group relative">

      {/* Image Section - Takes more space */}
      <div className="w-full lg:w-2/3 h-[300px] md:h-[400px] lg:h-auto relative overflow-hidden">
        {/* Image with Enhanced Styling */}
        <img
          src="/images/TCA-cleaners.jpg"
          alt="Professional cleaning services"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        
        {/* Overlay Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Frame Border */}
        <div className="absolute inset-4 border-2 border-white/30 rounded-xl transform group-hover:scale-95 transition-transform duration-500"></div>
        
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      </div>

      {/* Text Section - Less width and overlaps */}
      <div className="w-full lg:w-1/3 flex items-center justify-center bg-gradient-to-br from-[#66a038] to-[#5a8f32] relative overflow-hidden p-8 md:p-12 lg:absolute lg:right-8 lg:top-8 lg:bottom-8 lg:rounded-2xl">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22/%3E%3Ccircle%20cx%3D%2213%22%20cy%3D%2213%22%20r%3D%223%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        {/* Animated Border Effect */}
        <div className="absolute inset-0 border-4 border-white/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-700"></div>
        
        {/* Content Container */}
        <div className="relative text-center space-y-6 transform group-hover:scale-105 transition-transform duration-500">
          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-white/40 rounded-tl-lg"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-white/40 rounded-br-lg"></div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            <span className="block bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
              Locally Owned
            </span>
          </h2>
        </div>
      </div>

    </div>
  )
}

export default LocallyOwnedBanner