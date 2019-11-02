import { array as arrayUtils, object as objectUtils } from '../index';
test('# Appending elements onto an array', function () {
            let people = ['Alice', 'Bob', 'Charlie']let newPeople = arrayUtils.push(people, 'Dyllan', 'Eddie')console.log(people) // ['Alice', 'Bob', 'Charlie']console.log(newPeople) // ['Alice', 'Bob', 'Charlie', 'Dyllan', 'Eddie']
            expect(people).toStrictEqual(["Alice","Bob","Charlie"]),expect(newPeople).toStrictEqual(["Alice","Bob","Charlie","Dyllan","Eddie"])
        })
test('# Removing an element from the end of an array', function () {
            let people = ['Alice', 'Bob', 'Charlie']let { array: newPeople, element: lastPerson } = arrayUtils.pop(people)console.log(people) // ['Alice', 'Bob', 'Charlie']console.log(lastPerson) // 'Charlie'console.log(newPeople) // ['Alice', 'Bob']
            expect(people).toStrictEqual(["Alice","Bob","Charlie"]),expect(lastPerson).toStrictEqual("Charlie"),expect(newPeople).toStrictEqual(["Alice","Bob"])
        })
test('# Prepending elements onto an array', function () {
            let people = ['Alice', 'Bob', 'Charlie']let newPeople = arrayUtils.unshift(people, 'Sarah', 'Tom')console.log(people) // ['Alice', 'Bob', 'Charlie']console.log(newPeople) // ['Sarah', 'Tom', 'Alice', 'Bob', 'Charlie']
            expect(people).toStrictEqual(["Alice","Bob","Charlie"]),expect(newPeople).toStrictEqual(["Sarah","Tom","Alice","Bob","Charlie"])
        })
test('# Removing the second element from an array', function () {
            let people = ['Alice', 'Bob', 'Charlie']let { array: newPeople, removed: removedPeople } = arrayUtils.splice(people, 0)console.log(people) // ['Alice', 'Bob', 'Charlie']console.log(removedPeople) // ['Bob']console.log(newPeople) // ['Alice', 'Charlie']
            expect(people).toStrictEqual(["Alice","Bob","Charlie"]),expect(removedPeople).toStrictEqual(["Bob"]),expect(newPeople).toStrictEqual(["Alice","Charlie"])
        })
test('# Inserting elements into an array', function () {
            let people = ['Alice', 'Bob', 'Charlie']let { array: newPeople } = arrayUtils.splice(people, 0, 0, 'Sarah', 'Tom')console.log(people) // ['Alice', 'Bob', 'Charlie']console.log(newPeople) // ['Alice', 'Sarah', 'Tom', 'Bob', 'Charlie']
            expect(people).toStrictEqual(["Alice","Bob","Charlie"]),expect(newPeople).toStrictEqual(["Alice","Sarah","Tom","Bob","Charlie"])
        })
test('# Sorting an array', function () {
            let people = ['Bob', 'Charlie', 'Alice']let sortedPeople = arrayUtils.sort(people)console.log(people) // ['Bob', 'Charlie', 'Alice']console.log(sortedPeople) // ['Alice', 'Bob', 'Charlie']
            expect(people).toStrictEqual(["Bob","Charlie","Alice"]),expect(sortedPeople).toStrictEqual(["Alice","Bob","Charlie"])
        })
test('# Setting an element', function () {
            let people = ['Alice', 'Bob', 'Charlie']let newPeople = arrayUtils.set(people, 0, 'Ayden')console.log(people) // ['Alice', 'Bob', 'Charlie']console.log(newPeople) // ['Ayden', 'Bob', 'Charlie']
            expect(people).toStrictEqual(["Alice","Bob","Charlie"]),expect(newPeople).toStrictEqual(["Ayden","Bob","Charlie"])
        })
test('# Setting a property', function () {
            let point = { x: 0, y: 0, z: 0 }let newPoint = objectUtils.set(point, 'x', 1)console.log(point) // {x: 0, y: 0, z: 0}console.log(newPoint) // {x: 1, y: 0, z: 0}
            expect(point).toStrictEqual({"x":0,"y":0,"z":0}),expect(newPoint).toStrictEqual({"x":1,"y":0,"z":0})
        })
test('# Removing a property', function () {
            let point = { x: 0, y: 0, z: 0 }let newPoint = objectUtils.remove(point, 'z')console.log(point) // {x: 0, y: 0, z: 0}
            expect(point).toStrictEqual({"x":0,"y":0,"z":0}),expect(newPoint).toStrictEqual({"x":0,"y":0})
        })