export function set<T extends Object, K extends keyof T>(object: T, key: K, value: T[K]): T {
    return {
        ...object,
        [key]: value
    }
}

export function remove<T extends Object, K extends keyof T>(object: T, key: K): Omit<T, K> {
    const {[key]: value, ...result} = object
    
    return result
}