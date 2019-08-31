export const Some = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) {
      return true
    }
  }
  return false
}

export const RecursiveSome = (arr, func) => {
  return (function someInternal(arrayInternal, counter) {
    const [head, ...tail] = arrayInternal;

    return arrayInternal.length === 0
      ? false
      : func(head, counter, arr)
        ? true
        : someInternal(tail, counter + 1)
  })(arr, 0);
};