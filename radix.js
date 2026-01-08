
//radixsort
function radixSort(arr) {
  if (arr.length === 0) return arr;

  let max = Math.max(...arr);
  let maxDigits = max.toString().length;

  for (let i = 0; i < maxDigits; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let num of arr) {
      let digit = Math.floor(num / Math.pow(10, i)) % 10;
      buckets[digit].push(num);
    }
    arr = buckets.flat();
  }

  return arr;
}

console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66])); // [2, 24, 45, 66, 75, 90, 170, 802]
module.exports = radixSort;