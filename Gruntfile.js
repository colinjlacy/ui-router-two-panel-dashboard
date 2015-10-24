module.exports = function(grunt) {
	require('jit-grunt')(grunt);

	grunt.initConfig({
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				eqnull: true,
				esnext: true,
				browser: true,
				globals: {
					jQuery: true,
					$: true,
					angular: true
				}
			},
			files: ['src/**/*.js']
		},
		connect: {
			task: { // give your task a name
				options: {
					port: 3000 // configure your port here
				}
			}
		},
		less: {
			development: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: {
					"assets/css/app.css": "assets/less/app.less" // destination file and source file
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			styles: {
				files: ['assets/less/*.less'], // which files to watch
				tasks: ['less'],
				options: {
					nospawn: true
				}
			},
			scripts: {
				files: ['src/**/*.js'],
				tasks: ['jshint', 'babel']
			},
			html: {
				files: ['./**/*.html']
			}
		},
		babel: {
			options: {
				sourceMap: false
			},
			dist: {
				files: [{
					expand: true,
					cwd: './src',
					src: ['**/*.js'],
					dest: './dist'
				}]
			}
		}
	});

	grunt.registerTask('default', ['package', 'connect', 'watch']);
	grunt.registerTask('package', ['jshint', 'babel', 'less']);

};