/*
Write a function called hasMoreVowels that takes in one argument, word. When the function is called, return true if that word contains more vowels than non-vowels; otherwise, return false. The word will always be a single word, without any punctuation or spaces. It will contain only uppercase and/or lowercase letters.

If the phrase is over half vowels, it should return true:

hasMoreVowels('moose')
// true
If it’s half vowels (or less), it’s false:

hasMoreVowels('mice')
// false

hasMoreVowels('graph')
// false
Don’t consider “y” as a vowel:

hasMoreVowels('yay')
// false
Uppercase vowels are still vowels:

hasMoreVowels('Aal')
// true
*/

const hasMoreVowels = word => {
    word = word.toLowerCase()
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelCount = 0
    let consonantCount = 0

    word.split('').forEach(letter => {
        if(vowels.includes(letter)){
            vowelCount++
        } else {
            consonantCount++
        }
    })

    if(vowelCount > consonantCount){
        return true
    } else {
        return false
    }
}

// Reduce not working yet
// const hasMoreVowelsReduce = word => word.toLowerCase().reduce((acc, curr, i) => {
//     ['a', 'e', 'i', 'o', 'u'].includes(curr) ? acc.vowelCount += 1 : acc.consonantCount += 1
//     return i === word.length - 1 ? acc.vowelCount > acc.consonantCount ? true : false : acc
// }, {consonants:0, vowels:0})

// const hasMoreVowels = word => word.toLowerCase().split('').reduce((acc, curr, i) => i === (word.length - 1) ? acc.vowels > acc.consonants ? true : false : ['a', 'e', 'i', 'o', 'u'].includes(curr) ? {...acc, vowels: acc.vowels + 1} : {...acc, consonants: acc.consonants + 1}, {consonants:0, vowels:0})

console.log(hasMoreVowels("moose"))
// true

// If it’s half vowels (or less), it’s false:
console.log(hasMoreVowels("mice"))
// false

console.log(hasMoreVowels("graph"))
// false
// Don’t consider “y” as a vowel:

console.log(hasMoreVowels("yay"))
// false

// Uppercase vowels are still vowels:
console.log(hasMoreVowels("Aal"))
// true
