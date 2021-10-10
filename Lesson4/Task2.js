// 2. Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік
// і генерувати в модальному вікні помилки у випадку, коли:
//
// - юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your age”),
// - нечислове значення
// - вік юзера менше 14 років.
//     В іншому разі юзер отримує доступ до перегляду фільму.
//     В блокові catch передбачити виведення назви і опису помилки.

function checkAge() {
    let age = Number(prompt("Please, enter your age"));
    if (age === 0) {
        throw new Error("The field is empty! Please enter your age");
    } else if (isNaN(age)) {
        throw new Error("The value should be a number! Please enter your age");
    } else if ((age => 1) && (age < 14)) {
        throw new Error("Sorry, this content is not available for your age");
    } else alert("Successful!");
}

function enter_age() {
    try {
        checkAge()
    } catch (exception) {
        alert(exception.name + "\n" + exception.message);
    }
}

enter_age()
