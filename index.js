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

    functions: function(data) { //returns the names of any functions contained in the object
      let key = Object.keys(data)
      let holding = []
      for (let i = 0; i < key.length; i++){
        if (typeof (data[key[i]]) === 'function') {
          holding.push(key[i])
        }
      }
      return fi.sortBy(holding)
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

    sortBy: function(data, action = (val) => { return val }) { //sorts an array alphabetically or numerically
      let sorted = [data[0]]
      if (isNaN(data[0]) === false){ //numerical
        for (let i = 1; i < data.length; i++) {
          let x = 0
          let check = undefined
          while (check === undefined) {
            if (x >= sorted.length) {
              sorted.push(data[i])
              check = true
            } else if ((action(data[i])) < (action(sorted[x]))){
              sorted = [...sorted.slice(0, x), data[i], ...sorted.slice(x)]
              check = true 
            } else {
              x++
            }
          }
        }
        return sorted
      } else { //alphabetical
        for (let i = 1; i < data.length; i++) {
          let x = 0
          let check = undefined
          while (check === undefined) {
            if (x >= sorted.length) {
              sorted.push(data[i])
              check = true
            } else if ((data[i]).charAt(0) < (sorted[x]).charAt(0)){
              sorted = [...sorted.slice(0, x), data[i], ...sorted.slice(x)]
              check = true 
            } else {
              x++
            }
          }
        }
        return sorted
      }
    },

    flatten: function(data, value) { //flattens an array
      let result = []
      if (value === true) { //flattens one layer if true is provided as a second arg
        for (let i = 0; i < data.length; i++){
          if (data[i].length === undefined) {
            result.push(data[i])
          } else {
            for (let x = 0; x < data[i].length; x++){
              result.push(data[i][x])
            }
          }
        }
      } else {
        multi(data)
        function multi(array){ //flattens all layers
          for (let i = 0; i < array.length; i++){
            if (array[i].length === undefined) {
              result.push(array[i])
              //console.log(result)
            } else {
              multi(array[i])
            }
          }
        }
      }
      return result
    },

    uniq: function(data, isSorted, modifier = (val) => {return val}) { //remove duplicates from an array
      function findForMe(target) {
        return (function(currEl) { return target === currEl })
      }
      let result = [data[0]]
      if (isSorted === true) {
        for (let i = 1; i < data.length; i++) {
          if (data[i] === result[result.length - 1]) {
            console.log('duplicate')
          } else {
            result.push(data[i])
          }
        }
      } else {
        const x = modifier(data[0])
        let tested = [x]
        for (let i = 1; i < data.length; i++) {
          let testing = modifier(data[i])
          if (fi.find(tested, findForMe(testing)) === undefined) {
            result.push(data[i])
            tested.push(testing)
          }
        }
      }
      return result
    },

    keys: function(data) { //return the keys of an object
      return Object.keys(data)
    }, 

    values: function(data) { //return the values of an object
      let key = Object.keys(data)
      let value = []
      for (let i = 0; i < key.length; i++) {
        value.push(data[key[i]])
      }
      return value
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
