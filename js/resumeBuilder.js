/*
This is empty on purpose! Your code to build the resume will go here.
 */
/* var firstName="Petr";
var age=32;
 
var email = "majer.petr@udacity.com";
var newemail = email.replace ("udacity","gmail");
console.log(email);
console.log(newemail); 

var awsomeThoughts="I am Petr and I am Awsome!";
var funThoughts = awsomeThoughts.replace("Awsome","fun");
console.log(awsomeThoughts);
console.log(funThoughts);  */

var formattedname = HTMLheaderName.replace("%data%","Petr Majer");
$("#header").append (formattedname);

var formattedrole = HTMLheaderRole.replace("%data%","Front-End Sračka");
$("#header").append (formattedrole);



