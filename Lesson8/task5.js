// 5. Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).

function validateCardNumber(cardNumber) {
    let regexp = /\d{4}-\d{4}-\d{4}-\d{4}/;
    let result = regexp.test(cardNumber);

    console.log(cardNumber + " " + result);

}

let valid = "9999-9999-9999-9999";
let invalid = "111-9999-9999-9999";
validateCardNumber(valid);
validateCardNumber(invalid);