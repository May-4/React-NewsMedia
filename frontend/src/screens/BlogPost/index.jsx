import React from "react";
import { dummyBlogs } from "./dummyBlog";
import BlogCard from "./components/BlogCard";

export const BlogPost = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4 my-4">
      <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">
        Blogs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {dummyBlogs.map((blog) => (
          <BlogCard
            key={blog._id}
            blog={blog}
            onDelete={() => {}}
            onEdit={() => {}}
          />
        ))}
      </div>
    </div>
  );
};
