// 6. Напишіть функцію findUnique(arr),
//     яка приймає масив arr і перевіряє на унікальність його елементи.
//     Якщо всі елементи масиву унікальні (не мають дублів),
// то функція поверне true, інакше - false.
//     Sample Output:
//     findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true

function isUnique(arrayToCheck, singleElement) {
    let elementsInArray = [];
    for (let i = 0; i < arrayToCheck.length; i++) {
        if (arrayToCheck[i] === singleElement) {
            elementsInArray.push(arrayToCheck[i]);
        }
    }

    if (elementsInArray.length === 1)
        return true;
    else
        return false;
}

function findUnique(arrayToCheck) {
    for (let i = 0; i < arrayToCheck.length; i++) {
        let result = isUnique(arrayToCheck, arrayToCheck[i]);
        console.log(arrayToCheck[i] + " is unique " + result);

        if (result === false) {
            return false;
        }
    }
    return true;
}


let myArr = [1, 2, 3];
findUnique(myArr);
