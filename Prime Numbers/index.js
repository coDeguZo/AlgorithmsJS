function isPrime(num) {
    if (num <= 1) return false; 
        //5 is larger than 1, so we continue with the function if (num === 2) return true;
        //5 is not 2, so we continue with the function for (let i= 2; i < num; i++) {
        if (num % i === 0) {
        return false;
        }  
    return true;
}

function isPrime(num) {
    if (num % 2 === 0) {  return false;
   } return true;}
  //isPrime(40) gives us a False answer
  //isPrime(101) gives us a True answer