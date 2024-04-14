// Define a function called receivesAFunction
function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  
  // Define a named function called returnsANamedFunction
  function returnsANamedFunction() {
    // Return a named function
    return function namedFunction() {
      // Function body
    };
  }
  
  // Define an anonymous function and assign it to a variable called returnsAnAnonymousFunction
  const returnsAnAnonymousFunction = function() {
    // Return an anonymous function
    return function() {
      // Function body
    };
  };
  
  // Export the functions
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  };