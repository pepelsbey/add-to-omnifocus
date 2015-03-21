module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		imagemin: {
			task: {
				files: [{
					expand: true,
					cwd: 'images/',
					src: '*.{png,jpg}',
					dest: 'images/'
				},{
					expand: true,
					cwd: 'pictures/',
					src: '*.{png,jpg}',
					dest: 'pictures/'
				}]
			}
		},

		compress: {
			zip: {
				options: {
					archive: '<%= pkg.name %>.zip'
				},
				src: [
					'_locales/**',
					'images/**',
					'background.js',
					'manifest.json'
				]
			}
		},

		copy: {
			nex: {
				src: '<%= pkg.name %>.zip',
				dest: '<%= pkg.name %>.nex'
			}
		}

	});

	grunt.registerTask('default', [
		'imagemin',
		'compress',
		'copy'
	]);

};
