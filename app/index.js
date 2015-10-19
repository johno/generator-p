'use strict'

var util = require('util')
var path = require('path')
var yeoman = require('yeoman-generator')
var yosay = require('yosay')
var camelize = require('camelize')

var PGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json')
  },

  prompting: function () {
    var done = this.async()

    this.log(yosay(
      'Welcome to the minimal npm package generator'
    ))

    var prompts = [{
      name: 'name',
      message: 'Please enter your name:'
    }, {
      name: 'github',
      message: 'Please enter your github username:'
    }, {
      name: 'twitterHandle',
      message: 'Please enter your twitter username:'
    }, {
      name: 'packageName',
      message: 'Please enter the package name:'
    }, {
      name: 'description',
      message: 'Please enter a package description:'
    }]

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption
      this.name = props.name
      this.github = props.github
      this.packageName = props.packageName || 'p-package'
      this.camelizedPackageName = camelize(props.packageName)
      this.twitterHandle = props.twitterHandle
      this.description = props.description
      this.year = (new Date()).getFullYear()

      this.template('_readme.md', 'readme.md')
      this.template('_license.md', 'license.md')
      this.template('_package.json', 'package.json')
      this.template('_index.js', 'index.js')

      this.template('_test.js', 'test.js')

      this.src.copy('editorconfig', '.editorconfig')
      this.src.copy('travis.yml', '.travis.yml')
      this.src.copy('gitignore', '.gitignore')

      done()
    }.bind(this))
  }
})

module.exports = PGenerator
