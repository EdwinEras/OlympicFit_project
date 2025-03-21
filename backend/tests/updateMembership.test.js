const { createMemPlan, updateMemPlan } = require('../membershipplans');
const { client } = require('../mongodbConnector'); // make sure this is how your connector exports

// Sample membership data
const data = {
  "plan_name": "Premium",
  "plan_code": "PREM003",
  "package_price": 100,
  "duration": 6,
  "status": true
};

const data2 = {
  "plan_name": "Gold",
  "plan_code": "GOLD005",
  "package_price": 120,
  "duration": 6,
  "status": true
};

const _id = "67da13bfba696e5ea56a2ff4";

beforeAll(async () => {
  // Insert the plan before running the test to make sure it exists
  await createMemPlan({ ...data, _id }); 
});

afterAll(async () => {
  // Always close the MongoDB connection after tests
  await client.close();
});

test('Update membership plan test', async () => {
  const result = await updateMemPlan(_id, data2);
  console.log(result);
  expect(result.modifiedCount).toBe(1);
  expect(result.acknowledged).toBe(true);

  // Restore original data after test
  await updateMemPlan(_id, data);
});
