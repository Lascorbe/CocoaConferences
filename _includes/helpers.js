function sortUpcoming(l, r) {
    // -1 = before, 0 = same, 1 = after
    if (l.end === null) { return 1; }
    if (r.end === null) { return -1; }
    
    // figure out which one starts first
    // that should go first
    if (l.start.year < r.start.year) { return -1; }
    if (l.start.year > r.start.year) { return 1; }
    
    if (l.start.month < r.start.month) { return -1; }
    if (l.start.month > r.start.month) { return 1; }
    
    if (l.start.day < r.start.day) { return -1; }
    if (l.start.day > r.start.day) { return 1; }
    
    // figure out which one is LONGEST (ie, it ends AFTER)
    // the longest one should go first
    
    if (l.end.year > r.end.year) { return -1; }
    if (l.end.year < r.end.year) { return 1; }
    
    if (l.end.month > r.end.month) { return -1; }
    if (l.end.month < r.end.month) { return 1; }
    
    if (l.end.day > r.end.day) { return -1; }
    if (l.end.day < r.end.day) { return 1; }
    
    // these two conferences both start and end on the same day
    // sort them alphabetically (case insensitive)
    
    const lName = l.name.toLowerCase();
    const rName = r.name.toLowerCase();
    if (lName < rName) { return -1; }
    if (lName > rName) { return 1; }
    
    return 0;
}

function sortPast(l, r) {
    // -1 = before, 0 = same, 1 = after
    
    // for conferences that have past, we want the most recent and longest ones *first*
    
    if (r.end === null) { return -1; }
    if (l.end === null) { return 1; }
    
    if (l.end.year > r.end.year) { return -1; }
    if (l.end.year < r.end.year) { return 1; }
    
    if (l.end.month > r.end.month) { return -1; }
    if (l.end.month < r.end.month) { return 1; }
    
    if (l.end.day > r.end.day) { return -1; }
    if (l.end.day < r.end.day) { return 1; }
    
    // these conferences end on the same day. now sort them by when they started
    // we want the most-recently-started on first
    
    if (l.start.year > r.start.year) { return -1; }
    if (l.start.year < r.start.year) { return 1; }
    
    if (l.start.month > r.start.month) { return -1; }
    if (l.start.month < r.start.month) { return 1; }
    
    if (l.start.day > r.start.day) { return -1; }
    if (l.start.day < r.start.day) { return 1; }
    
    // these two conferences both start and end on the same day
    // sort them alphabetically (case insensitive)
    
    const lName = l.name.toLowerCase();
    const rName = r.name.toLowerCase();
    if (lName < rName) { return -1; }
    if (lName > rName) { return 1; }
    
    return 0;
}

function buildSections(conferences) {
    const now = new Date();
    const y = now.getFullYear();
    const m = now.getMonth() + 1;
    const d = now.getDate();
    
    const isUpcoming = function(conf) {
        if (conf.end === null) { return true; }
        if (conf.end.year > y) { return true; }
        if (conf.end.year < y) { return false; }
        if (conf.end.month > m) { return true; }
        if (conf.end.month < m) { return false; }
        return conf.end.day >= d;
    };
    const isPast = function(conf) { return isUpcoming(conf) === false; }

    const isCocoa = function(conf) { return conf.cocoa === true };
    const isGeneral = function(conf) { return isCocoa(conf) === false };


    const upcoming = conferences.filter(isUpcoming);
    const past = conferences.filter(isPast);
    
    const upcomingCocoa = upcoming.filter(isCocoa).sort(sortUpcoming);
    buildSection(true, true, upcomingCocoa);
    
    const upcomingGeneral = upcoming.filter(isGeneral).sort(sortUpcoming);
    buildSection(false, true, upcomingGeneral);
    
    const pastCocoa = past.filter(isCocoa).sort(sortPast);
    buildSection(true, false, pastCocoa);
    
    const pastGeneral = past.filter(isGeneral).sort(sortPast);
    buildSection(false, false, pastGeneral);
}

function buildSection(cocoa, upcoming, confs) {
    const nodeId = (upcoming === true ? "upcoming" : "past");
    const node = document.getElementById(nodeId);
    
    const h3 = document.createElement("h3");
    const headerId = nodeId + "-" + (cocoa === true ? "cocoa" : "general");
    h3.setAttribute("id", headerId);
    
    const count = confs.length;
    var formattedCount = count.toString();
    var formattedConference = "Conferences";
    if (count === 0) { formattedCount = "No"; }
    if (count === 1) { formattedConference = "Conference"; }
    
    const tense = (upcoming === true) ? "Upcoming" : "Past";
    const category = (cocoa === true) ? "Cocoa-Only" : "Mobile Development"
    
    h3.appendChild(document.createTextNode(formattedCount + " " + tense + " "));
    const strong = document.createElement("strong");
    strong.appendChild(document.createTextNode(category));
    h3.appendChild(strong);
    h3.appendChild(document.createTextNode(" " + formattedConference));
    node.appendChild(h3);
    
    buildTable(node, confs, upcoming);
    
}

function buildTable(insideNode, confs, includeCFP) {
    if (confs.length === 0) {
        const none = "No conferences";
        const node = document.createTextNode(none);
        insideNode.appendChild(node);
        return;
    }

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
    
    var nameContents;
    if (conference.link !== null) {
        var linkNode = document.createElement("a");
        linkNode.setAttribute("href", conference.link);
        linkNode.setAttribute("title", conference.name);
        linkNode.appendChild(document.createTextNode(conference.name));
        nameContents = linkNode;
    } else {
    	nameContents = document.createTextNode(conference.name);
    }
    const nameCell = document.createElement("td");
    nameCell.appendChild(checkForCancellation(conference, nameContents));
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
    dateNode.appendChild(checkForCancellation(conference, strong));
    tr.appendChild(dateNode);
    
    const placeNode = document.createElement("td");
    var placeContents;
    if (conference.location === null || conference.location.length == 0) {
    	placeContents = document.createTextNode("TBA");
    } else {
    	placeContents = document.createTextNode(conference.location);
    }
	placeNode.appendChild(checkForCancellation(conference, placeContents));
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
        
        if (conference.cancelled === true) {
        	cfpNode.appendChild(document.createTextNode("(Cancelled)"));
        } else {
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
				textNode = document.createTextNode("No information; see website for details");
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
		}
        tr.appendChild(cfpNode);
    }
    
    return tr;
}

function checkForCancellation(conference, node) {
	if (conference.cancelled !== true) {
		return node;
	}
	
	const wrapper = document.createElement("span");
	
	const strike = document.createElement("s");
	strike.appendChild(node);
	
	wrapper.appendChild(strike);
	wrapper.appendChild(document.createTextNode(" (Cancelled)"));
	return wrapper;
}
