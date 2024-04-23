const express = require('express')
const router = express.Router()
const {
  getEmployes,
  getEmploye,
  setEmploye,
  updateEmploye,
  deleteEmploye,
  updateAllEmployee,
  payEmploye,
} = require('../controllers/employeController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getEmployes).post(protect, setEmploye)
router.route('/getOne').get(protect ,getEmploye)
router.route('/:id').delete(protect, deleteEmploye)
router.route('/update').put(protect, updateEmploye)
router.route('/pay').put(protect , payEmploye)
router.route('/updateAll').post(protect, updateAllEmployee)

module.exports = router
