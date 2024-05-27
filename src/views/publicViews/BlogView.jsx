import React from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import BlogCatalogue from "../../components/BlogCatalogue/BlogCatalogue";
import BlogFiles from "../../components/BlogFiles/BlogFiles";
import Up from "/src/components/Up/Up";
import './BlogView.css'; 

const BlogView = () => {
  return (
    <div className="blog-view-container">
      <div className="mariposatraicionera"></div>
      <div className="main-content">
        <BlogCard />
        <BlogCatalogue />
      </div>
      <div className="sidebar">
        <div>
        <BlogFiles />
        <Up/>
        </div>
        
      </div>
    </div>
  );
};

export default BlogView;
