export const Reverse = (arr) => {
  let newArray = []
  for (let i = arr.length; i--;) {
    newArray.push(arr[i])
  }
  return newArray;
}

export const ReverseRecursive = (arr) => {
  if (arr.length === 0) return [];
  return [arr[arr.length - 1]].concat(Reverse(arr.slice(0, -1)));
}