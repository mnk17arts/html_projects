/* PALINDROME CHECKER...
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring
punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and
turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

code by : mnk17arts
mail : mnk17arts@gmail.com
*/

function palindrome(str) {
  
  str = str.toLowerCase();
  //console.log(str.length);
  var flag1 = str.replace(/[^a-z0-9]/g, "");
  var len = flag1.length;
  var arr1 = flag1.split("");
  var arr2 = [];
  for (let i=0; i < len; i++){
    arr2.unshift(arr1[i])
  }
  var flag2 = arr2.join("");
  return flag1===flag2;
}

console.log(palindrome("e&Y e"));

/*   other test cases...
palindrome("eye") should return a boolean.
palindrome("eye") should return true.
palindrome("_eye") should return true.
palindrome("race car") should return true.
palindrome("not a palindrome") should return false.
palindrome("A man, a plan, a canal. Panama") should return true.
palindrome("never odd or even") should return true.
palindrome("nope") should return false.
palindrome("almostomla") should return false.
palindrome("My age is 0, 0 si ega ym.") should return true.
palindrome("1 eye for of 1 eye.") should return false.
palindrome("0_0 (: /-\ :) 0-0") should return true.
palindrome("five|\_/|four") should return false.
*/
