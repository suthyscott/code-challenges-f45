/*
In this challenge, you’ll write a decoder.

Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm

The number in the string represents how many characters each letter should shift. For example:

>>> "1a" // "b"
>>> "3ce" // "fh"
>>> "2fcjjm" // "hello"
*/

const decoder = str => {
    let result = ""
    if (+str[0]) {
        str.split("").forEach((letter, index) => {
            if (index > 0) {
                console.log(str.charCodeAt(index))
                result += String.fromCharCode(str.charCodeAt(index) + +str[0])
            }
        })
    }
    return result
}

const decoderWithAlphabet = str => {
    const alphabet = [..."abcdefghijklmnopqrstuvwxyz"]
    // console.log(alphabet)
    let result = ""
    if (+str[0]) {
        str.split("").forEach((letter, index) => {
            if (index > 0) {
                const letterIndex = alphabet.findIndex(el => el === letter)
                result += alphabet[letterIndex + +str[0]]
            }
        })
    } else {
        return "The string entered is not a valid code"
    }
    return result
}

console.log(decoder("2fcjjm"))
// console.log(decoderWithAlphabet("2fcjjm"))
