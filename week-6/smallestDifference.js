/*
Credit: Adapted from a problem in Cracking the Coding Interview, 6th Edition. Gayle Laakmann McDowell, Career Cup (Palo Alto, CA). 2015.

This is a short-length challenge, but requires some clever thinking.

Given two lists, find the smallest difference (subtraction) between any two nums.

For example, given the arrays:

[10, 20, 14, 16, 18]
[30, 23, 54, 33, 96]
The result would be 3, since 23 - 20 = 3 is the smallest difference of any pair of numbers in those lists.

Write a function that determines the smallest difference.
*/

const smallestDiff = (arrOne, arrTwo) => {
    arrOne = arrOne.sort((a, b) => a - b)
    arrTwo = arrTwo.sort((a, b) => a - b)

    let best = null

    let indexOne = 0
    let indexTwo = 0

    while (indexOne < arrOne.length && indexTwo < arrTwo.length) {
        let diff = arrOne[indexOne] - arrTwo[indexTwo]

        if (diff === 0) {
            return 0
        }

        if (best === null || diff < best) {
            best = diff
        }

        if (arrOne[indexOne] > arrTwo[indexTwo]) {
            indexTwo++
        } else {
            indexOne++
        }
    }

    return best
}



let j = [30, 23, 54, 33, 96]
let s = [10, 20, 14, 16, 18]

console.log(smallestDiff(j,s))
