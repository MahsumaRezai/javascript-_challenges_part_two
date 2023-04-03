/*
#9
Write a findAndReplace() function that has three parameters: text is the string with text to
be replaced, oldText is the text to be replaced, and newText is the replacement text. Keep in mind
that this function must be case-sensitive: if you are replacing 'dog' with 'fox', then the 'DOG' in
'MY DOG JONESY' won’t be replaced.
answer
*/


function text(tex) {
    let exp = new RegExp("[a-z]");
    if (exp.test(tex)) {
        let tex2 = tex.toLocaleUpperCase();
        tex2.toLocaleUpperCase();
        console.log(tex2)
    }
}
text();
