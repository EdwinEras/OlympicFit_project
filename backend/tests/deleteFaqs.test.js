
/**
 * @file deleteFaqs.test.js
 * @description This file contains Jest test cases for testing the faqs create functionality of the API.
 * @author Kozeta Pajaj
 * @date 2025/03/18
 * 
 * Create a new faqs and delete it to verify that deletion works correctly.
 * Ensure that the API returns correct acknowledgment and deletedCount values.
 * 
 **/


const {createFaq, deleteFaq } = require('../faqs');
// Sample faqs data used for testing
const data = {
   "ques_code" : "Q0020",
   "ques_text" : "Can I get some discount?",
   "answer_text": "Please Provide us with your email so that we can discuss your query"
}

test('Delete faqs test', async () => {         
    var NewFaqs = await createFaq(data);
    const result = await deleteFaq(NewFaqs.insertedId); 
    expect(result.acknowledged).toBe(true); 
    expect(result.deletedCount).toBe(1);
});

