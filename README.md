---
title: Cocoa Conferences
description: List of cocoa conferences for iOS & macOS developers
---

<script type="text/javascript"> {% include conferences.js %} </script>

## All-English conferences for **Cocoa** developers.

### Cocoa-only

<div id="upcoming-cocoa"></div>

### Related to Cocoa or Mobile in general

<div id="upcoming-general"></div>

## Past Conferences

### Cocoa-only

<div id="past-cocoa"></div>

### Related to Cocoa or Mobile in general

<div id="past-general"></div>

### More

* A [Twitter list](https://twitter.com/NeoNacho/lists/cocoaconferences) with all the conferences made by [Boris Bügling](https://twitter.com/NeoNacho)

If you want to add a conference to this list or edit the info, send a **pull request**, [ping me on twitter](https://twitter.com/lascorbe) or get in touch at [luis@nsspain.com](mailto:luis@nsspain.com). Thank you!


<script type="text/javascript">
	var now = new Date();
	var y = now.getYear();
	var m = now.getMonth();
	var d = now.getDay();
	
	var sorted = conferences.sort(function(l,r){ 
		if (l.end.year < r.end.year) { return true; }
		if (l.end.year > r.end.year) { return false; }
		if (l.end.month < r.end.month) { return true; }
		if (l.end.month > r.end.month) { return false;}
		if (l.end.day < r.end.day) { return true; }
		return false;
	});
	var cocoa = sorted.filter(function(conf){ return conf.cocoa === true });
	var general = sorted.filter(function(conf){ return conf.cocoa === false });
	
	var isUpcoming = function(conf) {
		if conf.end.year > y { return true; }
		if conf.end.year < y { return false; }
		if conf.end.month > m { return true; }
		if conf.end.month < m { return false; }
		return conf.end.day >= d;
	};
	var isPast = function(conf) { return isUpcoming(conf) == false; }
	
	var upcomingCocoa = cocoa.filter(isUpcoming);
	var upcomingGeneral = general.filter(isUpcoming);
	var pastCocoa = cocoa.filter(isPast);
	var pastGeneral = general.filter(isPast);
	
	buildTable(document.getElementById("upcoming-cocoa"), upcomingCocoa.reverse(), true);
	buildTable(document.getElementById("upcoming-general"), upcomingGeneral.reverse(), true);
	buildTable(document.getElementById("past-cocoa"), pastCocoa, true);
	buildTable(document.getElementById("past-general"), pastGeneral, true);
</script>