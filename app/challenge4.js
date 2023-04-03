/*
# 4
Write a fizzBuzz() function with a single integer parameter named upTo. For the numbers 1
up to and including upTo, the function prints one of four things:
 Prints 'FizzBuzz' if the number is divisible by 3 and 5.
 Prints 'Fizz' if the number is only divisible by 3.
 Prints 'Buzz' if the number is only divisible by 5.
 Prints the number if the number is neither divisible by 3 nor 5.
answer 
*/
function num(n) {
    if (n % 3 && n % 5) {
        let text = "FizzBuzz";
        return text;

    }
    else if (n % 3) {
        let text1 = "Fizz";
        return text1;
    }
    else if (n % 5) {
        let text2 = "Buzz";
        return text2;
    }
    else {
        let text3 = "Prints the number if the number is neither divisible by 3 nor 5.";
        return text3;
    }

}
num();

