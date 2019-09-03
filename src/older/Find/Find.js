export const Find = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) {
      return arr[i];
    }
  };
};

export const FindRecursive = (arr, func) => {
  return (function findInternal(arrInt, count) {
    const [head, ...tail] = arrInt;
    return arrInt.length === 0
      ? undefined
      : func(head, count, arr)
        ? head
        : findInternal(tail, count + 1)
  })(arr, 0);
};