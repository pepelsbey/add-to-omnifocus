module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		compress: {
			zip: {
				options: {
					archive: '<%= pkg.name %>.nex',
					mode: 'zip'
				},
				src: [
					'_locales/**',
					'images/**',
					'background.js',
					'manifest.json'
				]
			}
		}

	});

	grunt.registerTask('default', 'compress');

};
