// 2. Створіть довільний об’єкт, який має 5 полів.
//     Необхідно написати функцію showProps(obj),
//     яка приймає даний об’єкт і виводить список його властивостей записаних в масив.
//     Виведіть також масив значень властивостей об’єкта.

let car = {
    make: "bmw",
    model: "i3",
    year: "2018",
    color: "white",
    isAvailable: false
}

function showProps(obj) {
    console.log(Object.keys(obj));
    console.log(Object.values(obj));
}

showProps(car);