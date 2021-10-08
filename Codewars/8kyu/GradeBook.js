function getGrade (s1, s2, s3) {
    let val = (s1 + s2 + s3) / 3

    return val >= 90 ? 'A'
                    : val >= 80
                    ? 'B'
                    : val >= 70
                    ? 'C'
                    : val >= 60
                    ? 'D'
                    : 'F'
}