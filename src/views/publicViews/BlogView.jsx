import React from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import BlogCatalogue from "../../components/BlogCatalogue/BlogCatalogue";
import BlogFiles from "../../components/BlogFiles/BlogFiles";

const BlogView = () => {
  return (
    <>
      <BlogCard />
      <BlogCatalogue />
      <BlogFiles />
    </>
  );
};

export default BlogView;
