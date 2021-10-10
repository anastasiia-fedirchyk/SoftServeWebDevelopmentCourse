// 3. Створіть клас Person, в якого конструктор приймає параметри name і surname,
// а також міститься метод showFullName(), який виводить ім’я і прізвище особи.
//     Від класу Person наслідується клас Student, конструктор якого крім name і surname,
//     приймає параметр year (рік вступу до університету).
// В класі Student необхідно перевизначити метод showFullName(midleName),
// щоб виводилося не лише ім’я, прізвище, але і по-батькові (midleName) студента.
//     Також в класі Student необхідно реалізувати метод showCourse(),
//     який виводитиме поточний курс студента (від 1 до 6). Значення курсу визначатиметься як різниця
//     поточного року (визначити самостійно) і року вступу до ВУЗу year.
//     Приклад результату:
//	Приклад результату:
// const stud1 = new Student("Petro", "Petrenko", 2015);
// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); //Current course: 6
//
//

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        console.log(this.name + " " + this.surname);
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    showFullName(midleName) {
        console.log(this.name + " " + midleName + " " + this.surname);
    }

    showCourse() {
        let date = new Date();
        let currentYear = date.getFullYear();
        let currentCourse = (currentYear - this.year) + 1;
        if (currentCourse > 6) {
            currentCourse = "Studying was finished. Not a student now";
        } else if (currentCourse <= 0) {
            currentCourse = "Not a student yet";
        }
        console.log("Current course: " + currentCourse);
    }
}

const stud1 = new Student("Petro", "Petrenko", 2018);
stud1.showFullName("Petrovych");
stud1.showCourse();

