function myFunction() {
  var text;
  var table = prompt("Please enter you value here:");
  document.getElementById('blackboard'); 
  var operator = 'multiplication'; // Type of calculation
  var i = 1;                 // Set counter to 1
  var msg = <h2>"Multiplcation Table"</h2>;              // Message

if (operator === 'multiplication') {
   //Do multiplication
  do (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
//else {
 // Do addition
  //while (i < 11) {
   // msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
   // i++;
  }
}

