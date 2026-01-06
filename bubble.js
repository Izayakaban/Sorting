function bubbleSort(arr) {
    let l = arr.length;


    for (let i = 0; i < l - 1; i++) {
        for (let j = 0; j < l - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([4, 20, 12, 10, 7, 9]));

module.exports = bubbleSort;