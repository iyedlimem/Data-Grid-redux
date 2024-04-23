const asyncHandler = require('express-async-handler')

const Employe = require('../models/employeModel')
const User = require('../models/userModel')

// @desc    Get employes
// @route   GET /api/employes
// @access  Private
const getEmployes = asyncHandler(async (req, res) => {
  const employes = await Employe.find({ user: req.user.id })
  console.log(employes)
  res.status(200).json(employes)
})

// @desc    Set employe
// @route   POST /api/employes
// @access  Private
const setEmploye = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400)
    throw new Error('Please add a text name')
  }

  const employe = await Employe.create({
    name: req.body.name,
    lastname: req.body.lastname,
    grade: req.body.grade,
    age: req.body.age,
    departement: req.body.departement,
    profession: req.body.profession,
    user: req.user.id,
    payment: false,
  })

  res.status(200).json(employe)
})

// @desc    Update employe
// @route   PUT /api/employes/:id
// @access  Private
const updateEmploye = asyncHandler(async (req, res) => {

  const employe = await Employe.findById(req.body.id)

  if (!employe) {
    res.status(400)
    throw new Error('Employe not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the employe user
  if (employe.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  let newdep = ""
  if (employe.departement == 'RH Department') {
    newdep = "IT Department"
  } else {
    newdep = "RH Department"
  }

  const updatedEmploye = await Employe.findByIdAndUpdate(req.body.id, { departement: newdep }, {
    new: true,
  })

  res.status(200).json(updatedEmploye)
})

// @desc    get employe
// @route   Get /api/employes/:id
// @access  Private
const getEmploye = asyncHandler(async (req, res) => {

  const employe = await Employe.findById(req.body.id)


  if (!employe) {
    res.status(400)
    throw new Error('Employe not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the employe user
  if (employe.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }


  res.status(200).json(employe)
})


// @desc    Update employe
// @route   PUT /api/employes/:id
// @access  Private
const payEmploye = asyncHandler(async (req, res) => {

  const employe = await Employe.findById(req.body.id)
  console.log(employe)

  if (!employe) {
    res.status(400)
    throw new Error('Employe not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the employe user
  if (employe.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  let paymentState = ""
  if (employe.payment == false) {
    paymentState = true
  } else {
    paymentState = employe.payment
  }

  const updatedEmploye = await Employe.findByIdAndUpdate(req.body.id, { payment: paymentState }, {
    new: true,
  })

  res.status(200).json(updatedEmploye)
})

// @desc    Update Allemploye
// @route   UPDATE /api/employes/
// @access  Private
const updateAllEmployee = asyncHandler(async (req, res) => {

  await Employe.deleteMany({})

  const newdata = await Employe.insertMany(
    req.body
  )

  res.status(200).json(newdata)
})



// @desc    Delete employe
// @route   DELETE /api/employes/:id
// @access  Private
const deleteEmploye = asyncHandler(async (req, res) => {
  const employe = await Employe.findById(req.params.id)

  if (!employe) {
    res.status(400)
    throw new Error('Employe not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the employe user
  if (employe.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await employe.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getEmployes,
  getEmploye,
  setEmploye,
  updateEmploye,
  deleteEmploye,
  updateAllEmployee,
  payEmploye,
}
