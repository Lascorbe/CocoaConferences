function buildTable(insideNode, confs, includeCFP) {
	const table = document.createElement("table");
	insideNode.appendChild(table);
	const thead = document.createElement("thead");
	table.appendChild(thead);
	const headRow = document.createElement("tr");
	thead.appendChild(headRow);
	
	const nameHead = document.createElement("th");
	nameHead.appendChild(document.createTextNode("Name"));
	headRow.appendChild(nameHead);
	const dateHead = document.createElement("th");
	dateHead.appendChild(document.createTextNode("Date"));
	headRow.appendChild(dateHead);
	const placeHead = document.createElement("th");
	placeHead.appendChild(document.createTextNode("Place"));
	headRow.appendChild(placeHead);

	if (includeCFP === true) {
		const cfpHead = document.createElement("th");
		cfpHead.appendChild(document.createTextNode("CFP Deadline"));
		headRow.appendChild(cfpHead);
	}
	
	const tbody = document.createElement("tbody");
	table.appendChild(tbody);
	
	for (var i = 0; i < confs.length; i++) {
		tbody.appendChild(buildRow(confs[i], includeCFP));
	}

}

const months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function buildRow(conference, includeCFP) {
	const tr = document.createElement("tr");
	
	const nameCell = document.createElement("td");
	const conferenceName = document.createTextNode(conference.name);
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
	
	const dateNode = document.createElement("td");
	const start = conference.start;
	const end = conference.end;
	var dateString = "";
	if (start === null || end === null) {
		dateString = "TBA";
	} else if (start.year === end.year && start.month === end.month && start.day === end.day) {
		// 1-day conference
		dateString = months[start.month] + " " + start.day + ", " + start.year;
	} else if (start.month !== end.month) {
		// conference spans the end of a month
		const startString = months[start.month] + " " + start.day;
		const endString = months[end.month] + " " + end.day + ", " + end.year;
		dateString = startString + " – " + endString;
	} else {
		// multi-day conference, all within a single month
		dateString = months[start.month] + " " + start.day + "–" + end.day + ", " + end.year;
	}
	const strong = document.createElement("strong");
	strong.appendChild(document.createTextNode(dateString));
	dateNode.appendChild(strong);
	tr.appendChild(dateNode);
	
	const placeNode = document.createElement("td");
	if (conference.location === null || conference.location.length == 0) {
		placeNode.appendChild(document.createTextNode("TBA"));
	} else {
		placeNode.appendChild(document.createTextNode(conference.location));
	}
	tr.appendChild(placeNode);
	
	if (includeCFP === true) {
		const cfpNode = document.createElement("td");
		
		var cfpLink = null;
		var cfpDeadline = null;
		if (conference.cfp !== null && conference.cfp !== undefined) {
			cfpLink = conference.cfp.link;
			cfpDeadline = conference.cfp.deadline;
		}
		
		var hasLink = (cfpLink !== null && cfpLink !== undefined);
		
		var textNode = null;
		
		if (cfpDeadline !== null && cfpDeadline !== undefined) {
			const today = new Date();
			
			const year = today.getFullYear(); 
			const dYear = cfpDeadline.year;
			
			const month = today.getMonth() + 1; 
			const dMonth = cfpDeadline.month;
			
			const day = today.getDate(); 
			const dDay = cfpDeadline.day;
			
			var deadlineHasPassed = false;
			if (year > dYear) {
				deadlineHasPassed = true;
			} else if (year == dYear && month > dMonth) {
				deadlineHasPassed = true;
			} else if (year == dYear && month == dMonth && day > dDay) {
				deadlineHasPassed = true;
			}
			
			const text = months[cfpDeadline.month] + " " + cfpDeadline.day + ", " + cfpDeadline.year;
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
			const link = document.createElement("a");
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