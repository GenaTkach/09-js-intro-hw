const sumDigits = function (x) {
    return x
        .toString()
        .split("")
        .map(Number)
        .reduce((a, b) => a + b);
}
const luckyNumber = function (x) {
    let res = 0;
    x.toString()
        .split("")
        .map(Number)
        .forEach((element, index, array) => {
            if (index % 2 != 0) {
                res += element;
            } else {
                res -= element;
            }
        })
    ;
    return res == 0;
}

let res = sumDigits(1234); // 1 + 2 + 3 + 4 = 10
console.log(`res = ${res}`);

res = luckyNumber(123871); // 1 + 3 + 7 === 2 + 8 + 1
console.log(res ? 'lucky' : 'unlucky');