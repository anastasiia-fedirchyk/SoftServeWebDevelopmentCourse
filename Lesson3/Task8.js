// 8. Напишіть функцію, яка приймає рядок як параметр і
// перетворює першу букву кожного слова рядка в верхній регістр.
//     Input string: 'i love java script'
//     Output string: 'I Love Java Script'

function capitalizeString(stringToCapitalize) {
    let arrayToCapitalize = stringToCapitalize.split(" ")
    let resultString = ""
    for (let i = 0; i < arrayToCapitalize.length; i++) {
        let oldValue = arrayToCapitalize[i][0]
        let newValue = arrayToCapitalize[i][0].toUpperCase()
        let convertedItem = arrayToCapitalize[i].replace(oldValue, newValue)
        resultString += convertedItem + " "
    }
    return resultString.trim()
}

console.log(capitalizeString("i love java script"))