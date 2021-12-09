const isPalindrome = (str: string):boolean => {
  const palindrome = str.split('').reverse().join('');
  return str === palindrome;
};

export default isPalindrome;
