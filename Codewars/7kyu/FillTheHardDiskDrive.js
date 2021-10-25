function save(sizes, hd) {
    let sum = 0
    let count = 0
    for (let i = 0; i <= sizes.length; i++){
        if(sum > hd) return --count
        if(sum === hd) return count
        sum += sizes[i]
        ++count
    }
    return --count
}