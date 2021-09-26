// 2. Користувач вводить число (використовуйте prompt ()).
// Необхідно перевірити чи є введене число
// a) парним додатним;
// b) кратним числу 7.
// Результат перевірки вивести в консоль.


let isPaired;
let isDivisible;
let myNumber = prompt("Please, enter a number");

resultPaired = myNumber % 2;
if (resultPaired === 0)
    isPaired = true;
else if (resultPaired === 1)
    isPaired = false;
else
    isPaired = "Invalid input";

resultDevisible = myNumber % 7;
if (resultDevisible === 0)
    isDivisible = true;
else if (resultDevisible >= 1)
    isDivisible = false;
else
    isDivisible = "Invalid input";


resultMessage = "The number " + myNumber + " is paired: " + isPaired + " and is divisible to 7: " + isDivisible;
console.log(resultMessage);
