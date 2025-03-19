/**
 * @file createReview.test.js
 * @description This file contains Jest test cases to Implement an automated Jest test for the POST /reviews endpoint for Gym Training reviews.
 * @date 2025/03/18
 * @author Augustine Appiah Bamfo
 *
 * Test Cases:
 * - Implement an automated Jest test for the POST /reviews endpoint.
 * - Verify that a new Gym Training review is created successfully and the response is a json file("acknowledged": true)
 * - Review data is saved to the database properly
 */

// Import required dependencies
const request = require('supertest');  // For making HTTP requests
const app = require('../app'); // Assuming the express app is exported from 'app.js' or 'server.js'

// Mocking the database method that interacts with db.json
const mockDb = {
  createReview: jest.fn()  // Create a mock function for saving reviews
};

// Test case suite for the POST /reviews endpoint
describe('POST /reviews', () => {

  // Test for successfully creating a Gym Training review
  it('should create a new Gym Training review and respond with an acknowledgment', async () => {
    // Sample review data for Gym Training
    const reviewData = {
      trainingId: 123,  // ID of the specific training session
      userId: 456,  // ID of the user giving the review
      rating: 5,  // Rating out of 5
      comment: "Great training session! It really helped me improve my strength and endurance."
    };

    // Simulate the saving of the review by mockDb.createReview
    mockDb.createReview.mockResolvedValue({
      id: 789, // Mock ID for the created review
      ...reviewData
    });

    // Send POST request
    const response = await request(app)
      .post('/reviews')
      .send(reviewData)
      .set('Accept', 'application/json');

    // Check for status code and response body
    expect(response.status).toBe(201);  // Assuming 201 for successful creation
    expect(response.body.acknowledged).toBe(true); // Response should have acknowledged: true
    expect(response.body.review).toHaveProperty('id', 789);  // Ensure created review has ID

    // Verify that the database interaction was called with correct parameters
    expect(mockDb.createReview).toHaveBeenCalledWith(reviewData);
  });

  // Test for invalid review data (e.g., missing required fields)
  it('should return an error if required fields are missing', async () => {
    // Incomplete review data (missing rating)
    const invalidReviewData = {
      trainingId: 123,  // Training ID is still there, but rating is missing
      userId: 456,
      comment: "Missing rating."
    };

    // Send POST request with invalid data
    const response = await request(app)
      .post('/reviews')
      .send(invalidReviewData)
      .set('Accept', 'application/json');

    // Check for status code and error message
    expect(response.status).toBe(400);  // Assuming 400 for bad request
    expect(response.body.error).toBe('Rating is required'); // Custom error message from your API
  });
});
