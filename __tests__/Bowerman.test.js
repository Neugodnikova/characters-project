import Bowerman from '../src/characters/Bowerman';

test('создание Bowerman', () => {
  const bow = new Bowerman('Robin');
  expect(bow.attack).toBe(25);
  expect(bow.defence).toBe(25);
  expect(bow.name).toBe('Robin');
  expect(bow.type).toBe('Bowman');
});
