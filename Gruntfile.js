module.exports = function(grunt) {
    grunt.initConfig({
      responsive_images: {
        dev: {
          options: {
            engine: "gm",
            sizes: [
              { name: "sm", suffix: "_1x", quality: 60, width: 600 },
              { name: "sm", suffix: "_2x", quality: 60, width: 1200 },
              { name: "md", suffix: "_1x", quality: 60, width: 900 },
              { name: "md", suffix: "_2x", quality: 60, width: 1800 },
              { name: "lg", suffix: "_1x", quality: 60, width: 1440 },
              { name: "lg", suffix: "_2x", quality: 60, width: 2880 }
            ]
          },
          cwebp: {
            dynamic: {
              options: {
                q: 60
              },
              files: [
                {
                  expand: true,
                  cwd: "dist/",
                  src: ["**/*.{jpg,png}"],
                  dest: "dest/"
                }
              ]
            }
          }
        }
    }
});
    grunt.loadNpmTasks("grunt-responsive-images");
    grunt.loadNpmTasks("grunt-cwebp");
    grunt.registerTask("default", ["webp", "cwebp"]);
};