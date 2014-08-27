'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: './app/js/*.js',
                dest: './dist/js/<%= pkg.name %>.min.js'
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: './app',
                    keepalive: true
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                jshintignore: '.jshintrcignore',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    './app/js/*.js'
                ]
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        './dist',
                        '.tmp'
                        ]
                }]
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: './app/', src: ['*'], dest: './dist/', filter: 'isFile'},
                    {expand: true, cwd: './app/css', src: ['*'], dest: './dist/css/', filter: 'isFile'}
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-compress');

    /**
    * Tasks
    */
    grunt.registerTask('default', ['jshint', 'clean', 'copy', 'uglify']);

    grunt.registerTask('test', ['jshint']);
	
	grunt.registerTask('server', ['connect']);
};
