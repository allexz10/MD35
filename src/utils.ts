const devide = (a: number, b: number) => {
  if ((Number.isNaN(a) || !b)) {
    throw new Error('Not allowed');
  } else {
    return a / b;
  }
};

export default devide;
