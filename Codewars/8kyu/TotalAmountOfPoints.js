function points(games) {
    let count = 0

    games.forEach(el => el[0] > el[2] ? count += 3
        : el[0] < el[2]
            ? count += 0
            : count += 1)

    return count
}