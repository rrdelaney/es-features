/*
This is a small introduction to some ES.next features.
Run this file with Jest
*/



/*** ES2015 Features ***/



test('`let` binding', () => {
  // `let` binds a variable to a variable
  let myBool = true
  expect(myBool).toBe(true)

  // `let` bindings are mutable
  myBool = false
  expect(myBool).toBe(false)
})



test('`const` binding', () => {
  // `const` binds a variable to a value
  const myBool = true
  expect(myBool).toBe(true)

  // `const` bindings cannot be reassigned
  expect(() => {
    myBool = false
  }).toThrow()
})



test('Arrow functions', () => {
  // Functions can be expressed using the "arrow function" syntax
  // Shorthand for an anonymous function
  const myFunction = (num1, num2) => {
    return num1 + num2
  }

  expect(myFunction(4, 6)).toBe(10)

  // Arrow functions don't need parens with one parameter
  const myFunc2 = num => {
    return num + 6
  }

  expect(myFunc2(4)).toBe(10)

  // Arrow functions have a shorthand for returning the result
  //   of one expression
  const myFunc3 = num => num + 6

  expect(myFunc3(4)).toBe(10)
})



test('Classes', () => {
  // `class` exists in JS now!
  class Doubler {
    // `constructor` initializes the object
    constructor (number) {
      this.number = number
    }

    // methods on the class
    double () {
      return this.number * 2
    }
  }

  // Instantiated with `new`
  const myDoubler = new Doubler(10)
  expect(myDoubler.double()).toBe(20)
})



test('Inheritance', () => {
  class Adder {
    constructor (number) {
      this.number = number
    }

    add (other) {
      return this.number + other
    }
  }

  const myAdder = new Adder(5)
  expect(myAdder.add(5)).toBe(10)

  // JS has single inheritance
  class Subtractor extends Adder {
    subtract (other) {
      return this.number - other
    }
  }

  const mySub = new Subtractor(10)
  expect(mySub.subtract(5)).toBe(5)
})



test('Static methods', () => {
  class Muliplier {
    // You can also create static methods
    static multiply(one, two) {
      return one * two
    }
  }

  expect(Muliplier.multiply(3, 4)).toBe(12)
})



test('Getters and Setters', () => {
  class Whoops {
    constructor (number) {
      this.__number = number + 2
    }

    // Getters override the default accessor behavior
    // They are functions that return the intended value
    get number () {
      return this.__number
    }

    // Setters override the default member set behavior
    // They are functions that take the new value
    set number (newNum) {
      this.__number = newNum + 2
    }
  }

  const whoops = new Whoops(10)
  expect(whoops.number).toBe(12)

  whoops.number = 100
  expect(whoops.number).toBe(102)
})



test('Enhanced object literals', () => {
  const ten = 10

  // This is shorthand for { ten: ten }
  const numbers = { ten }
  expect(numbers.ten).toBe(ten)

  // Objects can also have "methods"
  const adder = {
    add (num1, num2) {
      return num1 + num2
    }
  }

  expect(adder.add(4, 6)).toBe(10)
})



test('Template strings', () => {
  const ten = 10

  // You can interpolate expressions in ` strings
  const printout = `My string is ${ten}`
  expect(printout).toBe('My string is 10')

  // ` strings can also break lines
  const newline = `this is
  a newline`

  expect(newline).toBe('this is\n  a newline')
})



test('Destructuring objects', () => {
  const numbers = { ten: 10 }

  // You can "extract" variables from objects
  const { ten } = numbers
  expect(ten).toBe(10)

  // This also works in function parameters
  const add = ({ one, two }) => one + two
  expect(add({ one: 10, two: 20 })).toBe(30)

  // You can also "rename"
  const { ten: myNum } = numbers
  expect(myNum).toBe(10)

  const deepNums = {
    one: { first: 100, last: 200 }
  }

  // You can match deeper too
  const { one: { first, last } } = deepNums
  expect(first).toBe(100)
  expect(last).toBe(200)
})



test('Destructuring arrays', () => {
  const nums = [1, 2, 3, 4]

  // You can also "extract" from arrays
  const [one, two] = nums
  expect(one).toBe(1)
  expect(two).toBe(2)

  // This again works with parameters
  const sum = ([ one, two, three ]) => one + two + three
  expect(sum([1, 2, 3])).toBe(6)
})



