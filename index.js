const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(content, test) { //iterates over an array or object and returns the original 
      if (Array.isArray(content) === true) {
        for (let i = 0; i < content.length; i++) {
          test(content[i])
        }
      } else {
          for (const key in content) {
            test(content[key])
          }
      }
      return content
    },

    map: function(content, action) { //iterates over an array or object and returns a new array
      const result = []
      if (Array.isArray(content) === true) {
        for (let i = 0; i < content.length; i++) {
          result.push(action(content[i]))
        }
      } else {
        for (const key in content) {
          result.push(action(content[key]))
        }
      }
      return result
    },

    reduce: function(data, action, initial) { // reduces the array to a single value (specifically for numbers)
      let result = -2
      if (isNaN(initial) === false) {
        result = initial
      }
      for (let i = 0; i < data.length; i++) {
        result = action(result, data[i])
      }
      return result
    },

    functions: function() {

    },

    find: function(data, action) { //iterates through an array to find a specific value, if value is not found returns undefined
      let answer
      let i = 0
      let check
      while (check === undefined) {
        let test = action(data[i])
        if (test === true) {
          answer = data[i]
          check = 0
        } else if (i >= data.length) {
          check = 0
        } else {
          i++
        }
      }
      return answer
    },

    filter: function(data, action) { //iterates over using a condition that has been passed in that returns true false and then returns all true values
      let newA = []
      for (let i = 0; i < data.length; i++) {
        let test = action(data[i])
        if (test === true) {
          newA.push(data[i])
        }
      }
      return newA
    },

    size: function(data) { //returns the number of values in an array or object
      if (Array.isArray(data) === true) {
        return data.length
      } else {
        let keys = Object.keys(data)
        return keys.length
      }
    }
  }
})()

fi.libraryMethod()

// function findGenerator(target) {
//   return (function(currEl) { return target === currEl })
// }

// function greater(currEl) {
//   return (currEl > 10)
// }
