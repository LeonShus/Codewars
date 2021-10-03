function htmlspecialchars(formData) {
    return formData.split('').map(el => {
        switch (el) {
            case "<":
                return "&lt;"
                break
            case ">":
                return "&gt;"
                break
            case "\"":
                return "&quot;"
                break
            case "&":
                return "&amp;"
                break
            default:
                return el
        }
    }).join('')
}