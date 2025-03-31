/**
 * @file updateMembership.test.js
 * @description This file contains Jest test cases for testing the membershipplans functionality of the API.
 * @author NghiDang
 * @date 2025/03/18
 * 
 * - Update a membership plan to verify that update works correctly.
 * - Ensure that the API returns correct acknowledgment and deletedCount values.
 * 
 **/

const { createMemPlan, updateMemPlan } = require('../membershipplans');
// Sample membership data used for testing
const data = {
    "plan_name": "Premium",
    "plan_code": "PREM003",
    "package_price": 100,
    "duration": 6,
    "status": true
}

const data2 = {
    "plan_name": "Gold",
    "plan_code": "GOLD005",
    "package_price": 120,
    "duration": 6,
    "status": true
}

const _id = "67da13bfba696e5ea56a2ff4";

test('Update membership plan test', async ()=>{
    const result = await updateMemPlan(_id, data2);
    expect(result.modifiedCount).toBe(1);
    expect(result.acknowledged).toBe(true);
    await updateMemPlan(_id, data);
})


