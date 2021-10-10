// 1. Напишіть функцію propsCount(currentObject),
//     яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
//     Наприклад для об’єкта
// let mentor = {
//     course: "JS fundamental",
//     duration: 3,
//     direction: "web-development"
// };
// Результат має бути 3.
// propsCount(mentor);  // 3


function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}

let car = {
    make: "bmw",
    model: "i3",
    year: "2018",
    isAvailable: false
}

console.log(propsCount(car));