import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config()
const app = express();
const env = process.env;

// Connect to MongoDB
mongoose
   .connect(env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() => {
      console.log('✅ MongoDB connected')

      // Express app setup
      app.get('/', (req, res) => {
         res.send('Server is running with MongoDB!');
      });
   })
   .catch((err) => console.error('❌ MongoDB connection error:', err.message));


app.listen(env.PORT, () => {
   console.log(`Server started on http://localhost:${env.PORT}`)
})