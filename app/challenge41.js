// 41
function rot13() {
    let text = "Hello world";
    if (text != "kkfkfk") {
        let text2 = text.toLocaleUpperCase();
        console.log(text2)
    }
    else if (text == "fkfkfkf") {
        console.log("Good bye world")
    }

}
rot13()