const fizzBuzz = (n: number) => {
  const array = Array.from(Array(n + 1).keys()).splice(1).map((num) => num.toString());
  array.map((num) => {
    const number = Number(num);
    if (number % 3 === 0) {
      array.splice(number - 1, 1, 'Fizz');
    }

    if (number % 5 === 0) {
      array.splice(number - 1, 1, 'Buzz');
    }

    if (number % 15 === 0) {
      array.splice(number - 1, 1, 'FizzBuzz');
    }
    return num;
  });

  return array;
};

export default fizzBuzz;
