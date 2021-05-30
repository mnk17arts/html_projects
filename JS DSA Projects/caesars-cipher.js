/* CAESARS CIPHER...
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
  var arr = str.split("");
  for(let i=0; i<arr.length; i++){
    var letter =arr[i];
  switch(letter ){
    case "A": arr[i]="N";break;
    case "B": arr[i]="O";break;
    case "C": arr[i]="P";break;
    case "D": arr[i]="Q";break;
    case "E": arr[i]="R";break;
    case "F": arr[i]="S";break;
    case "G": arr[i]="T";break;
    case "H": arr[i]="U";break;
    case "I": arr[i]="V";break;
    case "J": arr[i]="W";break;
    case "K": arr[i]="X";break;
    case "L": arr[i]="Y";break;
    case "M": arr[i]="Z";break;
    case "N": arr[i]="A";break;
    case "O": arr[i]="B";break;
    case "P": arr[i]="C";break;
    case "Q": arr[i]="D";break;
    case "R": arr[i]="E";break;
    case "S": arr[i]="F";break;
    case "T": arr[i]="G";break;
    case "U": arr[i]="H";break;
    case "V": arr[i]="I";break;
    case "W": arr[i]="J";break;
    case "X": arr[i]="K";break;
    case "Y": arr[i]="L";break;
    case "Z": arr[i]="M";break;
  }}
  return arr.join("");
}

console.log(rot13("SERR PBQR PNZC"));

/*
rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
rot13("SERR YBIR?") should decode to the string FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/
