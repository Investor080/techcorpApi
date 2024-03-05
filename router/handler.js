const express = require('express');
const { login, signup } = require('../controller/auth');
const { getSingleBlog, getAllBlogs, updateBlog, deleteBlog, createBlog } = require('../controller/blog');
const { isLoggedin, isAdmin } = require('../middlewares/auth');




const router = express.Router();







router.route("/signup").post(signup)
router.route("/login").post(login)
router.route("/create-blog").post([ isLoggedin, isAdmin ], createBlog)
router.route('/getblog/:id').get([ isLoggedin ], getSingleBlog)
router.route('/getall-blog').get([ isLoggedin], getAllBlogs)
router.route('/update-blog/:id').patch([ isLoggedin, isAdmin ], updateBlog)
router.route('/deleteblog/:id').delete([ isLoggedin, isAdmin ], deleteBlog)




module.exports = router