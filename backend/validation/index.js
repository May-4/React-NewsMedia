import { validationResult } from 'express-validator';

export const validate = (req, res, next) => {
   const error = validationResult(req)
   if (!error.isEmpty()) {
      return res.status(404).json({
         message: 'Validation failed',
         errors: error.array()
      })
   }
   next()
};
