// 5. Упорядочить массив размера N по возрастанию1 | убыванию2.
var unsortedArr = function (arr){
    do {
        var swapped = false
        arr.forEach ((num, i) => {
            if (num > arr[i+1]){
                var temp = num
                arr[i] = arr [i + 1]
                arr [i + 1] = temp
                swapped = true
            }
        })
    } while (swapped === true)
    return arr
}

console.log(unsortedArr([4, 2, 5, 1, 3, 6, 7, 9, 3]))




// 6. Найти минимальный и максимальный из данных десяти элементов массива.

var unsortedArr = [4, 2, 5, 1, 3, 6, 7, 9, 3]
var sortedArr = null; // Правильно ли сюда ставить null или лучше пустой массив???
bubbleSort = function (arr){
    do {
        var swapped = false
        arr.forEach ((num, i) => {
            if (num > arr[i+1]){
                var temp = num
                arr[i] = arr [i + 1]
                arr [i + 1] = temp
                swapped = true
            }
        })
    } while (swapped === true)
    return arr
}
sortedArr = bubbleSort(unsortedArr) 
console.log(sortedArr)

var maxIndex = sortedArr.pop()
var minIndex = sortedArr.shift()

console.log(maxIndex)
console.log(minIndex)