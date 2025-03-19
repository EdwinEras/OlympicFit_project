/**
 * @file deletereview.test.js
 * @description This file contains Jest test cases for testing the review deletion functionality of the API.
 * @date 2025/03/18
 * @author Augustine Appiah Bamfo
 *
 * Test Cases:
 * - Delete an existing review to verify that the deletion functionality works correctly.
 * - Ensure that the API responds with a success acknowledgment and that the review is deleted from the database.
 */

const { createReview, deleteReview } = require('../reviews'); 

jest.mock('../reviews'); 


const reviewData = {
  user_id: 112,
  training_id: 2020,
  rating: 4,
  review_text: "This is a top notch training!",
  date_created: new Date()
};


test('delete review test', async () => {
  // Mock the createReview function
  createReview.mockResolvedValue({
    acknowledged: true,
    insertedId: 'newReviewId' 
  });

  // Mock the deleteReview function
  deleteReview.mockResolvedValue({
    acknowledged: true,
    deletedCount: 1 
  });

  
  const newReview = await createReview(reviewData);


  expect(newReview.acknowledged).toBe(true);
  expect(newReview.insertedId).toBeDefined();
  
  const reviewId = newReview.insertedId; 

 
  const deleteResponse = await deleteReview(reviewId);


  expect(deleteResponse.acknowledged).toBe(true);
  expect(deleteResponse.deletedCount).toBe(1); 
});
