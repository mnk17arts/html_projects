/* ROMAN NUMERAL CONVERTER... max value: 3999
Convert the given number into a roman numeral.

All roman numerals[https://www.mathsisfun.com/roman-numerals.html] answers should be provided in upper-case.

code by : @mnk17arts
mail : mnk17arts@gmail.com
*/

function convertToRoman(num) {
  var arr = [];
  var ans = [];
    var rom = {
      M : 1000 ,
      D : 500 ,
      C : 100 ,
      L : 50 ,
      X : 10 ,
      V : 5 ,
      I : 1  }
  while( num/10 >= 1){
    //console.log(num%10);
    arr.push(num%10);
    num =  parseInt(num/10);}
  arr.push(num);
  //console.log(arr);
  for (let i =0; i< arr.length; i++){
      var dig = arr[i]*Math.pow(10,i);
      //console.log(dig);
      if ( dig >= 0 & dig < 10 ){
        var rom1 = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
        ans.unshift(rom1[dig]);}
      else if ( dig >= 10 & dig < 100){
        var rom2 = ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
        ans.unshift(rom2[arr[i]-1]);
      }
      else if ( dig >= 100 & dig < 1000){
        var rom3 = ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
        ans.unshift(rom3[arr[i]-1]);
      }
      else if ( dig >= 1000 & dig < 4000){
        var rom4 = ["M","MM","MMM"];
        ans.unshift(rom4[arr[i]-1]);
      }
  }
  //console.log(ans.join(""));
  return ans.join("");
  }

console.log(convertToRoman(3999));

/*
convertToRoman(5) should return the string V.
convertToRoman(9) should return the string IX.
convertToRoman(12) should return the string XII.
convertToRoman(16) should return the string XVI.
convertToRoman(29) should return the string XXIX.
convertToRoman(44) should return the string XLIV.
convertToRoman(45) should return the string XLV.
convertToRoman(68) should return the string LXVIII
convertToRoman(83) should return the string LXXXIII
convertToRoman(97) should return the string XCVII
convertToRoman(99) should return the string XCIX
convertToRoman(400) should return the string CD
convertToRoman(500) should return the string D
convertToRoman(501) should return the string DI
convertToRoman(649) should return the string DCXLIX
convertToRoman(798) should return the string DCCXCVIII
convertToRoman(891) should return the string DCCCXCI
convertToRoman(1000) should return the string M
convertToRoman(1004) should return the string MIV
convertToRoman(1006) should return the string MVI
convertToRoman(1023) should return the string MXXIII
convertToRoman(2014) should return the string MMXIV
convertToRoman(3999) should return the string MMMCMXCIX
*/
