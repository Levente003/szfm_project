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

}

module.exports = new TaskDAO();
