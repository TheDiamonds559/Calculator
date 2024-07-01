let number1 = '';
let number2 = '';

let operator = '';

let result = '';

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
    updateDisplayForNumber();
    console.log(number1)
    console.log(number2)
}

let updateDisplayForNumber = () => {
    let dipslay = document.getElementsByClassName('display')[0];
    if (operator == '') {
        dipslay.textContent = number1;
    }
    else {
        dipslay.textContent = number2;
    }
}

let getOperator = op => {
    if (result != '' && (number1 == ''))
    {
        doEquation();
        number1 = result;
        operator = op;
        updateOpCode();
        return;
    }
    if (number1 == '' || (operator != '' && number2 == ''))
        return;
    if (number2 != '')
    {
        doEquation();
        number1 = result;
    }
    operator = op;
    updateOpCode();
}

let updateOpCode = () => {
    let opcode = document.getElementById('opcode');
    switch (operator) {
        case 'p':
            opcode.innerHTML = '&plus;'
            break;
        case 'm':
            opcode.innerHTML = '&minus;'
            break;
        case 't':
            opcode.innerHTML = '&times;'
            break;
        case 'd':
            opcode.innerHTML = '&div;'
            break;
    }
}

let doEquation = () => {

    let a = parseInt(number1);
    let b = parseInt(number2);
    number1 = '';
    number2 = '';
    document.getElementById('opcode').innerHTML = '&equals;';
    switch (operator) {
        case 'p':
            result = a + b;
            break;
        case 'm':
            result = a - b;
            break;
        case 't':
            result = a * b;
            break;
        case 'd':
            result = a / b;
            break;
    }


    operator = ''
    updateDisplayForResult();
}

let updateDisplayForResult = () => {
    document.getElementsByClassName('display')[0].textContent = result;
}