// 5. Реалізуйте функцію – findMin(),
//     яка повинна приймати довільну кількість числових аргументів і
// повертати той, який має найменше значення.
//     Порада: для розв’язку можете скористатися спеціальним масивом arguments.
//     Sample Output:
//     findMin(12, 14, 4, -4, 0.2); // => -4

function findMin() {
    return Math.min(...arguments)
}

console.log(findMin(-2, 1, 14, 7, 1, 0, -3))

