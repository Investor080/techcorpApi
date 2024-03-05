const express = require('express');
const { login, signup } = require('../controller/auth');
const { getSingleBlog, getAllBlogs, updateBlog, deleteBlog, createBlog } = require('../controller/blog');
const { isLoggedin, isAdmin } = require('../middlewares/auth');




const router = express.Router();





router.post("/signup", signup);
router.post("/login", login);
router.post("/create-blog", (req, res, next) => {
  isLoggedin(req, res, () => isAdmin(req, res, createBlog(req, res, next)));
});
router.get('/getblog/:id', isLoggedin, getSingleBlog);
router.get('/getall-blog', isLoggedin, getAllBlogs);
router.patch('/update-blog/:id', (req, res, next) => {
  isLoggedin(req, res, () => isAdmin(req, res, updateBlog(req, res, next)));
});
router.delete('/deleteblog/:id', (req, res, next) => {
  isLoggedin(req, res, () => isAdmin(req, res, deleteBlog(req, res, next)));
});


module.exports = router