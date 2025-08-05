import Swordsman from '../src/characters/Swordsman';

test('создание Swordsman', () => {
  const unit = new Swordsman('Aragorn');
  expect(unit.name).toBe('Aragorn');
  expect(unit.type).toBe('Swordsman');
  expect(unit.attack).toBe(40);
  expect(unit.defence).toBe(10);
});
