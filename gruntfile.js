module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		makepot: {
			target: {
				options: {
					domainPath: '/languages/',          // Where to save the POT file.
					potFilename: 'simple-shortcode-block.pot', // Name of the POT file.
					type: 'wp-plugin',                // Type of project (wp-plugin or wp-theme).
				}
			}
		},

		po2mo: {
			files: {
				src: 'languages/*.po',
				expand: true,
			},
		},

		uglify: {
			my_target: {
				files: {
					//'admin/js/simple-shortcode-block-admin.min.js': ['admin/js/simple-shortcode-block-admin.js'],
					//'public/js/simple-shortcode-block-public.min.js': ['public/js/simple-shortcode-block-public.js'],
				}
			}
		},

		cssmin: {
			options: {
				mergeIntoShorthands: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					//'admin/css/simple-shortcode-block-admin.min.css': ['admin/css/simple-shortcode-block-admin.css'],
					//'public/css/simple-shortcode-block-public.min.css': ['public/css/simple-shortcode-block-public.css'],
				}
			}
		},

		watch: {
			scripts: {
				files: ['admin/js/*.js', '!admin/js/*.min.js', 'admin/css/*.css', '!admin/css/*.min.css'],
				tasks: ['uglify', 'cssmin']
			},
		},

	});

	// Load the grunt-contrib-uglify plugin, which exposes an "uglify" task.
	// Same thing with "watch" task and with "cssmin" task.
  grunt.loadNpmTasks( 'grunt-contrib-watch', 'grunt-contrib-uglify', 'grunt-contrib-cssmin' );

	// Default task(s).
	grunt.registerTask( 'default', [ 'makepot', 'po2mo', 'uglify', 'cssmin' ] );

};
