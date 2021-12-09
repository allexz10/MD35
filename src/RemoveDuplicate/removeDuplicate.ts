const removeDuplicate = (arr:number[]) => {
  const negativeNumbersArray:number[] = [];
  const positiveNumbersArray:number[] = [];

  arr.map((num) => (num ? negativeNumbersArray.push(num) : positiveNumbersArray.push(num)));

  return [...new Set(positiveNumbersArray), ...new Set(negativeNumbersArray)].sort((a, b) => a - b);
};

export default removeDuplicate;
