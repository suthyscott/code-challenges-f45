/*
Write a function to remove all duplciate letters from a provided string. The string will only contail lowercase letters between a - z. The string will not contain spaces.

For example:

>>> makeUnique('helloworld')
// helowrd

>>> makeUnique('iwanttoclimbamountain')
// iwantoclmbu
*/

// const uniqueChars = str => {
//     const map = {}
//     let result = ''
//     let strArr = str.split('')

//     strArr.forEach((letter, index) => {
//         console.log(letter, map)
//         if(map[letter]){
//             // console.log(letter, strArr)
//             strArr.splice(index, 1)
//             // console.log(letter, strArr)
//         } else {
//             map[letter] = 1

//         }
//     })
   
//     return strArr.join('')
// }

const uniqueChars2 = str => {
    let tracker = ''
    let result = '' 
    str.split('').forEach(letter => {
        if(!tracker.includes(letter)){
            result += letter
            tracker += letter
        } else {
            tracker += letter
        }
    })
    return result
}

const uniqueChars3 = str => {
    console.log(new Set(str))
    return [...new Set(str)].join('')
}

console.log(uniqueChars3('helloworld'))
// console.log(uniqueChars2('iwanttoclimbamountain'))