'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var camelize = require('camelize');

var PGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to the minimal npm package generator'
    ));

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
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;
      this.name = props.name;
      this.github = props.github;
      this.packageName = props.packageName || 'p-package';
      this.camelizedPackageName = camelize(props.packageName);
      this.twitterHandle = props.twitterHandle;
      this.description = props.description;

      this.dest.mkdir(this.packageName)

      this.template('_README.md', this.packageName + '/README.md');
      this.template('_LICENSE.md', this.packageName + '/LICENSE.md');
      this.template('_package.json', this.packageName + '/package.json');
      this.template('_index.js', this.packageName + '/index.js');

      this.dest.mkdir(this.packageName + '/test');
      this.template('_test.js', this.packageName + '/test/test.js');

      this.src.copy('editorconfig', this.packageName + '/.editorconfig');
      this.src.copy('travis.yml', this.packageName + '/.travis.yml');
      this.src.copy('gitignore', this.packageName + '/.gitignore');

      done();
    }.bind(this));
  }
});

module.exports = PGenerator;
