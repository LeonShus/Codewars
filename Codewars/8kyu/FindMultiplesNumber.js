function findMultiples(integer, limit) {
    let arr = []
    let a = integer
    for(let i = integer; integer <= limit; integer+= a){
        if(integer > limit){
            return arr
        }
        arr.push(integer)
    }
    return arr
}