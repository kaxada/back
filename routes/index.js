var express = require('express');
var router = express.Router();
const controllers = require('../controllers')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bootcamp API' });
});

router.post('/category/create', controllers.createCategory)
router.get('/category/list', controllers.getAllCategories)
router.get('/category/create/:id', controllers.getCategoryById)
router.put('/category/create/:id', controllers.updateCategory)
router.delete('/category/create/:id', controllers.deleteCategory)

module.exports = router;
