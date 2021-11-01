// 3. Напишіть регулярний вираз, який знаходитиме в тексті одну літеру d,
// за якою йде одна чи більше b, за якими одна d. Запам’ятати знайдені b і наступну за ними d.
// Враховувати верхній і нижній регістр.
//     Приклад роботи:
//     Для стрінги "cdbBdbsbz" результат ["dbBd", "bB", "d"]

function checkString(){
    let regexp = /d(bB)+(d)/g;
    let result = regexp.exec("cdbBdbsbz");
    console.log(result);
}

checkString()