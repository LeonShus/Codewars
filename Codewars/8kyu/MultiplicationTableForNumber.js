function multiTable(number) {
    let str = ''
    for(let i = 1; i <= 10; i++){
        if(i === 10){
            str += `${i} * ${number} = ${i * number}`
            return str
        }
        str += `${i} * ${number} = ${i * number}\n`
    }
}