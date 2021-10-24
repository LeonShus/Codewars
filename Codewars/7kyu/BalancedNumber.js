function balancedNum(number){
    let arrNumbers = number + ''
    let a = arrNumbers.slice(0, (arrNumbers.length / 2) - 0.5) + ''
    let b

    if(arrNumbers.length % 2 === 1){
        b = arrNumbers.slice((arrNumbers.length / 2) + 0.5) + ''
    } else {
        b = arrNumbers.slice((arrNumbers.length / 2) + 1.5) + ''
    }

    if(arrNumbers.length <= 2) return 'Balanced'

    return a.split('').reduce((sum,el) => sum += +el, 0) ===
        b.split('').reduce((sum,el) => sum += +el, 0) ? 'Balanced' : "Not Balanced"
}

console.log(balancedNum(121))
console.log(balancedNum(323))
console.log(balancedNum(1234))
console.log(balancedNum(4234))
console.log(balancedNum(42234))
console.log(balancedNum(43234))
console.log(balancedNum(432134))
console.log(balancedNum(4321134))