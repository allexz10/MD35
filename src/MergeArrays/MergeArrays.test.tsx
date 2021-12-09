import mergeArrays from './mergeArrays';

describe('mergeArrays()', () => {
  it('should merge two sorted array', () => {
    const input = mergeArrays([1, 3, 4, 5], [24, 6, 28, 9]);
    expect(input).toEqual([1, 3, 4, 5, 6, 9, 24, 28]);
  });
  it('should merge two sorted array', () => {
    const input = mergeArrays([1, 2, 10, 12], [3, 5, 4, 9]);
    expect(input).toEqual([1, 2, 3, 4, 5, 9, 10, 12]);
  });
  it('should merge two sorted array', () => {
    const input = mergeArrays([-1, 2, -10, 12], [3, -5, 4, 9]);
    expect(input).toEqual([-10, -5, -1, 2, 3, 4, 9, 12]);
  });
  it('should first number is NaN', () => {
    expect(() => {
      mergeArrays([-1, NaN, -10, 12], [3, -5, 4, 9]);
    }).toThrow('Not allowed');
  });
});
