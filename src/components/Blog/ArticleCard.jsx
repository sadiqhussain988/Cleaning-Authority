import React from "react";

const ArticleCard = ({ item, onSelectBlog }) => {
  return (
    <div
      onClick={() => onSelectBlog(item)}
      className="group relative cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 ease-in-out border border-gray-100 hover:border-green-200"
    >
      {/* Image Container with Gradient Overlay */}
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
        />
        
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        {item.category && (
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-green-700 text-xs font-medium rounded-full border border-green-200">
              {item.category}
            </span>
          </div>
        )}
        
        {/* Read Time */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-full">
            {item.readingTime || '5 min read'}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6">
        {/* Title */}
        <h3 className="font-bold text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-green-700 transition-colors duration-200 leading-tight">
          {item.title}
        </h3>

        {/* Author and Date */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {item.authorAvatar ? (
              <img
                src={item.authorAvatar}
                alt={item.author}
                className="w-6 h-6 rounded-full object-cover"
              />
            ) : (
              <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">
                  {item.author?.charAt(0) || 'A'}
                </span>
              </div>
            )}
            <span className="text-sm text-gray-600 font-medium">
              {item.author || 'Anonymous'}
            </span>
          </div>
          
          {item.date && (
            <span className="text-xs text-gray-500 font-medium">
              {item.date}
            </span>
          )}
        </div>

        {/* Excerpt/Description */}
        {item.intro && (
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
            {item.intro}
          </p>
        )}

        {/* Tags */}
        {item.tags && (
          <div className="flex flex-wrap gap-1 mb-4">
            {item.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md hover:bg-green-100 hover:text-green-700 transition-colors duration-200"
              >
                #{tag}
              </span>
            ))}
            {item.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">
                +{item.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Read More Button */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-green-600 text-sm font-semibold group-hover:text-green-700 transition-colors duration-200">
            Read Article
          </span>
          <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors duration-200">
            <svg 
              className="w-4 h-4 text-green-600 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Hover Overlay Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#66a038] rounded-2xl transition-all duration-300 pointer-events-none" />
    </div>
  );
};

export default ArticleCard;