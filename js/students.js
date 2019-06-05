//creating the data array for all the finalized data
var cchStudents = [];
var cmbStudents = [];
var pchStudents = [];
var pmbStudents = [];
var othStudents = [];
var udgStudents = [];
var nonNumStudents = [];

//creating the arrays for each main section of the page
var cch = [];
var cmb = [];
var pch = [];
var pmb = [];
var oth = [];
var udg = [];

//storting the contention section from html as a variable
var cchSection = document.getElementById('cch');
var cmbSection = document.getElementById('cmb');
var pchSection = document.getElementById('pch');
var pmbSection = document.getElementById('pmb');
var othSection = document.getElementById('oth');
var udgSection = document.getElementById('udg');

//varibles for the frames that will hold the data
var cchFrame = '';
var cmbFrame = '';
var pchFrame = '';
var pmbFrame = '';
var othFrame = '';
var udgFrame = '';

//function to parse the main data array into sections by upper, lower and grad
function sectionate(students) {
	for (var i=0; i < students.length; i++) {
		if (students[i].cpo == "cch") {
			cchStudents.push(students[i]);
		}
		else if (students[i].cpo == "cmb") {
			cmbStudents.push(students[i]);
		}
		else if (students[i].cpo == "pch") {
			pchStudents.push(students[i]);
		}
		else if (students[i].cpo == "pmb") {
			pmbStudents.push(students[i]);
		}
		else if (students[i].cpo == "oth") {
			othStudents.push(students[i]);
		}
		else if (students[i].cpo == "udg") {
			udgStudents.push(students[i]);
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
cchStudents.sort(compare);	
cmbStudents.sort(compare);	
pchStudents.sort(compare);	
pmbStudents.sort(compare);	
othStudents.sort(compare);	
udgStudents.sort(compare);	

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
cchFrame = createHTML(cchStudents);
cmbFrame = createHTML(cmbStudents);
pchFrame = createHTML(pchStudents);
pmbFrame = createHTML(pmbStudents);
othFrame = createHTML(othStudents);
udgFrame = createHTML(udgStudents);

// write each section to the page
cchSection.innerHTML = cchFrame;
cmbSection.innerHTML = cmbFrame;
pchSection.innerHTML = pchFrame;
pmbSection.innerHTML = pmbFrame;
othSection.innerHTML = othFrame;
udgSection.innerHTML = udgFrame;