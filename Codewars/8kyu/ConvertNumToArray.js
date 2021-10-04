function digitize(n) {
    return String(n).split('').reverse().map(el => Number(el))
}

console.log(digitize(35231),[1,3,2,5,3])