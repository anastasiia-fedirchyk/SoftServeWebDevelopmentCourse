// 3. Напишіть функцію mul(), яка приймає будь-яку кількість
// параметрів різного типу і повертає добуток параметрів типу Number.
//     Якщо параметри типу Number відсутні, повертає число 0.

function mul(...params) {
    let toMul = [...params].filter(Number.isInteger)
    if (toMul.length === 0) {
        return 0
    } else return toMul.reduce((a, b) =>
        a * b, 1)


}


console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
console.log(mul(2, 3, 6)); // 36