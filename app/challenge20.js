/*
#20
Write a isLeapYear() function with an integer year parameter. If year is a leap year, the
function returns True. Otherwise, the function returns False.
answer
*/
let y = 2000;
function year() {
    let data = new Date();
    let getdata = data.getFullYear();
    if (y % 2 == 0) {
        return getdata;
    }
    else if (y % 2 == 1) {
        return false

    }
}
year()