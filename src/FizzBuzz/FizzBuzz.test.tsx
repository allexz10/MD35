import fizzBuzz from './fizzBuzz';

describe('FizzBuzz()', () => {
  it('should print out 5 statements when called with 5', () => {
    const input = fizzBuzz(5);
    expect(input).toEqual(['1', '2', 'Fizz', '4', 'Buzz']);
  });

  it('should prints out the correct values', () => {
    const input = fizzBuzz(15);
    expect(input).toEqual([
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ]);
  });
});
