
import mongoose from 'mongoose';
import { BlogModel as Blog } from './../models/blog.model.js';

const fetchBlog = async (req, res) => {
   const blogs = await Blog.find();

   res.status(200).json({
      statusCode:'000',
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
      const blogData = req.body; 
      
      const blog = new Blog(blogData.data);
      await blog.save();

      return res.status(201).json({
         statusCode: '000',
         message: 'Blog created successfully',
         data: blog,
      });
   } catch (error) {

      return res.status(500).json({
         statusCode: '012',
         message: `Failed to create blog: ${error.message}`,
         data: null,
      });
   }
};


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
      if (!deletedBlog) return res.status(404).json({ statusCode: '012',  message: 'Blog not found' });

      res.status(200).json({ statusCode: '000', message: 'Successflly deleted Blog', data: deletedBlog });
   } catch (err) {
      res.status(500).json({ statusCode: '500', message: 'Failed to delete blog', error: err.message });
   }
}


export default {
   fetchBlog,
   fetchBlogById,
   createNewBlog,
   updateBlogById,
   deleteBlogById
} 