function powersOfTwo(n){
    let a = []

    for(let i = 0; i <= n; i++){
        a.push(Math.pow(2,i))
    }

    return a
}