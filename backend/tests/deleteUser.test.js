/**
 * @file deleteUser.test.js
 * @description This file contains Jest test cases for testing the user creation and deletion functionality of the API.
 * @date 2025/03/18
 *  @author Adimabua Teddy Nwabuisi

 * 
 * Test Cases:
 * - Create a new user and delete it to verify that deletion works correctly.
 * - Ensure that the API returns correct acknowledgment and deletedCount values.
 */

const { createUser, deleteUser } = require('../users');

// Sample user data used for testing
const userData = {
  first_name: "Teddy123",
  last_name: "Nwabuisi123",
  email: `tedi.nwabusi${Date.now()}@example.com`, // Generate a unique email
  username: `user_${Date.now()}`, // Generate a unique username
  media: [],
  promotions: []
};

test('Delete user test', async () => {
  // Create a new user
  const newUser = await createUser(userData);

  // Verify the user was created successfully
  expect(newUser.acknowledged).toBe(true);
  expect(newUser.insertedId).toBeDefined();

  // Delete the created user
  const result = await deleteUser(newUser.insertedId);

  // Verify the deletion response
  expect(result.acknowledged).toBe(true);
  expect(result.deletedCount).toBe(1);
});