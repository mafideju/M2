export const Reduce = (arr, func, initVal) => {
  let acc = initVal === undefined ? arr[0] : initVal;
  const arrCopy = initVal === undefined ? arr.slice(1) : arr;
  for (let i = 0; i < arrCopy.length; i++) {
    acc = func(acc, arrCopy[i], i, arrCopy);
  }
  return acc;
};

export const ReduceRecursive = (arr, func, initVal) => {
  const acc = initVal === undefined ? arr[0] : initVal;
  const arrCopy = initVal === undefined ? arr.slice(1) : arr;

  return (function reduceInt(accInt, arrInt, counter) {
    const [head, ...tail] = arrInt;

    return arrInt.length === 0
      ? accInt
      : reduceInt(func(accInt, head, counter, arrCopy), tail, counter + 1)
  })(acc, arrCopy, 0);
};