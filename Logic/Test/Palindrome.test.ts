import { Palindrome } from "../src/Palindrome";

let result = {
    'Palindrome Detected': 3,
    'Palindrome Word': 'kakak,katak,12021',
    'Palindrome Index': '0,2,5',
    'InvalidPalindrome Index': '1,3,4'
}

describe('Palindrome test', () => {

    test('Valid Palindrome', () => {
        expect(Palindrome('kakak menjual katak dengan harga 12021')).toEqual(result)
    })

    test('String < 2 length should be false', () => {
        expect(Palindrome('h')).toBe(false)
    })
})