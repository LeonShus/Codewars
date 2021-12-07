function strongestEven(n, m){
    let val = n
    for (let i = 1; i + val <= m ; i *= 2) {
        if((val + i) % (i * 2) === 0){
            val += i
        }
    }
    return val
}

console.log(strongestEven(1, 2))
console.log(strongestEven(5, 10))
console.log(strongestEven(48, 56))
console.log(strongestEven(129, 193))