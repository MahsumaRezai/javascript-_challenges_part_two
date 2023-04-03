/*
#8
Write a getChessSquareColor() function that has parameters column and row. The
function either returns 'black' or 'white' depending on the color at the specified column and
row. Chess boards are 8 x 8 spaces in size, and the columns and rows in this program begin at 0 and
end at 7 like in Figure 9-1. If the arguments for column or row are outside the 0 to 7 range, the
function returns a blank string 

answer 
*/

function col(c) {
    if (c % 2 == 0 && c >= 0 && c < 8) {
        console.log("black")
    }
    else if (c % 2 == 1 && c >= 0 && c < 8) {
        console.log("white")
    }
    else if (c % 2 != 1 || c % 2 != 0 && c >= 0 && c < 8) {
        console.log("is not a col")
    }


}
col()