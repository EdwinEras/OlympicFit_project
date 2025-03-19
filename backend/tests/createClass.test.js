/**
 * @file classes.test.js
 * @description This file contains Jest test cases for testing the class create functionality of the API.
 * @author Parishrama
 * @date 2025/03/18
 * 
 * Test Cases:
 * - Create a new class it to verify that works correctly. And deleting it later for smooth run of the testing later
 * - Ensure that the API returns correct acknowledgment and toBeDefined values.
 * 
 **/


const { createClass, deleteClass } = require('../classes');
// Sample class data used for testing
const data = {
    "class_name":"Zumba 2",
    "class_code":"ZUMBA404",
    "category":"Cardio 2",
    "capacity":20,
    "difficulty_level":"Intermediate 2",
    "description":"Fun dance workout 2",
    "is_active":true
}
  
test('create class test', async ()=>{
    const newClass = await createClass(data);
    expect(newClass.acknowledged).toBe(true);
    expect(newClass.insertedId).toBeDefined();
    await deleteClass(newClass.insertedId);
})
 