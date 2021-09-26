// 6. В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних:
//     - ваше ім’я
// - ваше прізвище
// - навчальна група
// - ваш рік народження.
//     Присвойте змінним відповідні значення.
//     Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану.
//     Визначте тип кожної змінної.
//     Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
//     Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.

let firstName;
let lastName;
let group;
let yearOfBirth;
firstName = "Anastasiia";
lastName = "Fedirchyk";
group = "myGroup";
yearOfBirth = 1991;

let isMarried = true;

typeof (firstName);
typeof (lastName);
typeof (group);
typeof (yearOfBirth);
typeof (isMarried);

console.log(yearOfBirth)
console.log(isMarried)
console.log(firstName)
console.log(lastName)

let a = null;
let b = undefined;

console.log(typeof (a));
console.log(typeof (b));
