// 1. Реалізуйте функцію calcRectangleArea(), яка приймає 2 параметри
// ширина прямокутника width і висота прямокутника height і обраховує його площу.
// Передбачити припинення виконання програми і генерацію винятку у випадку,
// якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.

function calcRectangleArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
        throw new Error("Invalid parameter was provided");
    } else return width * height * 0.5;

}

function showRectangleArea() {
    try {
        let width = Number(prompt("Please, enter width"));
        let height = Number(prompt("Please,enter height"));
        alert("The area of rectangle is: " + calcRectangleArea(width, height));


    } catch (error) {
        alert("The invalid parameter(s) were provided.Please, try again");
    }
}

showRectangleArea()