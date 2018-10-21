
//Creates an array called playList
var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene'
];

//Creates a function called print with a parameter of message. When it
//runs, it writes to the page the value of message.
function print(message) {
  document.write(message);
}


//Creates a function called printList with a parameter value of list.
//In the function, a variable called listHTML is declared, set to the value
//of a string containing an opening <ol> tag, creating an ordered list
//in our HTML file. Below that a for loop is created, measuring the
//length of our playlist. It will create a set of <li> tags for every item
//in the list. After the for loop, the listHTML value is changed to include
//the closing ol tags. Below that, the print function is called, with the value
//of the listHTML variable.
function printList(list) {
  var listHTML = '<ol>';
  for (var i = 0; i < list.length; i += 1) {
    listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}
//Now the printList function is called and passed the value of
//the playList array from the top of the page.
printList(playList);
