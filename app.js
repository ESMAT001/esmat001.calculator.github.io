//selecting components
var text = document.getElementById("textField");
var btn = document.getElementById("convertBtn");
var textInvalid = document.getElementById("textInvalid");
var radioBtn = document.getElementsByClassName("radio");
// functions for converting numbers
//decimal
function DecimaltoBinary(num1) {
    array1 = [];
    var result = "";
    x = num1;
    for (var i = 0; parseInt((x / 2)) + 1 != 1; i++) {
        array1[i] = x % 2;
        x = parseInt(x / 2);
    }
    array1.push(1);
    for (var j = array1.length - 1; j >= 0; j--) {
        result += array1[j] + "";
    }
    return result;
}

function DecimalToOctal(num1) {
    array1 = [];
    var result = "";
    x = num1;
    for (var i = 0; parseInt((x / 8)) + 1 != 1; i++) {
        array1[i] = x % 8;
        x = parseInt(x / 8);
    }
    array1.push(x % 8);
    for (var j = array1.length - 1; j >= 0; j--) {
        result += array1[j] + "";
    }
    return result;
}

function DecimalToHexa(num1) {
    array1 = [];
    var result = "";
    x = num1;
    for (var i = 0; parseInt((x / 16)) + 1 != 1; i++) {
        o = x % 16;
        switch (o) {
            case 10:
                array1[i] = "A";
                break;
            case 11:
                array1[i] = "B";
                break;
            case 12:
                array1[i] = "C";
                break;
            case 13:
                array1[i] = "D";
                break;
            case 14:
                array1[i] = "E";
                break;
            case 15:
                array1[i] = "F";
                break;
            default:
                array1[i] = o;
        }
        x = parseInt(x / 16);
    }
    z = x % 16;
    switch (z) {
        case 10:
            z = "A";
            break;
        case 11:
            z = "B";
            break;
        case 12:
            z = "C";
            break;
        case 13:
            z = "D";
            break;
        case 14:
            z = "E";
            break;
        case 15:
            z = "F";
            break;
        default:
            z = z;
    }
    array1.push(z);
    for (var j = array1.length - 1; j >= 0; j--) {
        result += array1[j] + "";
    }
    return result;
}
//binary
function BinaryToDecimal(num) {
    array1 = [];
    var i = 0;
    for (var j = num.length - 1; j >= 0; j--) {
        array1[i] = parseInt(num.charAt(j)) * (parseInt(Math.pow(2, i)));
        i++;
    }
    var result = 0;
    for (var i = 0; i < array1.length; i++) {
        result += array1[i];
    }
    return result;
}
//octal
function OctalToDecimal(num) {
    array1 = [];
    var i = 0;
    for (var j = num.length - 1; j >= 0; j--) {
        array1[i] = parseInt(num.charAt(j)) * (parseInt(Math.pow(8, i)));
        i++;
    }
    var result = 0;
    for (var i = 0; i < array1.length; i++) {
        result += array1[i];
    }
    return result;
}
//hexa
function HexaToDecimal(num) {
    array1 = [];
    var i = 0;
    for (var j = num.length - 1; j >= 0; j--) {
        var x;
        switch (num.charAt(j)) {
            case 'A':
            case 'a':
                x = 10;
                break;
            case 'B':
            case 'b':
                x = 11;
                break;
            case 'C':
            case 'c':
                x = 12;
                break;
            case 'D':
            case 'd':
                x = 13;
                break;
            case 'E':
            case 'e':
                x = 14;
                break;
            case 'F':
            case 'f':
                x = 15;
                break;
            default:
                x = parseInt(num.charAt(j));
                break;
        }
        array1[i] = x * (parseInt(Math.pow(16, i)));
        i++;
    }
    var result = 0;
    for (var i = 0; i < array1.length; i++) {
        result += array1[i];
    }
    return result;
}
//function validation true
function validationTrue() {
    var clasList = btn.classList;
    var textClassList = text.classList;
    console.log(clasList);
    var newClasList = "";
    var newClasList1 = "";
    for (let i = 0; i < textClassList.length; i++) {
        if (textClassList[i] === "is-invalid") {

        } else {
            newClasList1 += textClassList[i] + " ";
        }
    }
    for (let i = 0; i < clasList.length; i++) {
        if (clasList[i] === "disabled") {

        } else {
            newClasList += clasList[i] + " ";
        }
    }
    btn.removeAttribute("disabled");
    btn.className = newClasList;
    text.className = newClasList1;
    textInvalid.style.display = "none";
}
//function validation false
function validationFalse() {
    textInvalid.style.display = "block";
    var count1 = 0;
    var count2 = 0;
    var textClassList = text.classList;
    var clasList = btn.classList;
    for (let i = 0; i < textClassList.length; i++) {
        if (textClassList[i] === "is-invalid") {

        } else {
            count2 = 1;
        }
    }
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
    if (count2 = 0) {

    } else {
        text.className += " is-invalid";
    }
    btn.setAttribute("disabled", "disabled");
}


