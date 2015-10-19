/*global describe, beforeEach, it*/
'use strict'

var path = require('path')
var assert = require('yeoman-generator').assert
var helpers = require('yeoman-generator').test
var os = require('os')

describe('p:app', function () {

  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({
      })
      .on('end', done)
  })

  it('creates the correct files', function () {

    assert.file([
      'package.json',
      '.editorconfig',
      '.travis.yml',
      'index.js',
      'readme.md',
      'license',
      'test.js'
    ])
  })
})
