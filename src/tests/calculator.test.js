const { calculate, add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

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
      expect(() => calculate(10, 'log', 3)).toThrow('Unsupported operator');
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

  // Modulo Tests
  describe('Modulo', () => {
    test('should calculate modulo: 5 % 2 = 1', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo with larger dividend', () => {
      expect(modulo(17, 5)).toBe(2);
    });

    test('should calculate modulo with negative numbers', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('should calculate modulo resulting in zero', () => {
      expect(modulo(10, 5)).toBe(0);
    });

    test('should calculate modulo with decimal numbers', () => {
      expect(modulo(7.5, 2)).toBe(1.5);
    });

    test('should throw error when dividing by zero in modulo', () => {
      expect(() => modulo(10, 0)).toThrow('Cannot perform modulo with zero divisor');
    });
  });

  // Power Tests
  describe('Power', () => {
    test('should calculate power: 2 ** 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should calculate power with larger exponent', () => {
      expect(power(2, 8)).toBe(256);
    });

    test('should calculate power with base 10', () => {
      expect(power(10, 3)).toBe(1000);
    });

    test('should calculate power with zero exponent', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('should calculate power with negative exponent', () => {
      expect(power(2, -2)).toBe(0.25);
    });

    test('should calculate power with negative base and even exponent', () => {
      expect(power(-2, 2)).toBe(4);
    });

    test('should calculate power with negative base and odd exponent', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    test('should calculate power with decimal exponent', () => {
      expect(power(4, 0.5)).toBe(2);
    });

    test('should handle power of one', () => {
      expect(power(42, 1)).toBe(42);
    });
  });

  // Square Root Tests
  describe('Square Root', () => {
    test('should calculate square root: √16 = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root of perfect square', () => {
      expect(squareRoot(25)).toBe(5);
    });

    test('should calculate square root of decimal', () => {
      expect(squareRoot(2.25)).toBe(1.5);
    });

    test('should calculate square root of zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should calculate square root of one', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should calculate square root of non-perfect square', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414, 3);
    });

    test('should throw error for negative number', () => {
      expect(() => squareRoot(-9)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should throw error for negative decimal', () => {
      expect(() => squareRoot(-0.5)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should handle very large numbers', () => {
      expect(squareRoot(1000000)).toBe(1000);
    });
  });

  // Advanced Operations in Calculate Function
  describe('Calculate Function - Advanced Operations', () => {
    test('should calculate modulo using calculate function', () => {
      expect(calculate(5, '%', 2)).toBe(1);
    });

    test('should calculate power using calculate function', () => {
      expect(calculate(2, '**', 3)).toBe(8);
    });

    test('should calculate square root using calculate function', () => {
      expect(calculate(16, 'sqrt', 0)).toBe(4);
    });

    test('should accept string arguments for modulo', () => {
      expect(calculate('17', '%', '5')).toBe(2);
    });

    test('should accept string arguments for power', () => {
      expect(calculate('3', '**', '4')).toBe(81);
    });

    test('should accept string arguments for square root', () => {
      expect(calculate('25', 'sqrt', 0)).toBe(5);
    });

    test('should throw error for modulo by zero', () => {
      expect(() => calculate(10, '%', 0)).toThrow('Cannot perform modulo with zero divisor');
    });

    test('should throw error for square root of negative number', () => {
      expect(() => calculate(-16, 'sqrt', 0)).toThrow('Cannot calculate square root of a negative number');
    });
  });

  // Combined Operations
  describe('Combined Operations', () => {
    test('should combine square root and power', () => {
      const sqrtResult = squareRoot(9);
      const powerResult = power(sqrtResult, 2);
      expect(powerResult).toBe(9);
    });

    test('should combine modulo and power', () => {
      const powerResult = power(2, 4);
      const moduloResult = modulo(powerResult, 5);
      expect(moduloResult).toBe(1);
    });

    test('should handle square root of power', () => {
      const powerResult = power(7, 2);
      const sqrtResult = squareRoot(powerResult);
      expect(sqrtResult).toBe(7);
    });
  });
});
