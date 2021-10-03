// 1. Заданий масив з елементами [2, 3, 4, 5]. За допомогою циклу for знайдіть добуток елементів цього масиву.
//     Також реалізуйте завдання через while.

//1
const myArray = [2, 3, 4, 5];
let result = 1;

for (let i = 0; i < myArray.length; i++) {
    result = result * myArray[i]
}
console.log("Result is: " + result);


// 2
const myArray = [2, 3, 4, 5];
let counter = 0;
let result = 1;

while (counter < myArray.length) {
    result = result * myArray[counter]
    counter = counter + 1
}
console.log("Result is: " + result);


