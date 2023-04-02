/*
#3
You will write four functions for this exercise. The functions area() and perimeter() have
length and width parameters and the functions volume() and surfaceArea() have length,
width, and height parameters. These functions return the area, perimeter, volume, and surface
area, respectively.
 answer 
*/
function area(h, w) {
    let fullarea = h * w;
    console.log(fullarea);
}
area()
function perimeter(len, wid) {
    let res = len + wid + len + wid;
    console.log(res)


}
perimeter();
function volume(n, m, k) {
    let res1 = n * m * k;
    console.log(res1)

}
volume();
function surface(l, w, h) {
    let res = (l * w * 2) + (l * h * 2) + (w * h * 2);
    console.log(res)
}
surface();









