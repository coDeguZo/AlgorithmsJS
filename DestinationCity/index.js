// Leetcode Problem #1436 Destiniation City

let paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
let paths2 = [["B","C"],["D","B"],["C","A"]]

const destCity = paths => {
  let arrival = paths.map(dest => dest[0])
  let destinations = paths.map(dest => dest[1])
  let finalDestination = destinations.filter(dest => arrival.indexOf(dest) === -1)
  return finalDestination.join("")
}

console.log(destCity(paths))