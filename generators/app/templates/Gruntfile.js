'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/* <%= nomeApp %> */\n'
            },
            build: {
                src: './app/js/*.js',
                dest: './tmp/js/<%= nomeApp %>.min.js'
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
                        './tmp'
                        ]
                }]
            },
            tmp: {
                files: [{
                    dot: true,
                    src: ['./tmp']
                }]
            }
        },
        cssmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: './app/css/',
                    src: ['*.css'],
                    dest: './tmp/css/'
                }]
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: './app/', src: ['*'], dest: './tmp/', filter: 'isFile'},
                    //{expand: true, cwd: './app/css', src: ['*'], dest: './tmp/css/', filter: 'isFile'},
                    {expand: true, cwd: './app/images', src: ['**/*'], dest: './tmp/images/', filter: 'isFile'}
                ]
            }
        },
        compress: {
            main: {
                options: {
                    archive: './dist/<%= nomeApp %>.zip'
                },
                files: [
                    {
                        expand: true,
                        cwd: './tmp/',
                        src: ['**/*'],
                        dest: './'
                    }
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
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    /**
    * Tasks
    */
    grunt.registerTask('default', ['jshint', 'clean:dist', 'copy', 'uglify', 'cssmin', 'compress', 'clean:tmp']);

    grunt.registerTask('test', ['jshint']);

	grunt.registerTask('server', ['connect']);
};
