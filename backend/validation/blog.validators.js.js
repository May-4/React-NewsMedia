import { body, param, query } from 'express-validator';

// ✅ Validate blog creation request
export const blogCreateValidator = [
   body('data.title')
      .notEmpty().withMessage('Title is Required').trim(),

   body('data.author')
      .notEmpty().withMessage('Author is required')
      .trim(),

   body('data.content')
      .notEmpty().withMessage('Content is required'),

   body('data.tags')
      .optional()
      .isArray().withMessage('Tags must be an array of strings'),

   body('data.published')
      .optional()
      .isBoolean().withMessage('Published must be true or false'),
];

// ✅ Validate ID in URL
export const blogIdValidator = [
   query('id')
      .isMongoId()
      .withMessage('Invalid MongoDB ObjectId format')
];