var conferences = [
	{
		"name": "iOS Conf SG",
		"link": "http://iosconf.sg/",
		"start": new Date("2019-01-18"),
		"end": new Date("2019-01-19"),
		"location": "🇸🇬 Singapore, Singapore",
		"cocoa": true,
		"cfp": {
			"link": "https://www.papercall.io/iosconfsg",
			"deadline": new Date("2018-10-15")
		}
	},
	{
		"name": "dotSwift",
		"link": "https://www.dotswift.io",
		"start": new Date("2019-01-28"),
		"end": new Date("2019-01-28"),
		"location": "🇫🇷 Paris, France",
		"cocoa": true,
		"cfp": {
			"link": "https://goo.gl/forms/T4Z7rTy2RxfhUebd2",
			"deadline": null
		}
	},
	{
		"name": "Appdevcon",
		"link": "https://appdevcon.nl",
		"start": new Date("2019-03-12"),
		"end": new Date("2019-03-15"),
		"location": "🇳🇱 Amsterdam, The Netherlands",
		"cocoa": true,
		"cfp": {
			"link": "https://appdevcon.nl/the-call-for-presentations-for-appdevcon-2019-is-now-open/",
			"deadline": new Date("2018-12-21")
		}
	},
	{
		"name": "iOSCon 2019",
		"link": "http://ioscon.co.uk",
		"start": new Date("2019-03-21"),
		"end": new Date("2019-03-22"),
		"location": "🇬🇧 London, UK",
		"cocoa": true,
		"cfp": {
			"link": "https://skillsmatter.com/conferences/10823-ioscon-2019-the-conference-for-ios-and-swift-developers#get_involved",
			"deadline": new Date("2018-11-26")
		}
	},
	{
		"name": "trySwift! Tokyo 2019",
		"link": "https://www.tryswift.co/events/2019/tokyo/en/",
		"start": new Date("2019-03-21"),
		"end": new Date("2019-03-22"),
		"location": "🇯🇵 Tokyo, Japan",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "NSNorth",
		"link": "http://nsnorth.ca/",
		"start": new Date("2019-04-26"),
		"end": new Date("2019-04-28"),
		"location": "🇨🇦 Toronto, Canada",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "UIKonf",
		"link": "https://uikonf.com",
		"start": new Date("2019-05-26"),
		"end": new Date("2019-05-29"),
		"location": "🇩🇪 Berlin, Germany",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Mobile Era",
		"link": "https://mobileera.rocks/",
		"start": new Date("2018-11-01"),
		"end": new Date("2018-11-02"),
		"location": "🇳🇴 Oslo, Norway",
		"cocoa": false,
		"cfp": {
			"link": "https://docs.google.com/forms/d/e/1FAIpQLSeaoGqR9lG0nJeKGdms9FhkdL8zz4aQ6hNRL1mzp3vZU1fb9Q/viewform",
			"deadline": new Date("2018-05-31")
		}
	},
	{
		"name": "DevFest Baltics",
		"link": "https://devfest.gdg.lv/",
		"start": new Date("2018-11-16"),
		"end": new Date("2018-11-16"),
		"location": "🇱🇻 Jurmala, Latvia",
		"cocoa": false,
		"cfp": {
			"link": "https://www.papercall.io/devfest-baltics-18",
			"deadline": new Date("2018-06-29")
		}
	},
	{
		"name": "Functional Swift Conference 2018",
		"link": "http://2018.funswiftconf.com",
		"start": new Date("2018-12-01"),
		"end": new Date("2018-12-01"),
		"location": "🇺🇸 New York, NY",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "CodeMobile",
		"link": "http://www.codemobile.co.uk/",
		"start": new Date("2019-04-01"),
		"end": new Date("2018-04-04"),
		"location": "🇬🇧 Chester, UK",
		"cocoa": false,
		"cfp": {
			"link": "http://www.codemobile.co.uk/call-for-speakers/",
			"deadline": new Date("2018-10-31")
		}
	},
	{
		"name": "App Builders",
		"link": "https://appbuilders.ch/",
		"start": new Date("2019-04-29"),
		"end": new Date("2018-04-30"),
		"location": "🇨🇭 Lugano, Switzerland",
		"cocoa": false,
		"cfp": {
			"link": "https://docs.google.com/forms/d/1nC_NO7zQoYjldBIgcgmc47qgbTxHZrcIur-uQlOu-sA/",
			"deadline": new Date("2019-01-12")
		}
	},
	{
		"name": "ADDC - App Design & Development Conference",
		"link": "https://addconf.com/",
		"start": new Date("2019-06-26"),
		"end": new Date("2018-06-28"),
		"location": "🇪🇸 Barcelona, Spain",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "Swipe Conference",
		"link": "http://swipeconference.com.au/",
		"start": new Date("2012-09-05"),
		"end": new Date("2012-09-07"),
		"location": "🇦🇺 Sydney, Australia",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Objective-Cologne",
		"link": "http://lanyrd.com/2012/objcgn/",
		"start": new Date("2012-09-11"),
		"end": new Date("2012-09-12"),
		"location": "🇩🇪 Cologne, Germany",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "CocoaConf Portland",
		"link": "http://cocoaconf.com/portland-2013/home",
		"start": new Date("2013-08-15"),
		"end": new Date("2013-08-16"),
		"location": "🇺🇸 Portland, OR, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Objective-Cologne",
		"link": "http://lanyrd.com/2013/objcgn/",
		"start": new Date("2013-09-17"),
		"end": new Date("2013-09-19"),
		"location": "🇩🇪 Cologne, Germany",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Alt Tech Talks Berlin",
		"link": "http://www.alt-tech-talks.com",
		"start": new Date("2013-12-11"),
		"end": new Date("2013-12-11"),
		"location": "🇩🇪 Berlin, Germany",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Alt Tech Talks London",
		"link": "http://www.alttechtalks.com",
		"start": new Date("2013-12-16"),
		"end": new Date("2013-12-16"),
		"location": "🇬🇧 London, UK",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Renaissance",
		"link": "http://renaissance.io/2014",
		"start": new Date("2014-01-29"),
		"end": new Date("2014-01-31"),
		"location": "🇺🇸 San Francisco, CA, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "CocoaConf Raleigh",
		"link": "http://cocoaconf.com/raleigh-2014/home",
		"start": new Date("2014-05-09"),
		"end": new Date("2014-05-10"),
		"location": "🇺🇸 Raleigh, NC, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "FruitConf",
		"link": "http://fruitconf.co/",
		"start": new Date("2014-06-12"),
		"end": new Date("2014-06-13"),
		"location": "🇬🇧 London, UK",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "iOSDevCampDC",
		"link": "http://iosdevcampdc.com/",
		"start": new Date("2014-08-01"),
		"end": new Date("2014-08-01"),
		"location": "🇺🇸 Tysons Corner, VA, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "CocoaConf Columbus",
		"link": "http://cocoaconf.com/columbus-2014/home",
		"start": new Date("2014-08-08"),
		"end": new Date("2014-08-09"),
		"location": "🇺🇸 Columbus, OH, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "A Swift Start",
		"link": "http://aswiftstart.com/",
		"start": new Date("2014-08-29"),
		"end": new Date("2014-08-29"),
		"location": "🇺🇸 New York City, NY, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "CocoaConf Las Vegas",
		"link": "http://cocoaconf.com/lasvegas-2014/home",
		"start": new Date("2014-09-19"),
		"end": new Date("2014-09-20"),
		"location": "🇺🇸 Las Vegas, NV, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Command R",
		"link": "http://cmdrconf.com",
		"start": new Date("2014-10-22"),
		"end": new Date("2014-10-24"),
		"location": "🇬🇧 London, UK",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "CocoaConf Boston",
		"link": "http://cocoaconf.com/boston-2014/home",
		"start": new Date("2014-11-14"),
		"end": new Date("2014-11-15"),
		"location": "🇺🇸 Boston, MA, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "CocoaConf Atlanta",
		"link": "http://cocoaconf.com/atlanta-2014/home",
		"start": new Date("2014-12-05"),
		"end": new Date("2014-12-06"),
		"location": "🇺🇸 Atlanta, GA, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "NSConference",
		"link": "http://nsconference.com/",
		"start": new Date("2015-03-16"),
		"end": new Date("2015-03-18"),
		"location": "🇬🇧 Leicester, UK",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "CocoaConf Washington DC",
		"link": "http://cocoaconf.com/dc-2015/home",
		"start": new Date("2015-04-10"),
		"end": new Date("2015-04-11"),
		"location": "🇺🇸 Washington DC, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "CocoaConf PDX",
		"link": "http://cocoaconf.com/portland-2015/home",
		"start": new Date("2015-05-08"),
		"end": new Date("2015-05-09"),
		"location": "🇺🇸 Portland, OR, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Swift Conf / Objective-Cologne",
		"link": "http://www.objcgn.com/",
		"start": new Date("2015-06-23"),
		"end": new Date("2015-06-25"),
		"location": "🇩🇪 Cologne, Germany",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "/dev/world",
		"link": "http://2015.devworld.com.au/",
		"start": new Date("2015-08-31"),
		"end": new Date("2015-09-01"),
		"location": "🇦🇺 Melbourne, Australia",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "NSScotland",
		"link": "http://nsscotland.com/",
		"start": new Date("2015-10-23"),
		"end": new Date("2015-10-25"),
		"location": "🇬🇧 Edinburgh, UK",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "MacTechConf",
		"link": "http://mactech.com/conference",
		"start": new Date("2015-11-04"),
		"end": new Date("2015-11-06"),
		"location": "🇺🇸 Los Angeles, CA, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "@Swift",
		"link": "http://atswift.io/index-en.html",
		"start": new Date("2016-01-10"),
		"end": new Date("2016-01-10"),
		"location": "🇨🇳 Beijing, China",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "SwiftAveiro",
		"link": "https://attending.io/events/swiftaveiro/",
		"start": new Date("2016-03-20"),
		"end": new Date("2016-03-20"),
		"location": "🇵🇹 Aveiro, Portugal",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "CocoaConf Chicago",
		"link": "http://cocoaconf.com/chicago-2016/home",
		"start": new Date("2016-03-25"),
		"end": new Date("2016-03-26"),
		"location": "🇺🇸 Chicago, IL, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "iOS Remote Conf",
		"link": "https://allremoteconfs.com/ios-2016",
		"start": new Date("2016-04-13"),
		"end": new Date("2016-04-01"),
		"location": "Remote",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "CocoaConf Austin",
		"link": "http://cocoaconf.com/austin-2016/home",
		"start": new Date("2016-04-15"),
		"end": new Date("2016-04-16"),
		"location": "🇺🇸 Austin, TX, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "NSNorth",
		"link": "http://nsnorth.ca/",
		"start": new Date("2016-04-28"),
		"end": new Date("2016-04-30"),
		"location": "🇨🇦 Toronto, Canada",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "CocoaConf Seattle",
		"link": "http://cocoaconf.com/seattle-2016/home",
		"start": new Date("2016-05-06"),
		"end": new Date("2016-05-07"),
		"location": "🇺🇸 Seattle, WA, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "AltConf",
		"link": "http://altconf.com/",
		"start": new Date("2016-06-13"),
		"end": new Date("2016-06-17"),
		"location": "🇺🇸 San Francisco, CA, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "WWDC",
		"link": "https://developer.apple.com/wwdc/",
		"start": new Date("2016-06-13"),
		"end": new Date("2016-06-17"),
		"location": "🇺🇸 San Francisco, CA, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Swift With The Best",
		"link": "http://swift.withthebest.com",
		"start": new Date("2016-06-25"),
		"end": new Date("2016-06-25"),
		"location": "Online",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "CMD+U Conference",
		"link": "http://cmduconf.com",
		"start": new Date("2016-07-08"),
		"end": new Date("2016-07-08"),
		"location": "🇪🇸 Barcelona, Spain",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "JailbreakCon",
		"link": "http://www.jailbreakcon.com/",
		"start": new Date("2016-07-09"),
		"end": new Date("2016-07-10"),
		"location": "🇺🇸 San Francisco, CA, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Forward Swift",
		"link": "http://forwardswift.com",
		"start": new Date("2016-07-25"),
		"end": new Date("2016-07-31"),
		"location": "🇺🇸 San Francisco, California",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "360|iDev",
		"link": "http://360idev.com/",
		"start": new Date("2016-08-21"),
		"end": new Date("2016-08-24"),
		"location": "🇺🇸 Denver, CO, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "try! Swift NYC",
		"link": "http://www.tryswiftnyc.com",
		"start": new Date("2016-09-01"),
		"end": new Date("2016-09-02"),
		"location": "🇺🇸 New York City, NY, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "iOS Dev UK",
		"link": "http://www.iosdevuk.com/",
		"start": new Date("2016-09-05"),
		"end": new Date("2016-09-08"),
		"location": "🇬🇧 Aberystwyth, UK",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Swift Conf",
		"link": "http://www.swiftconf.com/",
		"start": new Date("2016-09-07"),
		"end": new Date("2016-09-08"),
		"location": "🇩🇪 Cologne, Germany",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "CocoaConf DC",
		"link": "http://cocoaconf.com/dc-2016/home",
		"start": new Date("2016-09-09"),
		"end": new Date("2016-09-10"),
		"location": "🇺🇸 Herndon, VA, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Functional Swift Conference",
		"link": "http://2016.funswiftconf.com",
		"start": new Date("2016-10-01"),
		"end": new Date("2016-10-02"),
		"location": "🇭🇺 Budapest, Hungary",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Pragma Conference",
		"link": "http://pragmaconference.com",
		"start": new Date("2016-10-12"),
		"end": new Date("2016-10-14"),
		"location": "🇮🇹 Verona, Italy",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "CocoaLove",
		"link": "http://cocoalove.org",
		"start": new Date("2016-10-14"),
		"end": new Date("2016-10-16"),
		"location": "🇺🇸 Philadelphia, PA, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "iOS Conf SG",
		"link": "http://iosconf.sg",
		"start": new Date("2016-10-20"),
		"end": new Date("2016-10-21"),
		"location": "🇸🇬 Singapore, Singapore",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "CocoaConf San Jose",
		"link": "http://cocoaconf.com/sanjose-2016/home",
		"start": new Date("2016-11-04"),
		"end": new Date("2016-11-05"),
		"location": "🇺🇸 San Jose, CA, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Swift Summit",
		"link": "http://www.swiftsummit.com",
		"start": new Date("2016-11-07"),
		"end": new Date("2016-11-08"),
		"location": "🇺🇸 San Francisco, CA, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Swift alps",
		"link": "http://theswiftalps.com/",
		"start": new Date("2016-11-10"),
		"end": new Date("2016-11-11"),
		"location": "🇨🇭 Crans-Montana, Switzerland",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "do {iOS}",
		"link": "http://do-ios.com/",
		"start": new Date("2016-11-15"),
		"end": new Date("2016-11-16"),
		"location": "🇳🇱 Amsterdam, The Netherlands",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "dot Swift",
		"link": "http://www.dotswift.io",
		"start": new Date("2017-01-27"),
		"end": new Date("2017-01-27"),
		"location": "🇫🇷 Paris, France",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Playgrounds",
		"link": "http://www.playgroundscon.com",
		"start": new Date("2017-02-23"),
		"end": new Date("2017-02-24"),
		"location": "🇦🇺 Melbourne, Australia",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Forward Swift",
		"link": "http://forwardswift.com",
		"start": new Date("2017-02-25"),
		"end": new Date("2017-03-04"),
		"location": "🇺🇸 San Francisco, CA, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "try! Swift Tokyo",
		"link": "https://www.tryswift.co/tokyo/en",
		"start": new Date("2017-03-02"),
		"end": new Date("2017-03-04"),
		"location": "🇯🇵 Tokyo, Japan",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "CocoaConf Yosemite",
		"link": "http://cocoaconf.com/yosemite",
		"start": new Date("2017-03-20"),
		"end": new Date("2017-03-23"),
		"location": "🇺🇸 Yosemite National Park, CA, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "iOSCon 2017",
		"link": "https://skillsmatter.com/conferences/8180-ioscon-2017-the-conference-for-ios-and-swift-developers",
		"start": new Date("2017-03-30"),
		"end": new Date("2017-03-31"),
		"location": "🇬🇧 London, UK",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "RWDevCon",
		"link": "http://www.rwdevcon.com/",
		"start": new Date("2017-03-30"),
		"end": new Date("2017-04-01"),
		"location": "🇺🇸 Washington DC, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Functional Swift Conference",
		"link": "http://2017.funswiftconf.com/",
		"start": new Date("2017-04-15"),
		"end": new Date("2017-04-15"),
		"location": "🇺🇸 New York, NY, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Code Mobile",
		"link": "http://www.codemobile.co.uk",
		"start": new Date("2017-04-17"),
		"end": new Date("2017-04-20"),
		"location": "🇬🇧 Chester, UK",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "UIKonf",
		"link": "http://www.uikonf.com/",
		"start": new Date("2017-05-14"),
		"end": new Date("2017-05-17"),
		"location": "🇩🇪 Berlin, Germany",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "SwiftAveiro",
		"link": "http://swiftaveiro.xyz/",
		"start": new Date("2017-06-01"),
		"end": new Date("2017-06-02"),
		"location": "🇵🇹 Aveiro, Portugal",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "WWDC",
		"link": "https://developer.apple.com/wwdc/",
		"start": new Date("2017-06-05"),
		"end": new Date("2017-06-09"),
		"location": "🇺🇸 San Jose, CA, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "AltConf",
		"link": "http://altconf.com/",
		"start": new Date("2017-06-05"),
		"end": new Date("2017-06-08"),
		"location": "🇺🇸 San Jose, CA, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "360iDev",
		"link": "http://360idev.com/",
		"start": new Date("2017-08-13"),
		"end": new Date("2017-08-16"),
		"location": "🇺🇸 Denver, CO, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "iOSDevUK",
		"link": "http://www.iosdevuk.com/",
		"start": new Date("2017-09-04"),
		"end": new Date("2017-09-07"),
		"location": "🇬🇧 Aberystwyth, UK",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "try! Swift New York",
		"link": "https://www.tryswift.co/events/2017/nyc",
		"start": new Date("2017-09-05"),
		"end": new Date("2017-09-06"),
		"location": "🇺🇸 New York City, NY, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "SwiftConf",
		"link": "http://www.swiftconf.com/",
		"start": new Date("2017-09-06"),
		"end": new Date("2017-09-07"),
		"location": "🇩🇪 Cologne, Germany",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "NSSpain",
		"link": "http://nsspain.com/",
		"start": new Date("2017-09-13"),
		"end": new Date("2017-09-15"),
		"location": "🇪🇸 Logroño, Spain",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "FrenchKit",
		"link": "http://frenchkit.fr/",
		"start": new Date("2017-09-22"),
		"end": new Date("2017-09-23"),
		"location": "🇫🇷 Paris, France",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Functional Swift Conference Fall 2017",
		"link": "http://www.funswiftconf.com",
		"start": new Date("2017-09-30"),
		"end": new Date("2017-09-30"),
		"location": "🇩🇪 Berlin, Germany",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Swift Cloud Workshop 2",
		"link": "https://www.swiftcloudwork.shop",
		"start": new Date("2017-09-30"),
		"end": new Date("2017-09-30"),
		"location": "🇺🇸 Austin, TX, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Pragma Conference",
		"link": "http://pragmaconference.com",
		"start": new Date("2017-10-11"),
		"end": new Date("2017-10-13"),
		"location": "🇮🇹 Verona, Italy",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "iOS Conf SG",
		"link": "http://iosconf.sg",
		"start": new Date("2017-10-19"),
		"end": new Date("2017-10-20"),
		"location": "🇸🇬 Singapore, Singapore",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Swift by NorthWest",
		"link": "https://swiftbynorthwest.com/",
		"start": new Date("2017-10-27"),
		"end": new Date("2017-10-28"),
		"location": "🇺🇸 Seattle, WA, USA ",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Swift Summit",
		"link": "https://www.swiftsummit.com/",
		"start": new Date("2017-10-30"),
		"end": new Date("2017-10-31"),
		"location": "🇺🇸 San Francisco, CA, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "try! Swift India",
		"link": "https://www.tryswift.co/events/2017/bangalore",
		"start": new Date("2017-11-18"),
		"end": new Date("2017-11-19"),
		"location": "🇮🇳 Bangalore, India",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Swift Alps",
		"link": "http://theswiftalps.com/",
		"start": new Date("2017-11-23"),
		"end": new Date("2017-11-24"),
		"location": "🇨🇭 Crans-Montana, Switzerland",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "dot Swift",
		"link": "https://2018.dotswift.io/",
		"start": new Date("2018-01-29"),
		"end": new Date("2018-01-29"),
		"location": "🇫🇷 Paris, France",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "try! Swift Tokyo",
		"link": "https://www.tryswift.co/events/2018/tokyo/en/",
		"start": new Date("2018-03-01"),
		"end": new Date("2018-03-03"),
		"location": "🇯🇵 Tokyo, Japan",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Teki Con",
		"link": "https://teki-con.com/",
		"start": new Date("2018-03-12"),
		"end": new Date("2018-03-14"),
		"location": "🇺🇸 Atlanta, GA, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "iOSCon 2018",
		"link": "https://skillsmatter.com/conferences/9319-ioscon-2018-the-conference-for-ios-and-swift-developers",
		"start": new Date("2018-03-22"),
		"end": new Date("2018-03-23"),
		"location": "🇬🇧 London, UK",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "RWDevCon 2018",
		"link": "https://www.rwdevcon.com/",
		"start": new Date("2018-04-05"),
		"end": new Date("2018-04-07"),
		"location": "🇺🇸 Washington, D.C, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "UIKonf",
		"link": "http://www.uikonf.com/",
		"start": new Date("2018-05-13"),
		"end": new Date("2018-05-16"),
		"location": "🇩🇪 Berlin, Germany",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "WWDC",
		"link": "https://developer.apple.com/wwdc/",
		"start": new Date("2018-06-04"),
		"end": new Date("2018-06-08"),
		"location": "🇺🇸 San Jose, CA, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Next Door",
		"link": "https://nextdoorconf.com/",
		"start": new Date("2018-06-04"),
		"end": new Date("2018-06-07"),
		"location": "🇺🇸 San Jose, CA, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "AltConf",
		"link": "http://altconf.com/",
		"start": new Date("2018-06-04"),
		"end": new Date("2018-06-07"),
		"location": "🇺🇸 San Jose, CA, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "try! Swift San Jose",
		"link": "https://www.tryswift.co/events/2018/sanjose/",
		"start": new Date("2018-06-08"),
		"end": new Date("2018-06-08"),
		"location": "🇺🇸 San Jose, CA, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "SwiftFest",
		"link": "http://swiftfest.io/",
		"start": new Date("2018-06-18"),
		"end": new Date("2018-06-19"),
		"location": "🇺🇸 Boston, MA, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "SwiftAveiro",
		"link": "http://swiftaveiro.xyz/",
		"start": new Date("2018-06-21"),
		"end": new Date("2018-06-22"),
		"location": "🇵🇹 Aveiro, Portugal",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Swift Island",
		"link": "http://www.swiftisland.nl/",
		"start": new Date("2018-07-04"),
		"end": new Date("2018-07-05"),
		"location": "🇳🇱 Texel, Netherlands",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "360|iDev",
		"link": "http://360idev.com/",
		"start": new Date("2018-08-26"),
		"end": new Date("2018-08-29"),
		"location": "🇺🇸 Denver, CO, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "iOSDevUK",
		"link": "http://www.iosdevuk.com/",
		"start": new Date("2018-09-03"),
		"end": new Date("2018-09-06"),
		"location": "🇬🇧 Aberystwyth, UK",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "try! Swift New York City",
		"link": "https://www.tryswift.co/events/2018/nyc/",
		"start": new Date("2018-09-04"),
		"end": new Date("2018-09-05"),
		"location": "🇺🇸 New York City, NY, USA",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Swift & Fika",
		"link": "http://www.swiftandfika.com/",
		"start": new Date("2018-09-09"),
		"end": new Date("2018-09-10"),
		"location": "🇸🇪 Stockholm, Sweden",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "NSSpain",
		"link": "http://nsspain.com/",
		"start": new Date("2018-09-12"),
		"end": new Date("2018-09-14"),
		"location": "🇪🇸 Logroño, Spain",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "SwiftConf",
		"link": "https://swiftconf.com",
		"start": new Date("2018-09-19"),
		"end": new Date("2018-09-20"),
		"location": "🇩🇪 Cologne, Germany",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "FrenchKit",
		"link": "http://www.frenchkit.fr/",
		"start": new Date("2018-09-20"),
		"end": new Date("2018-09-21"),
		"location": "🇫🇷 Paris, France",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Do iOS",
		"link": "https://do-ios.com/",
		"start": new Date("2018-11-02"),
		"end": new Date("2018-11-02"),
		"location": "🇳🇱 Amsterdam, The Netherlands",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Swift Heroes",
		"link": "http://www.swiftheroes.com/",
		"start": new Date("2018-11-09"),
		"end": new Date("2018-11-09"),
		"location": "🇮🇹 Turin, Italy",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Swift Alps",
		"link": "http://theswiftalps.com/",
		"start": new Date("2018-11-29"),
		"end": new Date("2018-11-30"),
		"location": "🇨🇭 Crans-Montana, Switzerland",
		"cocoa": true,
		"cfp": null
	},
	{
		"name": "Snow*Mobile",
		"link": "http://2014.snow-mobile.org/",
		"start": new Date("2014-02-21"),
		"end": new Date("2014-02-22"),
		"location": "🇺🇸 Madison, WI, USA",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "WIPJam at MWC",
		"link": "http://wip.org/wip-event/wipjam-mwc14/",
		"start": new Date("2014-02-24"),
		"end": new Date("2014-02-27"),
		"location": "🇪🇸 Barcelona, Spain",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "Dutch Mobile",
		"link": "http://www.mobileconference.nl",
		"start": new Date("2014-06-26"),
		"end": new Date("2014-06-28"),
		"location": "🇳🇱 Amsterdam, Netherlands",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "Çingleton",
		"link": "http://cingleton.com/",
		"start": new Date("2014-10-10"),
		"end": new Date("2014-10-12"),
		"location": "🇨🇦 Montreal, Canada",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "Mobile March",
		"link": "http://mobilemarchtc.com/",
		"start": new Date("2015-03-26"),
		"end": new Date("2015-03-26"),
		"location": "🇺🇸 Minneapolis, MN, USA",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "Istanbul Tech Talks",
		"link": "http://www.istanbultechtalks.com/",
		"start": new Date("2015-04-27"),
		"end": new Date("2015-04-27"),
		"location": "🇹🇷 Istanbul, Turkey",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "#inspect",
		"link": "http://conference.rubymotion.com/",
		"start": new Date("2015-07-01"),
		"end": new Date("2015-07-02"),
		"location": "🇫🇷 Paris, Francia",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "Hybrid Conf",
		"link": "http://hybridconf.net/",
		"start": new Date("2015-08-20"),
		"end": new Date("2015-08-21"),
		"location": "🇮🇪 Dublin, Ireland",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "Mobiconf",
		"link": "http://www.mobiconf.org/",
		"start": new Date("2015-10-01"),
		"end": new Date("2015-10-02"),
		"location": "🇵🇱 Kraków, Poland",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "Mobilization",
		"link": "http://mobilization.pl",
		"start": new Date("2015-10-17"),
		"end": new Date("2015-10-17"),
		"location": "🇵🇱 Łódź, Poland",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "mdevcon",
		"link": "http://mdevcon.com/",
		"start": new Date("2016-03-17"),
		"end": new Date("2016-03-18"),
		"location": "🇳🇱 Amsterdam, Netherlands",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "MobCon Europe",
		"link": "http://mobcon.com/mobcon-europe/",
		"start": new Date("2016-04-10"),
		"end": new Date("2016-04-10"),
		"location": "🇧🇬 Sofia, Bulgaria",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "MCE",
		"link": "http://mceconf.com",
		"start": new Date("2016-04-21"),
		"end": new Date("2016-04-22"),
		"location": "🇵🇱 Warsaw, Poland",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "AppsWorld",
		"link": "http://www.apps-world.net/northamerica/",
		"start": new Date("2016-05-11"),
		"end": new Date("2016-05-12"),
		"location": "🇺🇸 Santa Clara, CA, USA",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "ValioCon",
		"link": "http://valiocon.com/",
		"start": new Date("2016-05-19"),
		"end": new Date("2016-05-22"),
		"location": "🇺🇸 San Diego, CA, USA",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "Layers",
		"link": "http://www.bringyourlayers.com/",
		"start": new Date("2016-06-13"),
		"end": new Date("2016-06-15"),
		"location": "🇺🇸 San Francisco, CA, USA",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "Release Notes",
		"link": "http://releasenotes.tv/conference/",
		"start": new Date("2016-09-27"),
		"end": new Date("2016-09-29"),
		"location": "🇺🇸 Indianapolis, IN, USA",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "MobOS",
		"link": "http://romobos.com/",
		"start": new Date("2017-02-16"),
		"end": new Date("2017-02-17"),
		"location": "🇷🇴 Cluj-Napoca, Romania",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "Appdevcon (previously called mDevcon)",
		"link": "http://appdevcon.nl/",
		"start": new Date("2017-03-16"),
		"end": new Date("2017-03-17"),
		"location": "🇳🇱 Amsterdam, Netherlands",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "Úll",
		"link": "http://2017.ull.ie/",
		"start": new Date("2017-04-10"),
		"end": new Date("2017-04-11"),
		"location": "🇮🇪 Killarney, Ireland",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "Mobius Conference",
		"link": "http://mobiusconf.com/en/",
		"start": new Date("2017-04-21"),
		"end": new Date("2017-04-22"),
		"location": "🇷🇺 Saint-Petersburg, Russia",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "App Builders",
		"link": "http://www.appbuilders.ch",
		"start": new Date("2017-04-24"),
		"end": new Date("2017-04-25"),
		"location": "🇨🇭 Lausanne, Switzerland",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "Craft Conference",
		"link": "http://craft-conf.com",
		"start": new Date("2017-04-25"),
		"end": new Date("2017-04-28"),
		"location": "🇭🇺 Budapest, Hungary",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "MCE",
		"link": "http://2017.mceconf.com/",
		"start": new Date("2017-05-08"),
		"end": new Date("2017-05-09"),
		"location": "🇵🇱 Warsaw, Poland",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "DEVit Web Conference",
		"link": "http://devitconf.org/",
		"start": new Date("2017-05-20"),
		"end": new Date("2017-05-21"),
		"location": "🇬🇷 Thessaloniki, Greece",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "App Design & Development Conference",
		"link": "http://addconf.com/",
		"start": new Date("2017-06-22"),
		"end": new Date("2017-06-23"),
		"location": "🇪🇸 Barcelona, Spain",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "Mobile Era",
		"link": "https://mobileera.rocks/",
		"start": new Date("2017-10-05"),
		"end": new Date("2017-10-06"),
		"location": "🇳🇴 Oslo, Norway",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "Mobiconf",
		"link": "https://2017.mobiconf.org/",
		"start": new Date("2017-10-05"),
		"end": new Date("2017-10-06"),
		"location": "🇵🇱 Krakow, Poland",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "Release Notes",
		"link": "https://2017.releasenotes.tv/",
		"start": new Date("2017-10-16"),
		"end": new Date("2017-10-18"),
		"location": "🇺🇸 Chicago, IL, USA",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "Mobilization",
		"link": "http://2017.mobilization.pl/",
		"start": new Date("2017-10-21"),
		"end": new Date("2017-10-21"),
		"location": "🇵🇱 Łódź, Poland",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "Mobius",
		"link": "https://mobiusconf.com/en/",
		"start": new Date("2017-11-11"),
		"end": new Date("2017-11-11"),
		"location": "🇷🇺 Moscow, Russia",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "DevFest Baltics",
		"link": "https://devfest.gdg.lv/",
		"start": new Date("2017-11-17"),
		"end": new Date("2017-11-17"),
		"location": "🇱🇻 Riga, Latvia",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "UA Mobile",
		"link": "http://www.uamobile.org/",
		"start": new Date("2017-11-25"),
		"end": new Date("2017-11-25"),
		"location": "🇺🇦 Kyiv, Ukraine",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "MobOS",
		"link": "http://romobos.com/",
		"start": new Date("2018-02-15"),
		"end": new Date("2018-02-16"),
		"location": "🇷🇴 Cluj-Napoca, Romania",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "MobileTech",
		"link": "https://mobiletechcon.de/en/",
		"start": new Date("2018-03-12"),
		"end": new Date("2018-03-14"),
		"location": "🇩🇪 Munich, Germany",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "Appdevcon (previously called mDevcon)",
		"link": "http://appdevcon.nl/",
		"start": new Date("2018-03-15"),
		"end": new Date("2018-03-18"),
		"location": "🇳🇱 Amsterdam, Netherlands",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "Code Mobile",
		"link": "http://www.codemobile.co.uk",
		"start": new Date("2018-04-02"),
		"end": new Date("2018-04-05"),
		"location": "🇬🇧 Chester, UK",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "App Builders",
		"link": "https://www.appbuilders.ch/",
		"start": new Date("2018-04-16"),
		"end": new Date("2018-04-17"),
		"location": "🇨🇭 Lugano, Switzerland",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "Craft Conference",
		"link": "http://craft-conf.com",
		"start": new Date("2018-05-08"),
		"end": new Date("2018-05-11"),
		"location": "🇭🇺 Budapest, Hungary",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "MCE",
		"link": "http://2018.mceconf.com",
		"start": new Date("2018-06-05"),
		"end": new Date("2018-06-06"),
		"location": "🇵🇱 Warsaw, Poland",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "ADDC - App Design & Development Conference",
		"link": "https://addconf.com/",
		"start": new Date("2018-07-04"),
		"end": new Date("2018-07-06"),
		"location": "🇪🇸 Barcelona, Spain",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "Mobiconf",
		"link": "https://2018.mobiconf.org/",
		"start": new Date("2018-10-04"),
		"end": new Date("2018-10-05"),
		"location": "🇵🇱 Krakow, Poland",
		"cocoa": false,
		"cfp": null
	},
	{
		"name": "Swift by Northwest",
		"link": "https://swiftbynorthwest.com/",
		"start": new Date("2018-10-18"),
		"end": new Date("2018-10-20"),
		"location": "🇺🇸 Portland, OR, USA",
		"cocoa": false,
		"cfp": null
	}
];


function buildTable(insideNode, tableID, confs, includeCFP) {
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

	if (includeCFP == true) {
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

function getLocale() {
	return (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.language;
}

function buildRow(conference, includeCFP) {
	var tr = document.createElement("tr");
	
	var nameCell = document.createElement("td");
	var conferenceName = document.createTextNode(conference.name);
	if (conference.link !== null) {
		var linkNode = document.createNode("a");
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
	var dateOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	if (start.getYear() == end.getYear() && start.getMonth() == end.getMonth() && start.getDay() == end.getDay()) {
		// 1-day conference
		dateString = start.toLocaleDateString(getLocale(), dateOptions);
	} else  if (start.getMonth() != end.getMonth()) {
		// conference spans the end of a month
		var startString = start.toLocaleDateString(getLocale(), { month: 'long', day: 'numeric' });
		var endString = end.toLocaleDateString(getLocale(), dateOptions);
		dateString = startString + " – " + endString;
	} else {
		// multi-day conference, all within a single month
		
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
	
	if (includeCFP == true) {
		var cfpNode = document.createElement("td");
		cfpNode.appendChild(document.createTextNode("todo"));
		tr.appendChild(cfpNode);
	}
	
	return tr;
}
