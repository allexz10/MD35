const taxCounting = (num: string | number, per: string | number) => {
  const amount = num.toString().replace(/[^\d]*/g, '');
  const percent = per.toString().replace(/[^\d]*/g, '');
  if (num <= 0 || Number.isNaN(num) || Number.isNaN(per)) {
    throw new Error('Not possible');
  } else {
    return [`${(+amount * +percent)} cent`];
  }
};

export default taxCounting;
