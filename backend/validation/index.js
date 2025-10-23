import { validationResult } from 'express-validator';

export const validate = (req, res, next) => {
   const error = validationResult(req)
   console.log(error,'validatoi error');
   

   if (!error.isEmpty()) {
      return res.status(500).json({
         statusCode: '012',
         message: `Validation failed - ${error.array()[0]?.msg}`,
         errors: error.array(),
         data: null,
      })
   }
   next()
};
