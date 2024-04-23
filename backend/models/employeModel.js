const mongoose = require('mongoose')

const employeSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: [true, 'Add A employe Name '],
    },
    lastname: {
      type: String,
      required: [true, 'Add A employe lastname '],
    },
    grade: {
      type: String,
      required: [true, 'Add A employe grade '],
    },
    age: {
      type: Number,
      required: [true, 'Add A employe grade'],
    },
    departement: {
      type: String,
      required: [true, 'Add A employe departement'],
    },
    profession: {
      type: String,
      required: [true, 'Add A employe departement'],
    },
    payment: {
      type: Boolean,
      required: [true, 'payment default false']
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Employe', employeSchema)
