/* TELEPHONE NUMBER VALIDATOR... (US format is used in this program)

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
*/

function telephoneCheck(str) {
  if (/^([1][0-9]{3}|[1][\s][0-9]{3}|[0-9]{3})-[0-9]{3}-[0-9]{4}$/g.test(str)){ // 555-555-5555 , 1 555-555-5555, 1555-555-5555
  return true;}
  else if (/^([1][\s][(]|[1][(]|[(])[0-9]{3}[)][0-9]{3}-[0-9]{4}$/g.test(str)){ // (555)555-5555 , 1 (555)555-5555, 1(555)555-5555
  return true;}
  else if (/^([1][(]|[1][\s][(]|[(])[0-9]{3}[)][\s][0-9]{3}-[0-9]{4}$/g.test(str)){ // (555) 555-5555, 1 (555) 555-5555, 1(555) 555-5555
  return true;}
  else if (/^([1][\s][0-9]{3}|[1][0-9]{3}|[0-9]{3})[\s][0-9]{3}[\s][0-9]{4}$/g.test(str)){// 555 555 5555, 1 555 555 5555, 1555 555 5555
  return true;}
  else if (/^([1][0-9]{10}|[1][\s][0-9]{10}|[0-9]{10})$/g.test(str)){//5555555555 , 1 5555555555, 15555555555
  return true;}
  else return false;
  }


telephoneCheck("1 555 555 5555");

/* other test cases...
telephoneCheck("555-555-5555") should return a boolean.
telephoneCheck("1 555-555-5555") should return true.
telephoneCheck("1 (555) 555-5555") should return true.
telephoneCheck("5555555555") should return true.
telephoneCheck("555-555-5555") should return true.
telephoneCheck("(555)555-5555") should return true.
telephoneCheck("1(555)555-5555") should return true.
telephoneCheck("555-5555") should return false.
telephoneCheck("5555555") should return false.
telephoneCheck("1 555)555-5555") should return false.
telephoneCheck("1 555 555 5555") should return true.
telephoneCheck("1 456 789 4444") should return true.
telephoneCheck("123**&!!asdf#") should return false.
telephoneCheck("55555555") should return false.
telephoneCheck("(6054756961)") should return false.
telephoneCheck("2 (757) 622-7382") should return false.
telephoneCheck("0 (757) 622-7382") should return false.
telephoneCheck("-1 (757) 622-7382") should return false
telephoneCheck("2 757 622-7382") should return false.
telephoneCheck("10 (757) 622-7382") should return false.
telephoneCheck("27576227382") should return false.
telephoneCheck("(275)76227382") should return false.
telephoneCheck("2(757)6227382") should return false.
telephoneCheck("2(757)622-7382") should return false.
telephoneCheck("555)-555-5555") should return false.
telephoneCheck("(555-555-5555") should return false.
telephoneCheck("(555)5(55?)-5555") should return false.
telephoneCheck("55 55-55-555-5") should return false.
*/
