// 5. Використовуючи функцію prompt() задайте користувачу питання
// про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult.
//     В залежності від отриманого значення виведіть відповідне повідомлення про статус особи.
//     Наприклад: при виконанні умови вік більше 18 вивести
// “Ви досягли повнолітнього віку”. Якщо вік менше 18 років вивести “Ви ще надто молоді”,

let isAdult = prompt("Are you more than 18 years old? Please, enter your age");

if (isAdult <= 0 || isAdult > 100)
    alert("Incorrect age was entered");
else if (isAdult >= 18)
    alert("Congrats! You are adult and you can learn JS!");
else if (isAdult < 18)
    alert("You are not adult. You should wait:)");