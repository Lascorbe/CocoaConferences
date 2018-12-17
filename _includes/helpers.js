function buildTable(insideNode, confs, includeCFP) {
	var table = document.createElement("table");
	insideNode.appendChild(table);
	var thead = document.createElement("thead");
	table.appendChild(thead);
	var headRow = document.createElement("tr");
	thead.appendChild(headRow);
	
	var nameHead = document.createElement("th");
	nameHead.appendChild(document.createTextNode("Name"));
	headRow.appendChild(nameHead);
	var dateHead = document.createElement("th");
	dateHead.appendChild(document.createTextNode("Date"));
	headRow.appendChild(dateHead);
	var placeHead = document.createElement("th");
	placeHead.appendChild(document.createTextNode("Place"));
	headRow.appendChild(placeHead);

	if (includeCFP === true) {
		var cfpHead = document.createElement("th");
		cfpHead.appendChild(document.createTextNode("CFP Deadline"));
		headRow.appendChild(cfpHead);
	}
	
	var tbody = document.createElement("tbody");
	table.appendChild(tbody);
	
	for (var i = 0; i < confs.length; i++) {
		tbody.appendChild(buildRow(confs[i], includeCFP));
	}

}

var months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function buildRow(conference, includeCFP) {
	var tr = document.createElement("tr");
	
	var nameCell = document.createElement("td");
	var conferenceName = document.createTextNode(conference.name);
	if (conference.link !== null) {
		var linkNode = document.createElement("a");
		linkNode.setAttribute("href", conference.link);
		linkNode.setAttribute("title", conference.name);
		linkNode.appendChild(conferenceName);
		nameCell.appendChild(linkNode);
	} else {
		nameCell.appendChild(conferenceName);
	}
	tr.appendChild(nameCell);
	
	var dateNode = document.createElement("td");
	var start = conference.start;
	var end = conference.end;
	var dateString = "";
	if (start.year === null || end.year === null) {
		dateString = "TBA";
	} else if (start.year === end.year && start.month === end.month && start.day === end.day) {
		// 1-day conference
		dateString = months[start.month] + " " + start.day + ", " + start.year;
	} else  if (start.month !== end.month) {
		// conference spans the end of a month
		var startString = months[start.month] + " " + start.day;
		var endString = months[end.month] + " " + end.day + ", " + end.year;
		dateString = startString + " – " + endString;
	} else {
		// multi-day conference, all within a single month
		dateString = months[start.month] + " " + start.day + "–" + end.day + ", " + end.year;
		
	}
	var strong = document.createElement("strong");
	strong.appendChild(document.createTextNode(dateString));
	dateNode.appendChild(strong);
	tr.appendChild(dateNode);
	
	var placeNode = document.createElement("td");
	if (conference.location === null || conference.location.length == 0) {
		placeNode.appendChild(document.createTextNode("TBA"));
	} else {
		placeNode.appendChild(document.createTextNode(conference.location));
	}
	tr.appendChild(placeNode);
	
	if (includeCFP === true) {
		var cfpNode = document.createElement("td");
		
		var cfpLink = null;
		var cfpDeadline = null;
		if (conference.cfp !== null && conference.cfp !== undefined) {
			cfpLink = conference.cfp.link;
			cfpDeadline = conference.cfp.deadline;
		}
		
		var hasLink = (cfpLink !== null && cfpLink !== undefined);
		
		var textNode = null;
		
		if (cfpDeadline !== null && cfpDeadline !== undefined) {
			var today = new Date();
			var year = today.getFullYear(); var dYear = cfpDeadline.year;
			var month = today.getMonth() + 1; var dMonth = cfpDeadline.month;
			var day = today.getDay(); var dDay = cfpDeadline.day;
			
			var deadlineHasPassed = false;
			if (year > dYear) {
				deadlineHasPassed = true;
			} else if (year == dYear && month > dMonth) {
				deadlineHasPassed = true;
			} else if (year == dYear && month == dMonth && day > dDay) {
				deadlineHasPassed = true;
			}
			
			var text = months[cfpDeadline.month] + " " + cfpDeadline.day + ", " + cfpDeadline.year;
			var node = document.createTextNode(text);
			
			if (deadlineHasPassed) {
				var strike = document.createElement("del");
				strike.appendChild(node);
				textNode = strike;
			} else {
				textNode = node;
			}
		} else if (hasLink === true) {
			textNode = document.createTextNode("Deadline not specified");
		} else {
			textNode = document.createTextNode("See website for details");
		}
		
		if (hasLink === true) {
			// link
			var link = document.createElement("a");
			link.setAttribute("href", cfpLink);
			link.appendChild(textNode);
			cfpNode.appendChild(link);
		} else {
			// no link
			cfpNode.appendChild(textNode);
		}
		tr.appendChild(cfpNode);
	}
	
	return tr;
}