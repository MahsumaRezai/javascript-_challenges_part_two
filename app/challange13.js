//13 
function sumproduct(...arg) {
    if (arg = 0) {
        return 0;
    }
    else if (arg != 0) {
        arg.reduce((a, b) => {
            let res = a + b;
            console.log(res)

        })

    }
}
sumproduct()