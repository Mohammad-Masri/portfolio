export const divideArray = (arr: any[], n: number) => {
  const dividedArrays = [];
  const itemsPerArray = Math.ceil(arr.length / n);

  for (let i = 0; i < n; i++) {
    const start = i * itemsPerArray;
    const end = (i + 1) * itemsPerArray;
    const subarray = arr.slice(start, end);
    dividedArrays.push(subarray);
  }

  return dividedArrays;
};
