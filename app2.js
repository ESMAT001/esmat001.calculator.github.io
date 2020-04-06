var textFieldNumber = document.getElementById("textFieldInput1");
var textFieldNumber1 = document.getElementById("textFieldInput2");
var radioBtn = document.getElementsByClassName("radioBtn");
var radioBtn1 = document.getElementsByClassName("radioBtn1");
var numberType1 = "Decimal";
var numberType2 = "Decimal";
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
            } else {
                textFieldNumber.className += " is-invalid"
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
            } else {
                textFieldNumber.className += " is-invalid"
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
            } else {
                textFieldNumber.className += " is-invalid"
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
            } else {
                textFieldNumber.className += " is-invalid"
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
            } else {
                textFieldNumber1.className += " is-invalid"
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
            } else {
                textFieldNumber1.className += " is-invalid"
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
            } else {
                textFieldNumber1.className += " is-invalid"
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
            } else {
                textFieldNumber1.className += " is-invalid"
            }
            break;

    }
})
console.log(radioBtn);