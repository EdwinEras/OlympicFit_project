/**
 * @file classes.test.js
 * @description This file contains Jest test cases for testing the classes functionality of the API.
 * @author EdwinEras
 * @date 2025/03/18
 * 
 * Test Cases:
 * - delete class test
 * - Exmp: create a new class to re-run the test, then delete the class and test the aknowledge and deletedCount values.
 * 
 **/

//Edwin Eras - Test
const { createClass, deleteClass } = require('../classes');
const data = {
    "class_name":"Zumba 2",
    "class_code":"ZUMBA404",
    "category":"Cardio 2",
    "capacity":20,
    "difficulty_level":"Intermediate 2",
    "description":"Fun dance workout 2",
    "is_active":true
}

//Edwin Eras - Test
test('delete class test', async ()=>{ 
    var newClass = await createClass(data);
    const result = await deleteClass(newClass.insertedId);
    expect(result.acknowledged).toBe(true);
    expect(result.deletedCount).toBe(1);
})


// Parishrama Teat Creating class 

test('create class test', async ()=>{ 
    const newClass = await createClass(data);
    expect(newClass.acknowledged).toBe(true);
    expect(newClass.insertedId).toBeDefined();
    await deleteClass(newClass.insertedId);
})

