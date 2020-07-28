// module.exports = function(){
//   return ("Hello World")
// }

module.exports = {
  sayHello: function(){
    return "Hello World"
  }
}







// Ransom Note Problem

// Ok, so imagine we have a magazine, 
// and let's only consider the letters for now. Our magazine looks like the following:

let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t",
"h", "a", "t", "y", "o", "u", "s", "h", "o", "u", "l", "d", "b",
"u", "y", "t", "h", "e", "y", "a", "r", "e", "c", "h", "e", "a",
"p", "a", "n", "d", "w", "o", "n", "d", "e", "r", "f", "u", "l",
 "f", "o", "r", "t", "h", "e", "s", "u", "m", "m", "e", "r"]

let note = "give me the ferbie or else"

// Immediately, we may think to help ourselves out, by sorting the data in the magazine.

let sortedMagazine = ["a", "a", "a", "a", "a", "b", "c", "c", "c",
"d", "d", "d", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e",
"e", "e", "f", "f", "h", "h", "h", "h", "h", "h", "h", "i", "l",
"l", "l", "m", "m", "m", "n", "n", "n", "o", "o", "o", "o", "o",
"o", "p", "r", "r", "r", "r", "r", "r", "s", "s", "s", "s", "t",
"t", "t", "t", "t", "u", "u", "u", "u", "u", "w", "y", "y", "y"]

let newNote = "hand me the ferbie or else"

// You see how relating this to the real world made this easier? 
// If I gave you a magzine and told you to construct a phrase from the letters, 
// you wouldn't be so intimidated. So lean on real world problems. 
// For arrays, think of a list, and for hashes think of putting each value into a bucket that represents the key.

// function placeObject(array) {
//     let letterObject = array.reduce((i, v) => {
//         if (i[v] === undefined) {
//           i[v] = 1
//         } else {
//           i[v] = i[v] + 1;
//         }
//         return i;
//       }, {})
//       console.log(letterObject)
// }

// placeObject(sortedMagazine)

// function sortArray(array){
//     const sortArray = array.sort()
//     console.log(sortArray)
// }

// sortArray(magazine)

function buildHistorgram(noteText, magazineText) {
  const noteArray = noteText.split(' ');
  const magazineArray = magazineText.split(' ');
  const magazineObject = {};
  
  magazineArray.forEach((word) => {
    if (!magazineObject[word]) magazineObject[word] = 0;
    magazineObject[word]++;
  });

  const noteIsPossible = noteArray.every((word) => {
    if (!magazineObject[word]) { return false; }
    magazineObject[word]--;
    return magazineObject[word] >= 0;
  });

  return noteIsPossible;
}