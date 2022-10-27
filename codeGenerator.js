const generateRandomInt = (size) => {
    let newCode = ''
    for (let i = 0; i < size; i++) {
        const randomInt = Math.floor(Math.random() * (9 - 1))
        newCode += randomInt
    }
    return newCode
}

const generateCloseCode = (code) => {
    let closeCodes = []
    for (let i = 0; i < code.length; i++) {
        for (let digit = 0; digit < 10; digit++) {
            const closeCode = code.replace(code[i], digit)
            closeCodes.push(closeCode)
        }
    }
    return closeCodes
}

const compareCodes = (codes, codeToSearch) => {
    const forbidenCodes = generateCloseCode(codeToSearch)
    for (const code of forbidenCodes) {
        const result = codes.indexOf(code)
        if (result > -1) {
            console.log('already')
            return false
        }
    }
    return true
}



const createCodes = (codeLength, numberOfCode) => {
    let codes = []
    for (i = 0; i < numberOfCode; i++) {
        const newCode = generateRandomInt(codeLength)
       // const forbidenCodes = generateCloseCode(newCode)
        const isValidCode = compareCodes(codes, newCode)
        if (isValidCode) {
            codes.push(newCode)
        } else {
            i--
        }
    }
    return codes
}


const codes = createCodes(3, 10)
console.log (codes)