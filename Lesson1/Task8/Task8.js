// 8. Напишіть скріпт, який вираховує кількість секунд в годині, в добі, в місяці,
//     записує результати в відповідні змінні, і виводить їх значення на екран.
const secondsInOneMinute = 60;
const minutesInOneHour = 60;
const hoursInOneDay = 24;
const daysInOneMonth = 30;

let secondsInOneHour = minutesInOneHour * secondsInOneMinute;
let secondsInOneDay = hoursInOneDay * secondsInOneHour;
let secondsInOneMonth = daysInOneMonth * secondsInOneDay;

document.write("Seconds in one hour: " + secondsInOneHour + "<br>");
document.write("Seconds in one day: " + secondsInOneDay + "<br>");
document.write("Seconds in one month: " + secondsInOneMonth + "<br>");

