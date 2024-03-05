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



// router.post("/signup", signup)
// router.post("/login", login)
// router.post("/create-blog", (req, res, next) => {
//     isLoggedin, isAdmin(req, res, () => isAdmin(req, res, createBlog(req, res, next))),
// router.route('/getblog/:id').get([ isLoggedin ], getSingleBlog)
// router.route('/getall-blog').get([ isLoggedin], getAllBlogs)
// router.route('/update-blog/:id').patch([ isLoggedin, isAdmin ], updateBlog)
// router.route('/deleteblog/:id').delete([ isLoggedin, isAdmin ], deleteBlog)




module.exports = router