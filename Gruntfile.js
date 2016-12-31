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
        }
    });
    
    grunt.registerTask("dist",["clean","copy"]);
    grunt.registerTask("minifica",["useminPrepare","concat","uglify","cssmin","usemin"]);
    grunt.registerTask("default",["dist","minifica"]);
    
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-usemin");
} 
 