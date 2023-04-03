/*
# 11
Write a getSmallest() function that has a numbers parameter. The numbers parameter will
be a list of integer and floating-point number values. The function returns the smallest value in the
list. If the list is empty, the function should return None. Since this function replicates Python’s
min() function, your solution shouldn’t use it.
answer
*/
function listnum() {
    let arr = [9, 23, 3, 5];
    for (let i = 0; i < arr.length; i++) {
        let arr2 = arr.reduce((a, b) => {
            if (a < b) {
                return a;
            }
            else if (a > b) {
                return b;
            }
            else if (arr.includes = []) {
                console.log("non number")

            }
        })

        let arr3 = arr2;
        console.log(arr3)
    }

}
listnum()