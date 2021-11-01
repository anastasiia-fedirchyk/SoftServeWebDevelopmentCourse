// 2. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.
//     Приклад роботи:
//     checkEmail("Qmail2@gmail.com");
// true

function checkEmail(emailToCheck) {
    let regexp = /.+@.+\..+/i;
    let result = regexp.test(emailToCheck);
    console.log(emailToCheck + " " + result);


}
let valid = "name23.info5@test1.com";
let invalid = "cghsc.yy@";
checkEmail(valid);
checkEmail(invalid);