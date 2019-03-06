module.exports = function(grunt) {
    grunt.initConfig({
      grunt_gm_boilerplate: {
        dev: {
          options: {
            //Engine set to use GraphicsMagicks use "im" for ImageMagic
            engine: "gm",
            //Name, suffix quality and width settings for image optimization and saving output
            sizes: [
              { name: "sm", suffix: "_1x", quality: 60, width: 600 },
              { name: "sm", suffix: "_2x", quality: 60, width: 1200 },
              { name: "md", suffix: "_1x", quality: 60, width: 900 },
              { name: "md", suffix: "_2x", quality: 60, width: 1800 },
              { name: "lg", suffix: "_1x", quality: 60, width: 1440 },
              { name: "lg", suffix: "_2x", quality: 60, width: 2880 }
            ]
          },
          //First operation settings to optimize any jpg, png or gif files in src dir
          files: [
            {
              //settings
              expand: true,
              src: ["**/*.{jpg,png,gif}"],
              cwd: "src/images/",
              dest: "dist/images/"
            }
          ]
        }
      },
      //Second operation settings for saving images in output folder to webp versions
      cwebp: {
        dynamic: {
          //Quality settings for webp conversion
          options: {
            q: 60
          },
          files: [
            //settings
            {
              expand: true,
              cwd: "dist/images/",
              src: ["**/*.{jpg,png}"],
              dest: "dist/images/"
            }
          ]
        }
      }
    });
  //Grunt task runners
  grunt.loadNpmTasks("grunt-responsive-images");
  grunt.loadNpmTasks("grunt-cwebp");
  grunt.registerTask("default", ["responsive_images", "cwebp"]);
};

