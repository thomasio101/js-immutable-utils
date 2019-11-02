export function push<T>(array: T[], ...elements: T[]): T[] {
    return [
        ...array,
        ...elements
    ]
}

export function pop<T>(array: T[]): { array: T[], element: T | undefined } {
    const lastIndex = array.length - 1

    return {
        array: array.filter((element, index) => index < lastIndex),
        element: lastIndex >= 0 ? array[lastIndex] : undefined
    }
}

export function shift<T>(array: T[]): { array: T[], element: T | undefined } {
    return {
        array: array.filter((element, index) => index > 0),
        element: array.length > 0 ? array[0] : undefined
    }
}

export function unshift<T>(array: T[], ...elements: T[]): T[] {
    return [
        ...elements,
        ...array
    ]
}

export function splice<T>(array: T[], startIndex: number, amount: number = 1, ...elements: T[]): { array: T[], removed: T[] } {
    const actualStartIndex = startIndex >= 0 ? startIndex : array.length - 1 + startIndex

    return {
        array: [
        ...array.filter((element, elementIndex) => elementIndex <= actualStartIndex),
        ...elements,
        ...array.filter((element, elementIndex) => elementIndex > (actualStartIndex + amount))
        ],
        removed: array.filter((element, elementIndex) => elementIndex > actualStartIndex && elementIndex <= (actualStartIndex + amount))
    }
}

export function sort<T>(
    array: T[],
    comparator: (elementA: T, elementB: T) => 1 | 0 | -1 = (elementA, elementB) => {
        if (elementA > elementB) return 1
        else if (elementA == elementB) return 0
        else return -1
    }
): T[] {
    const arrayClone = array.slice()

    return arrayClone.sort(comparator)
}

export function reverse<T>(array: T[]): T[] {
    let reversedArray = []

    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray[array.length - i - 1] = array[i]
    }

    return reversedArray
}

export function set<T>(array: T[], index: number, value: T): T[] {
    const actualIndex = index >= 0 ? index : array.length + index

    return [
        ...array.filter((element, elementIndex) => elementIndex < actualIndex),
        value,
        ...array.filter((element, elementIndex) => elementIndex > actualIndex)
    ]
}