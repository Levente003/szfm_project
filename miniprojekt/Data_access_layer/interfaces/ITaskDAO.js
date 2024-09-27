class ITaskDAO {
    /**
     * Retrieve a task by its ID.
     * @param {number} taskId - The ID of the task.
     * @returns {Promise<Object|null>} - The task object or null if not found.
     */
    getTaskById(taskId) {
        throw new Error("Method not implemented.");
    }

    /**
     * Create a new task.
     * @param {Object} taskData - The data for the new task.
     * @returns {Promise<Object>} - The created task object.
     */
    createTask(taskData) {
        throw new Error("Method not implemented.");
    }

    /**
     * Update an existing task.
     * @param {number} taskId - The ID of the task to update.
     * @param {Object} taskData - The updated task data.
     * @returns {Promise<Object|null>} - The updated task object or null if not found.
     */
    updateTask(taskId, taskData) {
        throw new Error("Method not implemented.");
    }

    /**
     * Delete a task by its ID.
     * @param {number} taskId - The ID of the task to delete.
     * @returns {Promise<boolean>} - True if the task was deleted, false otherwise.
     */
    deleteTask(taskId) {
        throw new Error("Method not implemented.");
    }

    /**
     * Retrieve all tasks.
     * @returns {Promise<Array>} - An array of task objects.
     */
    getAllTasks() {
        throw new Error("Method not implemented.");
    }

    /**
     * Retrieve tasks assigned to a specific user.
     * @param {number} userId - The ID of the user.
     * @returns {Promise<Array>} - An array of task objects assigned to the user.
     */
    getTasksByUserId(userId) {
        throw new Error("Method not implemented.");
    }
}

module.exports = ITaskDAO;
