import { array as arrayUtils, object as objectUtils } from '../index';
test('# Appending elements onto an array', function () {
            
            expect(people).toStrictEqual(["Alice","Bob","Charlie"]),expect(newPeople).toStrictEqual(["Alice","Bob","Charlie","Dyllan","Eddie"])
        })
test('# Removing an element from the end of an array', function () {
            
            expect(people).toStrictEqual(["Alice","Bob","Charlie"]),expect(lastPerson).toStrictEqual("Charlie"),expect(newPeople).toStrictEqual(["Alice","Bob"])
        })
test('# Prepending elements onto an array', function () {
            
            expect(people).toStrictEqual(["Alice","Bob","Charlie"]),expect(newPeople).toStrictEqual(["Sarah","Tom","Alice","Bob","Charlie"])
        })
test('# Removing the second element from an array', function () {
            
            expect(people).toStrictEqual(["Alice","Bob","Charlie"]),expect(removedPeople).toStrictEqual(["Bob"]),expect(newPeople).toStrictEqual(["Alice","Charlie"])
        })
test('# Inserting elements into an array', function () {
            
            expect(people).toStrictEqual(["Alice","Bob","Charlie"]),expect(newPeople).toStrictEqual(["Alice","Sarah","Tom","Bob","Charlie"])
        })
test('# Sorting an array', function () {
            
            expect(people).toStrictEqual(["Alice","Charlie","Bob"]),expect(sortedPeople).toStrictEqual(["Alice","Bob","Charlie"])
        })
test('# Setting an element', function () {
            
            expect(people).toStrictEqual(["Alice","Charlie","Bob"]),expect(newPeople).toStrictEqual(["Ayden","Bob","Charlie"])
        })
test('# Setting a property', function () {
            
            expect(point).toStrictEqual({"x":0,"y":0,"z":0}),expect(newPoint).toStrictEqual({"x":1,"y":0,"z":0})
        })
test('# Removing a property', function () {
            
            expect(point).toStrictEqual({"x":0,"y":0,"z":0}),expect(newPoint).toStrictEqual({"x":0,"y":0})
        })