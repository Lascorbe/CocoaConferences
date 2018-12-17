---
title: Cocoa Conferences
description: List of cocoa conferences for iOS & macOS developers
---


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
var conferences = [
{% for conference in site.data.conferences %}
  {
    name: "{{ conference.name }}",
    link: {% if conference.link %} "{{ conference.link }}" {% else %} null {% endif %},
    location: {% if conference.location %} "{{ conference.location }}" {% else %} "TBA" {% endif %},
    cocoa: {% if conference.cocoa %} true {% else %} false {% endif %},
    {% if conference.start %}
		{% assign start = conference.start | split: "-" %}
    	start: { year: {{ start[0] }}, month: {{ start[1] }}, day: {{ start[2] }} },
    	{% if conference.end %}
			{% assign end = conference.end | split: "-" %}
		    end: { year: {{ end[0] }}, month: {{ end[1] }}, day: {{ end[2] }} },
    	{% else %}
	    end: { year: {{ start[0] }}, month: {{ start[1] }}, day: {{ start[2] }} },
    	{% endif %}
    {% else %}
	    start: null,
	    end: null,
    {% endif %}
    cfp: {
      {% if conference.cfp.link %}
     	 link: "{{ conference.cfp.link }}",
      {% else %}
   	   link: null,
      {% endif %}
      {% if conference.cfp.deadline %}
        {% assign dead = conference.cfp.deadline | split: "-" %}
    	  deadline: { year: {{ dead[0] }}, month: {{ dead[1] }}, day: {{ dead[2] }} }
      {% else %}
    	  deadline: null
      {% endif %}
    }
  },
{% endfor %}
];

</script>
<script type="text/javascript"> {% include helpers.js %} </script>

<script type="text/javascript">
	var now = new Date();
	var y = now.getFullYear();
	var m = now.getMonth() + 1;
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
		if (conf.end.year > y) { return true; }
		if (conf.end.year < y) { return false; }
		if (conf.end.month > m) { return true; }
		if (conf.end.month < m) { return false; }
		return conf.end.day >= d;
	};
	var isPast = function(conf) { return isUpcoming(conf) === false; }
	
	var upcomingCocoa = cocoa.filter(isUpcoming);
	var upcomingGeneral = general.filter(isUpcoming);
	var pastCocoa = cocoa.filter(isPast);
	var pastGeneral = general.filter(isPast);
	
	buildTable(document.getElementById("upcoming-cocoa"), upcomingCocoa.reverse(), true);
	buildTable(document.getElementById("upcoming-general"), upcomingGeneral.reverse(), true);
	buildTable(document.getElementById("past-cocoa"), pastCocoa, false);
	buildTable(document.getElementById("past-general"), pastGeneral, false);
</script>