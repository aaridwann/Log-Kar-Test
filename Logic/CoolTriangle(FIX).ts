export const Triangle = (x: number) => {

    // Init for Star String
    let t = ''

    //  First Looping
    for (let i = 0; i < x - 1; i++) {
        t += '*'
        for (let j = 0; j < i; j++) {
            if (j < i - 1) {
                t += ' '
            }
            else {
                t += '*'
            }
        }
        t += '\n'

    }

    // Looping penutup (Jika number params genap)
    if (x % 2 == 0) {
        for (let i = 0; i < x / 2; i++) {
            t += "*"
        }
    }

    return t

}

console.log(Triangle(3))
console.log(Triangle(8))