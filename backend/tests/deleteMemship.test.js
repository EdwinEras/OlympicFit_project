/**
 * @file deleteMembership.test.js
 * @description This file contains Jest test cases for testing the membershipplans functionality of the API.
 * @author NghiDang
 * @date 2025/03/18
 * 
 * - Delete a membership plan to verify that creation works correctly.
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

test('Delete membership plan test', async ()=>{
    const result = await createMemPlan(data);
    const del = await deleteMemPlan(result.insertedId);
    expect(del.acknowledged).toBe(true);
    expect(del.deletedCount).toBe(1);
})