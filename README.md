# generator-p

[![Build Status](https://secure.travis-ci.org/johnotander/generator-p.png?branch=master)](https://travis-ci.org/johnotander/generator-p)

A minimal yeoman generator for npm packages. This is intended to cut out the majority of
boilerplate required in creating a small npm module.

This generator prompts you for your:

  * Name
  * Github username
  * Twitter username
  * Package name
  * Package description

Using the information to create thorough `package.json`, `index.js`, `LICENSE.md`, `test.js`,
and `README.md` files with the following structure:

```
awesome-package/
  - test/
    - test.js
  - .editorconfig
  - .gitignore
  - index.js
  - LICENSE.md
  - package.json
  - README.md
```

## Installation

```bash
npm install -g generator-p
```

__Note:__ If you don't have [jshint](https://github.com/jshint/jshint) installed, you will have to
install it globally with `npm install -g jshint`

## Usage

```bash
$ mkdir package-name && cd $_
$ yo p
```

You will then be prompted for some information that will be used to generate an npm package.

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com) ([@4lpine](https://twitter.com/4lpine)).
