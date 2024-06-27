var express = require('express');
var categoryController = require('../controllers/categoryController');
var Middleware = require('../controllers/userController');

var router = express.Router();

router.post('/', Middleware.authenticateJWT,categoryController.createCategory);
router.get('/', categoryController.getCategories);
router.get('/:id', categoryController.getCategoryById);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
