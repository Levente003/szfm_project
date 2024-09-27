class IUserDAO {
    /**
     * Retrieve a user by their ID.
     * @param {number} userId - The ID of the user.
     * @returns {Promise<Object|null>} - The user object or null if not found.
     */
    getUserById(userId) {
        throw new Error("Method not implemented.");
    }

    /**
     * Retrieve a user by their email.
     * @param {number} email - The email of the user.
     * @returns {Promise<Object|null>} - The user object or null if not found.
     */
    getUserByEmail(email) {
        throw new Error("Method not implemented.");
    }

    /**
     * Create a new user.
     * @param {Object} user - The user object containing user details.
     * @returns {Promise<Object>} - The created user object.
     */
    createUser(user) {
        throw new Error("Method not implemented.");
    }

    /**
     * Update an existing user.
     * @param {number} userId - The ID of the user to update.
     * @param {Object} userData - The new data for the user.
     * @returns {Promise<Object|null>} - The updated user object or null if not found.
     */
    updateUser(userId, userData) {
        throw new Error("Method not implemented.");
    }

    /**
     * Delete a user by their ID.
     * @param {number} userId - The ID of the user to delete.
     * @returns {Promise<boolean>} - True if the user was deleted, false otherwise.
     */
    deleteUser(userId) {
        throw new Error("Method not implemented.");
    }

    /**
     * Retrieve all users.
     * @returns {Promise<Array>} - An array of user objects.
     */
    getAllUsers() {
        throw new Error("Method not implemented.");
    }
}

module.exports = IUserDAO;