const amstrongValidate = (n: number):boolean => {
  const numbers = n.toString().split('');
  const res = numbers.map((num) => Number(num) ** numbers.length).reduce((a, b) => a + b);
  return res === n;
};

export default amstrongValidate;
