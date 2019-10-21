// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = '';
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    result += obj;
  } else if (typeof obj === 'string') {
    result += '"' + obj + '"';
  } else if (obj === null) {
    result += 'null';
  }

  if (Array.isArray(obj)) {
    for (var i=0; i<obj.length; i++) {
      result += stringifyJSON(obj[i]) + ',';
    }
    result = '[' + result.slice(0,result.length-1) + ']';
  } else if ((typeof obj === 'object') && (obj !== null)) {
    for (var key in obj) {
      if (obj === {} || typeof obj[key] === 'function' || obj[key] === undefined) {
        return '{}';
      }
      result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
    }
    result = '{' + result.slice(0,result.length-1) + '}';
  }
  return result;
};