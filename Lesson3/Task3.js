// 3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами.
//     Випадкові числа генеруються із діапазону 1-500.
// Sample Output:
// randArray(5);  // 399,310,232,379,40

function randArray(k) {
//prepare array with values from 1 to 500
    let myArray = [];
    for (let i = 0; i < 500; i++) {
        myArray[i] = i + 1;
    }

//fill in result array
    let resultArray = [];
    for (let i = 0; i < k; i++) {
        resultArray[i] = Math.floor(Math.random() * myArray.length);
    }
    return resultArray;
}

let resultOfExecution = randArray(3);
console.log(resultOfExecution);

