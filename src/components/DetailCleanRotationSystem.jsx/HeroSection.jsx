import React from 'react'

const HeroSection = () => {
  return (
    <section className='relative py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-white overflow-hidden'>
      {/* Advanced Background Elements */}
      <div className='absolute inset-0'>
        {/* Geometric Pattern */}
        <div className='absolute top-0 left-0 w-full h-full opacity-[0.03]'>
          <div className='grid grid-cols-12 gap-4 h-full'>
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className='border-r border-[#0079c1] last:border-r-0'></div>
            ))}
          </div>
        </div>
        
        {/* Gradient Orbs */}
        <div className='absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#0079c1]/10 to-[#66a038]/10 rounded-full blur-3xl animate-float-slow'></div>
        <div className='absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-[#0079c1]/10 to-blue-200/10 rounded-full blur-3xl animate-float-slower'></div>
        
        {/* Subtle Grid */}
        <div className='absolute inset-0 bg-[linear-gradient(rgba(0,121,193,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,121,193,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]'></div>
      </div>

      {/* Content */}
      <div className='relative max-w-4xl mx-auto text-center'>
        <div className='mb-8'>
          <h1 className='text-4xl sm:text-5xl md:text-5xl font-bold text-[#0079c1] mb-4 tracking-tight whitespace-nowrap'>
            Our Detail-Clean Rotation System®
          </h1>
          <div className='w-24 h-1 bg-gradient-to-r from-[#0079c1] to-[#66a038] mx-auto mb-6'></div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-8 tracking-wide'>
            Services You Can Trust
          </h2>
        </div>

        <div className='relative'>
          <p className='text-gray-700 text-lg sm:text-xl md:text-xl leading-relaxed max-w-5xl mx-auto font-light tracking-wide'>
            We at The Cleaning Authority use our{' '}
            <strong className='font-semibold text-gray-900 bg-gradient-to-r from-[#0079c1]/10 to-transparent px-1 py-0.5 rounded'>
              Professional House Cleaning Checklist
            </strong>{' '}
            to ensure that nothing is missed when your home is thoroughly cleaned.<br/>
            As part of our{' '}
            <a
              href='/our-cleaning-services/house-cleaning/'
              className='text-[#66a038] hover:text-[#0079c1] font-semibold transition-all duration-300 hover:underline underline-offset-4'
            >
              house cleaning services
            </a>
            , we begin with a fully detailed clean within the first two cleans.<br/>
            From there, we continue with a careful system that divides your home<br/>
            into four zones and rotates which is deep cleaned. This system ensures
            your home gets the level of clean it needs at the right frequency.
          </p>
          
          {/* Decorative corner accents */}
          <div className='absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#0079c1]/20'></div>
          <div className='absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#0079c1]/20'></div>
          <div className='absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[#66a038]/20'></div>
          <div className='absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#66a038]/20'></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes float-slower {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(10px) rotate(-90deg);
          }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default HeroSection