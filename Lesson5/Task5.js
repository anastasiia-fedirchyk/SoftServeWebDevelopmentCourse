// 5. Створіть батьківський клас GeometricFigure, який має порожній метод для визначення
// площі getArea() та метод toString() для виведення назви класу.
//     Створіть 3 класи нащадки Triangle, Square і Circle,
//     які наслідуються від класу GeometricFigure.
//     Кожен з дочірніх класів має свою реалізацію методу getArea(),
//     для визначення площі фігури. В конструкторах дочірніх класів
// передбачити властивості необхідні для визначення площі фігури, наприклад для кола - радіус r.
//     Створіть зовнішню функцію handleFigures(figures),
//     яка прийматиме масив об’єктів дочірніх класів figures,
//     перевірятиме чи об’єкт належить батьківському класу з урахуванням наслідування,
//     виводитиме назву створеного об’єкту відповідної фігури, розраховану площу фігури
// та сумарну площу всіх фігур. Для реалізації функції можете використати метод reduce().

class GeometricFigure {
    getArea() {
        return 0;
    }

    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }

}

class Triangle extends GeometricFigure {
    constructor(a, h) {
        super();
        this.a = a;
        this.h = h;
    }

    getArea() {
        return 0.5 * this.a * this.h;
    }

}

class Square extends GeometricFigure {
    constructor(a) {
        super();
        this.a = a;
    }

    getArea() {
        return this.a * this.a;
    }
}

class Circle extends GeometricFigure {
    constructor(r) {
        super();
        this.p = 3.14;
        this.r = r;
    }

    getArea() {
        return this.p * this.r * this.r;
    }

}

function handleFigures(figures) {
    let totalArea = 0;
    for (let i = 0; i < figures.length; i++) {
        if (figures[i] instanceof GeometricFigure) {
            console.log("Geometric figure: " + figures[i].toString() + " area - " + figures[i].getArea());
            totalArea += figures[i].getArea();
        } else console.log("The object is not an instance of GeometricFigure");
    }
    console.log("Total area is: " + totalArea);
}

let myFigures = [new Triangle(4, 5), new Square(7), new Circle(5)];

handleFigures(myFigures);