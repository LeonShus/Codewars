function arrayPlusArray(arr1, arr2) {
    let a = arr1.reduce((sum,el) => sum += el)
    let b = arr2.reduce((sum,el) => sum += el)
    return a + b;
}