module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: '\n',
        sourceMap:true
      },
      app: {
        // the files to concatenate
        src: ['main/modules/*.js','main/services/*.js','main/**/*.js'],
        // the location of the resulting JS file
        dest: 'dist/app.js'
      }
    },
    less:{
        dev:{
            options:{
                
            },
            files:{
                "dist/app.css": "main/**/*.less"
            }    
        }
    },  
    watch: {
      files: ['<%= concat.app.src %>','<%= less.dev.files["dist/app.css"] %>'],
      tasks: ['concat','less']
    }
  });
    
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['concat','less']);
  grunt.registerTask('stuff', ['watch']);

};