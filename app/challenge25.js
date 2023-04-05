/*#25
Write a program that displays a multiplication table that looks
*/
function mulit() {
    let res = " x\t 1\t 2\t 3\t 4\t 5\t 6\t 7\t 8\t 9\t10"
    for (let i = 1; i <= 10; i++) {
        res += `\n${i < 10 ? ' ' + i : i}`
        for (let j = 1; j <= 10; j++) {
            res += `\t${i * j >= 10 ? i * j : ' ' + i * j}`
        }
    }
    console.log(res)

}


mulit()