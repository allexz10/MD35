import largerInteger from './largerInteger';

describe('largerInteger()', () => {
  it('should return larger number if bouth integers are positive', () => {
    const input = largerInteger(10, 5);
    expect(input).toEqual(10);
  });
  it('should return larger number if first integer is negative', () => {
    const input = largerInteger(-10, 5);
    expect(input).toEqual(5);
  });
  it('should return larger number if second integer is negative', () => {
    const input = largerInteger(10, -5);
    expect(input).toEqual(10);
  });
  it('should return larger number if bouth integers are negative', () => {
    const input = largerInteger(-10, -5);
    expect(input).toEqual(-5);
  });
  it('should return larger number if first integer decimal', () => {
    const input = largerInteger(-33.49, 33);
    expect(input).toEqual(33);
  });
  it('should return larger number', () => {
    const input = largerInteger(10, 10);
    expect(input).toEqual(10);
  });
});
