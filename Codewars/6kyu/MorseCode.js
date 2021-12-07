
//First try
decodeMorse = function(morseCode){
    const morse = {
        ".-": "A",
        "-...": "B",
        "-.-.": "C",
        "-.." : "D",
        "." : "E",
        "..-." : "F",
        "--." : "G",
        "...." : "H",
        ".." : "I",
        ".---" : "J",
        "-.-" : "K",
        ".-.." : "L",
        "--" : "M",
        "-." : "N",
        "---" : "O",
        ".--." : "P",
        "--.-" : "Q",
        ".-." : "R",
        "..." : "S",
        "-" : "T",
        "..-" : "U",
        "...-" : "V",
        ".--" : "W",
        "-..-" : "X",
        "-.--" : "Y",
        "--.." : "Z",
        ".----" : "1",
        "..---" : "2",
        "...--" : "3",
        "....-" : "4",
        "....." : "5",
        "-...." : "6",
        "--..." : "7",
        "---.." : "8",
        "----." : "9",
        "-----" : "0",
        "...---..." : "SOS",
        "-.-.--" : "!",
        ".-.-.-" : ".",
        "--..--" : ",",
        "..--.." : "?",
        ".----." : "'",
        ".-..-." : '"',
        "-.-.-." : ";",
        "---..." : ":",
        "-....-" : "-",
        ".-.-." : "+",
        "-...-" : "=",
        "..--.-" : "_",
        "-..-." : "/",
        "-.--." : "(",
        "-.--.-" : ")",
        ".-..." : "&",
        "...-..-" : "$",
        ".--.-." : "@",
    }

    //Get Array of words
    let morseCodeWordsArr = morseCode.split("   ")

    let transWordsArr = []


    for(let i = 0; i < morseCodeWordsArr.length; i++) {
        //Get one word
        let word = morseCodeWordsArr[i].split(" ")

        for (let j = 0; j < word.length; j++) {          // go through the symbols and push the value
            if (Object.keys(morse).includes(word[j])) {
                transWordsArr.push(morse[word[j]])
            }
        }
        transWordsArr.push(' ')      // add spase after words
    }

    return transWordsArr.join('').trim()

}

