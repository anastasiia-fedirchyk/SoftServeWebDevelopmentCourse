// 7. Напишіть функцію, яка перевіряє правильність логіна.
//     Правильний логін - рядок від 2 до 10 символів,
//     що містить лише букви та цифри, номер не може бути першим.
//     Функція має приймати рядок і знаходити усі числа в цьому рядку,
//     включаючи числа з плаваючою комою (наприклад, 3.4).
//     Приклад роботи:
//     checkLogin('ee1.1ret3');
// true
// 1.1, 3
//
// checkLogin('ee1*1ret3');
// false
// 1, 1, 3

function checkLogin(login){
    let regexp = /^[a-z0-9\d+\.\d+]{2,10}$/;
    let result = regexp.test(login)
    console.log(result);
    console.log(login.match(/\d+/g));
    console.log(login.match(/\d+\.\d+/g));
//todo refactor the second part

}

checkLogin("ee1.1ret3");
checkLogin("ee1*1ret3");