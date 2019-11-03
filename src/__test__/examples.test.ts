import { array as arrayUtils, object as objectUtils } from '../index';
test('# Appending elements onto an array', () => {
            const people = ['Alice', 'Bob', 'Charlie']const newPeople = arrayUtils.push(people, 'Dyllan', 'Eddie') // ['Alice', 'Bob', 'Charlie'] // ['Alice', 'Bob', 'Charlie', 'Dyllan', 'Eddie']
            
        })
test('# Removing an element from the end of an array', () => {
            const people = ['Alice', 'Bob', 'Charlie']const { array: newPeople, element: lastPerson } = arrayUtils.pop(people) // ['Alice', 'Bob', 'Charlie'] // 'Charlie' // ['Alice', 'Bob']
            
        })
test('# Prepending elements onto an array', () => {
            const people = ['Alice', 'Bob', 'Charlie']const newPeople = arrayUtils.unshift(people, 'Sarah', 'Tom') // ['Alice', 'Bob', 'Charlie'] // ['Sarah', 'Tom', 'Alice', 'Bob', 'Charlie']
            
        })
test('# Removing the second element from an array', () => {
            const people = ['Alice', 'Bob', 'Charlie']const { array: newPeople, removed: removedPeople } = arrayUtils.splice(people, 0) // ['Alice', 'Bob', 'Charlie'] // ['Bob'] // ['Alice', 'Charlie']
            
        })
test('# Inserting elements into an array', () => {
            const people = ['Alice', 'Bob', 'Charlie']const { array: newPeople } = arrayUtils.splice(people, 0, 0, 'Sarah', 'Tom') // ['Alice', 'Bob', 'Charlie'] // ['Alice', 'Sarah', 'Tom', 'Bob', 'Charlie']
            
        })
test('# Sorting an array', () => {
            const people = ['Bob', 'Charlie', 'Alice']const sortedPeople = arrayUtils.sort(people) // ['Bob', 'Charlie', 'Alice'] // ['Alice', 'Bob', 'Charlie']
            
        })
test('# Setting an element', () => {
            const people = ['Alice', 'Bob', 'Charlie']const newPeople = arrayUtils.set(people, 0, 'Ayden') // ['Alice', 'Bob', 'Charlie'] // ['Ayden', 'Bob', 'Charlie']
            
        })
test('# Setting a property', () => {
            const point = { x: 0, y: 0, z: 0 }const newPoint = objectUtils.set(point, 'x', 1) // {x: 0, y: 0, z: 0} // {x: 1, y: 0, z: 0}
            
        })
test('# Removing a property', () => {
            const point = { x: 0, y: 0, z: 0 }const newPoint = objectUtils.remove(point, 'z') // {x: 0, y: 0, z: 0}
            
        })