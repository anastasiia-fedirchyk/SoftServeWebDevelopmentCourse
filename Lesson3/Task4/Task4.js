// 4. Напишіть функцію raiseToDegree(a,b),
// яка повертає результат піднесення числа a до степеня b.
// Функція працює тільки з цілими числами.
// Реалізувати інтерфейс введення чисел a, b з клавіатури.
//
//     Sample Output:
//     raiseToDegree(3, 4);  // 81

function raiseToDegree(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return Math.pow(a, b)
    } else
        return "Incorrect input"

}

let button = document.querySelector("button");

button.onclick = function () {
    let a = Number(document.querySelector(".number").value);
    let b = Number(document.querySelector(".degree").value);
    raiseToDegree(a, b)
    alert(raiseToDegree(a, b))
}
