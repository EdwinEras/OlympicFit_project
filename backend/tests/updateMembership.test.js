const { ObjectId } = require('mongodb');
const { createMemPlan, updateMemPlan } = require('../membershipplans');
const { client } = require('../mongodbConnector');

const data = {
  _id: new ObjectId("67da13bfba696e5ea56a2ff4"),
  plan_name: "TestingPlan",
  plan_code: "TEST999", // ✅ unique plan code
  package_price: 99,
  duration: 3,
  status: true
};

const data2 = {
  plan_name: "TestingPlanUpdated",
  plan_code: "TEST999", // ✅ keep same code to avoid triggering unique index again
  package_price: 120,
  duration: 6,
  status: false
};

beforeAll(async () => {
  const db = client.db(process.env.DB_NAME);
  // ✅ delete only by plan_code (which is unique in your collection)
  await db.collection('membershipplans').deleteMany({ plan_code: data.plan_code });
  await createMemPlan(data);
});

afterAll(async () => {
  await client.close();
});

test('Update membership plan test', async () => {
  const result = await updateMemPlan(data._id, data2);
  console.log(result);
  expect(result.modifiedCount).toBe(1);
  expect(result.acknowledged).toBe(true);

  // Optional: restore original
  await updateMemPlan(data._id, data);
});
