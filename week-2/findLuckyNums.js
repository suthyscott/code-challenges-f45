/*
Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

You can trust that this function will never be called with n < 0 or n > 10.

For example:

luckyNumbers(2)
returns (3, 7)
luckyNumbers(6)
returns (1, 7, 9, 6, 5, 2)
*/

const luckyNumbers = num => {
    const possibleNums = [1,2,3,4,5,6,7,8,9,10]
    const result = []

    while(num > 0){
        let usedIndex = Math.floor(Math.random() * possibleNums.length)
        result.push(possibleNums[usedIndex])
        possibleNums.splice(1, usedIndex)
        num--
    }
    
    return result
}

console.log(luckyNumbers(2))

// console.log(Math.floor(4.161388422894281))