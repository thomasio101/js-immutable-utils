# js-immutable-utils
This package provides simple utility functions for modifying immutables in Javascript.
# Examples
## Arrays
### Appending elements onto an array
```typescript
import { push } from 'js-immutable-utils/array'

let people = ['Alice', 'Bob', 'Charlie']

newPeople = push(people, 'Dyllan', 'Eddie')

console.log(people) // ['Alice', 'Bob', 'Charlie']
console.log(newPeople) // ['Alice', 'Bob', 'Charlie', 'Dyllan', 'Eddie']
```
### Removing an element from the end of an array
```typescript
import { pop } from 'js-immutable-utils/array'

let people = ['Alice', 'Bob', 'Charlie']

let { array: newPeople, element: lastPerson } = pop(people)

console.log(people) // ['Alice', 'Bob', 'Charlie']
console.log(lastPerson) // 'Charlie'
console.log(newPeople) // ['Alice', 'Bob']
```
### Removing an element from the start of an array
```typescript
import { shift } from 'js-immutable-utils/array'

let people = ['Alice', 'Bob', 'Charlie']

let { array: newPeople, element: firstPerson } = shift(people)

console.log(people) // ['Alice', 'Bob', 'Charlie']
console.log(firstPerson) // 'Alice'
console.log(newPeople) // ['Bob', 'Charlie']
```
### Prepending elements onto an array
```typescript
import { unshift } from 'js-immutable-utils/array'

let people = ['Alice', 'Bob', 'Charlie']

let newPeople = unshift(people, 'Sarah', 'Tom')

console.log(people) // ['Alice', 'Bob', 'Charlie']
console.log(newPeople) // ['Sarah', 'Tom', 'Alice', 'Bob', 'Charlie']
```
### Removing the second element from an array
```typescript
import { splice } from 'js-immutable-utils/array'

let people = ['Alice', 'Bob', 'Charlie']

let { array: newPeople, removed: removedPeople } = splice(people, 0)

console.log(people) // ['Alice', 'Bob', 'Charlie']
console.log(removedPeople) // ['Bob']
console.log(newPeople) // ['Alice', 'Charlie']
```
### Inserting elements into an array
```typescript
import { splice } from 'js-immutable-utils/array'

let people = ['Alice', 'Bob', 'Charlie']

let { array: newPeople } = splice(people, 0, 0, 'Sarah', 'Tom')

console.log(people) // ['Alice', 'Bob', 'Charlie']
console.log(newPeople) // ['Alice', 'Sarah', 'Tom', 'Bob', 'Charlie']
```
### Sorting an array
```typescript
import { sort } from 'js-immutable-utils/array'

let people = ['Bob', 'Charlie', 'Alice']

let sortedPeople = sort(people)

console.log(people) // ['Bob', 'Charlie', 'Alice']
console.log(sortedPeople) // ['Alice', 'Bob', 'Charlie']
```
### Setting an element
```typescript
import { set } from 'js-immutable-utils/array'

let people = ['Alice', 'Bob', 'Charlie']

let newPeople = set(people, 1, 'Ayden')

console.log(people) // ['Alice', 'Bob', 'Charlie']
console.log(newPeople) // ['Ayden', 'Bob', 'Charlie']
```
## Objects
### Setting a property
```typescript
import { set } from 'js-immutable-utils/object'

let point = { x: 0, y: 0, z: 0 }

let newPoint = set(point, 'x', 1)

console.log(point) // {x: 0, y: 0, z: 0}
console.log(newPoint) // {x: 1, y: 0, z: 0}
```
### Removing a property
```typescript
import { remove } from 'js-immutable-utils/object'

let point = { x: 0, y: 0, z: 0 }

let newPoint = remove(point, 'z')

console.log(point) // {x: 0, y: 0, z: 0}
console.log(newPoint) // {x: 0, y: 0}
```