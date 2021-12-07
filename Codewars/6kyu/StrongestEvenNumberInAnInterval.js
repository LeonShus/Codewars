function strongestEven(n, m) {
    let possibleNumber = []

    for (let i = n; i <= m; i++) {
        if (i % 2 === 0) {
            possibleNumber.push(i)
        }
    }
    let mainCount = 0
    let max = 0

    for (let i = 0; i < possibleNumber.length;) {
        let count = 1
        let nextStep = possibleNumber[i]
        while ((nextStep / 2) % 2 === 0) {
            nextStep = nextStep / 2
            count++
        }
        if(mainCount < count){
            mainCount = count
            max = possibleNumber[i]
        }
        i++
    }

    return max
}

console.log(strongestEven(1, 2))
console.log(strongestEven(5, 10))
console.log(strongestEven(48, 56))
console.log(strongestEven(129, 193))