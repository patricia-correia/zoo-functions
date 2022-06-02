const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica a quantidade de elefantes', () => {
    const expected = (4);
    const actual = handlerElephants('count');
    expect(actual).toBe(expected);
  });
  it('Verifica se retorna um array com a relação dos nomes de todos os elefantes', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });
  it('Verifica se retorna a média de idade dos elefantes', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toEqual(expected);
  });
  it('Verifica se retorna a localização dos elefantes dentro do Zoológico', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toBe(expected);
  });
  it('Verifica se retorna a popularidade dos elefantes', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;
    expect(actual).toEqual(expected);
  });
  it('Retorna um array com relação de dias em que é possível visitar os elefantes', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(actual).toEqual(expected);
  });
  it('Retorna undefined se não for passado nenhum parametro para função', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toBe(expected);
  });
  it('Retorna uma mensagem quando um objeto vazio com parametro({})', () => {
    const actual = handlerElephants({});
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toEqual(expected);
  });
  it('Retorna `null` se a string passada não tiver uma funcionalidade', () => {
    const actual = handlerElephants('xablau');
    const expected = null;
    expect(actual).toBe(expected);
  });
});
