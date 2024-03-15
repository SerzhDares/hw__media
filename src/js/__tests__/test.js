import coordsValidator from "../coordsValidator";

test('Проверка корректности введения координат с пробелом', () => {
    const value = '51.50851, -0.12572';
    const result = coordsValidator(value);
    expect(result).toBe(true);
})

test('Проверка корректности введения координат без пробела', () => {
    const value = '51.50851,-0.12572';
    const result = coordsValidator(value);
    expect(result).toBe(true);
})

test('Проверка корректности введения координат со скобками', () => {
    const value = '[51.50851, -0.12572]';
    const result = coordsValidator(value);
    expect(result).toBe(true);
})

test('Проверка вывода ошибки при введении координат с неверным значением широты', () => {
    const value = '95.50851, -0.12572';
    const result = coordsValidator(value);
    expect(result).toBe(false);
})

test('Проверка вывода ошибки при введении координат с неверным значением долготы', () => {
    const value = '51.50851, 185.12572';
    const result = coordsValidator(value);
    expect(result).toBe(false);
})

test('Проверка вывода ошибки при вводе неверных данных', () => {
    const value = '12345';
    const result = coordsValidator(value);
    expect(result).toBe(false);
})