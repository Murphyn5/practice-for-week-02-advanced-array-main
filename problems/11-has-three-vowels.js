/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function(string) {
    let letters = string.split("")
    acount = 0
    ecount = 0
    icount = 0
    ocount = 0
    ucount = 0
    letters.forEach(function(letter){
        if('a' === letter){
            acount = 1
        }

        if('e' === letter){
            ecount = 1
        }

        if('i' === letter){
            icount = 1
        }

        if('o' === letter){
            ocount = 1
        }

        if('u' === letter){
            ucount = 1
        }
    })
    return acount + ecount + icount + ocount + ucount >= 3
};

console.log(hasThreeVowels('go home'));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