test('Default parameters', () => {
  // Functions can have default parameters
  const add = (one, two = 10) => one + two
  expect(add(10)).toBe(20)
  expect(add(10, 20)).toBe(30)
})



test('Rest parameters', () => {
  // You can capture parameters in a "rest" arrays
  const print = (...nums) => nums.join(', ')
  expect(print(1, 2, 3)).toBe('1, 2, 3')

  const addLength = (first, ...rest) => first + rest.length
  expect(addLength(10, 3, 4, 5)).toBe(13)
})



test('Parameter spread', () => {
  const add = (a, b, c) => a + b + c
  const nums = [1, 2, 3]

  // You can apply an array as parameters
  const result = add(...nums)
  expect(result).toBe(6)
})



test('Maps', () => {
  // A JS Map is the common Map in other langs. Keys can be
  //   anything in JS.
  const m = new Map()

  m.set('key', 'value')
  m.set(1, 30)

  expect(m.get('key')).toBe('value')
  expect(m.get(1)).toBe(30)
  expect(m.size).toBe(2)
})



test('Sets', () => {
  // Sets in JS are similar to other langs too
  const s = new Set()

  s.add('key')
  expect(s.has('key')).toBe(true)

  expect(s.has('other')).toBe(false)

  expect(s.size).toBe(1)
})



/*** ES2016 Features ***/



test('Exponentation operator', () => {
  // JS has this now
  const twoToEight = 2 ** 8
  expect(twoToEight).toBe(256)
})



/*** New methods ***/



test('.includes', () => {
  const numbers = [1, 2, 3, 4, 5, 6]

  // JS now has array checking
  expect(numbers.includes(4)).toBe(true)
  expect(numbers.includes(9)).toBe(false)


  // Also for strings
  expect('aaa'.includes('a')).toBe(true)
  expect('bbb'.includes('a')).toBe(false)
})



test('String.repeat', () => {
  const str = 'abc'

  // You can "repeat" a string
  const repeated = str.repeat(3)
  expect(repeated).toBe('abcabcabc')
})



test('Array.map', () => {
  const nums = [1, 2, 3, 4]

  // The `map` operation applies a function to each element in the array
  //   then returns a new array
  const numsTimesTwo = nums.map(x => x * 2)
  expect(numsTimesTwo).toEqual([2, 4, 6, 8])

  const numsPlusTwo = nums.map(x => x + 2)
  expect(numsPlusTwo).toEqual([3, 4, 5, 6])

  // The argument to map can be any function
  const square = x => x ** 2
  const numsSquared = nums.map(square)
  expect(numsSquared).toEqual([1, 4, 9, 16])
})



test('Array.filter', () => {
  const nums = [1, 2, 3, 4, 5]

  // `filter` removes items from an array that do not
  //   meet a certain condition and returns a new array
  const numsUnder3 = nums.filter(x => x < 3)
  expect(numsUnder3).toEqual([1, 2])

  // Like map, filter can take any function
  const isEven = x => x % 2 === 0
  const evenNums = nums.filter(isEven)
  expect(evenNums).toEqual([2, 4])

  // We can chain .map and .filter
  const evenNumsDoubled = nums
    .filter(x => x % 2 === 0)
    .map(x => x * 2)

  expect(evenNumsDoubled).toEqual([4, 8])
})



test('Array.reduce', () => {
  const nums = [1, 2, 3, 4]

  // `reduce` takes an array and an initial state and produces
  //   a single value. The "reducing function" takes two parameters:
  //   the previous state, and the current value in the array. The function
  //   should return the next state for the reducing function. The reduce
  //   method also takes an initial state for the reducer. Here it is 0.
  const numSum = nums.reduce(
    (previousValue, current) => previousValue + current,
    0
  )

  expect(numSum).toBe(10)

  // The next example is to find the max value in an array.
  //   We start with the smallest possible number in JS. On each
  //   iteration we compare the previous state and current value
  //   and return the max of the two.
  const numMax = nums.reduce(
    (prev, curr) => curr > prev ? curr : prev,
    Number.MIN_VALUE
  )

  expect(numMax).toBe(Math.max(...nums))
})



test('Array.forEach', () => {
  const nums = [1, 2, 3, 4]

  // `forEach` performs a function on each item in an array.
  //   It does not return anything, just performs the action.
  nums.forEach(x => {
    expect(x).toBe(x)
  })
})



