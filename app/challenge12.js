/*
#12
Write two functions named calculateSum() and calculateProduct(). They both have a
parameter named numbers, which will be a list of integer or floating-point values. The
calculateSum() function adds these numbers and returns the sum while the
calculateProduct() function multiplies these numbers and returns the product. If the list passed
to calculateSum() is empty, the function returns 0. If the list passed to calculateProduct()
is empty, the function returns 1
answer

*/
function sum(arr, arr1) {
    if (arr == null && arr1 == null) {
        return 0;

    }
    else if (arr != null && arr1 != null) {
        let s = arr + arr1;
        return s;
    }
}
sum();
function product(a, b) {
    if (a == null && b == null) {
        return 1;
    }
    else if (a != null && b != null) {
        return a * b;
    }

}
product()
