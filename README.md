# js-immutable-utils
![](https://github.com/thomasio101/js-immutable-utils/workflows/Node%20CI/badge.svg)

This package provides simple utility functions for modifying immutables in Javascript.
# Installation
To install this library, run the following command;  
`npm i --save js-immutable-utils`
# Examples
## Arrays
### Appending elements onto an array
[example]: # ({ "people": ["Alice", "Bob", "Charlie"], "newPeople": ["Alice", "Bob", "Charlie", "Dyllan", "Eddie"] })
```typescript
import { array as arrayUtils } from 'js-immutable-utils'

const people = ['Alice', 'Bob', 'Charlie']

const newPeople = arrayUtils.push(people, 'Dyllan', 'Eddie')

console.log(people) // ['Alice', 'Bob', 'Charlie']
console.log(newPeople) // ['Alice', 'Bob', 'Charlie', 'Dyllan', 'Eddie']
```
### Removing an element from the end of an array
[example]: # ({ "strict": { "people": ["Alice", "Bob", "Charlie"], "lastPerson": "Charlie", "newPeople": ["Alice", "Bob"] } })
```typescript
import { array as arrayUtils } from 'js-immutable-utils'

const people = ['Alice', 'Bob', 'Charlie']

const { array: newPeople, element: lastPerson } = arrayUtils.pop(people)

console.log(people) // ['Alice', 'Bob', 'Charlie']
console.log(lastPerson) // 'Charlie'
console.log(newPeople) // ['Alice', 'Bob']
```
### Removing an element from the start of an array
```typescript
import { array as arrayUtils } from 'js-immutable-utils'

const people = ['Alice', 'Bob', 'Charlie']

const { array: newPeople, element: firstPerson } = arrayUtils.shift(people)

console.log(people) // ['Alice', 'Bob', 'Charlie']
console.log(firstPerson) // 'Alice'
console.log(newPeople) // ['Bob', 'Charlie']
```
### Prepending elements onto an array
[example]: # ({ "strict": { "people": ["Alice", "Bob", "Charlie"], "newPeople": ["Sarah", "Tom", "Alice", "Bob", "Charlie"] } })
```typescript
import { array as arrayUtils } from 'js-immutable-utils'

const people = ['Alice', 'Bob', 'Charlie']

const newPeople = arrayUtils.unshift(people, 'Sarah', 'Tom')

console.log(people) // ['Alice', 'Bob', 'Charlie']
console.log(newPeople) // ['Sarah', 'Tom', 'Alice', 'Bob', 'Charlie']
```
### Removing the second element from an array
[example]: # ({ "strict": { "people": ["Alice", "Bob", "Charlie"], "removedPeople": ["Bob"], "newPeople": ["Alice", "Charlie"] } })
```typescript
import { array as arrayUtils } from 'js-immutable-utils'

const people = ['Alice', 'Bob', 'Charlie']

const { array: newPeople, removed: removedPeople } = arrayUtils.splice(people, 0)

console.log(people) // ['Alice', 'Bob', 'Charlie']
console.log(removedPeople) // ['Bob']
console.log(newPeople) // ['Alice', 'Charlie']
```
### Inserting elements into an array
[example]: # ({ "strict": { "people": ["Alice", "Bob", "Charlie"], "newPeople": ["Alice", "Sarah", "Tom", "Bob", "Charlie"] } })
```typescript
import { array as arrayUtils } from 'js-immutable-utils'

const people = ['Alice', 'Bob', 'Charlie']

const { array: newPeople } = arrayUtils.splice(people, 0, 0, 'Sarah', 'Tom')

console.log(people) // ['Alice', 'Bob', 'Charlie']
console.log(newPeople) // ['Alice', 'Sarah', 'Tom', 'Bob', 'Charlie']
```
### Sorting an array
[example]: # ({ "strict": { "people": ["Bob", "Charlie", "Alice"], "sortedPeople": ["Alice", "Bob", "Charlie"] } })
```typescript
import { array as arrayUtils } from 'js-immutable-utils'

const people = ['Bob', 'Charlie', 'Alice']

const sortedPeople = arrayUtils.sort(people)

console.log(people) // ['Bob', 'Charlie', 'Alice']
console.log(sortedPeople) // ['Alice', 'Bob', 'Charlie']
```
### Setting an element
[example]: # ({ "strict": { "people": ["Alice", "Bob", "Charlie"], "newPeople": ["Ayden", "Bob", "Charlie"] } })
```typescript
import { array as arrayUtils } from 'js-immutable-utils'

const people = ['Alice', 'Bob', 'Charlie']

const newPeople = arrayUtils.set(people, 0, 'Ayden')

console.log(people) // ['Alice', 'Bob', 'Charlie']
console.log(newPeople) // ['Ayden', 'Bob', 'Charlie']
```
## Objects
### Setting a property
[example]: # ({ "strict": { "point": { "x": 0, "y": 0, "z": 0 }, "newPoint": { "x": 1, "y": 0, "z": 0 } } })
```typescript
import { object as objectUtils } from 'js-immutable-utils'

const point = { x: 0, y: 0, z: 0 }

const newPoint = objectUtils.set(point, 'x', 1)

console.log(point) // {x: 0, y: 0, z: 0}
console.log(newPoint) // {x: 1, y: 0, z: 0}
```
### Removing a property
[example]: # ({ "strict": { "point": { "x": 0, "y": 0, "z": 0 }, "newPoint": { "x": 0, "y": 0 } } })
```typescript
import { object as objectUtils } from 'js-immutable-utils'

const point = { x: 0, y: 0, z: 0 }

const newPoint = objectUtils.remove(point, 'z')

console.log(point) // {x: 0, y: 0, z: 0}
console.log(newPoint) // {x: 0, y: 0}
```
## Sets
### Adding a value to a set
[example]: # ({ "normal": { "names": ["Alice", "Bob", "Charlie"], "newNames": ["Alice", "Bob", "Charlie", "Dyllan"] }, "constructors": { "names": "Set", "newNames": "Set" } })
```typescript
import { set as setUtils } from 'js-immutable-utils'

const names = new Set(['Alice', 'Bob', 'Charlie'])
const newNames = setUtils.add(names, 'Dyllan')

console.log(names) // Set { 'Alice', 'Bob', 'Charlie' }
console.log(newNames) // Set { 'Alice', 'Bob', 'Charlie', 'Dyllan' }
```
### Removing a value from a set
[example]: # ({ "normal": { "names": ["Alice", "Bob", "Charlie"], "newNames": ["Alice", "Charlie"] }, "strict": { "removed": true }, "constructors": { "names": "Set", "newNames": "Set" } })
```typescript
import { set as setUtils } from 'js-immutable-utils'

const names = new Set(['Alice', 'Bob', 'Charlie'])
const { removed, set: newNames } = setUtils.remove(names, 'Bob')

console.log(names) // Set { 'Alice', 'Bob', 'Charlie' }
console.log(removed) // true
console.log(newNames) // Set { 'Alice', 'Charlie' }
```