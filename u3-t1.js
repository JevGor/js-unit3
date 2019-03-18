// UNIT 3

// 1. Дан целочисленный массив размера N. 
// Определить максимальное количество его одинаковых элементов.

const arr = [0, 1, 1, 2, 1, 1, 2, 2, 0, 0];

function maxEl(arr) {
    let arr0 = []  //что тут правильно пустой массив или null?
    let arr1 = []
    let arr2 = []

    let elem1 = 0
    let elem2 = 1
    let elem3 = 2

    let idx1 = arr.indexOf(elem1)
    let idx2 = arr.indexOf(elem2)
    let idx3 = arr.indexOf(elem3)

    while (idx1 != -1) {
        arr0.push(idx1)
        idx1 = arr.indexOf(elem1, idx1 + 1)
    }
    while (idx2 != -1) {
        arr1.push(idx2)
        idx2 = arr.indexOf(elem2, idx2 + 1)
    }
    while (idx3 != -1) {
        arr2.push(idx3)
        idx3 = arr.indexOf(elem3, idx3 + 1)
    }

    return arr0.length > arr1.length && arr0.length > arr2.length ? "0 встретился " + arr0.length + " раз":
        arr1.length > arr0.length && arr1.length > arr2.length ? "1 встретился " + arr1.length + " раз" :
        arr2.length > arr1.length && arr2.length > arr1.length ? "2 встретился " + arr2.length + " раз" :
        "Что-то пошло не так, увы"
}

maxEl(arr)

// Задача вроде решаема, но мне не нравиться что функцию надо подствлять значения переменных - 0, 1, 2
// понимаешь о чем я? хотел бы написать так что бы она сама подберала значения переменных, и сама создавала 
// elem, arr, idx - но то есть скажем что если в массиве будет не только 0, 1, 2 а еще и 9, 3, 109 и тд
// Понимаешь?