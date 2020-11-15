
 (function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();


function validateEmailid(input) {
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailFormat.test(input)) {
        document.getElementById("emsg").innerHTML = "Valid email format.";
        document.getElementById("emsg").style.color = "green";
        return true;
    } else {
        document.getElementById("emsg").innerHTML = "Invalid email format";
        document.getElementById("emsg").style.color = "red";
        return false;
    }
}

function validatePhone(input) {
    var regExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (regExp.test(input)) {
        document.getElementById("pmsg").innerHTML = "Valid Phone Format.";
        document.getElementById("pmsg").style.color = "green";
        return true;
    } else {
        document.getElementById("pmsg").innerHTML = "inValid Format";
        document.getElementById("pmsg").style.color = "red";
        return false;
    }
}

function validatePassword(password) {

    if (password.length === 0) {
        document.getElementById("msg").innerHTML = "";
        return;
    }
    
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); // Special Charector
    matchedCase.push("[A-Z]"); // Uppercase Alpabates
    matchedCase.push("[0-9]"); // Numbers
    matchedCase.push("[a-z]"); // Lowercase Alphabates


    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(password)) {
            ctr++;
        }
    }

    var color = "";
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
        case 2:
            strength = "Weak Password";
            color = "red";
            break;
        case 3:
            if (password.length >= 5)
                strength = "Medium Password";
            color = "orange";
            break;
        case 4:
            if (password.length >= 8)
                strength = "Strong Password";
            color = "green";
            break;
    }
    document.getElementById("msg").innerHTML = strength;
    document.getElementById("msg").style.color = color;
}