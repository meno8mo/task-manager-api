/**
 * Task Usecase - Business Logic Layer
 * 
 * STUDENT NOTE: This layer contains the core business rules.
 * It sits between the Controller (HTTP) and the Repository (Database).
 * 
 * Why use it?
 * - Keeps logic clean and testable
 * - Decouples database details from the API
 */

module.exports = (repository) => ({
    /**
     * Create a new task
     */
    createTask: async (data) => {
        // You could put extra business logic here (e.g., limit max tasks)
        return await repository.create(data);
    },

    /**
     * Get all tasks
     */
    getTasks: async () => {
        return await repository.findAll();
    },

    /**
     * Search tasks by title
     */
    searchTasks: async (title) => {
        if (!title) {
            return await repository.findAll();
        }
        return await repository.findByTitle(title);
    },

    /**
     * Update a task
     */
    updateTask: async (id, data) => {
        // Logic: Ensure task exists (repository handles this too)
        return await repository.update(id, data);
    },

    /**
     * Delete a task
     */
    deleteTask: async (id) => {
        return await repository.delete(id);
    }
});
