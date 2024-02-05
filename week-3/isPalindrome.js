const isPalindrome = word => {
    if(word.split('').reverse().join('') === word){
        return true
    }
    return false
    // return word.split('').reverse().join('') === word ? true : false
}

const isPalindromeOneLine = word => word.split('').reverse().join('') === word ? true : false

const isPalindrome = word => {
    let reverseWord = '' 

    for(let i = word.length - 1; i >=0; i--){
        reverseWord += word[i]
    }

    if(reverseWord === word) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome("a"))
// returns true

console.log(isPalindrome("noon"))
// returns true

console.log(isPalindrome("hello"))
// returns false

console.log(isPalindrome("Racecar"))
// returns false

console.log(isPalindrome("racecar"))
// returns true