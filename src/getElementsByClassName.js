// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var results = [];

  var findClass = function (node) {
    // if has node classlist && node classlist contains className
    if (node.classList && node.classList.contains(className)) {
      results.push(node);
    }
    if (node.childNodes) {
      for (var i = 0; i < node.childNodes.length; i++) {

        return findClass(node.childNodes[i]);

      }
    }
  };


  results = findClass(document.body);
  return results;

};
