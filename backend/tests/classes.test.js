//Edwin Eras - Test
const { deleteClass } = require('../classes');

//Edwin Eras - Test
test('new membership plan created', async ()=>{         
    const id = "67d70c4443cbc6427a9c73d8"
    const result = await deleteClass(id);

    expect(result.acknowledged)
    .toBe(true);
})
