const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

describe('yo:app', function () {
  beforeEach(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ nomeApp: 'foo App',
        devName: 'sipmann',
        descApp: 'Not today'
      }); // Mock the prompt answers
  });

  it('creates files', () => {
    assert.file(['package.json', '.jshintrc' ]);
  });

  it('User input apear in created files', () => {
    assert.jsonFileContent('app/manifest.webapp', {"name": "foo App"});
    assert.jsonFileContent('app/manifest.webapp', {"description": "Not today"});
  });

});
