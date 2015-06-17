'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('yo:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompts({
        nameApp: 'Sipmann App',
        descApp: 'Not today',
        devName: 'DevDevDev'
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      '.jshintrc'
    ]);
  });

  it('User input apear in created files', function () {
    assert.fileContent([
      ['app/manifest.webapp', '"name": "Sipmann App"'],
      ['app/manifest.webapp', '"description": "Not today"'],
      ['app/manifest.webapp', /"developer": {\s+"name": "DevDevDev"/]
    ]);
  });

});
