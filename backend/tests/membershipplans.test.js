/**
 * @file membershipplans.test.js
 * @description This file contains Jest test cases for testing the membershipplans functionality of the API.
 * @author EdwinEras
 * @date 2025/03/18
 * 
 * Test Cases:
 * - create membership plan test
 * - Exmp: create new membershipplan, test the aknowledge and insertedId values then delte the membershipplan to re-run the test.
 * 
 **/

//Edwin Eras - Test
const { createMemPlan, deleteMemPlan } = require('../membershipplans');
const data = {
    "plane_name": "GOLD",
    "plan_code": "GOLD004",
    "package_price": 150,
    "duration": 12
}

//Edwin Eras - Test
test('create membership plan test', async ()=>{
    const result = await createMemPlan(data);
    expect(result.acknowledged).toBe(true);
    expect(result.insertedId).toBeDefined();
    await deleteMemPlan(await result.insertedId);
})
