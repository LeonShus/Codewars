function positiveSum(arr) {
    return arr.reduce((a,b) => b > 0 ? a + b: a, 0)
}
