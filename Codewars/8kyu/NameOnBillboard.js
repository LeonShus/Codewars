function billboard(name, price = 30){
    let a = name.split('').length
    let sum = 0
    for(let i = 0; i < a; i++){
        sum+= price
    }
    return sum
}