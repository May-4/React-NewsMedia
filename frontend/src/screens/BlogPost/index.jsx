import React, { useEffect, useState } from "react";
import { dummyBlogs } from "./dummyBlog";
import BlogCard from "./components/BlogCard";
import blogApi from "../../services/BlogApi";
import { toast, ToastContainer } from "react-toastify";

export const BlogPost = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      const response = await blogApi.fetchBlog();
      setLoading(false);

      if (response.statusCode == "000") {
        setBlogs(response.data);
      } else {
        setBlogs(null);
      }
    };
    fetchBlog();
  }, []);

  const handleDelete = async (id) => {
    console.log("delete id", id);
    const response = await blogApi.deleteBlogById(id);
    toast.success(response.message);
    if (response.statusCode == "000") {
      setBlogs((prev) =>
        prev.filter((item) => item._id !== response?.data?._id)
      );
    }
  };

  if (loading) {
    return (
      <p className="text-md font-bold my-10 text-gray-500 text-center">
        Loading.........
      </p>
    );
  }
  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4 my-4">
      {blogs?.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">
            Blogs
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {blogs.map((blog) => (
              <BlogCard
                key={blog._id}
                blog={blog}
                onDelete={handleDelete}
                onEdit={() => {}}
              />
            ))}
          </div>
        </>
      ) : (
        <h2 className="text-md font-bold my-10 text-gray-500 text-center">
          Empty Blog
        </h2>
      )}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};
