const router = require('express').Router();
const homeController = require('../controllers/homeController')

router.get('', homeController.home)
router.get('/about', homeController.about)
router.get('/team', homeController.team)
router.get('/services', homeController.services)
router.get('/contact', homeController.contact)

router.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

module.exports = router