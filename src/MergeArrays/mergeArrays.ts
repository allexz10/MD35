const mergeArrays = (a:number[], b:number[]) => {
  const arr = [...a, ...b].sort((x, y) => x - y);
  arr.map((num) => {
    if (Number.isNaN(num)) {
      throw new Error('Not allowed');
    } else {
      return arr;
    }
  });
  return arr;
};

export default mergeArrays;
