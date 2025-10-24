export default function BlogCard({ blog, onDelete, onEdit }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-4 border border-gray-200">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold text-gray-800">{blog.title}</h2>
        <span
          className={`text-sm font-semibold px-2 py-1 rounded ${
            blog.published
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {blog.published ? "Published" : "Draft"}
        </span>
      </div>
      <p className="text-gray-600 mb-3">By: {blog.author}</p>
      <p className="text-gray-700 mb-3">
        {blog.content.length > 100
          ? blog.content.slice(0, 100) + "..."
          : blog.content}
      </p>
      {blog.tags && blog.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
      <div className="h-[0.5px] bg-emerald-100 my-4 shadow-sm" />
      <div className="flex gap-0.5 ">
        <button
          onClick={() => onEdit(blog._id)}
          className="bg-yellow-400 text-white px-4 py-2 rounded-l-full hover:bg-yellow-500"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(blog._id)}
          className="bg-red-500 text-white px-4 py-2 rounded-r-full hover:bg-red-600"
        >
          Delete
        </button>
        <div className="flex-1 flex justify-end">
          <button
            //onClick={() => onViewDetail(blog)}
            className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
