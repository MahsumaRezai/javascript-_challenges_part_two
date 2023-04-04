//19
function checkpass(password) {
    let rule = new RegExp("[A-Z]{12}, [0-9]");
    if (rule.test(password)) {
        return "your password is ture"
    }
    else {
        return " your password  false"
    }

}
checkpass()