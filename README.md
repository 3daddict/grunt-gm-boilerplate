# Grunt Image Compiler
Grunt Image Compiler for Image Optimization using GraphicsMagick.
Running this script will optimize images in set folder.
First operation images will first be compressed, optimized, resized and then saved with the set naming convention.
Second operation images will be saved to web format and stored in same output directory.
HTML and CSS Examples on how to setup <picture> images, breakpoints and fallback images.

## Install Dependancies
- GraphicsMagick `brew install graphicsmagick`
- Grunt CLI `npm install -g grunt-cli`

## Run
To run the operations type `grunt` in the cli.

## Image Breakpoints
#### Small - sm
- 1x | quality: 60% | width: 600px
- 2x | quality: 60% | width: 1200px

#### Medium - md
- 1x | quality: 60% | width: 900px
- 2x | quality: 60% | width: 1800px

#### Large - lg
- 1x | quality: 60% | width: 1440px
- 2x | quality: 60% | width: 2880px

**Image settings can be adjusted in Gruntfile.js**

### Naming convention
Image names will be appended with the following attributes
- Original filename: `example-image.jpg`
- Compiled output filenames;
`example-image-sm_1x.jpg,
example-image-sm_2x.jpg,
example-image-md_1x.jpg,
example-image-md_2x.jpg,
example-image-lg_1x.jpg,
example-image-lg_2x.jpg
example-image-sm_1x.webp,
example-image-sm_2x.webp,
example-image-md_1x.webp,
example-image-md_2x.webp,
example-image-lg_1x.webp,
example-image-lg_2x.webp`

### Default Fallback Images
To ensure proper cross-browser compatibily original source files should also be optimized and then **always** set as the default fallback image