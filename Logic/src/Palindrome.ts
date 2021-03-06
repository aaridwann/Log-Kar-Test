

export const Palindrome = (x: string) => {
    if (typeof x !== 'string' || x.length < 2) {
        return false
    }
    // convert string to array
    let arr = x.split(' ')
    let word: string = arr.map((x: string) => { if (x.split('').reverse().join('') == x.split('').join('')) { return x } }).filter((x) => x !== undefined).join(',')
    let indexInvalid: string = arr.map((x: string, i: number) => { if (x.split('').reverse().join('') !== x.split('').join('')) { return i } }).filter((x) => x !== undefined).join(",")
    let indexValid: string = arr.map((x: string, i: number) => { if (x.split('').reverse().join('') == x.split('').join('')) { return i } }).filter((x) => x !== undefined).join(',')
    let detect: number = word.split(',').length
    let result = {
        'Palindrome Detected': detect,
        'Palindrome Word': word,
        'Palindrome Index': indexValid,
        'InvalidPalindrome Index': indexInvalid
    }


    return result

}


console.log(Palindrome('kakak menjual katak dengan harga 12021'))
console.log(Palindrome('k'))