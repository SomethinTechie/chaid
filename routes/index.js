const router = require('express').Router();
const homeController = require('../controllers/homeController')

router.get('', homeController.home)
router.get('/about', homeController.about)
router.get('/team', homeController.team)
router.get('/services', homeController.services)
router.get('/contact', homeController.contact)
router.get('/ally', homeController.ally)
router.get('/companion', homeController.companion)
router.get('/prominent', homeController.prominent)
router.get('/academy', homeController.academy)
router.get('/support-services', homeController.supportServices)
router.get('/operational-services', homeController.operationalServices)
router.get('/educational-services', homeController.educationalServices)
router.get('/faqs', homeController.faqs)
router.get('/application', homeController.application)
router.get('/investors', homeController.investors)

router.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

module.exports = router