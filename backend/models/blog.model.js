import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
      trim: true,
   },
   author: {
      type: String,
      required: true,
      trim: true,
   },
   content: {
      type: String,
      required: true,
   },
   tags: {
      type: [String],
      default: [],
   },
   published: {
      type: Boolean,
      default: false,
   }
}, {
   timestamps: true,
})
export const BlogModel = mongoose.model('Blog', blogSchema);