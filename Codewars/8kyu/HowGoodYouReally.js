function betterThanAverage(classPoints, yourPoints) {
    return (classPoints.reduce((sum, el) => sum += el) / classPoints.length) < yourPoints
}