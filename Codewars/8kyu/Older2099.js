function calculateAge(a, b) {
    let res = b - a
    return res > 0 && res < 2 ? `You are ${res} year old.`
        : res > 0 && res >= 2
            ? `You are ${res} years old.`
            : res < 0 && res > -2
                ? `You will be born in ${-1 * res} year.`
                : res < 0 && res <= -2
                    ? `You will be born in ${-1 * res} years.`
                    : `You were born this very year!`
}
