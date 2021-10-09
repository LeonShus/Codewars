function twiceAsOld(dadYearsOld, sonYearsOld) {
    let age = dadYearsOld - sonYearsOld * 2
    return age < 0 ? -1 * age :age
}