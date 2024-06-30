let number1 = '';
let number2 = '';

let operator = '';

let getNumber = btn => {
    if (number1 == '' || (number2 == '' && operator != ''))
        if (btn === 0)
            return;
    if (operator == '') {
        number1 += btn;
    }
    else {
        number2 += btn;
    }
    console.log(number1)
}