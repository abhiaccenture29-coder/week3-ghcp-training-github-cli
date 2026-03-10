const { calculate, add, subtract, multiply, divide } = require('../calculator');

describe('Calculator Functions', () => {
  // Addition Tests
  describe('Addition', () => {
    test('should add two positive numbers: 2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add positive and negative numbers', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should add zero to a number', () => {
      expect(add(5, 0)).toBe(5);
    });

    test('should add decimal numbers', () => {
      expect(add(2.5, 3.5)).toBe(6);
    });
  });

  // Subtraction Tests
  describe('Subtraction', () => {
    test('should subtract two positive numbers: 10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract resulting in negative number', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('should subtract two negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('should subtract zero from a number', () => {
      expect(subtract(10, 0)).toBe(10);
    });

    test('should subtract decimal numbers', () => {
      expect(subtract(10.5, 3.2)).toBeCloseTo(7.3);
    });
  });

  // Multiplication Tests
  describe('Multiplication', () => {
    test('should multiply two positive numbers: 45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-5, -3)).toBe(15);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(7, -2)).toBe(-14);
    });

    test('should multiply by zero', () => {
      expect(multiply(10, 0)).toBe(0);
    });

    test('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply by one', () => {
      expect(multiply(42, 1)).toBe(42);
    });
  });

  // Division Tests
  describe('Division', () => {
    test('should divide two positive numbers: 20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide resulting in decimal', () => {
      expect(divide(10, 4)).toBe(2.5);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-10, -2)).toBe(5);
    });

    test('should divide positive by negative number', () => {
      expect(divide(10, -2)).toBe(-5);
    });

    test('should divide zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('should handle very small divisors', () => {
      expect(divide(1, 0.1)).toBe(10);
    });
  });

  // Calculate Function Tests (with CLI-style arguments)
  describe('Calculate Function', () => {
    test('should calculate addition using calculate function', () => {
      expect(calculate(2, '+', 3)).toBe(5);
    });

    test('should calculate subtraction using calculate function', () => {
      expect(calculate(10, '-', 4)).toBe(6);
    });

    test('should calculate multiplication using calculate function', () => {
      expect(calculate(45, '*', 2)).toBe(90);
    });

    test('should calculate division using calculate function', () => {
      expect(calculate(20, '/', 5)).toBe(4);
    });

    test('should accept string numbers as arguments', () => {
      expect(calculate('10', '+', '5')).toBe(15);
    });

    test('should handle decimal string arguments', () => {
      expect(calculate('5.5', '+', '2.5')).toBe(8);
    });

    test('should throw error for invalid operator', () => {
      expect(() => calculate(10, '%', 3)).toThrow('Unsupported operator');
    });

    test('should throw error for invalid numbers', () => {
      expect(() => calculate('abc', '+', '5')).toThrow('Invalid numbers provided');
    });

    test('should throw error when dividing by zero in calculate function', () => {
      expect(() => calculate(20, '/', 0)).toThrow('Cannot divide by zero');
    });
  });

  // Edge Cases
  describe('Edge Cases', () => {
    test('should handle very large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });

    test('should handle very small numbers', () => {
      expect(multiply(0.001, 0.002)).toBeCloseTo(0.000002);
    });

    test('should handle negative zero', () => {
      expect(subtract(5, 5)).toBe(0);
    });

    test('should maintain precision with multiple operations', () => {
      const result = divide(multiply(10, 3), 5);
      expect(result).toBe(6);
    });
  });
});
