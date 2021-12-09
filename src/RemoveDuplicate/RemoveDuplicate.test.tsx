import removeDuplicate from './removeDuplicate';

describe('removeDuplicate()', () => {
  it('should remove duplicate members from an sorted array', () => {
    const input = removeDuplicate([1, 3, 4, 5, 1, 3, 4]);
    expect(input).toEqual([1, 3, 4, 5]);
  });
  it('should remove duplicate members from an sorted array', () => {
    const input = removeDuplicate([-1, 3, 4, 5, 1, 3, -4]);
    expect(input).toEqual([-4, -1, 1, 3, 4, 5]);
  });
});
