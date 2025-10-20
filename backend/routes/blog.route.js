import { Router } from "express";
import BlogController from "../controllers/blog.controller.js";
import { body, validationResult } from "express-validator";
import { blogCreateValidator, blogIdValidator } from "../validation/blog.validators.js.js";
import { validate } from "../validation/index.js";

const router = Router();

// GET /users/
router.get('/' ,BlogController.fetchBlog)

// GET /users/id
router.get('/fetch/', blogIdValidator, validate, BlogController.fetchBlogById)
router.get('/update/', blogIdValidator, validate, BlogController.updateBlogById)
router.delete('/remove/', blogIdValidator, validate, BlogController.deleteBlogById)

// POST /users/
router.post('/', blogCreateValidator, validate ,BlogController.createNewBlog);

export default router;