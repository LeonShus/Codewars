function binaryPyramid(m,n){
    let arr = []
    for(let i = m; i <= n; i++){
        arr.push(i)
    }

    let sumOfBinar = arr.map(el => Number(el).toString(2)).reduce((sum,el) => sum += +el, 0)

    return Number(sumOfBinar).toString(2)
}

console.log(binaryPyramid(1,4))