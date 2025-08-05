import Magician from '../src/characters/Magician';

test('создание Magician', () => {
  const unit = new Magician('Gandalf');
  expect(unit.name).toBe('Gandalf');
  expect(unit.type).toBe('Magician');
  expect(unit.attack).toBe(10);
  expect(unit.defence).toBe(40);
});
