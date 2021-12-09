import isPalindrome from './isPalindrome';

describe('isPalindrome()', () => {
  it('should return true if word is palindrome', () => {
    const input = isPalindrome('madam');
    expect(input).toBe(true);
  });
  it('should return true if word is palindrome', () => {
    const input = isPalindrome('honda');
    expect(input).toBe(false);
  });
  it('should expect honda', () => {
    expect('hondalexus').toMatch('honda');
  });
  it('should not return undefined', () => {
    expect(isPalindrome('honda')).toBeDefined();
  });
  it('should string length equal 5', () => {
    expect('madam').toHaveLength(5);
  });
  it('the best flavor is not coconut', () => {
    expect(isPalindrome('honda')).not.toBe('honda');
  });
});
