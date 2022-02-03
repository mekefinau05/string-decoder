const decoder = code => {
    let split = code.split('')
    let decoded =''

    for(let i=0; i<split.length; i++) {
        if (!isNaN(+split[i])) {
            i += +split[i]
        } else {
            decoded += split[i]
        }
    }
    return decoded;
}

console.log(decoder('0y4akjfe0s'))
console.log(decoder('0h2xce5ngbrdy'))
console.log(decoder('2bna0p1mp2osl0e'))

