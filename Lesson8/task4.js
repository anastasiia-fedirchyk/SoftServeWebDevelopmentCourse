// 4. Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
//     Приклад роботи:
//     Вхідний рядок    "Java Script"
// Вихід    “Script, Java”

function replaceString(str) {
    let regexp = /(\w+) (\w+)/;
    console.log(str.replace(regexp, '$2, $1'));
}

replaceString("Java Script");