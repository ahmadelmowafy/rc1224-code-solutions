import {
  evenNumbers,
  firstElement,
  doubleNumbers,
  isPositive,
  stringLength,
  numberToString,
  isArrayEmpty,
  addNumbers,
  containsHello,
  lastElement,
  toDollars,
  divideBy,
  reverseString,
  capitalizeWords,
  findMax,
  countWords,
  celsiusToFahrenheit,
  findMin,
  capitalizeFirst,
} from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

describe('firstElement', () => {
  it('returns the first element', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const result = firstElement(numbers);
    expect(result).toBe(numbers[0]);
  });
});

describe('doubleNumbers', () => {
  it('returns an array with all the numbers doubled', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = doubleNumbers(numbers);
    expect(result).toEqual([2, 4, 6, 8, 10]);
  });
});

describe('isPositive', () => {
  it('returns true if the number is positive, otherwise returns false', () => {
    // const number = -2;
    // const result = isPositive(number);
    expect(isPositive(-2)).toEqual(false);
    expect(isPositive(0)).toEqual(false);
    expect(isPositive(3)).toEqual(true);
  });
});

describe('stringLength', () => {
  it('returns the length of the given string', () => {
    const string = 'Hello';
    const result = stringLength(string);
    expect(result).toEqual(5);
  });
});

describe('numberToString', () => {
  it('converts a number to a string', () => {
    const number = 3;
    const result = numberToString(number);
    expect(result).toEqual('3');
  });
});

describe('isArrayEmpty', () => {
  it('returns true if the array is empty, otherwise returns false', () => {
    const array1: any = [];
    const result = isArrayEmpty(array1);
    expect(result).toEqual(true);
  });
});

describe('addNumbers', () => {
  it('adds two numbers together', () => {
    const num1 = 3;
    const num2 = 5;
    const result = addNumbers(num1, num2);
    expect(result).toEqual(8);
  });
});

describe('containsHello', () => {
  it('returns true if the string contains the word hello', () => {
    const string = 'Hello, World!';
    const result = containsHello(string);
    expect(result).toEqual(true);
  });
});

describe('lastElement', () => {
  it('returns the last element of the given array', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const result = lastElement(array);
    expect(result).toEqual(6);
  });
});

describe('toDollars', () => {
  it('returns a number formatted in dollars and cents', () => {
    const number = 10.81;
    const result = toDollars(number);
    expect(result).toEqual('$10.81');
  });
});

describe('divideBy', () => {
  it('returns an array where every element has been divided by the given divisor', () => {
    const array = [2, 4, 6, 8, 10];
    const divisor = 2;
    const result = divideBy(array, divisor);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('reverseString', () => {
  it('reverses the given string', () => {
    const string = 'hello';
    const result = reverseString(string);
    expect(result).toEqual('olleh');
  });
});

describe('capitalizeWords', () => {
  it('capitalizes the first letter of each word in the string', () => {
    const string = 'the quick brown fox jumps over the lazy dog';
    const result = capitalizeWords(string);
    expect(result).toEqual('The Quick Brown Fox Jumps Over The Lazy Dog');
  });
});

describe('findMax', () => {
  it('returns the largest number in the array', () => {
    const array = [3, 6, 2, 8, 4, 1];
    const result = findMax(array);
    expect(result).toEqual(8);
  });
});

describe('countWords', () => {
  it('returns the number of words in the given string', () => {
    const string = 'the quick brown fox jumps over the lazy dog';
    const result = countWords(string);
    expect(result).toEqual(9);
  });
});

describe('celsiusToFahrenheit', () => {
  it('converts a temperature from Celsius to Fahrenheit', () => {
    const temperature = 30;
    const result = celsiusToFahrenheit(temperature);
    expect(result).toEqual(86);
  });
});

describe('findMin', () => {
  it('returns the smallest number in the given array', () => {
    const array = [3, 6, 2, 8, 4, 1];
    const result = findMin(array);
    expect(result).toEqual(1);
  });
});

describe('capitalizeFirst', () => {
  it('capitalizes the first letter of the given string', () => {
    const string = 'hello';
    const result = capitalizeFirst(string);
    expect(result).toEqual('Hello');
  });
});
