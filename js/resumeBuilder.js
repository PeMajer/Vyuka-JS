/*
This is empty on purpose! Your code to build the resume will go here.
 */
/* var firstName="Petr";
var age=32;
 //-------------------------------------------------
var email = "majer.petr@udacity.com";
var newemail = email.replace ("udacity","gmail");
console.log(email);
console.log(newemail); 
//-------------------------------------------------
var awsomeThoughts="I am Petr and I am Awsome!";
var funThoughts = awsomeThoughts.replace("Awsome","fun");
console.log(awsomeThoughts);
console.log(funThoughts);  */
//-------------------------------------------------
//var formattedname = HTMLheaderName.replace("%data%","Petr Majer");
//var formattedrole = HTMLheaderRole.replace("%data%","Front-End Sračka");

//$("#header").append (formattedname);
//$("#header").append (formattedrole);
//-------------------------------------------------
/*var copiedText = "Petr Majer".slice(5);
console.log(copiedText);*/
//-------------------------------------------------
//var skills = ["Awsomness","PC","Teaching","JS" ];
// $("#main").append (skills);

//-------------------------------------------------
// Křestní jméno bylo Albert a příjmení EINSTEIN
/*
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    jmeno = oldName.split(" ");
    jmeno[1] = jmeno[1].toUpperCase();
    jmeno[0] = jmeno[0].slice(0,1) + jmeno[0].slice(1).toLowerCase();
    finalName = jmeno.join(" ");
    return finalName;
};
console.log(nameChanger(name));  
*/

//-------------------------------------------------
/*var skills = ["Awsomness","PC","Teaching","JS" ];

var bio = {
	"name" : "Petr Majer",
	"role" : "JS shit",
	"skills" : skills,
	"contact" : {
		"tel" : "725 279 379",
		"email" : "majer.p@gmail.com",
		"location" : "Jihlava"
	},
	"pictureURL" : "images/fry.jpg",
	"welcome": "Vitejte na mem portfoliu"

};

$("#main").append(bio.name); */


//-------------------------------------------------
/*
var work = {
	"job" : "teacher",
	"employer" : 40,
	"year"	: "2015",
	"city" : "Jihlava"
};

var edu = {
	["schoolName"] : "TU Liberec FP",
	["start"] : "2000",
	["end"] : "2010"

};

$("#main").append(work["job"]); 
$("#main").append(edu.schoolName); 
*/

//-----------------NEBO----------------------------
/*var work = {};
	
work.job = "teacher";
work.employer = 40;
work.year =	"2015";
work.city = "Jihlava";

var edu = {};
edu["schoolName"] = "TU Liberec FP";
edu["start"] = "2000";
edu["end"] = "2010";

$("#main").append(work["job"]); 
$("#main").append(edu.schoolName); */


//-----------JSON----------------------------------
var education = {
	"schools" : [
		{
			"name" : "SPS a VOS",
			"location" : "Chomutov",
			"degree": "Master",
			"dates" : 2001,
			"majors" : ["ICT","Programing","EPo"],
			"URL" : "http://www.sps.cz"
		},
		{
			"name" : "FP TuL",
			"location" : "Liberec",
			"degree": "Grand-Master",
			"dates" : 2007,
			"majors" : ["Informatika","fyzika"],
			"URL" : "http://www.tul.cz"
		}
	],

	"onlineCourses" : [
		{
			"title" : "CSS HMTL",
			"school" : "Udacity",
			"dates" : 2017,
			"URL" : "http://www.udacity.com"
		}
	]
};

var work = {
	"jobs" : [
	{
		"employer" : "ZS Demlova",
		"title" : "Ucitel",
		"location" : "Demlova 32, Jihlava",
		"dates" : "2015-today",
		"description" : "Ucitel na zakladni skole."
	},
	{
		"employer" : "ZS Na Kopcich",
		"title" : "Ucitel",
		"location" : "Na Kopcich 32, Trebic",
		"dates" : "2013-2015",
		"description" : "Ucitel na zakladni skole."
	}
	]
};

var projekts = {
	"projekts" : [
	{
		"title" : "Portfolio v Java Script",
		"dates" : 2017,
		"description" : "Tvorba intenetoveho portfolia v JS",
		"images" : ["images/fry.jpg","images/fry.jpg"]
	}
	]
};

var bio = {
	"name" : "Petr Majer",
	"role" : "JS shit",
	"skills" : ["PC","Teaching","JS"],
	"contacts" : {
		"mobile" : "725 279 379",
		"email" : "majer.p@gmail.com",
		"github" : "PeMajer",
		"twitter" : "PeMajer",
		"location" : "Jihlava"
	},
	"biopic" : "images/fry.jpg",
	"welcomeMessage": "Vitejte na mem portfoliu"

};


