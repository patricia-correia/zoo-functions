const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se não passando argumentos retorna o objeto', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };

    expect(actual).toEqual(expected);
  });
  it('Retorna uma string para o argumento `Monday` e `09:00-AM`', () => {
    const actual = getOpeningHours('Monday', '9:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toBe(expected);
  });
  it('Retorna uma string para o argumento `Tuesday` e `09:00-AM`', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toBe(expected);
  });
  it('Retorna uma string para o argumento `Wednesday` e `09:00-PM`', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(actual).toBe(expected);
  });
  it('Retorna um erro para os argumentos `Thu`e `09:00-AM`', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  it('Retorna um erro para os argumentos `Friday` e `09:00-ZM', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Retorna um erro para os argumentos `Saturday` e `C9:00-AM`', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrowError(new Error('The hour should represent a number'));
  });
  it('Retorna um erro para os argumentos `Sunday` e `09:c0-AM`', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrowError(new Error('The minutes should represent a number'));
  });
});
