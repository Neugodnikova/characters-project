import Daemon from '../src/characters/Daemon';

test('создание Daemon', () => {
  const unit = new Daemon('Lucifer');
  expect(unit.name).toBe('Lucifer');
  expect(unit.type).toBe('Daemon');
  expect(unit.attack).toBe(10);
  expect(unit.defence).toBe(40);
});
