const sum = require('./sum')

test('soma 1 + 2 para igualar 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('soma números negativos', () => {
  expect(sum(-1, -2)).toBe(-3);
});

test('soma 2+6 para igualar 4', () => {
    expect(sum(2, 6)).toBe(8);
  });


  
