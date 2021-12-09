import taxCounting from './Tax';

describe('taxCounting()', () => {
  it('should return an array with the tax amount in cents, amount and percent type string', () => {
    const res = taxCounting('5$', '10%');
    expect(res).toEqual(['50 cent']);
  });
  it('should return an array with the tax amount in cents, amount and percent type string', () => {
    const res = taxCounting('5', '10');
    expect(res).toEqual(['50 cent']);
  });
  it('should return an array with the tax amount in cents, amount and percent type number', () => {
    const res = taxCounting(5, 10);
    expect(res).toEqual(['50 cent']);
  });
  it('should return an array with the tax amount in cents, amount and percent type number', () => {
    const res = taxCounting(5, 0.1);
    expect(res).toEqual(['5 cent']);
  });
  it('should return an array with the tax amount in cents ,amount is negative number', () => {
    expect(() => {
      taxCounting(-10, 10);
    }).toThrowError('Not possible');
  });
  it('should return an array with the tax amount in cents ,amount is NaN ', () => {
    expect(() => {
      taxCounting(NaN, 10);
    }).toThrowError('Not possible');
  });
  it('should return an array with the tax amount in cents ,percent is NaN', () => {
    expect(() => {
      taxCounting(10, NaN);
    }).toThrowError('Not possible');
  });
  it('passes when value is NaN', () => {
    expect(NaN).toBeNaN();
    expect(1).not.toBeNaN();
  });
});