test('Array.find', () => {
  const files = [
    { type: '.docx', name: 'MyFile' },
    { type: '.pptx', name: 'My Presentation' },
    { type: '.docx', name: 'Other file' }
  ]

  // `find` is very similar to filter, but it returns the first item
  const docx = files.find(f => f.type === '.docx')
  expect(docx).toEqual({ type: '.docx', name: 'MyFile' })
})



test('Array.findIndex', () => {
  const files = [
    { type: '.docx', name: 'MyFile' },
    { type: '.pptx', name: 'My Presentation' },
    { type: '.docx', name: 'Other file' }
  ]

  // `findIndex` is returns the index of the first item matching
  //   matching a predicate
  const pptxIndex = files.findIndex(f => f.type === '.pptx')
  expect(pptxIndex).toEqual(1)
})



test('Object.keys', () => {
  const fs = {
    file1: { type: '.docx', locked: true },
    file2: { type: '.docx', locked: false },
    file3: { type: '.pptx', locked: false }
  }

  // `Object.keys` returns an array of keys in an object
  const fsKeys = Object.keys(fs)
  expect(fsKeys).toEqual(['file1', 'file2', 'file3'])
})



test('Object.values', () => {
  const keyValPairs = {
    a: 10,
    b: 20,
    c: 30
  }

  // `Object.values` returns an array of values in an object
  const vals = Object.values(keyValPairs)
  expect(vals).toEqual([10, 20, 30])
})



test('Object.entries', () => {
  const keyValPairs = {
    a: 10,
    b: 20,
    c: 30
  }

  // `Object.entries` returns an array of arrays, where each child
  //   is [key, values]
  const [p1, p2, p3] = Object.entries(keyValPairs)
  expect(p1).toEqual(['a', 10])
  expect(p2).toEqual(['b', 20])
  expect(p3).toEqual(['c', 30])
})



test('Object.assign', () => {
  const a = { a: 10 }
  const b = { b: 20 }

  // `Object.assign` can merge objects. It has other uses, but this
  //   is the most common
  const aAndB = Object.assign({}, a, b)
  expect(aAndB).toEqual({
    a: 10,
    b: 20
  })
})



/*** Promises ***/



test('Basic promise', () => {
  // A Promise is a value that will eventually be something. The
  //   inner value can be accessed using `.then`

  // You usually don't make Promises, you recieve them from a
  //   framework of library. However, the Promise constructor is
  //   used like so:
  const myPromise = new Promise((resolve, reject) => {
    // Resolve the Promise after 50ms
    setTimeout(() => resolve(1), 50)
  })

  // .then will always return another promise. Here we return the promise
  //   so our test harness can determine when our test is over
  return myPromise.then(value => {
    expect(value).toBe(1)
  })
})



test('Promise chaining', () => {
  const myPromise = new Promise(resolve => setTimeout(() => resolve(1), 50))

  const addThree = x => x + 3

  // You can chain a function on .then
  return myPromise
    .then(addThree)
    .then(value => {
      expect(value).toBe(4)
    })
})



test('Promise chaining with another Promise', () => {
  const myPromise = new Promise(resolve => setTimeout(() => resolve(1), 50))

  // You can return another promise in a .then
  //   the next .then in the chain will wait on it
  const addThree = value => new Promise(resolve => {
    setTimeout(() => {
      resolve(value + 3)
    }, 50)
  })

  return myPromise
    .then(addThree)
    .then(value => {
      expect(value).toBe(4)
    })  
})



test('Await / Async', () => {
  const myPromise = new Promise(resolve => setTimeout(() => resolve(1), 50))

  // You can also "await" on a promise to resolve in the context of an
  //   async functions. An async function will always return a promise
  const checkValue = async function () {
    const value = await myPromise
    expect(value).toBe(1)
  }

  return checkValue()
})



test('Test in async', async () => {
  // We can actually run the entire test in the context of an async
  //   function!
  const myPromise = new Promise(resolve => setTimeout(() => resolve(1), 50))

  expect(await myPromise).toBe(1)
})



test('Await on another async function', async () => {
  const getValue = async () => {
    return await new Promise(resolve => setTimeout(() => resolve(1), 50))
  }

  const myValue = await getValue()

  expect(myValue).toBe(1)
})