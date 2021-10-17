function well(x){
    let a = x.filter(el => el === 'good').length
    return a < 1 ? 'Fail!' : a <= 2 ? 'Publish!' : 'I smell a series!'
}