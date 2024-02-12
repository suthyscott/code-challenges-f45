/*
Write a function called printDigits that takes in one argument, num. When given an integer, the function should print (console.log) each digit in reverse order, starting with the ones place. Do not do this by just turning the number into a string and reversing it. Solve the problem using math. (Hint: look up while loops, and don’t forget about the % operator.)

For example, if you were given 1 you should simply print 1, if given 314 you should print 4, 1, 3, and if given 12 you should print 2, 1:

printDigits(1)
// 1

printDigits(314)
// 4
// 1
// 3

printDigits(12)
// 2
// 1
*/

const printDigits = num => {
    while (num) {
        let digitToPrint = num % 10
        console.log(digitToPrint)
        //   console.log(num, digitToPrint, num - digitToPrint)
        num = (num - digitToPrint) / 10
    }
}

const printDigitsCheat = num => {
    num = String(num)
    num = num.split('')
    num = num.reverse()
    num = num.join('')
    console.log(parseInt(num))
    // num = String(num).split('').reverse().join('') //not working
    console.log(num)
}

// printDigits(1)
// console.log("break")
// printDigits(162)
// console.log("break")
// printDigits(597842)


printDigitsCheat(597842)