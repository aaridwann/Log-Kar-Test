//Palindrome without built in function 
// Unfixed
function palindrome(x) {

    
    let arr = x.split(' ')
    let reverse = []

    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = i; j > 0; j--) {
            reverse.push(arr[i][j])
        }

    }

    return reverse
}



let str = 'kakak menjual katak dengan harga 12021'
console.log(palindrome(str))