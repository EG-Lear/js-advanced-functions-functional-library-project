const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(content, test) {
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

    map: function(data, action) {
      let newData = eachFor(data, action)
      return newData
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()

function eachFor(content, test) {
  const result = []
  if (Array.isArray(content) === true) {
    for (let i = 0; i < content.length; i++) {
      result.push(test(content[i]))
    }
  } else {
    for (const key in content) {
      result.push(test(content[key]))
    }
  }
  return result
}