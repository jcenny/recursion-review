// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var results = [];

  var findClass = function (node) {

    // if node has a list && node.classList has className
    //
    if (node.classList && node.classList.contains(className)) {
      //push into resultsArray
      results.push(node);
    }
    // if node has childNodes
    if (node.childNodes) {
      for (var i = 0; i < node.childNodes.length; i++) {
        console.log('at iteration ', i);
        console.log('node.childeNodes is ', node.childNodes);
        // console.log('node.childnodes.classList is ',node.childnodes.classList);
        console.log('node.classList is', node.classList);
        console.log('node.className is', node.className);
        console.log('node.childNodes[i].nodeName is ', node.childNodes[i].nodeName);
        console.log('node.childnodes[i] is', node.childNodes[i]);
        console.log('----------------------');
        findClass(node.childNodes[i]);
      }
    }

  };

  // call findClass on document body
  findClass(document.body);
return results;
};

// var htmlStrings = [
//   '<div class="targetClassName"></div>',
//   '<div class="otherClassName targetClassName"></div>',
//   '<div><div class="targetClassName"></div></div>',
//   '<div><div class="targetClassName"><div class="targetClassName"></div></div></div>',
//   '<div><div></div><div><div class="targetClassName"></div></div></div>',
//   '<div><div class="targetClassName"></div><div class="targetClassName"></div></div>',
//   '<div><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></div>'
// ];

// describe('getElementsByClassName', function() {

//   it('should match the results of calling the built-in function', function() {
//     $('body').addClass('targetClassName');
//     htmlStrings.forEach(function(htmlString) {
//       var $rootElement = $(htmlString);
//       $('body').append($rootElement);

//       var result = getElementsByClassName('targetClassName');
//       var expectedNodeList = document.getElementsByClassName('targetClassName');
//       var expectedArray = Array.prototype.slice.apply(expectedNodeList);
//       var equality = _.isEqual(result, expectedArray); // why can't we use `===` here?
//       expect(equality).to.equal(true);

//       $rootElement.remove();
//     });
//     $('body').removeClass('targetClassName');
//   });

// });
