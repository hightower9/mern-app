const asyncHandler = require('express-async-handler')

// @desc Get list of Goals
// @route GET /api/goals 
// @access Private
const getGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message: 'Get Goals'})
})

// @desc Create a Goal
// @route POST /api/goals 
// @access Private
const setGoal = asyncHandler(async (req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(201).json({message: 'Set Goal'})
})

// @desc Update a Goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

// @desc Delete a Goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req,res) => {
    res.status(204).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}