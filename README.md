---
title: Cocoa Conferences
description: List of cocoa conferences for iOS & macOS developers
---

<script type="text/javascript"> {% include conferences.js %} </script>

## All-English conferences for **Cocoa** developers.

### Cocoa-only

<div id="upcoming-cocoa"></div>
<script type="text/javascript">
	var now = new Date();
	var confs = conferences.filter(function(conf){ return now < conf.end && conf.cocoa == true });
	buildTable(document.getElementById("upcoming-cocoa"), confs, true);
</script>

### Related to Cocoa or Mobile in general

<div id="upcoming-general"></div>
<script type="text/javascript">
	var now = new Date();
	var confs = conferences.filter(function(conf){ return now < conf.end && conf.cocoa == false });
	buildTable(document.getElementById("upcoming-general"), confs, true);
</script>

## Past Conferences

### Cocoa-only

<div id="past-cocoa"></div>
<script type="text/javascript">
	var now = new Date();
	var confs = conferences.filter(function(conf){ return now > conf.end && conf.cocoa == true });
	buildTable(document.getElementById("past-cocoa"), confs, true);
</script>

### Related to Cocoa or Mobile in general

<div id="past-general"></div>
<script type="text/javascript">
	var now = new Date();
	var confs = conferences.filter(function(conf){ return now > conf.end && conf.cocoa == false });
	buildTable(document.getElementById("past-general"), confs, true);
</script>

### More

* A [Twitter list](https://twitter.com/NeoNacho/lists/cocoaconferences) with all the conferences made by [Boris Bügling](https://twitter.com/NeoNacho)

If you want to add a conference to this list or edit the info, send a **pull request**, [ping me on twitter](https://twitter.com/lascorbe) or get in touch at [luis@nsspain.com](mailto:luis@nsspain.com). Thank you!
