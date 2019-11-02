import { array as arrayUtils, object as objectUtils } from '../index';
test('# Appending elements onto an array', function () {
            const people = ['Alice', 'Bob', 'Charlie']const newPeople = arrayUtils.push(people, 'Dyllan', 'Eddie')console.log(newPeople) // ['Alice', 'Bob', 'Charlie', 'Dyllan', 'Eddie']
            expect(people).toStrictEqual(["Alice","Bob","Charlie"]),expect(newPeople).toStrictEqual(["Alice","Bob","Charlie","Dyllan","Eddie"])
        })
test('# Removing an element from the end of an array', function () {
            const people = ['Alice', 'Bob', 'Charlie']const { array: newPeople, element: lastPerson } = arrayUtils.pop(people)console.log(lastPerson) // 'Charlie'console.log(newPeople) // ['Alice', 'Bob']
            expect(people).toStrictEqual(["Alice","Bob","Charlie"]),expect(lastPerson).toStrictEqual("Charlie"),expect(newPeople).toStrictEqual(["Alice","Bob"])
        })
test('# Prepending elements onto an array', function () {
            const people = ['Alice', 'Bob', 'Charlie']const newPeople = arrayUtils.unshift(people, 'Sarah', 'Tom')console.log(newPeople) // ['Sarah', 'Tom', 'Alice', 'Bob', 'Charlie']
            expect(people).toStrictEqual(["Alice","Bob","Charlie"]),expect(newPeople).toStrictEqual(["Sarah","Tom","Alice","Bob","Charlie"])
        })
test('# Removing the second element from an array', function () {
            const people = ['Alice', 'Bob', 'Charlie']const { array: newPeople, removed: removedPeople } = arrayUtils.splice(people, 0)console.log(removedPeople) // ['Bob']console.log(newPeople) // ['Alice', 'Charlie']
            expect(people).toStrictEqual(["Alice","Bob","Charlie"]),expect(removedPeople).toStrictEqual(["Bob"]),expect(newPeople).toStrictEqual(["Alice","Charlie"])
        })
test('# Inserting elements into an array', function () {
            const people = ['Alice', 'Bob', 'Charlie']const { array: newPeople } = arrayUtils.splice(people, 0, 0, 'Sarah', 'Tom')console.log(newPeople) // ['Alice', 'Sarah', 'Tom', 'Bob', 'Charlie']
            expect(people).toStrictEqual(["Alice","Bob","Charlie"]),expect(newPeople).toStrictEqual(["Alice","Sarah","Tom","Bob","Charlie"])
        })
test('# Sorting an array', function () {
            const people = ['Bob', 'Charlie', 'Alice']const sortedPeople = arrayUtils.sort(people)console.log(sortedPeople) // ['Alice', 'Bob', 'Charlie']
            expect(people).toStrictEqual(["Bob","Charlie","Alice"]),expect(sortedPeople).toStrictEqual(["Alice","Bob","Charlie"])
        })
test('# Setting an element', function () {
            const people = ['Alice', 'Bob', 'Charlie']const newPeople = arrayUtils.set(people, 0, 'Ayden')console.log(newPeople) // ['Ayden', 'Bob', 'Charlie']
            expect(people).toStrictEqual(["Alice","Bob","Charlie"]),expect(newPeople).toStrictEqual(["Ayden","Bob","Charlie"])
        })
test('# Setting a property', function () {
            const point = { x: 0, y: 0, z: 0 }const newPoint = objectUtils.set(point, 'x', 1)console.log(newPoint) // {x: 1, y: 0, z: 0}
            expect(point).toStrictEqual({"x":0,"y":0,"z":0}),expect(newPoint).toStrictEqual({"x":1,"y":0,"z":0})
        })
test('# Removing a property', function () {
            const point = { x: 0, y: 0, z: 0 }const newPoint = objectUtils.remove(point, 'z')
            expect(point).toStrictEqual({"x":0,"y":0,"z":0}),expect(newPoint).toStrictEqual({"x":0,"y":0})
        })