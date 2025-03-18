/**
 * @file membershipplans.test.js
 * @description This file contains Jest test cases for testing the membershipplans functionality of the API.
 * @author EdwinEras
 * @date 2025/03/18
 * 
 * - Create a new membership plan and delete it to verify that deletion works correctly.
 * - Ensure that the API returns correct acknowledgment and deletedCount values.
 * 
 **/

const { createMemPlan, deleteMemPlan } = require('../membershipplans');
// Sample membership data used for testing
const data = {
    "plane_name": "GOLD",
    "plan_code": "GOLD004",
    "package_price": 150,
    "duration": 12
}

test('Create and delete membership plan test', async ()=>{
    const result = await createMemPlan(data);
    expect(result.acknowledged).toBe(true);
    expect(result.insertedId).toBeDefined();
    await deleteMemPlan(await result.insertedId);
})
