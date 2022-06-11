

export const Palindrome = (string: string) => {
    // convert string to array
    let arr = string.split(' ')
    
    let word: string = arr.map((x: string) => { if (x.split('').reverse().join('') == x.split('').join('')) { return x } }).filter((x) => x !== undefined).join(',');
    let indexInvalid: string = arr.map((x: string, i: number) => { if (x.split('').reverse().join('') !== x.split('').join('')) { return i } }).filter((x) => x !== undefined).join(",");
    let indexValid: string = arr.map((x: string, i: number) => { if (x.split('').reverse().join('') == x.split('').join('')) { return i } }).filter((x) => x !== undefined).join(',');
    let detect: number = word.split(',').length;

    let result = {
        'Palindrome Detected': detect,
        'Palindrome Word': word,
        'Palindrome Index': indexValid,
        'InvalidPalindrome Index': indexInvalid
    }


    return result

}


console.log(Palindrome('kakak menjual katak dengan harga 12021'))