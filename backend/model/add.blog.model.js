// backend/models/Blog.js
import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, default: Date.now },
    category: {type: String, required: true},
});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
