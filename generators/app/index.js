const Generator = require('yeoman-generator');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('nomeApp', {desc: 'Name of the app', required: false, defaults: 'YO', optional: true, type: String});
    this.nomeApp = this.options.nomeApp;
  }

  prompting() {
    this.log(yosay(
      'Welcome to the awesome FirefoxOS App generator!'
    ));

    return this.prompt([{
          type: 'input',
          name: 'nameApp',
          message: 'Yourt project name',
          default: this.options.nomeApp
      },{
        type: 'input',
        name: 'descApp',
        message: 'Description of your app',
        default: 'Not today',
        store: true
      },{
          type: 'input',
          name: 'devName',
          message: 'Developer name',
          default: 'DevDevDev',
          store: true
      }])
      .then(props => {
        this.nomeApp = props.nameApp;
        this.descApp = props.descApp;
        this.devName = props.devName;
      });
  }

  install() {
    this.npmInstall(['grunt',
      'grunt-contrib-clean',
      'grunt-contrib-compress',
      'grunt-contrib-connect',
      'grunt-contrib-copy',
      'grunt-contrib-cssmin',
      'grunt-contrib-jshint',
      'grunt-contrib-uglify',
      'jshint',
      'jshint-stylish']);
  }

  writing() {
    this.fs.copyTpl(
        this.templatePath('**/*'),
        this.destinationPath(''),
        { nomeApp: this.nomeApp, descApp: this.descApp, devName: this.devName }
    );

    this.fs.copyTpl(
      this.templatePath('.jshintrc'),
      this.destinationPath('.jshintrc'));

    this.fs.copyTpl(
      this.templatePath('.jshintignore'),
      this.destinationPath('.jshintignore'));

    this.fs.copyTpl(
      this.templatePath('app/.gitattributes'),
      this.destinationPath('app/.gitattributes'));
  }

  end() {
    // TODO: Remove when runing tests
    console.log('Everything is ready! keep going');
  }
};