//functions for validation
//Decimal
function DecimalValidation(input) {
    var count = 0;
    for (let j = 0; j < input.length; j++) {
        switch (input[j]) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
                break;
            default:
                count++;
                break;
        }
    }
    if (count == 0) {
        return true;
    } else {
        return false;
    }
}
//Octal
function OctalValidation(input) {
    var count = 0;
    for (let j = 0; j < input.length; j++) {
        switch (input[j]) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
                break;
            default:
                count++;
                break;
        }
    }
    if (count == 0) {
        return true;
    } else {
        return false;
    }
}
//Hexadecimal
function HexaValidation(input) {
    var count = 0;
    for (let j = 0; j < input.length; j++) {
        switch (input[j]) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
            case "A":
            case "a":
            case "B":
            case "b":
            case "C":
            case "c":
            case "D":
            case "d":
            case "E":
            case "e":
            case "F":
            case "f":
                break;
            default:
                count++;
                break;
        }
    }
    if (count == 0) {
        return true;
    } else {
        return false;
    }
}
//Binary
function BinaryValidation(input) {
    var count = 0;
    for (let j = 0; j < input.length; j++) {
        switch (input[j]) {
            case "1":
            case "0":
                break;
            default:
                count++;
                break;
        }
    }
    if (count == 0) {
        return true;
    } else {
        return false;
    }
}

var operation = "DTB";
for (let i = 0; i < radioBtn.length; i++) {
    radioBtn[i].addEventListener("click", function(e) {
        operation = e.target.value;
        console.log(operation);
    })
}
text.addEventListener("keyup", function() {
    if (text.value != "") {
        switch (operation) {
            case "DTB":
            case "DTO":
            case "DTH":
                if (DecimalValidation(text.value)) {
                    validationTrue();
                } else {
                    validationFalse();
                }
                break;
            case "BTD":
            case "BTO":
            case "BTH":
                if (BinaryValidation(text.value)) {
                    validationTrue();
                } else {
                    validationFalse();
                }
                break;
            case "OTD":
            case "OTB":
            case "OTH":
                if (OctalValidation(text.value)) {
                    validationTrue();
                } else {
                    validationFalse();
                }
                break;
            case "HTD":
            case "HTO":
            case "HTB":
                if (HexaValidation(text.value)) {
                    validationTrue();
                } else {
                    validationFalse();
                }
                break;
        }
    } else {
        var count1 = 0;
        var clasList = btn.classList;
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
        btn.setAttribute("disabled", "disabled");
    }
})
btn.addEventListener("click", function() {
    num = text.value;
    switch (operation) {
        case "DTB":
            text.value = DecimaltoBinary(num);
            break;
        case "DTO":
            text.value = DecimalToOctal(num);
            break;
        case "DTH":
            text.value = DecimalToHexa(num);
            break;
        case "BTD":
            text.value = BinaryToDecimal(num);
            break;
        case "BTO":
            text.value = DecimalToOctal(BinaryToDecimal(num));
            break;
        case "BTH":
            text.value = DecimalToHexa(BinaryToDecimal(num));
            break;
        case "OTD":
            text.value = OctalToDecimal(num);
            break;
        case "OTB":
            text.value = DecimaltoBinary(OctalToDecimal(num));
            break;
        case "OTH":
            text.value = DecimalToHexa(OctalToDecimal(num));
            break;
        case "HTD":
            text.value = HexaToDecimal(num);
            break;
        case "HTO":
            text.value = DecimalToOctal(HexaToDecimal(num));
            break;
        case "HTB":
            text.value = DecimaltoBinary(HexaToDecimal(num));
            break;
        default:
            break;
    }
    btn.setAttribute("disabled", "disabled");
})