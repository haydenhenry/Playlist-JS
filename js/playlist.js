
//Creates an array called playList that holds six other arrays with two items each.
var playList = [
  ['I Did It My Way', 'Frank Sinatra' ],
  ['Respect', 'Aretha Franklin'],
  ['Imagine', 'John Lennon'],
  ['Born to Run', 'Bruce Springsteen'],
  ['Louie Louie', 'The Kingsmen'],
  ['Maybellene', 'Chuck Berry']
];

//Creates a function called print with a parameter of message. When it
//runs, it writes to the page the value of message.
function print(message) {
  document.write(message);
}


//Creates a function called printSongs with a parameter value of songs.
//In the function, a variable called listHTML is declared, set to the value
//of a string containing an opening <ol> tag, creating an ordered list
//in our HTML file. Below that a for loop is created, measuring the
//length of our playlist. It will create a set of <li> tags for every item
//in the list. After the for loop, the listHTML value is changed to include
//the closing ol tags. Below that, the print function is called, with the value
//of the listHTML variable.
function printSongs(songs) {
  var listHTML = '<ol>';
  for (var i = 0; i < list.length; i += 1) {
    listHTML += '<li>' + songs[i][0] +  ' by ' + songs[i][1] + '</li>';   // The change will also add the name of the performer in 1 index position of the songs.
  }
  listHTML += '</ol>';
  print(listHTML);
}
//Now the printList function is called and passed the value of
//the playList array from the top of the page.
printSongs(playList);
