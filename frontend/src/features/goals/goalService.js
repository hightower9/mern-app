import axios from 'axios'

// URL Domain is set in package.json
const API_URL = '/api/goals/'

// Create Goal
const createGoal = async (goalData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, goalData, config)

    return response.data
}

// get user Goals
const getGoals = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// get user Goals
const deleteGoal = async (goalId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + goalId, config)

    return response.data
}

const goalService = {
    createGoal,
    getGoals,
    deleteGoal,
}

export default goalService