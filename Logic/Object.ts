// NOT FIXED 
// 
// 

// export const Convert = (x: any) => {
//     let json = JSON.stringify(x)
//     let res = ''
//     let res2 = ''
//     for (let i = 0; i < json.length; i++) {
//         if (json[i] == ':' || json[i] == '{' || json[i] == '}') {
//             false
//         } else {
//             res += json[i]
//         }
//         if (json[i] == '.') {
//             res += '":{"'
//         }
//     }

//     for (let i = 0; i < json.length; i++) {
//         if (res[i] == '.') {
//             false
//         } else if (res[i] == '"' && res[i + 1] == '"') {
//             res2 += ':'
//         } else if (res[i + 1] == ',') {
//             res2 += '}'
//         }
//         else {
//             res2 += res[i]
//         }
//     }

//     return res2
// }


// let convert2 = (x: any) => {
//     let res = JSON.stringify(x)
//     let key = ''

//     for (let i = 0; i < res.length; i++) {
//         if (res[i] == '.') {
//             for (let j = 0; j < i; j++) {
//                 if (res[i] == '{') {
//                     break
//                 } else {
//                     key += res[j]
//                 }
//             }
//         }
//     }



//     return key
// }

let ObjectConvert = (x: any) => {
    let res = [x]
    return res
}

let data = {
    'address.street': 'jalan sakura',
    'address.provice': 'banten',
    'address.city': 'tangerang',
    'person.name': 'john',
    'person.email': 'john@doe.com',
    'userType': 'admin',
    'accessLevel': 'QA'
}

console.log(ObjectConvert(data))