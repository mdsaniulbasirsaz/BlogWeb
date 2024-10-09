import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import blogRoutes from './route/blog.route.js';
import mongoose from 'mongoose'


dotenv.config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;




app.use(express.json());
app.use('/api/blogs', blogRoutes); // Use blog routes











// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Handle requests for the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1); // Exit process with failure
    }
};

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});