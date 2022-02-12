const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')


router.route('/').get(getGoals).post(setGoal)

// Above is a shorter way to write it
// router.get('/', getGoals)
// router.post('/', setGoal)

router.route('/:id').put(updateGoal).delete(deleteGoal)

// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)

module.exports = router