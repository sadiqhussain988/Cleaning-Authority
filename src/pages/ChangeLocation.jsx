import React, { useState, useEffect } from 'react';
import { Search, MapPin, Clock, Star, Phone, Mail, ChevronRight } from 'lucide-react';

const ChangeLocation = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('list');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const locations = [
    {
      id: '1',
      name: 'Downtown Cleaning Center',
      address: '123 Main Street, Downtown, City 10001',
      phone: '(555) 123-4567',
      email: 'downtown@cleanauthority.com',
      hours: 'Mon-Fri: 7:00 AM - 9:00 PM, Sat-Sun: 8:00 AM - 6:00 PM',
      rating: 4.8,
      services: ['Residential Cleaning', 'Commercial Cleaning', 'Carpet Cleaning', 'Deep Cleaning'],
      distance: '0.5 miles'
    },
    {
      id: '2',
      name: 'Westside Branch',
      address: '456 Oak Avenue, Westside, City 10002',
      phone: '(555) 234-5678',
      email: 'westside@cleanauthority.com',
      hours: 'Mon-Fri: 6:00 AM - 10:00 PM, Sat-Sun: 7:00 AM - 8:00 PM',
      rating: 4.6,
      services: ['Residential Cleaning', 'Move-in/Move-out', 'Window Cleaning'],
      distance: '2.1 miles'
    },
    {
      id: '3',
      name: 'East End Office',
      address: '789 Pine Road, East End, City 10003',
      phone: '(555) 345-6789',
      email: 'eastend@cleanauthority.com',
      hours: 'Mon-Fri: 8:00 AM - 8:00 PM, Sat: 9:00 AM - 5:00 PM, Sun: Closed',
      rating: 4.9,
      services: ['Commercial Cleaning', 'Industrial Cleaning', 'Sanitization'],
      distance: '3.5 miles'
    },
    {
      id: '4',
      name: 'North District Center',
      address: '321 Elm Boulevard, North District, City 10004',
      phone: '(555) 456-7890',
      email: 'north@cleanauthority.com',
      hours: 'Mon-Sun: 24/7 Emergency Services',
      rating: 4.7,
      services: ['Emergency Cleaning', 'Biohazard Cleanup', 'Restoration'],
      distance: '5.2 miles'
    }
  ];

  const filteredLocations = locations.filter(location =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleConfirmLocation = () => {
    if (selectedLocation) {
      alert(`Location changed to: ${selectedLocation.name}`);
      // Here you would typically update the global state or make an API call
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-green-50 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
          
          {/* Main Content Section */}
          <div className="lg:w-3/5">
            <div className="space-y-6 sm:space-y-8">
              {/* Header Section */}
              <div className={`space-y-4 sm:space-y-6 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="relative">
                  <div className="absolute -left-2 sm:-left-3 md:-left-4 top-0 w-1 sm:w-2 h-12 sm:h-16 bg-[#66a038] rounded-full animate-pulse"></div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight pl-4 sm:pl-0">
                    Change Your <span className="text-[#66a038]">Service Location</span>
                  </h1>
                </div>
                
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#0079c1] leading-relaxed">
                  Find Your Nearest Cleaning Service Center
                </h2>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <p className="text-base sm:text-lg font-bold text-[#66a038] tracking-wide bg-green-50 px-4 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-green-100">
                    QUALITY SERVICE GUARANTEED
                  </p>
                </div>
              </div>

              {/* Current Location Banner */}
              <div className={`bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg sm:shadow-2xl border border-gray-100 transform transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      Current Selected Location
                    </h3>
                    <p className="text-gray-600 flex items-center text-sm sm:text-base">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                      Downtown Cleaning Center • 123 Main Street, Downtown
                    </p>
                  </div>
                  <button className="bg-[#66a038] text-white px-6 py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-[#558c2d] transition-all duration-300 transform hover:scale-105 shadow-md">
                    Change Location
                  </button>
                </div>
              </div>

              {/* Search and View Toggle */}
              <div className={`bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg sm:shadow-2xl border border-gray-100 transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 justify-between items-center">
                  {/* Search Bar */}
                  <div className="flex-1 w-full lg:max-w-md">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search by location name or address..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 sm:py-4 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#66a038] focus:border-[#66a038] transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* View Toggle */}
                  <div className="flex bg-gray-100 rounded-lg sm:rounded-xl p-1">
                    <button
                      onClick={() => setViewMode('list')}
                      className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md sm:rounded-lg transition-all duration-300 ${
                        viewMode === 'list'
                          ? 'bg-white text-[#66a038] shadow-sm font-semibold'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      List View
                    </button>
                    <button
                      onClick={() => setViewMode('map')}
                      className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md sm:rounded-lg transition-all duration-300 ${
                        viewMode === 'map'
                          ? 'bg-white text-[#66a038] shadow-sm font-semibold'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Map View
                    </button>
                  </div>
                </div>
              </div>

              {/* Locations List */}
              <div className="space-y-4 sm:space-y-6">
                {filteredLocations.map((location, index) => (
                  <div
                    key={location.id}
                    className={`bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg sm:shadow-2xl border-2 transition-all duration-500 cursor-pointer hover:shadow-xl transform hover:scale-[1.01] ${
                      selectedLocation?.id === location.id
                        ? 'border-[#66a038] bg-green-50'
                        : 'border-gray-200 hover:border-gray-300'
                    } transform transition-all duration-700 delay-${300 + index * 100} ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    onClick={() => handleLocationSelect(location)}
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-4 sm:mb-6">
                      <div className="flex-1 mb-4 sm:mb-0">
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                          {location.name}
                        </h3>
                        <p className="text-gray-600 flex items-center mb-3">
                          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                          {location.address}
                        </p>
                        <div className="flex items-center text-sm sm:text-base text-gray-600">
                          <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                          {location.hours}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center justify-end mb-2">
                          <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current mr-1" />
                          <span className="font-semibold text-gray-900 text-lg sm:text-xl">{location.rating}</span>
                          <span className="text-gray-500 ml-1">/5</span>
                        </div>
                        <span className="text-sm sm:text-base text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {location.distance}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {location.services.map((service, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-100 text-blue-800 text-sm sm:text-base rounded-full font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm sm:text-base text-gray-600 gap-3">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                        <span className="flex items-center">
                          <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                          {location.phone}
                        </span>
                        <span className="flex items-center">
                          <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                          {location.email}
                        </span>
                      </div>
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Selected Location Details Sidebar */}
          <div className="lg:w-2/5">
            <div className="space-y-4 sm:space-y-6">
              <div className={`bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl border border-gray-100 sticky top-8 transform transition-all duration-700 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <div className="bg-gradient-to-r from-[#66a038] to-[#558c2d] px-4 sm:px-6 py-3 sm:py-5">
                  <h2 className="text-lg sm:text-xl font-bold text-white flex items-center">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                    {selectedLocation ? 'Selected Location' : 'Choose a Location'}
                  </h2>
                </div>
                <div className="p-6 sm:p-8">
                  {selectedLocation ? (
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xl sm:text-2xl mb-2">{selectedLocation.name}</h4>
                        <p className="text-gray-600 text-base sm:text-lg">{selectedLocation.address}</p>
                      </div>

                      <div className="space-y-4 text-sm sm:text-base">
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-gray-400 flex-shrink-0" />
                          <span>{selectedLocation.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-gray-400 flex-shrink-0" />
                          <span>{selectedLocation.email}</span>
                        </div>
                        <div className="flex items-start">
                          <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" />
                          <span>{selectedLocation.hours}</span>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3 text-lg sm:text-xl">Services Offered:</h5>
                        <ul className="text-sm sm:text-base text-gray-600 space-y-2">
                          {selectedLocation.services.map((service, index) => (
                            <li key={index} className="flex items-center">
                              <div className="w-2 h-2 bg-[#66a038] rounded-full mr-3 flex-shrink-0"></div>
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={handleConfirmLocation}
                        className="w-full bg-[#66a038] text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-[#558c2d] transition-all duration-300 transform hover:scale-105 shadow-lg mt-4"
                      >
                        Confirm This Location
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-8 sm:py-12">
                      <MapPin className="w-16 h-16 sm:w-20 sm:h-20 text-gray-300 mx-auto mb-4 sm:mb-6" />
                      <p className="text-gray-500 text-base sm:text-lg">
                        Select a location from the list to view details and confirm your choice.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Info Card */}
              <div className={`bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg sm:shadow-2xl border border-gray-100 transform transition-all duration-700 delay-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#66a038] rounded-full"></span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Why Choose Our Local Centers?
                  </h3>
                </div>
                <div className="space-y-4 text-gray-700 text-base sm:text-lg">
                  <p className="leading-relaxed">
                    Each of our cleaning centers is locally owned and operated, ensuring personalized service tailored to your community's needs.
                  </p>
                  <p className="leading-relaxed">
                    Our trained professionals use eco-friendly products and proven cleaning systems to deliver exceptional results every time.
                  </p>
                </div>
              </div>

              {/* CTA Sidebar */}
              <div className={`bg-gradient-to-br from-[#0079c1] to-[#005a8c] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white shadow-lg sm:shadow-2xl transform transition-all duration-700 delay-500 hover:scale-[1.02] ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg">
                    <Phone className="w-5 h-5 sm:w-7 sm:h-7 text-[#66a038]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Need Help Choosing?</p>
                    <p className="text-blue-100 mb-4 sm:mb-6 text-base sm:text-lg">Our team is ready to help you find the perfect location.</p>
                    <a
                      href="tel:1-(555) 123-4567"
                      className="inline-flex items-center justify-center w-full px-4 sm:px-6 py-3 sm:py-4 bg-white text-[#66a038] font-semibold rounded-lg sm:rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-md sm:shadow-lg group text-sm sm:text-base"
                    >
                      Call For Assistance
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeLocation;