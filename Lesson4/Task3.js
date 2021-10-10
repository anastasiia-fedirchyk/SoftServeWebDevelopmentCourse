// 3. Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує
// поле name значенням 'MonthException'.
//     Реалізуйте функцію showMonthName(month),
//     в якій параметр month – це порядковий номер місяця в році.
//     Функція повертає назву місяця відповідно до введеного номера місяця.
//     У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу
// MonthException з повідомленням 'Incorrect month number'.
//     Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
//     Приклад роботи програми:
//     > console.log(showMonthName(5));
// May
// > console.log(showMonthName(14));
// MonthException Incorrect month number

class MonthException extends Error {
    constructor(message) {
        super();
        this.message = message;
        this.name = "MonthException";
    }
}

year = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
}

function showMonthName(month) {
    if (month < 1 || month > 12 || typeof (month) != "number") {
        throw new MonthException("Incorrect month number");
    }
    return year[month];

}

function getMonthByNumber(number) {
    try {
        console.log(showMonthName(number));
    } catch (error) {
        console.log(error.name + " " + error.message);
    }
}

getMonthByNumber(-7)