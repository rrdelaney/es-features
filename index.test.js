/*
This is a small introduction to some ES.next features.
Run this file with Jest
*/



/*** ES2015 Features ***/



test('Arrow functions', () => {
  // Functions can be expressed using the "arrow function" syntax
  // Shorthand for an anonymous function
  var myFunction = (num1, num2) => {
    return num1 + num2
  }

  expect(myFunction(4, 6)).toBe(10)

  // Arrow functions don't need parens with one parameter
  var myFunc2 = num => {
    return num + 6
  }

  expect(myFunc2(4)).toBe(10)

  // Arrow functions have a shorthand for returning the result
  //   of one expression
  var myFunc3 = num => num + 6

  expect(myFunc3(4)).toBe(10)
})



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



test('Maps')



test('Sets')



test('Basic generator functions')



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



test('String.repeat')



test('Array.map')



test('Array.filter')



test('Array.reduce')



test('Array.forEach')



test('Array.find')



test('Array.findIndex')



test('Object.keys')



test('Object.values')



test('Object.entries')



test('Object.assign')
