function strCount(str, letter){
    let count = 0
    str.split('').forEach(el => el === letter ? count++ : count)
    return count
}