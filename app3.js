var btnSubmit = document.getElementById("btnSubmit");
var textarea = document.getElementById("textarea");
btnSubmit.addEventListener("click", function() {
    if (textarea.value == "") {
        alert("Please write a massage")
    } else {
        alert("Thank You!");
    }

})