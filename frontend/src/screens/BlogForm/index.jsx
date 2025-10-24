import React, { useCallback, useEffect, useState } from "react";
import blogApi from "../../services/BlogApi";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export const BlogForm = () => {
  const [searchParams] = useSearchParams();
  const updateId = searchParams.get("updateId");
  const location = useLocation();
  const { updateBlog } = location.state || {};

  const isEdit = Boolean(updateId) && Boolean(updateBlog);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
    tags: "",
    published: false,
  });

  useEffect(() => {
    if (!isEdit) return;
    setFormData({
      title: updateBlog.title,
      author: updateBlog.author,
      content: updateBlog.content,
      tags: updateBlog.tags?.join(","),
      published: updateBlog.published,
    });
  }, [updateBlog, isEdit]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log("check type---", type);

    setFormData((prev) => ({
      ...prev,
      [name]: type == "checkbox" ? checked : value, // <-- updates the field dynamically
    }));
  };

  const handleSubmit = (e) => {
    
    // prevent page reload
    e.preventDefault();

    const blogData = {
      ...formData,
      tags: formData.tags
        .split(",")
        ?.map((item) => item.trim())
        .filter(Boolean),
    };

    isEdit ? updateBlogData(blogData) : saveBlog(blogData);
  };

  const saveBlog = useCallback(async (data) => {
    try {
      const response = await blogApi.saveBlog({ data });
      if (response.statusCode == "000") {
        toast.success("Blog created successfully!");
        setTimeout(() => navigate("/post"), 800);
        setFormData({
          title: "",
          author: "",
          content: "",
          tags: "",
          published: false,
        });        
      } else {
        toast.success(response.message);
      }
    } catch (error) {
      toast.success("Blog created failed! ", error.message);
    }
  }, []);

  const updateBlogData = useCallback(
    async (data) => {
      try {
        const response = await blogApi.updateBlogById(updateId, { data });
        if (response.statusCode == "000") {
          toast.success("Blog updated successfully!");
          setTimeout(() => navigate("/post"), 800);
          setFormData({
            title: "",
            author: "",
            content: "",
            tags: "",
            published: false,
          });
        } else {
          toast.success(response.message);
        }
      } catch (error) {
        toast.success("Blog updated failed! ", error.message);
      }
    },
    [updateId]
  );

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4 my-4"
      >
        <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">
          {isEdit ? "Update" : "Create"} Blog
        </h2>

        {/* Title */}
        <div>
          <label className={styles.labelClass} htmlFor="title">
            Title
          </label>
          <input
            value={formData.title}
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            className={styles.inputClass}
            required
          />
        </div>

        {/* Author */}
        <div>
          <label className={styles.labelClass} htmlFor="author">
            Author
          </label>
          <input
            value={formData.author}
            type="text"
            name="author"
            id="author"
            onChange={handleChange}
            className={styles.inputClass}
            required
          />
        </div>
        {/* Content */}
        <div>
          <label className={styles.labelClass} htmlFor="content">
            Content
          </label>
          <textarea
            value={formData.content}
            name="content"
            id="content"
            onChange={handleChange}
            rows={6}
            className={styles.inputClass}
            required
          ></textarea>
        </div>

        {/* Tags */}
        <div>
          <label className={styles.labelClass} htmlFor="tags">
            Tags (comma separated)
          </label>
          <input
            value={formData.tags}
            type="text"
            name="tags"
            id="tags"
            onChange={handleChange}
            className={`${styles.inputClass} placeholder-gray-200`}
            placeholder="example: JavaScript, React"
          />
        </div>

        {/* Published */}
        <div className="flex items-center">
          <input
            checked={formData.published}
            type="checkbox"
            name="published"
            onChange={handleChange}
            className="h-5 w-5 text-emerald-600 focus:ring-2 focus:ring-emerald-500 border-gray-300 rounded"
          />
          <label className="ml-2 text-gray-700 font-medium">Published</label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          Submit
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

const styles = {
  labelClass: "block text-gray-700 font-medium mb-1",
  inputClass:
    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500",
};
