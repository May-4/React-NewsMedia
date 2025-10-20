
import mongoose from 'mongoose';
import { BlogModel as Blog } from './../models/blog.model.js';

const fetchBlog = async (req, res) => {
   const blogs = await Blog.find();
   console.log(blogs, "Blos Post------------");


   res.status(200).json({
      message: 'Success Fetch All Blog Posts',
      data: blogs,
   });
}
const fetchBlogById = async (req, res) => {
   const { id } = req.query;

   try {
      const blog = await Blog.findById(id);

      if (!blog) {
         return res.status(404).json({
            message: `Post with ID ${id} not found`,
         });
      }

      res.status(200).json({
         message: `Get post with ID ${id}`,
         data: blog,
      });

   } catch (error) {
      console.error(error.message);
      res.status(500).json({
         message: `Failed to fetch blog with id: ${error.message}`,
      });
   }
}
const createNewBlog = async (req, res) => {
   try {
      const { data } = req.body;
      const blog = new Blog(data);
      //await blog.save()
      res.json({
         message: 'Blog created successfully',
         data: blog
      });
   } catch (error) {
      res.status(500).json({
         message: `Failed Blog Creating ${error.message}`
      })
   }

}
const updateBlogById = async (req, res) => {
   const { id } = req.query;
   const { data } = req.body;

   try {
      const updateBlog = await Blog.findByIdAndUpdate(id.data, { new: true });

      if (!updateBlog) {
         return res.status(404).json({
            message: `Post with ID ${id} not found`,
         });
      }

      res.status(200).json({
         message: `Get post with ID ${id}`,
         data: updateBlog,
      });

   } catch (error) {
      console.error(error.message);
      res.status(500).json({
         message: `Failed to fetch blog with id: ${error.message}`,
      });
   }
}

const deleteBlogById = async (req, res) => {
   const { id } = req.query;
   try {
      const deletedBlog = await Blog.findByIdAndDelete(id);
      if (!deletedBlog) return res.status(404).json({ message: 'Blog not found' });

      res.status(200).json({ message: 'Blog deleted', data: deletedBlog });
   } catch (err) {
      res.status(500).json({ message: 'Failed to delete blog', error: err.message });
   }
}


export default {
   fetchBlog,
   fetchBlogById,
   createNewBlog,
   updateBlogById,
   deleteBlogById
} 