var textFieldNumber = document.getElementById("textFieldInput1");
var select = document.getElementById("select");
var textFieldNumber1 = document.getElementById("textFieldInput2");
var btnCal = document.getElementById("btnCalculate");
var radioBtn = document.getElementsByClassName("radioBtn");
var radioBtn1 = document.getElementsByClassName("radioBtn1");
var radioBtn2 = document.getElementsByClassName("radioBtn2");
var textResult = document.getElementById("textResult");
var numberType1 = "Decimal";
var numberType2 = "Decimal";
var numberType3 = "Decimal";
for (let i = 0; i < radioBtn.length; i++) {
    radioBtn[i].addEventListener("click", function(e) {
        numberType1 = e.target.value;
        console.log(numberType1);
    })
}
for (let i = 0; i < radioBtn1.length; i++) {
    radioBtn1[i].addEventListener("click", function(e) {
        numberType2 = e.target.value;
        console.log(numberType2);
    })
}
for (let i = 0; i < radioBtn2.length; i++) {
    radioBtn2[i].addEventListener("click", function(e) {
        numberType3 = e.target.value;
        console.log(numberType3);
    })
}
//function validation true
function validationTrueCal() {
    btnCal.classList.remove("disabled")
    btnCal.removeAttribute("disabled");
}
//function validation false
function validationFalseCal() {
    btnCal.classList.add("disabled");
    btnCal.setAttribute("disabled", "disabled");
}
textFieldNumber.addEventListener("keyup", function() {
    validationAll(numberType1, textFieldNumber);
});

textFieldNumber1.addEventListener("keyup", function() {
    validationAll(numberType2, textFieldNumber1);
})

function calculate() {
    var number1;
    var number2;
    var result;
    switch (numberType1) {
        case "Decimal":
            number1 = parseInt(textFieldNumber.value);
            break;
        case "Octal":
            number1 = OctalToDecimal(textFieldNumber.value);
            break;
        case "Binary":
            number1 = BinaryToDecimal(textFieldNumber.value);
            break;
        case "Hexa":
            number1 = HexaToDecimal(textFieldNumber.value);
            break;
    }
    switch (numberType2) {
        case "Decimal":
            number2 = parseInt(textFieldNumber1.value);
            break;
        case "Octal":
            number2 = OctalToDecimal(textFieldNumber1.value);
            break;
        case "Binary":
            number2 = BinaryToDecimal(textFieldNumber1.value);
            break;
        case "Hexa":
            number2 = HexaToDecimal(textFieldNumber1.value);
            break;
    }
    switch (select.value) {
        case "+":
            result = parseInt(number1 + number2);
            break;
        case "-":
            result = parseInt(number1 - number2);
            break;
        case "*":
            result = parseInt(number1 * number2);
            break;
        case "/":
            result = parseInt(number1 / number2);
            break;
    }

    switch (numberType3) {
        case "Decimal":

            break;
        case "Octal":
            result = DecimalToOctal(result);
            break;
        case "Binary":
            result = DecimaltoBinary(result);
            break;
        case "Hexa":
            result = DecimalToHexa(result);
            break;
    }
    console.log(number1);
    console.log(parseInt(textFieldNumber1.value));
    console.log(number2);
    console.log(result);
    textResult.value = result;
}
//valdation 
function validationAll(a, b) {
    switch (a) {
        case "Decimal":
            if (DecimalValidation(b.value)) {
                b.classList.remove("is-invalid");
                validationTrueCal();
            } else {
                b.classList.add("is-invalid");
                validationFalseCal();
            }
            break;
        case "Octal":
            if (OctalValidation(b.value)) {
                b.classList.remove("is-invalid");
                validationTrueCal();
            } else {
                b.classList.add("is-invalid");
                validationFalseCal();
            }
            break;
        case "Binary":
            if (BinaryValidation(b.value)) {
                b.classList.remove("is-invalid");
                validationTrueCal();
            } else {
                b.classList.add("is-invalid");
                validationFalseCal();
            }
            break;
        case "Hexa":
            if (HexaValidation(b.value)) {
                b.classList.remove("is-invalid");
                validationTrueCal();
            } else {
                b.classList.add("is-invalid");
                validationFalseCal();
            }
            break;

    }
}
// Calculate
btnCal.addEventListener("click", function() {
    if (textFieldNumber.value != "" && textFieldNumber1.value != "") {
        var count = 0;
        var count1 = 0;
        var clas1 = textFieldNumber.classList;
        var clas2 = textFieldNumber1.classList;
        for (let i = 0; i < clas1.length; i++) {
            if (clas1[i] == "is-invalid") {
                count = 1;
            }
        }
        for (let i = 0; i < clas2.length; i++) {
            if (clas2[i] == "is-invalid") {
                count1 = 1;
            }
        }
        if (count == 0 && count1 == 0) {
            calculate();
        } else {

        }
    } else {
        console.log("invalid")
    }

})