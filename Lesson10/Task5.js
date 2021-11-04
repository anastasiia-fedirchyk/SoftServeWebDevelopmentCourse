// 5. Напишіть функцію mapBuilder (keysArray, valuesArrays),
//     яка приймає два масиви однакової довжини. Використовуючи ці масиви,
//     функція повинна створювати об'єкт типу Map, ключами якого є значення з першого масиву, ' +
// 'а значеннями Map - значення з другого масиву. Після цього функція повертає даний об'єкт Map.

function mapBuilder(keysArray, valuesArrays) {
    let newMap = new Map()
    for (let i = 0; i < keysArray.length; i++) {
        newMap.set(keysArray[i], valuesArrays[i])
    }
    return newMap
}
console.log(mapBuilder([1,2],["qq","tt"]))