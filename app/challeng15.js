/*
#15
Write a mode() function that has a numbers parameter. This function returns the mode, or
most frequently appearing number, of the list of integer and floating-point numbers passed to the
function.
answer
*/
function mode() {
    let arr = [1, 2, 3, 4, 5];
    arr.reduce((a, b) => {
        let arr2 = a + b;
        let arr3 = arr2 % 2;
        console.log(arr3)


    })
}
mode()