function merge(sortedArr1, sortedArr2) {
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < sortedArr1.length && j < sortedArr2.length) {
    if (sortedArr1[i] < sortedArr2[j]) {
      merged.push(sortedArr1[i]);
      i++;
    } else {
      merged.push(sortedArr2[j]);
      j++;
    }
  }

  return merged.concat(sortedArr1.slice(i)).concat(sortedArr2.slice(j));
}

console.log(merge([3, 4, 5], [1, 2]));

function mergeSort(unsortedArr) {
  if (unsortedArr.length <= 1) {
    return unsortedArr;
  }

  let mid = Math.floor(unsortedArr.length / 2);
  let left = mergeSort(unsortedArr.slice(0, mid));
  let right = mergeSort(unsortedArr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([0, -10, 7, 4]));

module.exports = { merge, mergeSort};