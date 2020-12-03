const mapToNegativize = sourceArray => {
    const newArray = []
    for(const e of sourceArray) {
        newArray.push(e * -1)
    }
    return newArray
}

const mapToNoChange = sourceArray => {
    return sourceArray
}

const mapToDouble = sourceArray => {
    const newArray = []
    for(const e of sourceArray) {
        newArray.push(e * 2)
    }
    return newArray
}

const mapToSquare = sourceArray => {
    const newArray = []
    for(const e of sourceArray) {
        newArray.push(e * e)
    }
    return newArray
}

const reduceToTotal = (sourceArray, startingPoint) => {
    let value = startingPoint || 0
    for(const e of sourceArray) {
        value += e
    }
    return value
}

const reduceToAllTrue = sourceArray => {
    for(const e of sourceArray) {
        if (!e) {
            return false
        }
    }
    return true
}
const reduceToAnyTrue = sourceArray => {
    for(const e of sourceArray) {
        if (e) {
            return true
        }
    }
    return false
}
