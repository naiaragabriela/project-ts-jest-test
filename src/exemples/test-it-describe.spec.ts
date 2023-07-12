describe('Testando alguma coisa', () => {
  it('descrição do teste (IT)', () => {
    const number = 1;
    expect(number).toBe(1);
  });
});

describe('Testando alguma coisa', () => {
  test('descrição do teste (TESTE)', () => {
    const name = 'Naiara';
    expect(name).toBe('Naiara');
  });
});

it('descrição do teste (IT)', () => {
  const number = 1;
  expect(number).toBe(1);
});

test('descrição do teste (TESTE)', () => {
  const name = 'Naiara';
  expect(name).toBe('Naiara');
});
