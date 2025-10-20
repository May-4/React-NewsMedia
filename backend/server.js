import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import blogRouter from './routes/blog.route.js';

dotenv.config()
const app = express();
const env = process.env;

// parses JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose
   .connect(env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() => {
      console.log('✅ MongoDB connected')

      // Mount Blogs Post under /blogs
      app.use('/blogs', blogRouter)
      
      app.use((req, resp) => {
         resp.status(500).send('Something is Wrong!!!!!!!!')
      })
   })
   .catch((err) => console.error('❌ MongoDB connection error:', err.message));


app.listen(env.PORT, () => {
   console.log(`Server started on http://localhost:${env.PORT}`)
})