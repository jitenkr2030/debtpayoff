// ./src/services/goalService.js

// Mock database for storing goals
let goals = [];

/**
 * Generates a unique ID for each goal.
 */
const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

/**
 * Creates a new goal.
 * @param {Object} goal - The goal to create.
 * @returns {Object} The created goal.
 */
export const createGoal = (goal) => {
  const newGoal = { id: generateId(), ...goal };
  goals.push(newGoal);
  return newGoal;
};

/**
 * Retrieves all goals.
 * @returns {Array} An array of goals.
 */
export const getGoals = () => {
  return goals;
};

/**
 * Retrieves a goal by ID.
 * @param {string} id - The ID of the goal to retrieve.
 * @returns {Object|undefined} The goal with the given ID, or undefined if not found.
 */
export const getGoalById = (id) => {
  return goals.find(goal => goal.id === id);
};

/**
 * Updates a goal by ID.
 * @param {string} id - The ID of the goal to update.
 * @param {Object} updates - The updates to apply to the goal.
 * @returns {Object|undefined} The updated goal, or undefined if not found.
 */
export const updateGoal = (id, updates) => {
  const goalIndex = goals.findIndex(goal => goal.id === id);
  if (goalIndex === -1) {
    return undefined;
  }
  goals[goalIndex] = { ...goals[goalIndex], ...updates };
  return goals[goalIndex];
};

/**
 * Deletes a goal by ID.
 * @param {string} id - The ID of the goal to delete.
 * @returns {boolean} True if the goal was deleted, false if not found.
 */
export const deleteGoal = (id) => {
  const goalIndex = goals.findIndex(goal => goal.id === id);
  if (goalIndex === -1) {
    return false;
  }
  goals.splice(goalIndex, 1);
  return true;
};
