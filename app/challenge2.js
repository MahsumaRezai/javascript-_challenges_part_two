/*
#2
Write two functions, isOdd() and isEven(), with a single numeric parameter named
number. The isOdd() function returns True if number is odd and False if number is even. The
isEven() function returns the True if number is even and False if number is odd. 
// answer 
*/

function checknum(num) {
    if (num % 2 == 1) {
        console.log(" your number is odd");
        return false;

    }
    else if (num % 2 == 0) {
        console.log(" ok your number is even");
        return true;
    }
}
checknum()
