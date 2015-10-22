# generator-p [![Build Status](https://secure.travis-ci.org/johnotander/generator-p.png?branch=master)](https://travis-ci.org/johnotander/generator-p) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

A minimal yeoman generator for npm packages. This is intended to cut out the majority of boilerplate required in creating a npm modules.

## Installation

```bash
npm install -g generator-p
```

## Usage

```bash
$ mkdir package-name && cd $_
$ yo p
```

You will then be prompted for some information that will be used to generate an npm package. This generator prompts you for:

  * Name
  * Github username
  * Twitter username
  * Package name
  * Package description

Using the information to create thorough `package.json`, `index.js`, `license.md`, `test.js`,
and `readme.md` files with the following structure:

```
awesome-package/
  - test.js
  - .editorconfig
  - .gitignore
  - index.js
  - license
  - package.json
  - readme.md
```

This generator uses [ava](https://github.com/sindresorhus/ava) for tests and [standard](https://github.com/feross/standard) style.

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com) ([@4lpine](https://twitter.com/4lpine)).
