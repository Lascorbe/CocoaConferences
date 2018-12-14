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
	
	var sorted = conferences.sort(function(l,r){ if (l.end < r.end) { return true; } if (l.end > r.end) { return false; } return l.start < r.start; })
	var cocoa = sorted.filter(function(conf){ return now < conf.end && conf.cocoa == true });
	var general = sorted.filter(function(conf){ return now < conf.end && conf.cocoa == false });
	var pastCocoa = sorted.filter(function(conf){ return now > conf.end && conf.cocoa == true });
	var pastGeneral = sorted.filter(function(conf){ return now > conf.end && conf.cocoa == false });
	
	buildTable(document.getElementById("upcoming-cocoa"), cocoa, true);
	buildTable(document.getElementById("upcoming-general"), general, true);
	buildTable(document.getElementById("past-cocoa"), pastCocoa, true);
	buildTable(document.getElementById("past-general"), pastGeneral, true);
</script>