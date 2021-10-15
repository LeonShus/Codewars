function generateRange(min, max, step){
    let a = []
    for(let i = min; i <= max; i+= step){
        a.push(i)
    }
    return a
}