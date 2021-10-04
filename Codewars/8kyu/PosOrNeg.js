function countPositivesSumNegatives(input) {
    let arr = []
    if(input !== null && input.length > 0 ){
        arr.push(input.filter(el => el > 0).length)
        arr.push(input.reduce((sum,el) => el < 0 ? sum += el : sum += 0,0))
    }

    return arr
}