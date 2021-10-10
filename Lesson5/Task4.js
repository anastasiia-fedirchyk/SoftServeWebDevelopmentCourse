// 4. Створіть клас Worker який буде мати конструктор, який приймає наступні властивості:
//     fullName (ім’я і прізвище), dayRate (ставка за день роботи),
// workingDays (кількість відпрацьованих днів).
// 1) клас повинен мати метод showSalary(),
//     який буде виводити зарплату працівника.
//     Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays.
// 2) додати приватне поле experience і присвоїти йому значення 1.2
// і використовувати його як додатковий множник при визначенні зарплати –
// створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
// 3) додати гетери і сетери для поля experience.
//     Встановити значення experience = 1.5 і вивести його на екран.
// 4) Вивести значення зарплати з новим experience.
// 5) Створити кілька екземплярів класу (працівників) з різними зарплатами,
//     як показано в прикладі нижче. Посортувати зарплату працівників
// із найбільшим experience по зростанню і вивести результат в форматі:   worker_fullName: salary_value

class Worker {


    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this._experience = 1.2;
    }

    set experience(experience_ratio) {
        this._experience = experience_ratio;
    }

    get experience() {
        return this._experience;
    }

    showSalary() {
        return this.dayRate * this.workingDays;
    }

    showSalaryWithExperience() {
        return this.dayRate * this.workingDays * this._experience;
    }


}

worker1 = new Worker("Roxana Babayan", 20, 23);
console.log(worker1.fullName + "'s salary is " + worker1.showSalary());
worker1.experience = 1.5;
console.log(worker1.fullName + "'s new experience is " + worker1.experience);
console.log(worker1.fullName + "'s salary after experience is: " + worker1.showSalaryWithExperience());

worker2 = new Worker("Armin Van Buuren", 48, 22);
console.log(worker2.fullName + "'s salary is " + worker2.showSalary());
worker2.experience = 1.7;
console.log(worker2.fullName + "'s new experience is " + worker2.experience);
console.log(worker2.fullName + "'s salary after experience is: " + worker2.showSalaryWithExperience());

worker3 = new Worker("Ihor Krutoy", 29, 23);
console.log(worker3.fullName + "'s salary is " + worker3.showSalary());
worker3.experience = 1.4;
console.log(worker3.fullName + "'s new experience is " + worker3.experience);
console.log(worker3.fullName + "'s salary after experience is: " + worker3.showSalaryWithExperience());


let allObjectsArray = [worker1, worker2, worker3];

function compare(a, b) {
    let comparison = 0;
    if (a._experience > b._experience) {
        comparison = 1;
    } else if (a._experience < b._experience) {
        comparison = -1;
    }
    return comparison;
}

function sortSalary() {
    let sorted = allObjectsArray.sort(compare)
    console.log("----sorted----")
    for (let i = 0; i < sorted.length; i++) {
        console.log(sorted[i].fullName + " " + sorted[i].showSalaryWithExperience() + " experience: " + sorted[i]._experience)
    }
}

sortSalary()




