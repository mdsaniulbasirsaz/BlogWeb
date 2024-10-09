import express from 'express';

import { createBlog, getBlogs,getBlogById } from '../controller/add.blog.controller.js';

const router = express.Router();


router.post('/Cblogs', createBlog); // Route to add a new blog
router.get('/Gblogs', getBlogs); // Route to get all blogs
router.get('/Gblogs/:id', getBlogById);

export default router;