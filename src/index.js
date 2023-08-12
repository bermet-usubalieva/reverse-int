module.exports = function reverse(n) {
    let newNumber = Math.abs(n)
    let str = String(newNumber);
    let newStr = '';

    for (let i = 0; i < str.length; i++) {
        if (str[str.length - 1] == 0) {
            newStr = newStr;
        }
        newStr = str[i] + newStr
    }
    return Number(newStr)
}
