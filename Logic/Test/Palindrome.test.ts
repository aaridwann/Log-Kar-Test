import { Palindrome } from "../Palindrome";


let result = {
    'Palindrome Detected': 3,
    'Palindrome Word': 'kakak,katak,12021',
    'Palindrome Index': '0,2,5',
    'InvalidPalindrome Index': '1,3,4'
}
let str = 'kakak menjual katak dengan harga 12021'
test('Palindrome Object result', () => {
    expect(Palindrome('kakak menjual katak dengan harga 12021')).toEqual(result)
})

