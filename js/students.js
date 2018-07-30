//creating the data array for all the finalized data
var currentStudents = [];
var pastStudents = [];
var otherStudents = [];
var nonNumStudents = [];
//creating the arrays for each main section of the page
var current = [];
var past = [];
var other = [];
//storting the contention section from html as a variable
var currentSection = document.getElementById('current');
var pastSection = document.getElementById('past');
var otherSection = document.getElementById('other');
//varibles for the frames that will hold the data
var currentFrame = '';
var pastFrame = '';
var otherFrame = '';

//function to parse the main data array into sections by upper, lower and grad
function sectionate(students) {
	for (var i=0; i < students.length; i++) {
		if (students[i].cpo == "current") {
			currentStudents.push(students[i]);
		}
		else if (students[i].cpo == "past") {
			pastStudents.push(students[i]);
		}
		else if (students[i].cpo == "other") {
			otherStudents.push(students[i]);
		}
		else {
			nonNumStudents.push(students[i]);
		}
	}
}

//run the sectionate function
sectionate(students);

//function to sort the sections into chronological order by year
function compare(a, b) {
	if (a.year < b.year) {
		return 1;
	}
	if (a.year > b.year) {
		return -1;
	}
	return 0;
}

//run the sort by year function
currentStudents.sort(compare);	
pastStudents.sort(compare);	
otherStudents.sort(compare);	


//take the wirtings and create the html to be displayed by it by section
function createHTML (studentSet) {
	var frame = '';
	for (var i=0; i < studentSet.length; i++) {
		frame += "<li class='list-group-item body-text'>"; 
		frame += "<b>" + studentSet[i].studentName + "</b> - ";
		frame += studentSet[i].description + "</li>";
	}
	return frame;
}


// build each section
currentFrame = createHTML(currentStudents);
pastFrame = createHTML(pastStudents);
otherFrame = createHTML(otherStudents);


// write each section to the page
currentSection.innerHTML = currentFrame;
pastSection.innerHTML = pastFrame;
otherSection.innerHTML = otherFrame;