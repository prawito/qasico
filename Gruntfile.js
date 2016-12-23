module.exports = function(grunt) {
    //configuration
    grunt.initConfig({
        copy: {
            a: {
                expand: true,
                cwd: 'resources/',
                src: 'index.html',
                dest: 'build/'
            },
            b: {
                expand: true,
                cwd: 'resources/',
                src: 'img/**/*',
                dest: 'build/'
            },
            c: {
                expand: true,
                cwd: 'resources/',
                src: 'css/style.css',
                dest: 'build/'
            },
            d: {
                expand: true,
                cwd: 'resources/',
                src: 'tpl/**/*',
                dest: 'build/'
            }
        },

        concat: {
            js: {
                src: ['resources/js/lib/angular.js', 'resources/js/lib/angular-animate.js', 'resources/js/lib/angular-ui-router.js', 'resources/js/index.js'],
                dest: 'build/js/index.js'
            }
        },

        uglify: {
            build: {
                files: [{
                    src: 'build/js/index.js',
                    dest: 'build/js/index.min.js'
                }]
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'build/css/',
                    src: ['style.css'],
                    dest: 'build/css/',
                    ext: '.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('all', ['copy', 'concat', 'uglify', 'cssmin']);
};
