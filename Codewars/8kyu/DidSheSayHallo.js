function validateHello(greetings) {
    let a = /hello|ciao|salut|hallo|hola|ahoj|czesc/i
    return a.test(greetings)
}