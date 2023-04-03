/*
#5
In English, ordinal numerals have suffixes such as the ―th‖ in ―30th‖ or ―nd‖ in ―2nd‖. Write an
ordinalSuffix() function with an integer parameter named number and returns a string of the
number with its ordinal suffix. For example, ordinalSuffix(42) should return the string
'42nd'.
answer

*/

function srt(num) {
    let str = "nd"
    let concat = num + str;
    let res = concat.toString();
    return res;

}
srt();
