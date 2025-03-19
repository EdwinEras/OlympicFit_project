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

const { createReview, deleteReview } = require('../reviews');
// Sample Review data used for testing
const data = {
    "user_id": "67d70daf2f146b49d028bc12",
    "trainer_id": "67d70d2907952ec2b283aa0a" ,
    "rating": 4,
    "feedback": "The training was top notch!"
}

test('Create review', async ()=>{
    const result = await createReview(data);
    expect(result.acknowledged).toBe(true);
    expect(result.insertedId).toBeDefined();
    await deleteReview(result.insertedId);
})

