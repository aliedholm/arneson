//creating the data array for all the finalized data
var upperCourses = [];
var lowerCourses = [];
var gradCourses = [];
var nonNumCourses = [];
//creating the arrays for each main section of the page
var upper = [];
var lower = [];
var grad = [];
//storting the contention section from html as a variable
var upperSection = document.getElementById('upper-div');
var lowerSection = document.getElementById('lower-div');
var graduateSection = document.getElementById('graduate');
//varibles for the frames that will hold the data
var upperFrame = '';
var lowerFrame = '';
var gradFrame = '';

//function to parse the main data array into sections by upper, lower and grad
function sectionate(courses) {
	for (var i=0; i < courses.length; i++) {
		if (courses[i].courseNum < 100) {
			lowerCourses.push(courses[i]);
		}
		else if ((courses[i].courseNum >= 100) && (courses[i].courseNum < 200)) {
			upperCourses.push(courses[i]);
		}
		else if (courses[i].courseNum >= 200) {
			gradCourses.push(courses[i]);
		}
		else {
			noNumCourses.push(courses[i]);
		}
	}
}

//run the sectionate function
sectionate(courses);

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
gradCourses.sort(compare);	
upperCourses.sort(compare);	
lowerCourses.sort(compare);	

//take the courses and create the html to be displayed by it by section
function createHTML (courseSet) {
	var frame = '';
	for (var j=0; j < courseSet.length;	 j ++) {
		if (courseSet[j].filename != "na") {
			frame += "<li class='list-group-item body-text'><b>" + courseSet[j].courseCode + " " + courseSet[j].courseNum + "</b> - " + courseSet[j].title + " (" + courseSet[j].quarter + " " + courseSet[j].year + ") " + "<a href='documents/syllabi/" + courseSet[j].filename + "''>" + "[syllabus]" + "</a></li>";
		}
		else {
		frame += "<li class='list-group-item body-text'><b>" + courseSet[j].courseCode + " " + courseSet[j].courseNum + "</b> - " + courseSet[j].title + " (" + courseSet[j].quarter + " " + courseSet[j].year + ") " + "</li>";
		}
	}
	return frame;
}

// build each section
gradFrame = createHTML(gradCourses);
upperFrame = createHTML(upperCourses);
lowerFrame = createHTML(lowerCourses);

// write each section to the page
graduateSection.innerHTML = gradFrame;
upperSection.innerHTML = upperFrame;
lowerSection.innerHTML = lowerFrame;