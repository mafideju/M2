export const Filter = (arr, func) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}; 


export const RecursiveFilter = (arr, func) => {
  let count = 0;
  const FilterInternal = (arrayInternal) => {
    if (arrayInternal.length === 0) {
      return []
    }
    const [head, ...tail] = arrayInternal;
    return [func(head, count++, arr)].concat(FilterInternal(tail, func));
  }
  return FilterInternal(arr);
}