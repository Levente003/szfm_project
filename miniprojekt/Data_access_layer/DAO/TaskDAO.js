const Task = require('../models/TaskModel');
const ITaskDAO = require('../interfaces/ITaskDAO');

class TaskDAO extends ITaskDAO {
    async getTaskById(taskId) {
        return await Task.findByPk(taskId);
    }

    async createTask(taskData) {
        return await Task.create(taskData);
    }

    async updateTask(taskId, taskData) {
        const task = await Task.findByPk(taskId);
        if (task) {
            return await task.update(taskData);
        }
        return null;
    }
    async deleteTask(taskId) {
        const task = await Task.findByPk(taskId);
        if (task) {
            await task.destroy();
            return true;
        }
        return false;
    }

    async getAllTasks() {
        return await Task.findAll();
    }

    async getTasksByUserId(userId) {
        return await Task.findAll({ where: { assigned_user_ID: userId } });
    }
}

module.exports = new TaskDAO();
