/* 
Given a word, return true if that word contains only unique characters. Return false otherwise.

For example:

hasUniqueChars("Monday")
returns true
hasUniqueChars("Moonday")
returns false
Uppercase and lowercase letters should be considered separately:

hasUniqueChars("Bob")
returns true
*/

const meObj = {
    name: 'scott', 
    age: 25
}

meObj.name
meObj['age']
// meObj.lastname = 'Sutherland'
meObj['lastname'] = 'Sutherland'

const hasUniqueChars = word => {
    const mapObj = {}

    for (let i = 0; i < word.length; i++) {
        if (mapObj[word[i]]) {
            mapObj[word[i]] += 1
        } else {
            mapObj[word[i]] = 1
        }
        console.log('end of for loop', mapObj)
    }
    console.log(mapObj)
    for (let key in mapObj) {
        if (mapObj[key] > 1) {
            return false
        }
    }

    return true
}

console.log(hasUniqueChars('Moonday'))

const hasUniqueCharsTwo = word => {
    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length; j++) {
            if (word[i] === word[j]) {
                return false
            }
        }
    }

    return true
}

// const uniWord = word => {
//     let result 
//     for (let i = 0; i < word.length; i++) {
//         for (let j = 0; j < word.length; j++) {
//             word[i] === word[j] && i !== j
//                 ? return false
//                 : return true
//         }
//         j = 0
//     }
//     return result
// }
// let animal = "animal"
// console.log(uniWord(animal))

// console.log(hasUniqueChars('Moonday'))

const hasUniqueCharsThree = word => {
    let mapObj = word.split("").reduce((acc, cur) => {
        if (acc[cur]) {
            acc[cur] += 1
        } else {
            acc[cur]
        }
        return acc
    }, {})

    console.log(mapObj)
    for (let key in mapObj) {
        if (mapObj[key] > 1) {
            return false
        }
    }

    return true
}

// console.log(hasUniqueChars('Moonday'))
