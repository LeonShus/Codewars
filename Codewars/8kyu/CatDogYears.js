var humanYearsCatYearsDogYears = function(humanYears) {
    let arr = [1, 15, 15]

    if(humanYears < 1){
        return arr
    } else if (humanYears === 2){
        arr[0] *= humanYears
        arr[1] += 9
        arr[2] += 9
    } else if(humanYears === 3){
        arr[0] *= humanYears
        arr[1] += 9 + 4
        arr[2] += 9 + 5
    } else if (humanYears > 3) {
        arr[0] *= humanYears
        arr[1] += 9 + (humanYears - 2) * 4
        arr[2] += 9 + (humanYears - 2) * 5
    }

    return arr;
}