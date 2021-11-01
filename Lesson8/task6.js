// 6. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
//     Вимоги:
//   Цифри (0-9).
//   Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
//   В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
//    Символ “-” не може повторюватися.

function checkEmail(email) {
    let regexp = /^(\w-?)+@([\w-]+\.)+[\w-]+/g;
    let result = regexp.test(email)

    if (result) {
        console.log("Email is correct!");

    } else {
        console.log("Email is not correct!");
    }
}

checkEmail("my_mail@gmail.com");
checkEmail("#my_mail@gmail.com");
checkEmail("my_mail--@gmail.com");