import Blog from "../model/add.blog.model.js";

export const createBlog = async (req, res) => {
    try {
        const newBlog = new Blog(req.body);
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(500).json({ message: 'Error creating blog: ' + error.message });
    }
};

export const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blogs: ' + error.message });
    }
};

// Get a blog by ID
export const getBlogById = async (req, res) => {
    const { id } = req.params; // Get the ID from the request parameters
    try {
        const blogPost = await Blog.findById(id); // Fetch the blog post from the database
        if (blogPost) {
            res.status(200).json(blogPost); // Return the blog post
        } else {
            res.status(404).json({ message: 'Blog post not found' }); // Handle case where blog post is not found
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blog post: ' + error.message }); // Handle any errors
    }
};