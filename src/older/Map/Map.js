// import React from 'react';

export const Map = (arr, func) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i], i, arr))
  }
  return newArr
}

export const RecursiveMap = (arr = [], func = (item) => item) => {
  let count = 0;
  const mapInternal = (arrayInternal) => {
    if (arrayInternal.length === 0) {
      return []
    }
    const [head, ...tail] = arrayInternal;
    return [func(head, count++, arr)].concat(mapInternal(tail, func));
  }
  return mapInternal(arr);
}