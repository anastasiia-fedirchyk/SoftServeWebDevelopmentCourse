function upperCase(stringToTest) {
    let regexp = /^[A-Z]/;
    let result = regexp.test(stringToTest);

    if (result) {
        console.log("String's starts with uppercase character");

    } else {
        console.log("String's not starts with uppercase character");
    }


}

let correct = "RegExp";
let incorrect = "regexp";
upperCase(correct);
upperCase(incorrect);