function getAverage(marks){
    return Math.floor(marks.reduce((sum,el) => sum += el) / marks.length)
}