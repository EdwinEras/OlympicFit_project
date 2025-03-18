
/**
 * @file faqs.test.js
 * @description This file contains Jest test cases for testing the faqs create functionality of the API.
 * @author Parishrama
 * @date 2025/03/18
 * 
 * Test Cases:
 * - create faqs test
 * - Exmp: create a new faqs and test the aknowledge and insertedid values and then delete the inserted faq.
 * 
 **/

// Parishrama Test Creating faqs 

const {createFaq, deleteFaq } = require('../faqs');
const data = {
   "user_id":"67d70daf2f146b49d028bc15",
   "ques_code" : "Q0020",
   "ques_text" : "Can I get some discount?",
   "answer_text": "Please Provide us with your email so that we can discuss your query"
}
// Parishrama Test Creating faqs 

test('create faqs test', async ()=>{ 
    const newfaq = await createFaq(data);
    expect(newfaq.acknowledged).toBe(true);
    expect(newfaq.insertedId).toBeDefined();
    await deleteFaq(newfaq.insertedId);
})

