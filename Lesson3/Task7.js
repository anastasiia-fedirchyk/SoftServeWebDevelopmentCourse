// 7. Напишіть функцію, яка повертає останній елемент масиву.
//     Функція може приймати 2 параметра: 1-ий масив, 2-ий числовий параметр,
//     що відповідає кількості 'х' останніх елементів масиву, які треба вивести.


function returnLastElements(arr, counter) {
    let arrayResult = [];

    for (let i = arr.length - 1; counter !== 0; i--) {
        if (arr[i] !== undefined) {
            arrayResult.push(arr[i]);
        }
        counter -= 1;

    }
    return arrayResult;
}

let arr = [1, 2, 3, 4];
console.log(returnLastElements(arr, 5))