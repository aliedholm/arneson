//creating the data array for all the finalized data
var recentBib = [];
var notsoBib = [];
var wipBib = [];
var noDateWritings = [];
//creating the arrays for each main section of the page
var recent = [];
var notso = [];
var wip = [];
//storting the contention section from html as a variable
var recentSection = document.getElementById('recent');
var notsoSection = document.getElementById('notso');
var wipSection = document.getElementById('wip');
//varibles for the frames that will hold the data
var recentFrame = '';
var notsoFrame = '';
var wipFrame = '';

//utility variables
currentYear = (new Date()).getFullYear()

//function to parse the main data array into sections by upper, lower and grad
function sectionate(writings) {
	for (var i=0; i < writings.length; i++) {
		if (writings[i].year > (currentYear - 10)) {
			recentBib.push(writings[i]);
		}
		else if (writings[i].year <= (currentYear - 10)) {
			notsoBib.push(writings[i]);
		}
		else if (writings[i].year == "na") {
			wipBib.push(writings[i]);
		}
		else {
			noDateWritings.push(writings[i]);
		}
	}
}

//run the sectionate function
sectionate(writings);

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
recentBib.sort(compare);	
notsoBib.sort(compare);	
wipBib.sort(compare);	

//take the wirtings and create the html to be displayed by it by section
function createHTML (writingsSet) {
	var frame = '';
	for (var j=0; j < writingsSet.length;	 j ++) {
		frame += "<li class='list-group-item bibliographical'>"; 
		if (writingsSet[j].filename != "na") {
			frame += "<a href='documents/writings/" + writingsSet[j].filename + "'>";
			frame += "<b>''" + writingsSet[j].title + "</b>,'' ";
			frame += "</a>"
		}
		else {
			frame += "''<b>" + writingsSet[j].title + "</b>,'' ";
		}
		if (writingsSet[j].eds != "na") {
			frame += "eds." + writingsSet[j].eds + " ";
		}
		frame += "in <i>" + writingsSet[j].publication + "</i> ";
		if (writingsSet[j].year != "na") {
			frame += writingsSet[j].year + " ";
		}
		else {
			frame += "forthcoming" + " ";
		}
		if (writingsSet[j].pp != "na") {
			frame += "(" + writingsSet[j].pp + ") " + "</li>";
		}
	}
	return frame;
}

// build each section
recentFrame = createHTML(recentBib);
notsoFrame = createHTML(notsoBib);
wipFrame = createHTML(wipBib);

// write each section to the page
recentSection.innerHTML = recentFrame;
notsoSection.innerHTML = notsoFrame;
wipSection.innerHTML = wipFrame;