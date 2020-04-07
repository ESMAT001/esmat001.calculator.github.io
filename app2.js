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
    var clasList = btnCal.classList;
    console.log(clasList);
    var newClasList = "";
    var newClasList1 = "";
    for (let i = 0; i < clasList.length; i++) {
        if (clasList[i] === "disabled") {

        } else {
            newClasList += clasList[i] + " ";
        }
    }
    btnCal.removeAttribute("disabled");
    btn.className = newClasList;
}
//function validation false
function validationFalseCal() {
    var count1 = 0;
    var clasList = btnCal.classList;
    for (let i = 0; i < clasList.length; i++) {
        if (clasList[i] === "disabled") {

        } else {
            count1 = 1;
        }
    }
    if (count1 = 0) {

    } else {
        btn.className += " disabled";
    }
    btnCal.setAttribute("disabled", "disabled");
}
textFieldNumber.addEventListener("keyup", function() {
    switch (numberType1) {
        case "Decimal":
            if (DecimalValidation(textFieldNumber.value)) {
                var classLs = textFieldNumber.classList;
                var newClassLs = "";
                for (let i = 0; i < classLs.length; i++) {
                    if (classLs[i] == "is-invalid") {

                    } else {
                        newClassLs += classLs[i] + " ";
                    }
                }
                textFieldNumber.className = newClassLs;
                validationTrueCal();
            } else {
                textFieldNumber.className += " is-invalid"
                validationFalseCal();
            }
            break;
        case "Octal":
            if (OctalValidation(textFieldNumber.value)) {
                var classLs = textFieldNumber.classList;
                var newClassLs = "";
                for (let i = 0; i < classLs.length; i++) {
                    if (classLs[i] == "is-invalid") {

                    } else {
                        newClassLs += classLs[i] + " ";
                    }
                }
                textFieldNumber.className = newClassLs;
                validationTrueCal();
            } else {
                textFieldNumber.className += " is-invalid"
                validationFalseCal();
            }
            break;
        case "Binary":
            if (BinaryValidation(textFieldNumber.value)) {
                var classLs = textFieldNumber.classList;
                var newClassLs = "";
                for (let i = 0; i < classLs.length; i++) {
                    if (classLs[i] == "is-invalid") {

                    } else {
                        newClassLs += classLs[i] + " ";
                    }
                }
                textFieldNumber.className = newClassLs;
                validationTrueCal();
            } else {
                textFieldNumber.className += " is-invalid"
                validationFalseCal();
            }
            break;
        case "Hexa":
            if (HexaValidation(textFieldNumber.value)) {
                var classLs = textFieldNumber.classList;
                var newClassLs = "";
                for (let i = 0; i < classLs.length; i++) {
                    if (classLs[i] == "is-invalid") {

                    } else {
                        newClassLs += classLs[i] + " ";
                    }
                }
                textFieldNumber.className = newClassLs;
                validationTrueCal();
            } else {
                textFieldNumber.className += " is-invalid"
                validationFalseCal();
            }
            break;

    }
})
textFieldNumber1.addEventListener("keyup", function() {
    switch (numberType2) {
        case "Decimal":
            if (DecimalValidation(textFieldNumber1.value)) {
                var classLs = textFieldNumber1.classList;
                var newClassLs = "";
                for (let i = 0; i < classLs.length; i++) {
                    if (classLs[i] == "is-invalid") {

                    } else {
                        newClassLs += classLs[i] + " ";
                    }
                }
                textFieldNumber1.className = newClassLs;
                validationTrueCal();
            } else {
                textFieldNumber1.className += " is-invalid";
                validationFalseCal();
            }
            break;
        case "Octal":
            if (OctalValidation(textFieldNumber1.value)) {
                var classLs = textFieldNumber1.classList;
                var newClassLs = "";
                for (let i = 0; i < classLs.length; i++) {
                    if (classLs[i] == "is-invalid") {

                    } else {
                        newClassLs += classLs[i] + " ";
                    }
                }
                textFieldNumber1.className = newClassLs;
                validationTrueCal();
            } else {
                textFieldNumber1.className += " is-invalid";
                validationFalseCal();
            }
            break;
        case "Binary":
            if (BinaryValidation(textFieldNumber1.value)) {
                var classLs = textFieldNumber1.classList;
                var newClassLs = "";
                for (let i = 0; i < classLs.length; i++) {
                    if (classLs[i] == "is-invalid") {

                    } else {
                        newClassLs += classLs[i] + " ";
                    }
                }
                textFieldNumber1.className = newClassLs;
                validationTrueCal();
            } else {
                textFieldNumber1.className += " is-invalid";
                validationFalseCal();
            }
            break;
        case "Hexa":
            if (HexaValidation(textFieldNumber1.value)) {
                var classLs = textFieldNumber1.classList;
                var newClassLs = "";
                for (let i = 0; i < classLs.length; i++) {
                    if (classLs[i] == "is-invalid") {

                    } else {
                        newClassLs += classLs[i] + " ";
                    }
                }
                textFieldNumber1.className = newClassLs;
                validationTrueCal();
            } else {
                textFieldNumber1.className += " is-invalid"
                validationFalseCal();
            }
            break;

    }
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
// Calculate
btnCal.addEventListener("click", function() {
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
})