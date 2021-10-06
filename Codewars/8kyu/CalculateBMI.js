function bmi(weight, height) {
    let val = (weight / Math.pow(height, 2))
    return (val <= 18.5) ? "Underweight"
        : val <= 25
            ? "Normal"
            : val <= 30
                ? "Overweight"
                : "Obese"
}