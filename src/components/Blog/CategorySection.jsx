import React from "react";
import ArticleCard from "./ArticleCard";
import { FaArrowRight, FaTags } from "react-icons/fa";

const CategorySection = ({ category, onSelectBlog }) => {
  return (
    <section className="relative py-16 border-b border-[#66a038] last:border-b-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-gray-50/50 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Section - Category Header */}
          <div className="lg:w-1/4">
            <div className="sticky top-8 flex flex-col items-start text-left">
              {/* Category Icon & Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <FaTags className="w-5 h-5 text-white" />
                </div>
                <div>
                  
                  <a href={category.link} className="block group">
                    <h2 className="text-3xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300 leading-tight">
                      {category.title}
                    </h2>
                  </a>
                </div>
              </div>

              {/* Description */}
              {category.description && (
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {category.description}
                </p>
              )}

              {/* Article Count */}
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <span className="font-medium">{category.category}</span>
                <span>articles available</span>
              </div>

              {/* View More Button */}
              <a
                href={category.link}
                className="group flex items-center gap-3 px-6 py-3 bg-[#66a038]/90 hover:bg-[#66a038] text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-200 hover:-translate-y-0.5"
              >
                <span>Explore More</span>
                <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              {/* Decorative Element */}
              <div className="mt-8 w-20 h-1 bg-gradient-to-r from-[#66a038] to-emerald-600 rounded-full" />
            </div>
          </div>

          {/* Right Section - Articles Grid */}
          <div className="lg:w-3/4">
            {/* Grid Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Featured Articles
                </h3>
                <p className="text-gray-600 text-sm">
                  Discover the latest insights and stories
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Live updates</span>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {category.articles.map((item, index) => (
                <ArticleCard 
                  key={index} 
                  item={item} 
                  onSelectBlog={onSelectBlog} 
                />
              ))}
            </div>

            {/* Mobile View More Button */}
            <div className="flex lg:hidden justify-center mt-8">
              <a
                href={category.link}
                className="flex items-center gap-2 px-6 py-3 bg-[#66a038] text-white rounded-xl font-semibold transition-all duration-300"
              >
                <span>View All Articles</span>
                <FaArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
