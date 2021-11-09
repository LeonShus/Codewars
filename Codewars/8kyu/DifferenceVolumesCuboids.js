function findDifference(a, b) {
    let w = a.reduce((sum, el) => sum *= el) - b.reduce((sum, el) => sum *= el)
    return w < 0 ? -1 * w : w
}