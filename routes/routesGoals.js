const express = require('express')
const router = express.Router()
const { getGoal, setGoal, updateGoal, deleteGoal } = require('../controller/goalController')

module.exports = router

router.route('/').get(getGoal).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)
