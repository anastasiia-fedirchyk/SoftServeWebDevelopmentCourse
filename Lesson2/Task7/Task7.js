// 7. Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
//     В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
// В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
// В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
// В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.

let currentDateTime = new Date();
let hourNow = currentDateTime.getHours();
let timeRangeNight = [23, 0, 1, 2, 3, 4];
let timeRangeMorning = [5, 6, 7, 8, 9, 10, 11];
let timeRangeDay = [12, 13, 14, 15, 16, 17];
let timeRangeEvening = [18, 19, 20, 21, 22];

//1
switch (hourNow) {
    case(timeRangeNight.includes(hourNow)):
        alert("Доброї ночі");
        break;
    case(timeRangeMorning.includes(hourNow)):
        alert("Доброго ранку");
        break;
    case(timeRangeDay.includes(hourNow)):
        alert("Доброго дня");
        break;
    case(timeRangeEvening.includes(hourNow)):
        alert("Доброго вечора");
        break;
}

//2
if (timeRangeNight.includes(hourNow))
    alert("Доброї ночі");
else if (timeRangeMorning.includes(hourNow))
    alert("Доброго ранку");
else if (timeRangeDay.includes(hourNow))
    alert("Доброго дня")
else if (timeRangeEvening.includes(hourNow))
    alert("Доброго вечора")


