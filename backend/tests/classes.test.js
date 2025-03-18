/**
 * @file classes.test.js
 * @description This file contains Jest test cases for testing the classes functionality of the API.
 * @author EdwinEras
 * @date 2025/03/18
 * 
 * Test Cases:
 * - Create a new class and delete it to verify that deletion works correctly.
 * - Ensure that the API returns correct acknowledgment and deletedCount values.
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


test('Create and delete class test', async ()=>{ 
    var newClass = await createClass(data); 
    const result = await deleteClass(newClass.insertedId);  
    expect(result.acknowledged).toBe(true);
    expect(result.deletedCount).toBe(1);
})
