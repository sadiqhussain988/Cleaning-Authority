import React from "react";
import { FaArrowLeft, FaTwitter, FaLinkedin, FaFacebook, FaUser } from "react-icons/fa";

const BlogDetail = ({ blog, setSelectedBlog }) => {
  if (!blog) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-6 mt-15 rounded-xl ">
      <div className="container mx-auto px-1 md:px-6 lg:px-8 max-w-5xl  ">

        {/* Header with back button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
          <button
            onClick={() => setSelectedBlog(null)}
            className="flex items-center gap-2 px-4 py-2  bg-[#66a038] text-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 font-medium"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Blogs
          </button>
          <div className="text-sm text-[#66a038] bg-white px-3 py-1 rounded-lg shadow-sm">
            Published on {blog.date || "Recent"}
          </div>
        </div>

        {/* Blog Content Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">

          {/* Hero Section */}
          <div className="p-6 sm:p-8">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Author & Reading Time */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {blog.author?.charAt(0) || <FaUser className="w-5 h-5" />}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{blog.author}</p>
                  <p className="text-sm text-gray-500">Author</p>
                </div>
              </div>
              <div className="h-px sm:h-8 w-full sm:w-px bg-gray-300"></div>
              <div className="text-sm text-gray-600">
                <span className="font-medium">Reading time:</span> {blog.readingTime || "5 min read"}
              </div>
            </div>

            {/* Featured Image */}
            {blog.image && (
              <div className="mb-6 sm:mb-8 w-full flex justify-center">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-[350px] max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-80 object-cover rounded-xl  shadow-2xl shadow-green-200 "
                />
              </div>
            )}


            {/* Introduction */}
            <div className="mb-6 sm:mb-8">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed bg-gray-50 p-4 sm:p-6 rounded-xl border-l-4 border-green-500">
                {blog.intro}
              </p>
            </div>
          </div>

          {/* Blog Sections */}
          <div className="px-4 sm:px-8 pb-6 sm:pb-8 ">
            {blog.sections?.map((section, i) => (
              <div
                key={i}
                className="mb-6 sm:mb-8 p-4 sm:p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-200"
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed text-base  ">
                  {section.content}
                </p>

                {section.image && (
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-[470px] h-auto max-w-full mx-auto mt-4 rounded-lg shadow-md"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Footer / Share Buttons */}
          <div className="bg-gray-50 border-t border-gray-200 px-4 sm:px-8 py-4 sm:py-6">
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <span className="text-sm text-gray-600 font-medium">Share this article:</span>
              <div className="flex gap-3">
                {[FaTwitter, FaLinkedin, FaFacebook].map((Icon, idx) => (
                  <button
                    key={idx}
                    className="w-10 h-10 rounded-full bg-[#66a038]/90 flex items-center justify-center hover:bg-[#66a038] transition-colors duration-200 shadow-sm"
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
