import Zombie from '../src/characters/Zombie';

test('создание Zombie', () => {
  const unit = new Zombie('Walker');
  expect(unit.name).toBe('Walker');
  expect(unit.type).toBe('Zombie');
  expect(unit.attack).toBe(40);
  expect(unit.defence).toBe(10);
});
