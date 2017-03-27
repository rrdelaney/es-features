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



test('Destructuring', () => {
  
})
