/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;  

  for (var i = 0; i<preferences.length; i++) { 
      var first_lover = preferences[i] -1;
      if(first_lover== i) 
        continue;
      var second_lover= preferences[first_lover]-1;
      if(first_lover == second_lover) 
        continue;
      var third_lover =preferences[second_lover]-1;
      if(third_lover == second_lover) 
        continue;
      if(third_lover== i) {
          count++;
      }
   }
   return count /3;
};

