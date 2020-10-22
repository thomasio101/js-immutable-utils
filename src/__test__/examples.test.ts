import { array as arrayUtils, object as objectUtils, set as setUtils } from '../index';
test('# Appending elements onto an array', () => {
            const people = ['Alice', 'Bob', 'Charlie']const newPeople = arrayUtils.push(people, 'Dyllan', 'Eddie') // ['Alice', 'Bob', 'Charlie'] // ['Alice', 'Bob', 'Charlie', 'Dyllan', 'Eddie']
            
        })
test('# Removing an element from the end of an array', () => {
            const people = ['Alice', 'Bob', 'Charlie']const { array: newPeople, element: lastPerson } = arrayUtils.pop(people) // ['Alice', 'Bob', 'Charlie'] // 'Charlie' // ['Alice', 'Bob']
            expect(people).toStrictEqual(["Alice","Bob","Charlie"]),expect(lastPerson).toStrictEqual("Charlie"),expect(newPeople).toStrictEqual(["Alice","Bob"])
        })
test('# Prepending elements onto an array', () => {
            const people = ['Alice', 'Bob', 'Charlie']const newPeople = arrayUtils.unshift(people, 'Sarah', 'Tom') // ['Alice', 'Bob', 'Charlie'] // ['Sarah', 'Tom', 'Alice', 'Bob', 'Charlie']
            expect(people).toStrictEqual(["Alice","Bob","Charlie"]),expect(newPeople).toStrictEqual(["Sarah","Tom","Alice","Bob","Charlie"])
        })
test('# Removing the second element from an array', () => {
            const people = ['Alice', 'Bob', 'Charlie']const { array: newPeople, removed: removedPeople } = arrayUtils.splice(people, 1) // ['Alice', 'Bob', 'Charlie'] // ['Bob'] // ['Alice', 'Charlie']
            expect(people).toStrictEqual(["Alice","Bob","Charlie"]),expect(removedPeople).toStrictEqual(["Bob"]),expect(newPeople).toStrictEqual(["Alice","Charlie"])
        })
test('# Inserting elements into an array', () => {
            const people = ['Alice', 'Bob', 'Charlie']const { array: newPeople } = arrayUtils.splice(people, 1, 0, 'Sarah', 'Tom') // ['Alice', 'Bob', 'Charlie'] // ['Alice', 'Sarah', 'Tom', 'Bob', 'Charlie']
            expect(people).toStrictEqual(["Alice","Bob","Charlie"]),expect(newPeople).toStrictEqual(["Alice","Sarah","Tom","Bob","Charlie"])
        })
test('# Sorting an array', () => {
            const people = ['Bob', 'Charlie', 'Alice']const sortedPeople = arrayUtils.sort(people) // ['Bob', 'Charlie', 'Alice'] // ['Alice', 'Bob', 'Charlie']
            expect(people).toStrictEqual(["Bob","Charlie","Alice"]),expect(sortedPeople).toStrictEqual(["Alice","Bob","Charlie"])
        })
test('# Setting an element', () => {
            const people = ['Alice', 'Bob', 'Charlie']const newPeople = arrayUtils.set(people, 0, 'Ayden') // ['Alice', 'Bob', 'Charlie'] // ['Ayden', 'Bob', 'Charlie']
            expect(people).toStrictEqual(["Alice","Bob","Charlie"]),expect(newPeople).toStrictEqual(["Ayden","Bob","Charlie"])
        })
test('# Setting a property', () => {
            const point = { x: 0, y: 0, z: 0 }const newPoint = objectUtils.set(point, 'x', 1) // {x: 0, y: 0, z: 0} // {x: 1, y: 0, z: 0}
            expect(point).toStrictEqual({"x":0,"y":0,"z":0}),expect(newPoint).toStrictEqual({"x":1,"y":0,"z":0})
        })
test('# Removing a property', () => {
            const point = { x: 0, y: 0, z: 0 }const newPoint = objectUtils.remove(point, 'z') // {x: 0, y: 0, z: 0} // {x: 0, y: 0}
            expect(point).toStrictEqual({"x":0,"y":0,"z":0}),expect(newPoint).toStrictEqual({"x":0,"y":0})
        })
test('# Adding a value to a set', () => {
            const names = new Set(['Alice', 'Bob', 'Charlie'])const newNames = setUtils.add(names, 'Dyllan') // Set { 'Alice', 'Bob', 'Charlie' } // Set { 'Alice', 'Bob', 'Charlie', 'Dyllan' }
            expect(names).toEqual(new Set(["Alice","Bob","Charlie"])),expect(newNames).toEqual(new Set(["Alice","Bob","Charlie","Dyllan"]))
        })
test('# Removing a value from a set', () => {
            const names = new Set(['Alice', 'Bob', 'Charlie'])const { removed, set: newNames } = setUtils.remove(names, 'Bob') // Set { 'Alice', 'Bob', 'Charlie' } // true
            expect(names).toEqual(new Set(["Alice","Bob","Charlie"])),expect(newNames).toEqual(new Set(["Alice","Charlie"]))expect(removed).toStrictEqual(true)
        })