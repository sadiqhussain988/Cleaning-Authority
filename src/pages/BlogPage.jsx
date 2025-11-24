// import React, { useState } from "react";
// import { blogCategories } from "../data/blogCategories";
// import { blogs } from "../data/BlogData";
// import CategorySection from "../components/Blog/CategorySection";
// import BlogDetail from "../components/Blog/Blogdetails";
// import Breadcrumb from "../components/Blog/Breadcrumb"
// import { useNavigate } from "react-router-dom";

// const BlogPage = () => {
//   const [selectedBlog, setSelectedBlog] = useState(null);

//   const handleSelectBlog = (item) => {
//   // Use slug directly
//   const slug = item.slug;

//   const fullBlog = blogs.find((b) => b.slug === slug);

//   if (fullBlog) {
//     setSelectedBlog(fullBlog);
//   } else {
//     console.error("Blog not found for slug:", slug);
//   }
// };


//   return (
//     <div className="w-full max-w-7xl mx-auto p-10 border-2">
//        <Breadcrumb />
//       {!selectedBlog ? (
//         blogCategories.map((category, idx) => (
//           <CategorySection
//             key={idx}
//             category={category}
//             onSelectBlog={handleSelectBlog}
//           />
//         ))
//       ) : (
//         <BlogDetail blog={selectedBlog} setSelectedBlog={setSelectedBlog} />
//       )}
//     </div>
//   );
// };

// export default BlogPage;

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogCategories } from "../data/blogCategories";
import { blogs } from "../data/BlogData";
import CategorySection from "../components/Blog/CategorySection";
import BlogDetail from "../components/Blog/Blogdetails";
import Breadcrumb from "../components/Blog/Breadcrumb";

const BlogPage = () => {
  const navigate = useNavigate();
  const { category: categoryParam, slug } = useParams();
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Show blog detail if slug exists in URL
  useEffect(() => {
    if (slug) {
      const blog = blogs.find((b) => b.slug === slug);
      if (blog) setSelectedBlog(blog);
    } else {
      setSelectedBlog(null);
    }
  }, [slug]);

  const handleSelectBlog = (item) => {
    const blog = blogs.find((b) => b.slug === item.slug);
    if (blog) {
      const categorySlug = blog.category.toLowerCase().replace(/\s+/g, "-");
      navigate(`/blog/${categorySlug}/${blog.slug}`);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-5  ">
      <Breadcrumb />
      {!selectedBlog ? (
        blogCategories.map((category, idx) => (
          <CategorySection
            key={idx}
            category={category}
            onSelectBlog={handleSelectBlog}
          />
        ))
      ) : (
        <BlogDetail blog={selectedBlog} setSelectedBlog={() => navigate("/blog")} />
      )}
    </div>
  );
};

export default BlogPage;
