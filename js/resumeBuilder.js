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
$("#main").append(edu.schoolName); 
*/

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
			"dates" : 2016,
			"URL" : "http://www.udacity.com"
		},
		{
			"title" : "CSS HMTL 2",
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
		"description" : "Ucitel na zakladni skole. VE skole plne dementu a vyhorelejch raket...hodil jsme se tam"
	}
	]
};

var projects = {
	"projekty" : [
	{
		"title" : "Portfolio v Java Script",
		"dates" : 2017,
		"description" : "Tvorba intenetoveho portfolia v JS",
		"images" : ["images/197x148.gif","images/197x148.gif","images/197x148.gif","images/197x148.gif"]
	},
	{
		"title" : "Resume",
		"dates" : 2017,
		"description" : "Tvorba Resume pro Udacity v JS",
		"images" : ["images/197x148.gif","images/197x148.gif"]
	}	
	]
};

var bio = {
	"name" : "Petr Majer",
	"role" : "JS shit",
	"skills" : ["PC","Teaching","JS","Dancing", "Awsomness"],
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



var charEscape = function(_html) { //funkce ktera nahradi zavorky <>, normalnim neskodlivym textem
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");  //   /</g  =najdi vsechny znaky <  -----  "&lt;" = znak < 
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};
//-----------------------------------------------------------------------
function displayBio () {
	var formatedBio = HTMLheaderRole.replace("%data%",bio.role);
		$("#header").prepend(formatedBio);
	
	var formatedBio = HTMLheaderName.replace("%data%",bio.name);
		$("#header").prepend(formatedBio);
	
	var formatedBio = HTMLmobile.replace("%data%",bio.contacts.mobile);
		$("#topContacts").append(formatedBio);
	
	var formatedBio = HTMLemail.replace("%data%",bio.contacts.email);
		$("#topContacts").append(formatedBio);
	
	var formatedBio = HTMLgithub.replace("%data%",bio.contacts.github);
		$("#topContacts").append(formatedBio);
	
	var formatedBio = HTMLtwitter.replace("%data%",bio.contacts.twitter);
		$("#topContacts").append(formatedBio);
	
	var formatedBio = HTMLlocation.replace("%data%",bio.contacts.location);
		$("#topContacts").append(formatedBio);
	
	var formatedBio = HTMLbioPic.replace("%data%",bio.biopic);
		$("#header").append(formatedBio);
	
	var formatedBio = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
		$("#header").append(formatedBio);
};

//----------------------------------------------------------------------
function displaySkills () {
	if (bio.skills.length>0) {               // zobrazovani resume pokud existuji skills :)
		$("#header").append(HTMLskillsStart);

		var formatedSkill = HTMLskills.replace("%data%",bio.skills[0]);
		$("#skills").append(formatedSkill);

		var formatedSkill = HTMLskills.replace("%data%",bio.skills[1]);
		$("#skills").append(formatedSkill);

		var formatedSkill = HTMLskills.replace("%data%",bio.skills[2]);
		$("#skills").append(formatedSkill);

		var formatedSkill = HTMLskills.replace("%data%",bio.skills[3]);
		$("#skills").append(formatedSkill);

		var formatedSkill = HTMLskills.replace("%data%",bio.skills[4]);
		$("#skills").append(formatedSkill);
	};
};
// ------------------------------------------------------------------------------------
/*function displayWork () {
	for (job in work.jobs) {                   //ZOBRAZENI CASTI WORK pomoci FORu
		$("#workExperience").append(HTMLworkStart);	

		var formatedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		
		var formatedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		
		formatedEmployerTitle = formatedEmployer + formatedTitle;	

		$(".work-entry:last").append(formatedEmployerTitle);
		
		var formatedworkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formatedworkDates);
		
		var formatedDescription = HTMLprojectDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formatedDescription);	
	}; 

};

displayWork (); */

function displayWork () {

	for (var i= 0; i< work.jobs.length; i++) {                //to stejne jako predtim jen jsme pouzil for a ne forin
	 	$("#workExperience").append(HTMLworkStart);

 		var formatedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);

		var formatedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
		formatedEmployerTitle = formatedEmployer + formatedTitle;
	
		$(".work-entry:last").append(formatedEmployerTitle);
	
		var formatedworkDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
		$(".work-entry:last").append(formatedworkDates);
		
		var formatedDescription = HTMLprojectDescription.replace("%data%",work.jobs[i].description);
		$(".work-entry:last").append(formatedDescription);	

	};
	
}; 

function displayEducation () {
	
		for (var i= 0; i< education.schools.length; i++) {                //to stejne jako predtim jen jsme pouzil for a ne forin
	 	$("#education").append(HTMLschoolStart);

 		var formatedName = HTMLschoolName.replace("%data%",education.schools[i].name);
		$(".education-entry:last").append(formatedName);

		var formatedDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
		$(".education-entry:last").append(formatedDates);

		var formatedDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
		$(".education-entry:last").append(formatedDegree);

		var formatedMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors);
		$(".education-entry:last").append(formatedMajor);
	};
	
	if (education.onlineCourses.length>0){
		$(".education-entry:last").append(HTMLonlineClasses);

		for (var i= 0; i< education.onlineCourses.length; i++) {                //to stejne jako predtim jen jsme pouzil for a ne forin

	 		var formatedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
		 	var formatedTitle2 = formatedTitle.replace("#",education.onlineCourses[i].URL);
			$(".education-entry:last").append(formatedTitle2);	
		
			var formatedSChool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
			$(".education-entry:last").append(formatedSChool);	
		
			var formatedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
			$(".education-entry:last").append(formatedDates);	
		};
	};
}; 

function inName (Name) {
	var finalName =  Name;
	
	NameArray = Name.trim().split(" ");
	NameArray[0] = NameArray[0].slice(0,1).toUpperCase() + NameArray[0].slice(1).toLowerCase();
	NameArray[1] = NameArray[1].toUpperCase();
	//-------------------------------------
	finalName = NameArray.join(" ");
 	return finalName; 
 	//--------------alternativa misto JOIN dat jen scitani------------
 	//return NameArray[0] + " " + NameArray[1];

};



projects.display = function () {
	for (project in projects.projekty) {
		$("#projects").append(HTMLprojectStart);

		var formatedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projekty[project].title);
		$(".project-entry:last").append(formatedProjectTitle);

		var formatedProjectDates = HTMLprojectDates.replace("%data%", projects.projekty[project].dates);
		$(".project-entry:last").append(formatedProjectDates);

		var formatedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projekty[project].description);
		$(".project-entry:last").append(formatedProjectDescription);

		if (projects.projekty[project].images.length > 0) {
			for (image in projects.projekty[project].images){
				var formatedProjectImage = HTMLprojectImage.replace("%data%", projects.projekty[project].images[image]);
				$(".project-entry:last").append(formatedProjectImage);
			};
		};	
	};
};
displayBio();
displaySkills();


displayWork ();

displayEducation ();
projects.display();

$("#main").prepend(internationalizeButton);
$("#mapDiv").append(googleMap);
