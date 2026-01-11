/**
 * Create Task DTO (Data Transfer Object)
 * 
 * STUDENT NOTE: A DTO is a pattern used to validate and transform data
 * before it reaches the database. It ensures data consistency and security.
 * 
 * This function takes raw data from the HTTP request and returns
 * a clean, validated object ready to be saved to the database.
 */

module.exports = (data) => {
  // Validation: Check if title exists and is not empty
  if (!data.title || !data.title.trim()) {
    throw new Error('Title is required and cannot be empty');
  }

  // Return validated and structured data
  return {
    title: data.title.trim(), // Remove extra spaces
    description: data.description ? data.description.trim() : '', // Optional field
    completed: data.completed === true ? true : false // Default to false if not provided
  };
};
