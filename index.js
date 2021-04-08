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
    },

    first: function(data, n) { //return the requested number of array elements starting from index 0, if no number is specified returns the first element
      let requested = []
      if (isNaN(n) === true) {
        return data[0]
      } else {
        for (let i = 0; i < n; i++) {
          requested.push(data[i])
        }
        return requested
      }
    },

    last: function(data, n) { //returns the last element(s) of an array
      let lastE = data.length - 1
      let requested = []
      if (isNaN(n) === true) {
        return data[lastE]
      } else {
        let count = data.length - n
        for (let i = count; i < data.length; i++) {
          requested.push(data[i])
        }
        return requested
      }
    },

    compact: function(data) { //iterates through an array and returns all truthy values
      let truth = []
      for (let i = 0; i < data.length; i++) {
        if (data[i]) {
          truth.push(data[i])
        }  
      }
      return truth
    },

    sortBy: function(data) { //sorts an array alphabetically or numerically
      let sorted = [data[0]]
      let lastE = sorted.length - 1
      if (isNaN(data[0]) === false){ 
        for (let i = 1; i < data.length; i++) {
          let x = 0
          let check = undefined
          while (check === undefined) {
            if (data[i] <= sorted[x]){
              sorted = [sorted.slice()]
            } else if (x >= sorted.length) {

            } else {
              x++
            }
          }
        }
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
