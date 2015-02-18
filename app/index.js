'use strict';
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var FirefoxosAppGenerator = yeoman.generators.Base.extend({
  constructor: function() {
    yeoman.generators.Base.apply(this, arguments);

    this.argument('nomeApp', {desc: 'Name of the app', required: false, defaults: 'YO', optional: true, type: 'String'});
  },

  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the awesome FirefoxOS App generator!'
    ));

    var prompts = [{
        type: 'input',
        name: 'nameApp',
        message: 'Yourt project name',
        default: this.nomeApp
    },{
      type: 'input',
      name: 'descApp',
      message: 'Description of your app',
      default: 'Not today'
  },{
      type: 'input',
      name: 'devName',
      message: 'Developer name',
      default: 'DevDevDev'
    }];

    this.prompt(prompts, function (props) {
      this.nomeApp = props.nameApp;
      this.descApp = props.descApp;
      this.devName = props.devName;

      done();
  }.bind(this));
  },

  writing: {
    app: function () {

      var files   = this.expandFiles('**/*', { cwd: this.sourceRoot(), dot: true });

      this.dest.mkdir('app');

      files.forEach(function(file) {
          this.copy(file, file);
      }, this);
    },
  },

  end: function () {
    if (!this.options['skip-install']) {
      this.installDependencies();
    }
  }
});

module.exports = FirefoxosAppGenerator;
