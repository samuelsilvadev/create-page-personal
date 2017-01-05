module.exports = function(grunt){
    
    grunt.initConfig({
        copy:{
            main:{
                expand:true,
                src:"**",
                dest:"dist"
            }
        },
        clean:{
            dist:{
                src:"dist"
            }
        },
        useminPrepare:{
            html:"dist/*.html"
        },
        usemin:{
            html:"dist/*.html"
        },
        babel: {
            compile: {
                options: {
                    sourceMap: true,
                    presets: ['es2015']
                },
                files: {
                    'dist/js/helper.js': 'dist/js/helper.js',
                    'dist/js/objectsHelper.js': 'dist/js/objectsHelper.js',
                    'dist/js/app.js': 'dist/js/app.js',
                }
            }
        }
    });
    
    grunt.registerTask("dist",["clean","copy"]);
    grunt.registerTask("compilaJs",["babel"]);
    grunt.registerTask("minifica",["useminPrepare","concat","uglify","cssmin","usemin"]);
    grunt.registerTask("default",["dist","compilaJs","minifica"]);
    
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-usemin");
    grunt.loadNpmTasks("grunt-babel");
    grunt.loadNpmTasks("babel-preset-es2015");
} 
 