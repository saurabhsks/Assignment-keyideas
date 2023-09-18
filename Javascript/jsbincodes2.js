// I/P-saurabh,SAURABH,SAUrabh.......
// O/P-Saurabh

//1.create a var that stores the name that users enters via prompt
var name=prompt("what is your name?");

//2.Capitalise the first letter of their name.

//a.isolate the first character
var firstchar=name.slice(0,1);

//b.turn the first character to upper case
var uppercaseFirstchar=firstchar.toUpperCase();

//c.Isolate the rest of the name
var restofname=name.slice(1,name.length);

//d.change the rest of the name to lowercase
var resttolowercase=restofname.toLowerCase();

//e.Concatenate the first character with the rest of the char
var CapitalisedName=uppercaseFirstchar+resttolowercase;

//3.we use the capitalised version of their name to greet then using an alert. 

alert("Hello, "+ CapitalisedName);







