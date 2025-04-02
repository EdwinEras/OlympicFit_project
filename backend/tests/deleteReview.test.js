/**
 * @file deleteReview.test.js
 * @description This file contains Jest test cases for DELETEING /reviews/:id endpoint to confirm that a review can be deleted successfully..
 * @date 2025/03/18
 * @author Augustine Appiah Bamfo
 *
 * Test Cases:
 * - Create a Jest test for the DELETE /reviews/:id endpoint to confirm that a review can be deleted successfully.
 * - Ensure that response is a json file("acknowledged": true) and that the review is removed from the database.
 */

const { createReview, deleteReview } = require('../reviews'); // 2 functions from the file reviews

const data = {
    "user_id": "67d70daf2f146b49d028bc12",
    "trainer_id": "67d70d2907952ec2b283aa0a" ,
    "rating": 4,
    "feedback": "The training was top notch!"
}

test('Delete Review test', async ()=>{       //test() is a Jest function that defines a test case.
    const result = await createReview(data);    // is an asynchronous function that creates a review based on the data provided.
    const del = await deleteReview(result.insertedId); // is an asynchronous function that deletes the review with the specified insertedId
    expect(del.acknowledged).toBe(true); // verification that review was deleted from the database
    expect(del.deletedCount).toBe(1); //checks exactly one review was deleted
})