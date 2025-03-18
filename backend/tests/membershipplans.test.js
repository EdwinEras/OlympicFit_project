//Edwin Eras - Test
const { createMemPlan } = require('./membershipplans');

//Edwin Eras - Test
test('new membership plan created', async ()=>{         
    const data = {
        "plane_name": "GOLD",
        "plan_code": "GOLD004",
        "package_price": 150,
        "duration": 12
    }
    const result = await createMemPlan(data);

    expect(result.acknowledged)
    .toBe(true);
})
