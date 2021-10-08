function removeEveryOther(arr){
    let ar = []
    for(let i =0; i < arr.length; i += 2) ar.push(arr[i])
    return ar
}