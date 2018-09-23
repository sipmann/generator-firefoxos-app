# generator-firefoxos-app

[![Build Status](https://secure.travis-ci.org/sipmann/generator-firefoxos-app.png?branch=master)](https://travis-ci.org/sipmann/generator-firefoxos-app)
[![Dependency Status](https://david-dm.org/sipmann/generator-firefoxos-app.svg)](https://david-dm.org/sipmann/generator-firefoxos-app)

## Getting Started

Just run `yo firefoxos-app` inside your app folder and have fun

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-firefoxos-app from npm, run:

```bash
npm install -g generator-firefoxos-app
```

Finally, initiate the generator:

```bash
yo firefoxos-app
or
yo firefoxos-app your-app-name-here
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](http://yeoman.io/learning/).

## Grunt tasks

* default: will prepare to dist your app
* server: a local http server
* test: will run a simple jsHint validation

## License

MIT

## PS

* Some of the files used were copied from the repository https://github.com/robnyman/Firefox-OS-Boilerplate-App
* Find any problem?? Feel free to open an issue

## Todo list

* ~~Compress the app to a zip file~~ (0.1.3)
* Increment the version of the app at the build process
* ~~Some css build~~ (0.1.4) - css compress
* Lesscss
