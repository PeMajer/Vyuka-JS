/*var weirdObject = {
    "property": "Time for an astronomy lesson!",
    "property1": "Cameron's minor in college was astronomy",
    "property-2": "The 4 Galilean largest moons of Jupiter are:",
    "property 3": "Io, Ganymede, Callisto, Europa",
    "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
    " property": "The Sun contains 99.87% of the mass of the entire solar system",
    "property()": "There are 5 dwarf planets in our solar system:",
    "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
    "8property": "Mars has two tiny moons: Phobos and Deimos"
};

// Use console.log() to figure out if dot and/or bracket notation
// will work to access the properties below. Mark true if you can use dot/bracket
// notation to access the property, otherwise mark false.

// For example, uncomment the line below to see if you can use dot notation to access `property1`.
console.log(weirdObject.property1);
console.log(weirdObject["property1"]);

// I'll give you the first answer. The rest are set to false. Try out each property and
// if you can use dot or bracket notation to access it, change the answer to true!

// property
var dotNotation0 = true;
var bracketNotation0 = true;

// property1
var dotNotation1 = true;
var bracketNotation1 = true;

// property-2
var dotNotation2 = false;
var bracketNotation2 = true;

// property 3
var dotNotation3 = false;
var bracketNotation3 = true;

// property$
var dotNotation4 = true;
var bracketNotation4 = true;

// *space*property
var dotNotation5 = false;
var bracketNotation5 = true;

// property()
var dotNotation6 = false;
var bracketNotation6 = true;

// property[]
var dotNotation7 = false;
var bracketNotation7 = true;

// 8property
var dotNotation8 = false;
var bracketNotation8 = true;*/



//---------TEST WHILE----------------
/*var petr = {};
petr.job = "teacher";
var courses = 0;

var makeCourse = function () {
	//neco udela
	console.log ("Vytvarim kurz");
};

while (petr.job === "teacher") {
	makeCourse ();
	courses = courses + 1;
	if (courses === 10) {
		petr.job = "Vyhorela raketa";
		
	};
};
console.log (petr.job);*/

//--------------TEST FOR------------------
/*for (var i = 0; i < 9; i++) {
	console.log(i);
};

var countries = ['Argentina', 'China', 'England'];

for (country in countries) {	
	console.log(countries[country]);
}; */

//------------------------------------------------------
//-------------localizator---FUNKCE ENTER----------------------------
/*var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

// Your code goes here! Let me help you get started

function locationizer(work_obj) {
	var localArray = [];

	for (var i=0; i < work_obj.jobs.length; i++) {
		newLoc = work_obj.jobs[i].location;
		localArray[i] = newLoc;
		//localArray.push(newLoc);    //alternativa 
	};

	return localArray;
};

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));
*/
//////------------------kam klikam--------------------------------------------------
/*var locat = function(loc) {
    console.log (loc.pageX, loc.pageY);
};
$(document).click(locat);*/


//-------------------------PRIJMENI, jmeno a vypsat dle abecedy----------------
/*
var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
  var finalNames = names;
  var name = [];    
  
  for (var i = 0; i< names.length ; i++) {
      name = names[i].trim().split(" ");
      finalNames[i] = name[1] + ", " + name[0]; 
  }  
  finalNames = finalNames.sort();
  return (finalNames);
}

console.log(alphabetizer(moonWalkers)); */
//-------------------------------------------------------------*/



//POROVNANI DVOU Cisel-----------------------------------
function isNumeric(x) { return x === +x; }

function getRelationship(x, y) {
    // Your code goes here!
    var ccrb = "Can't compare relationships because ";
    if (!isNumeric(x) && !isNumeric(y))
        return ccrb + String(x) + " and " + String(y) + " are not numbers";
    if (!isNumeric(x))
        return ccrb + String(x) + " is not a number";
    if (!isNumeric(y))
        return ccrb + String(y) + " is not a number";
    return x > y ? ">" : x < y ? "<" : "=";
}

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));

