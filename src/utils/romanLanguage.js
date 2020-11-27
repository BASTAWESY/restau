var romanToInt = function (x) {
    let result = 0
    let number = 0
    let i = 0
    if (x.length >= 1 && x.length <= 15) {
        while (i < x.length) {
            if (x[i] === 'I' || x[i] === 'V' || x[i] === 'X' || x[i] === 'L' || x[i] === 'C' || x[i] === 'D' || x[i] === 'M') {
                switch (x[i]) {
                    case 'I':
                        number = 1
                        break
                    case 'V':
                        number = 5
                        break
                    case 'X':
                        number = 10
                        break
                    case 'L':
                        number = 50
                        break
                    case 'C':
                        number = 100
                        break
                    case 'D':
                        number = 500
                        break
                    case 'M':
                        number = 1000
                        break
                }
                switch (x[i + 1]) {
                    case 'I':
                        next = 1
                        break
                    case 'V':
                        next = 5
                        break
                    case 'X':
                        next = 10
                        break
                    case 'L':
                        next = 50
                        break
                    case 'C':
                        next = 100
                        break
                    case 'D':
                        next = 500
                        break
                    case 'M':
                        next = 1000
                        break
                }
            }
            if (number > next || number === next || i === x.length - 1) {
                result += number
                i++
            }
            else
            // if (number < next)
            {
                let currentResult = next - number
                result += currentResult
                i = i + 2
            }
        }
    }
    return result
};

console.log(romanToInt("MDCXCV"))