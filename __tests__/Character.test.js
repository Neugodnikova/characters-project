import Character from '../src/characters/Character';

describe('Character base class', () => {
  test('ошибка: имя < 2 символов', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
  });

  test('ошибка: имя > 10 символов', () => {
    expect(() => new Character('VeryLongNameHere', 'Bowman')).toThrow();
  });

  test('ошибка: тип неверный', () => {
    expect(() => new Character('Name', 'Knight')).toThrow('Тип должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
  });

  test('успешное создание', () => {
    const char = new Character('Hero', 'Bowman');
    expect(char.name).toBe('Hero');
    expect(char.type).toBe('Bowman');
    expect(char.health).toBe(100);
    expect(char.level).toBe(1);
    expect(char.attack).toBe(0);
    expect(char.defence).toBe(0);
  });

  test('levelUp: увеличение уровня, атаки и защиты', () => {
    const char = new Character('Hero', 'Bowman');
    char.attack = 10;
    char.defence = 20;
    char.health = 50;
    char.levelUp();
    expect(char.level).toBe(2);
    expect(char.attack).toBe(12); // 10 * 1.2
    expect(char.defence).toBe(24); // 20 * 1.2
    expect(char.health).toBe(100);
  });

  test('levelUp: ошибка при health = 0', () => {
    const char = new Character('Hero', 'Bowman');
    char.health = 0;
    expect(() => char.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
  });

  test('damage: уменьшение здоровья с учётом защиты', () => {
    const char = new Character('Hero', 'Bowman');
    char.defence = 20;
    char.damage(50); // урон 50, защита 20% => 50 * 0.8 = 40
    expect(char.health).toBe(60);
  });

  test('damage: здоровье не уходит ниже 0', () => {
    const char = new Character('Hero', 'Bowman');
    char.defence = 10;
    char.damage(1000); // очень большой урон
    expect(char.health).toBe(0);
  });

  test('damage: не изменяет здоровье если уже 0', () => {
    const char = new Character('Hero', 'Bowman');
    char.health = 0;
    char.defence = 10;
    char.damage(50);
    expect(char.health).toBe(0);
  });
});
