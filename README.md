
# To see the list of conferences go here:

## [https://cocoaconferences.com](https://cocoaconferences.com)

---

List of conferences for developers interested on Apple related ecosystems (iOS, iPadOS, macOS, watchOS, tvOS, UIKit, Swift, SwiftUI, ReactNative, Flutter...).

## Adding a new conference

The site is generated from [this file](https://github.com/Lascorbe/CocoaConferences/blob/master/_data/conferences.yml); add new conferences there in YAML format.

When editing an existing conference, there is no need to manually remove the corresponding date fields for past conferences; those are updated automatically. Your entry should look like this:

```yaml
- name: The name of the conference
  link: The URL for the conference website
  location: Text briefly describing where the conference will be held
  start: The day the conference starts (in "year-month-day" format)
  end: The day the conference ends (in "year-month-day" format)
  cocoa-only: true or false
  cfp:
      link: The url at which prospective speakers my respond to the Call For Papers
      deadline: the last day on which a talk proposal may be submitted (in "year-month-day" format)
```

⚠️ The indentation is really important on `.yml` files, keep the same number of spaces as the rest of entries or it won't parse the file correctly. 

### Examples

The following example provides all of the necessary information. It describes a conference occurring from March 4 to March 6, 2019. It is applicable to Cocoa developers, and includes information about how to respond to the call for papers.

```yaml
- name: Example Conf 2019
  link: https://2019.example.com/conference
  location: 🏴 Anytown, Atlantis
  start: 2019-03-04
  end: 2019-03-06
  cocoa-only: true
  cfp:
      link: https://2019.example.com/conference/cfp
      deadline: 2019-01-31
```

This example provides some of the information, but omits the call for papers information. Perhaps it is not known, or perhaps the conference is not accepting submissions. 

The `cfp` section of an item may be left incomplete, or may be omitted entirely.

```yaml
- name: Example Conf 2020
  link: https://2020.example.com/conference
  location: 🏴 Anytown, Atlantis
  start: 2020-03-04
  end: 2020-03-06
  cocoa-only: false
```

For detailed information about the required information for a conference, check out the comments at the top of `conferences.yml`.

If you get stuck, just open an issue!

## Contributing

### Adding a Conference

1. Fork the project.
2. Clone it locally.
3. Add your conference to `conferences.yml`. It will be automatically sorted to the right spot on the website
4. Open a PR 🎉  

### Work on the code locally
1. Fork the project.
2. Clone it locally.
3. Run `bundle install` to install initial dependencies.
4. Run `bundle exec jekyll serve`. The local site will be available at [http://127.0.0.1:4000](http://127.0.0.1:4000).

## Deploying

Deploying is handled automatically when a commit is made to the `master` branch or your pull request is merged.
