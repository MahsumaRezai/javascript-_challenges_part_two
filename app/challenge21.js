// 21
let vild;
function data() {
    let exp = new RegExp("[0-9]{4}[0-2]{1,2}[0-9]{1,2}");
    let d = new Date();
    let getd = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
    if (exp.exec(vild)) {
        return getd;
    }
    else {
        return false;
    }
}
data();