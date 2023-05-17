const myMap = new Map();

myMap
  .set(1, 'one')
  .set('Lucas', { text: 'two' })

console.log(myMap.get(1))

const weakMap = new WeakMap()