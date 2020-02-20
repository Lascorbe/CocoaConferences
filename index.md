---
title: Cocoa Conferences
description: List of all-English conferences for Cocoa (macOS, iOS, watchOS & tvOS) developers
---

You can download a 📆 Calendar (.ics) for:
- [All conferences here](api/all.ics)
- [Cocoa conferences here](api/cocoa.ics) 
- [Mobile conferences here](api/mobile.ics)

<div id="upcoming"></div>

## Past Conferences

<div id="past"></div>

### More

* A [Twitter list](https://twitter.com/NeoNacho/lists/cocoaconferences) with all the conferences made by [Boris Bügling](https://twitter.com/NeoNacho)

If you want to add a conference to this list or edit the info, please open a **PR (Pull Request)**. Thank you!

<script type="text/javascript"> 
const conferences = [
{% for conference in site.data.conferences %}
  {
    name: "{{ conference.name }}",
    link: {% if conference.link %} "{{ conference.link }}" {% else %} null {% endif %},
    location: {% if conference.location %} "{{ conference.location }}" {% else %} "TBA" {% endif %},
    cocoa: {% if conference.cocoa-only %} true {% else %} false {% endif %},
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

{% include helpers.js %} 

buildSections(conferences);

</script>
