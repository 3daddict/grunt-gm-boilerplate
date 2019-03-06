# Grunt Image Compiler
Grunt Image Compiler for Image Optimization using GraphicsMagick.
Running this script will optimize images in set folder.
First operation images will first be compressed, optimized, resized and then saved with the set naming convention.
Second operation images will be saved to web format and stored in same output directory.
HTML and CSS Examples on how to setup <picture> images, breakpoints and fallback images.

## Install Dependancies
- GraphicsMagick `brew install graphicsmagick`
- Grunt CLI `npm install -g grunt-cli`
- Run NPM `npm install` or Yarn `yarn install`

## Run
To run the Grunt Task Runner operations type `grunt` in the cli.

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

#### 1x and 2x Explained
1x and 2x represent pixel density for device screen widths.
Screen resolutions have hardware pixels and software pixels.
Hardware pixels are no longer equal to the software or CSS pixel with newer displays.
The relationship between hardware and CSS pixels are described by the following formula:
`CSS Pixels = Hardware Pixels / Pixel density`
Therefore, hardware resolution of 2880px translates to 1440px CSS pixels on the retina display.

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

### Code Examples
#### HTML
```
<picture class="responsive-image">
    <source
        media="(min-width: 900px)"
        srcset="../dist/images/example-1-lg_1x.webp 1x, ../dist/images/example-1-lg_2x.webp 2x"
        type="image/webp" >
    <source
        media="(min-width: 601px)"
        srcset="../dist/images/example-1-md_1x.webp 1x, ../dist/images/example-1-md_2x.webp 2x"
        type="image/webp" >
    <source
        srcset="../dist/images/example-1-sm_1x.webp 1x, ../dist/images/example-1-sm_2x.webp 2x"
        type="image/webp" >
    <img 
        srcset="../dist/images/example-1-sm_1x.jpg 600w,
        ../dist/images/example-1-md_1x.jpg 900w,
        ../dist/images/example-1-lg_1x.jpg 1440w" 
        src="../dist/images/example-1-lg_1x.jpg"
        type="image/jpeg"
        alt="image description">
</picture>
```

#### SCSS
```
.bg-image {
  width: 100vw;
  height: 500px;
  background-size: cover;
  background-position: center;
  // large images (lg)
  background-image: url("../dist/images/example-1-lg_1x.jpg"); 
  background-image: -webkit-image-set(
    url("../dist/images/example-1-lg_1x.webp") 1x,
    url("../dist/images/example-1-lg_2x.webp") 2x
  );
  background-image: image-set(
    url("../dist/images/example-1-lg_1x.jpg") 1x,
    url("../dist/images/example-1-lg_2x.jpg") 2x
  );
  // medium images (md)
    @media(max-width: 900px) {
      background-image: url("../dist/images/example-1-md_1x.jpg");
      background-image: -webkit-image-set(
        url("../dist/images/example-1-md_1x.webp") 1x,
        url("../dist/images/example-1-md_2x.webp") 2x
      );
      background-image: image-set(
        url("../dist/images/example-1-md_1x.jpg") 1x,
        url("../dist/images/example-1-md_2x.jpg") 2x
      );
  }
  // small images (sm)
    @media (max-width: 600px) {
      background-image: url("../dist/images/example-1-sm_1x.jpg");
      background-image: -webkit-image-set(
        url("../dist/images/example-1-sm_1x.webp") 1x,
        url("../dist/images/example-1-sm_2x.webp") 2x
      );
      background-image: image-set(
        url("../dist/images/example-1-sm_1x.jpg") 1x,
        url("../dist/images/example-1-sm_2x.jpg") 2x
      );
    }
}
```
###### Credit to [Maciej Nowakowski](https://medium.freecodecamp.org/a-guide-to-responsive-images-with-ready-to-use-templates-c400bd65c433) for his article that helped make this boilerplate.