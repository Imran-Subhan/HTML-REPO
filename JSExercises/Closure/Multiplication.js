
function number(x) {
    function multiply(y) {
        return x * y;
    }
    return multiply;
}

let answer = number(2);
let multi = answer(3);

console.log(multi);
