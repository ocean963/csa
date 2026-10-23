// Validation for the join form (join.html)

var form = document.getElementById("join-form");
var result = document.getElementById("result");

var passwordRule = /^(?=.*[A-Za-z])(?=.*[0-9]).{8,}$/;

// Show or clear the message under one field. Returns true if the field is valid.
function check(errorId, isValid, message) {
    document.getElementById(errorId).textContent = isValid ? "" : message;
    return isValid;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var password = document.getElementById("pw").value;
    var reason = document.getElementById("msg").value.trim();
    var yearChosen = form.querySelector("input[name=grade]:checked") !== null;
    var interestCount = form.querySelectorAll("input[name=need]:checked").length;
    var department = document.getElementById("dept").value;

    var results = [
        check("name-error", name.length >= 2, "Please enter a name of at least 2 characters."),
        check("pw-error", passwordRule.test(password), "Password must be at least 8 characters with letters and numbers."),
        check("msg-error", reason.length >= 10, "Please write at least 10 characters."),
        check("grade-error", yearChosen, "Please choose your year."),
        check("need-error", interestCount > 0, "Please choose at least one."),
        check("dept-error", department !== "", "Please choose a department.")
    ];

    var allValid = results.indexOf(false) === -1;
    result.textContent = allValid ? "Application sent! Thank you, " + name + "." : "";
});
