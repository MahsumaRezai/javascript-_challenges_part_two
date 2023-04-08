// 37  30 57 100 125
let queter;
let nickels;
let pennies;
function conv(x) {
    if (x == 30) {
        queter = 1;
        nickels = 1;
        console.log("queter :1", "nickels:1");
    }
    else if (x == 57) {
        console.log("queter:2", " nickels:1", "pennies:2")

    }
    else if (x == 100) {
        console.log("queter:4")
    }
    else if (x == 125) {
        console.log("queter: 5")

    }
    else if (x != 30 || x != 57 || x != 100 || x != 125) {
        console.log(" your number not find on the range")
    }

}
conv()