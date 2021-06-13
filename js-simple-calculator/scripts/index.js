
$projectName = "mnk17arts' JS Simple Calculator"


$(document).ready(
function(){
 $s = $('#display');
 
 // ALL CLEAR  - AC  
 $('#clear').on('click', () => { $s.html(0); } );
 // NUMBERS - N 1234567890
 $('.n').on('click', (e) => { 
 
 const rgx = /^(0{1,})(\w)$/; //  ex. 00002 => 2
 let newDisplay = $s.html() + $(e.currentTarget).html();
 // Remove 0's at the beginning
 if (rgx.test(newDisplay)) {
 newDisplay = newDisplay.replace(rgx, '$2');
   }
 $s.html(newDisplay);     
 })
 // DECIMAL POINT
 $('.d').on('click', (e) => {
 const rgx1 = /[.]{2,}$/;  
 const rgx2 = /(\d+[.]\d+)([.])$/; 
   
 let display = $s.html() + $(e.currentTarget).html();
 if(rgx1.test(display)){
   display = display.replace(rgx1, ".")
 } // ex 23.. => 23.
 if(rgx2.test(display)){
   display = display.substring(0, display.length-1);
 } // ex 2.33.4 => 2.334
   
 $s.html(display)  
 }) 
 // OPERATORS +-*/
 $('.o').on('click', (e) => {
 const rgx = /[+-\/*]$/;
 const cDisplay = $s.html();
 const newOperator = $(e.currentTarget).attr('value');
 let nDisplay = "";

 if (rgx.test(cDisplay) && newOperator !== "-") {
    if (rgx.test(cDisplay[cDisplay.length-2])) {
        // Case 5*-+5 => 5+5
        nDisplay = cDisplay.substring(0, cDisplay.length-2) + newOperator;
      } else {
        // Case 5*+5 => 5+5 
        nDisplay = cDisplay.substring(0, cDisplay.length-1) + newOperator;
      }
    } else {
      nDisplay = cDisplay + newOperator;
    }
  
    $s.html(nDisplay);  
   
 });
 // EVALUATE
 $(".e").on('click', () => {
    $s.html(eval($(".s").html()));
  });   
  
}
);

