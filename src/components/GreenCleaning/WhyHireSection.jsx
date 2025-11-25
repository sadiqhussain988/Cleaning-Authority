import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const WhyHireSection = () => {
  const [isVisible, setIsVisible] = useState(false)
 

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className='min-h-screen bg-gradient-to-br from-white via-blue-50 to-green-50 py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
          {/* Main Content Section */}
          <div className='lg:w-3/5'>
            <div className='space-y-8'>
              {/* Header Section */}
              <div
                className={`space-y-6 transform transition-all duration-700 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
              >
                <div className='relative '>
                  <div className='absolute -left-3 md:-left-4 top-0 w-2 h-16 bg-[#66a038] rounded-full animate-pulse'></div>
                  <h1 className='text-4xl font-bold text-gray-900 leading-tight'>
                    Environmentally Responsible{' '}
                    <span className='text-[#66a038]'>Cleaning Products</span>
                  </h1>
                </div>

                <h2 className='text-2xl lg:text-3xl font-semibold text-[#0079c1] leading-relaxed'>
                  We Believe a Clean Earth Is as Important as a Clean Home
                </h2>

                <p className='text-lg text-gray-600 leading-relaxed'>
                  At The Cleaning Authority, we believe in doing our part to
                  protect the environment. That is why we, as a company, are so
                  committed to using products that are safe for the Earth.
                  Specifically, each of our locations use cleaning products that
                  are environmentally responsible or sustainable.
                </p>
              </div>

              {/* First Callout */}
              <div
                className={`bg-gradient-to-r from-[#0079c1] to-[#005a8c] rounded-2xl p-8 shadow-2xl transform transition-all duration-700 hover:scale-[1.02] ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
              >
                <div className='space-y-4'>
                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm'>
                      <svg
                        className='w-6 h-6 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                        />
                      </svg>
                    </div>
                    <p className='text-2xl font-bold text-white'>
                      Get an Impeccable Clean—Every Time
                    </p>
                  </div>
                  <p className='text-white/90 text-lg'>
                    Our Detail-Clean Rotation System® has been proven effective
                    in 20 million cleans.
                  </p>
                  <Link
                    to='/detail-clean-rotation-system'
                    className='inline-flex items-center px-8 py-4 bg-[#66a038] hover:bg-[#558c2d] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group'
                  >
                    Learn About Our Cleaning System
                    <svg
                      className='w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* ECOLOGO Section */}
              <div
                className={`space-y-4 transform transition-all duration-700 delay-200 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
              >
                <div className='flex items-center space-x-4'>
                  <div className='w-10 h-10 bg-[#66a038] rounded-full flex items-center justify-center'>
                    <svg
                      className='w-5 h-5 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900'>
                    ECOLOGO® Certified
                  </h3>
                </div>
                <p className='text-gray-600 leading-relaxed'>
                  The{' '}
                  <Link
                    to='https://www.ul.com/resources/ecologo-certification-program'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-[#66a038] hover:text-[#558c2d] font-semibold underline transition-colors duration-200'
                  >
                    ECOLOGO
                  </Link>{' '}
                  program offers credible third-party certification of products
                  and services to build and strengthen trust between buyers and
                  suppliers, as well as customers and manufacturers. ECOLOGO
                  Certified products are certified for reduced environmental
                  impact from UL Environment.
                </p>
              </div>

              {/* Second Callout */}
              <div
                className={`bg-gradient-to-r from-[#DFEEF5] to-blue-100 rounded-2xl p-8 border-l-4 border-[#0079c1] transform transition-all duration-700 delay-300 hover:shadow-xl ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
              >
                <div className='space-y-6'>
                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 bg-[#0079c1] rounded-full flex items-center justify-center'>
                      <svg
                        className='w-6 h-6 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </div>
                    <p className='text-2xl font-bold text-gray-900'>
                      Stop Coming Home to a Second Job!
                    </p>
                  </div>
                  <p className='text-gray-700 text-lg'>
                    Invest in your free time with our services. Get started with
                    a personalized estimate!
                  </p>
                  <div>
                    <Link
                      to='https://tca.thecleaningauthority.com/Redirect.aspx?d=2&f=274&c=1&utm_campaign=&utm_source=&utm_medium=&utm_content=&fbclid=&t=888.658.0659&sa=-1736996442'
                      className='inline-flex items-center justify-center px-8 py-4 bg-[#66a038] hover:bg-[#558c2d] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg group'
                    >
                      Immediate Online Estimate
                      <svg
                        className='w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M14 5l7 7m0 0l-7 7m7-7H3'
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Final Section */}
              <div
                className={`space-y-6 transform transition-all duration-700 delay-400 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
              >
                <h2 className='text-2xl lg:text-3xl font-semibold text-gray-900'>
                  Call for More Information About Our Green Cleaning Services!
                </h2>

                <p className='text-gray-600 leading-relaxed'>
                  Ready to learn more or schedule an appointment for{' '}
                  <Link
                    to='/housecleaning'
                    className='text-[#66a038] hover:text-[#558c2d] font-semibold transition-colors duration-200'
                  >
                    recurring house cleanings
                  </Link>{' '}
                  or a{' '}
                  <Link
                    to='/onetimeclean'
                    className='text-[#66a038] hover:text-[#558c2d] font-semibold transition-colors duration-200'
                  >
                    one-time cleaning
                  </Link>
                  ? Schedule your free personalized estimate with our experts
                  today.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className='lg:w-2/5'>
            <div className='space-y-6'>
              {/* Navigation Sidebar */}
              <div
                className={`bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-700 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
              >
                <div className='bg-gradient-to-r from-[#66a038] to-[#558c2d] px-6 py-5'>
                  <h2 className='text-xl font-bold text-white flex items-center'>
                    <svg
                      className='w-5 h-5 mr-3 transform group-hover:rotate-12 transition-transform duration-300'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 10V3L4 14h7v7l9-11h-7z'
                      />
                    </svg>
                    Why Hire Us?
                  </h2>
                </div>
                <nav>
                  <ul className='divide-y divide-gray-100'>
                    {[
                      {
                        href: '/detail-clean-rotation-system',
                        text: 'Detail-Clean Rotation System'
                      },
                      { href: '/green-cleaning', text: 'Green Cleaning' , current: true },
                      {
                        href: '/satisfaction-guaranted',
                        text: 'Satisfaction Guaranteed'
                      },
                      {
                        href: '/cleaning-frequencies',
                        text: 'Cleaning Frequencies'
                      },
                      {
                        href: '/bonded-insured',
                        text: 'Bonded & Insured',
                       
                      },
                      {
                        href: '/fully-trained-employees',
                        text: 'Fully Trained Employees'
                      },
                      { href: '/mytca-app', text: 'MyTCA App' },
                      {
                        href: '/the-cleaning-authority-cares',
                        text: 'The Cleaning Authority CARES'
                      }
                    ].map((item, index) => (
                      <li
                        key={index}
                        className={`transition-all duration-300 group 
        hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 
        ${
          item.current
            ? 'bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-[#66a038]'
            : ''
        }
      `}
                      >
                        <Link
                          to={item.href}
                          className='flex items-center justify-between px-6 py-4 text-gray-700 hover:text-[#66a038] transition-all duration-300 group-hover:pl-8'
                        >
                          {/* Text */}
                          <span
                            className={`${
                              item.current
                                ? 'font-semibold text-[#66a038]'
                                : 'font-medium'
                            }`}
                          >
                            {item.text}
                          </span>

                          {/* Arrow */}
                          <svg
                            className='w-4 h-4 text-gray-400 transform group-hover:translate-x-1 transition-transform duration-300'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M9 5l7 7-7 7'
                            />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* EPA Section */}
              <div
                className={`bg-white rounded-2xl p-6 shadow-2xl transform transition-all duration-700 delay-200 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
              >
                <div className='flex items-center space-x-4 mb-4'>
                  <div className='w-10 h-10 bg-[#0079c1] rounded-full flex items-center justify-center'>
                    <svg
                      className='w-5 h-5 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold text-gray-900'>
                    EPA Safer Choice
                  </h3>
                </div>
                <p className='text-gray-600 leading-relaxed'>
                  When you see a product with the EPA Safer Choice label, it
                  means that every ingredient has been reviewed by EPA
                  scientists. Only products meeting the{' '}
                  <Link
                    to='https://www.epa.gov/saferchoice/standard'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-[#66a038] hover:text-[#558c2d] font-semibold underline transition-colors duration-200'
                  >
                    Safer Choice Standard
                  </Link>{' '}
                  can carry this label.
                </p>
              </div>

              {/* CTA Sidebar */}
              <div
                className={`bg-gradient-to-br from-[#0079c1] to-[#005a8c] rounded-2xl p-6 text-white shadow-2xl transform transition-all duration-700 delay-300 hover:scale-[1.02] ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
              >
                <div className='flex items-start space-x-4'>
                  <div className='flex-shrink-0 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg'>
                    <svg
                      className='w-7 h-7 text-[#66a038]'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V9ZM19 9H14V3L19 9Z' />
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <p className='text-xl font-bold mb-3'>
                      Save Time. Save Money.
                    </p>
                    <Link
                      to='https://tca.thecleaningauthority.com/Redirect.aspx?d=2&f=274&c=1&utm_campaign=&utm_source=&utm_medium=cpc&utm_content=&fbclid=&t=888.658.0659&sa=-1736996442'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center justify-center w-full px-6 py-4 bg-white text-[#66a038] font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg group'
                    >
                      Get A Free Estimate
                      <svg
                        className='w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M14 5l7 7m0 0l-7 7m7-7H3'
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Final CTA */}
              <div
                className={`bg-gradient-to-r from-[#DFEEF5] to-blue-100 rounded-2xl p-6 border-2 border-[#66a038] transform transition-all duration-700 delay-400 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
              >
                <p className='text-gray-700 text-center font-semibold'>
                  Ready for a clean, healthy home? Call The Cleaning Authority
                  today at{' '}
                  <a
                    href='tel:9499905795'
                    className='text-[#0079c1] hover:text-[#005a8c] font-bold transition-colors duration-200'
                  >
                    (949) 990-5795
                  </a>{' '}
                  for your{' '}
                  <Link
                    to='https://tca.thecleaningauthority.com/Redirect.aspx?d=2&f=274&c=1&utm_campaign=&utm_source=&utm_medium=&utm_content=&fbclid=&t=888.658.0659&sa=-1736996442'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-[#66a038] hover:text-[#558c2d] font-bold underline transition-colors duration-200'
                  >
                    free estimate
                  </Link>
                  !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyHireSection
