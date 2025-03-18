/**
 * @file faqs.test.js
 * @description This file contains Jest test cases for testing the faqs functionality of the API.
 * @author Kozeta Pajaj
 * @date 03/18/2025
 * 
 * Test Cases:
 * - Create a new faqs and delete it to verify that deletion works correctly.
 * - Ensure that the API returns correct acknowledgment and deletedCount values.
 * 
 **/

const { createFaq, deleteFaq } = require('../faqs');
// Sample faqs data used for testing
const faqData =   {
    "ques_code": "Q020",
    "ques_text": "What payment methods are accepted?",
    "answer_text": "We accept credit, debit, and PayPal",
}

test('Create and delete faqs test item', async () => {         
    var NewFaqs = await createFaq(faqData);
    const result = await deleteFaq(NewFaqs.insertedId); 
    expect(result.acknowledged).toBe(true); 
    expect(result.deletedCount).toBe(1);
});

