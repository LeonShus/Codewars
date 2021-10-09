function stringy(size) {
    let arr = []
    for(let i = 1; i <= size; i++){
        arr.push(1)
    }
    for(let j = 1; j < size; j += 2){
        arr[j] = 0
    }
    return arr.join('')
}