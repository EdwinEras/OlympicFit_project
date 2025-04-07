/**
 * @file users.test.js
 * @description This file contains Jest test cases for testing the user creation functionality of the API.
 * @date 2025/03/18
 * @author Adimabua Teddy Nwabuisi

 * 
 * Test Cases:
 * - Create a new user to verify that the functionality works correctly, and delete it later to ensure a clean test environment.
 * - Ensure that the API returns the correct acknowledgment and that the inserted ID is defined.
 */

const { createUser, deleteUser } = require('../users');

// Sample user data used for testing
const userData = {
  first_name: "Teddy123",
  last_name: "Nwabuisi123",
  email: "tedi.nwabusi45@example.com",
  username: `user_${Date.now()}`,
  media: [],
  promotions: []
};

// Test creating a user
test('create user test', async () => {
  const newUser = await createUser(userData);

  // Verify the response
  expect(newUser.acknowledged).toBe(true);
  expect(newUser.insertedId).toBeDefined();

  // Clean up: Delete the created user
  await deleteUser(newUser.insertedId);
});