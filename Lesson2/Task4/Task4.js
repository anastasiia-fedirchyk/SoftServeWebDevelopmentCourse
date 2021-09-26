// 4. Напишіть програму, яка об’єднує всі наявні елементи масиву в стрічку
// і розділяє їх символом “*”.
// Початковий масив:
//     let cities = ["Rome", "Lviv", "Warsaw"];
// Результуючий масив:
//     "Rome*Lviv*Warsaw"

let cities = ["Rome", "Lviv", "Warsaw"];
let result = cities.join(",").replaceAll(",", "*");
console.log(result);