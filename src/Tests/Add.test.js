import 'jest';
const add = (a,b) => a + b ;
test('Should Add Two numbers',() => {
    const result = add(3,4);
    expect(result).toBe(7);
});