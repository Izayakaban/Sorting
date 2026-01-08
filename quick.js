/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/
//pivot
function pivot(arr, start, end) {
  const pivotValue = arr[start];
  let i = start + 1;
  let j = end;

  while (i <= j) {
    while (i <= end && arr[i] < pivotValue) i++;
    while (j >= start && arr[j] > pivotValue) j--;

    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }

  [arr[start], arr[j]] = [arr[j], arr[start]];
  return j;
}

console.log(pivot([8, 10, 11, 12, 13, 16], 0, 5)); // 3


/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]

module.exports = quickSort;