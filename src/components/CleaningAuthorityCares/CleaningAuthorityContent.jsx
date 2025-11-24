import React from "react";
import { Link } from "react-router-dom";

const CleaningAuthorityContent = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Main Content Section */}
          <main className="w-full lg:w-3/5">
            <article className="space-y-12">
              
              {/* Header */}
              <header className="text-center lg:text-left">
                <h1 className=" text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  The Cleaning Authority <span className="text-[#66a038]">CARES</span>
                </h1>
              </header>

              {/* Images Grid */}
              <div>
               
                <div className="rounded-2xl overflow-hidden shadow-lg h-[300px]">
                  <img 
                    src="/images/TCA-CARES-1.jpg" 
                    alt="Image of team in front of Donation Bags"
                    className="w-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Introduction */}
              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  With support from customers like you, The Cleaning Authority CARES is addressing hunger in our communities. Since launching in 2016, more than 200 participating locations of The Cleaning Authority in North America collected a grand total of:
                </p>
                
                {/* Total Collection Graphic */}
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <img 
                    src="/images/TCACares_TotalCollection.jpg" 
                    alt="Total collection graphic"
                    className="mx-auto max-w-md w-full"
                  />
                </div>
              </div>

              {/* Hunger Awareness Section */}
              <section className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-gray-900">
                    Why Focus on Hunger Awareness?
                  </h2>
                  
                  <div className="bg-[#DFEEf5] rounded-2xl p-8 shadow-lg">
                    <p className="text-lg text-gray-800 leading-relaxed">
                      <strong className="text-[#66a038]">Did you know</strong> more than 52 million people across North America experience food insecurity?
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed mt-4">
                      <strong className="text-[#66a038]">Did you know</strong> more than 16 million of the people without food security are under the age of 18?
                    </p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  When a person is food insecure, it means they cannot access a proper quantity of nutritious food. Often, they need to make tough decisions on what basic needs they put their money towards. This includes housing, medical bills, and purchasing nutritional food.
                </p>
              </section>

             
            </article>
          </main>

          {/* Sidebar Section */}
          <aside className="w-full lg:w-2/5 space-y-8">
            
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-[#66a038] to-[#5a9430] text-white rounded-2xl shadow-xl p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#66a038]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Save Time. Save Money.</h3>
              <a 
                href="https://tca.thecleaningauthority.com/Redirect.aspx?d=2&f=274&c=1&utm_campaign=&utm_source=&utm_medium=cpc&utm_content=&fbclid=&t=888.658.0659&sa=-1735021909"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#66a038] font-bold px-8 py-4 rounded-2xl hover:bg-gray-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Get A Free Estimate
              </a>
            </div>

         

            {/* Impact Stats */}
            <div className="bg-gradient-to-br from-[#f8fcf5] to-[#f0f7e9] rounded-2xl shadow-lg p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Impact</h4>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#66a038]">200+</div>
                  <div className="text-sm text-gray-600 mt-2">Participating Locations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#66a038]">2016</div>
                  <div className="text-sm text-gray-600 mt-2">Program Launch</div>
                </div>
              </div>
            </div>
             {/* Community Partnership Section */}
              <section className="space-y-8">
                <h2 className="text-4xl font-bold text-gray-900">
                  Partnering With Our Local Communities
                </h2>

                <div className="py-3">
                  <div className="w-96 h-44 mx-auto">
                    <img 
                      src="/images/TCA-Care.jpg" 
                      alt='A logo with a blue heart and a green leaf. Text reads: "The Cleaning Authority Cares."'
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="space-y-6 text-center">
                    <p className="text-lg text-gray-700 leading-relaxed text-left">
                      The Cleaning Authority CARES has joined the fight against hunger. Helping to provide food is a fundamental component of taking care of others, but it's not something we can do alone. Our customers, like you, have been critical to our effort.
                    </p>

                    <Link 
                      to="/how-to-help/" 
                      className="inline-block bg-[#66a038] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-[#5a9430] mx-auto"
                    >
                      Learn more about getting involved today!
                    </Link>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  We are holding campaigns throughout the year where we collect specific foods addressing a seasonal need. Not only are these campaigns helping to supply local food banks, but they are also building awareness in our communities about how prevalent food insecurity is.
                </p>
              </section>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CleaningAuthorityContent;