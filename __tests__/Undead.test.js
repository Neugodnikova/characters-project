import Undead from '../src/characters/Undead';

test('создание Undead', () => {
  const unit = new Undead('Skeleton');
  expect(unit.name).toBe('Skeleton');
  expect(unit.type).toBe('Undead');
  expect(unit.attack).toBe(25);
  expect(unit.defence).toBe(25);
});
