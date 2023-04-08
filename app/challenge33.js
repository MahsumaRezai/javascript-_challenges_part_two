// 33
function sp() {
    let x;
    let exp = new RegExp("[0-9]{1,3}");
    let exp2 = new RegExp("[0-9]{4,}");
    if (exp.test(x)) {
        return " the number  has one or two parts";
    }
    else if (exp2.test(x)) {
        let s = x.spilt(",");
        console.log(s, "the number  has many parts")
    }
}
sp()