module.exports = (function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify:{
      options: {
                banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
      app: {
        src: 'client/scripts/app.js',
        dest: 'server/public/assets/scripts/app.min.js'
      }
    },
    copy: {
      html: {
        expand: true,
        cwd: 'client/views',
        src: 'index.html',
        dest: 'server/public/assets/views'
      },
      css: {
        expand: true,
        cwd: 'client/styles',
        src: 'stylesheet.css',
        dest: 'server/public/assets/styles'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['copy', 'uglify']);
});
