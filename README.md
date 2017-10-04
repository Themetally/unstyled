# Unstyled - a starter theme
Unstyled is a WordPress **starter theme** with a built-in **workflow**.

Think of `Unstyled` as [_s](https://github.com/Automattic/_s) with batteries included.


## Batteries Included
This is an opinionated starting point powered by **Gulp.js**, that means that you will have touch the terminal a little bit.
Don't worry - it's easy. There are just two commands you need to know out of the box and you'll like them.

* **Gulp.js** - All the theme tasks, such as compilation and .pot file generation is handled by Gulp.js
* **ES6** JavaScript ready, with `import` support (powered by Browserify and Babelify)
* **Stylus** for styles - the most flexible way of writing CSS, with Globbing support and a lot more.
* **BrowserSync** - Automatic reloads when files change, CSS injection when only CSS files have changed
* **Autoprefixer** - Don't write CSS Prefixes. Let Autoprefixer handle them.
* **Vertical Rhythm** - Easy vertical rhythm units added by using [PostCSS Gridlover](https://github.com/sakamies/postcss-gridlover) to help you keep your sanity while maintaining a sensible vertical rhythm.
* **Sourcemaps** - can't live without them
* **Default styles** - Theme comes with some basic styles for things like the menu, forms, tables, WordPress galleries. Read more at [Sensible Defaults](#sensible-defaults)
* **Minification for Production** - CSS and JavaScript files are automatically minified when building for production


## Setup
The first time you use a copy of this theme, complete the following steps:
1. Download the theme to your themes directory, **rename** the folder to your theme name
2. Open the theme directory in the terminal and run `npm install` to install all the dependencies
3. Search & Replace (case sensitive):
 * `unstyled` -> `your_slug` - used as textdomain and function prefix
 * `Unstyled` -> `Your Theme Name`
4. Edit `/theme.yml`, set your local development URL
5. Run `gulp sync` to watch for changes and you're done, from now on - all you need to to is run `gulp sync`


### Gulp Commands
To work with this theme, all you need to know are these 2 commmands:
* `gulp sync` - Is going to rebuild everything and watch for changes
* `gulp build --production` - is going to build and minify both Style and JavaScript

You can run each command separately too:
`scripts` - Builds JavaScript
`pot` - Generates a new .pot file
`styl` - Compiles stylus

Append `--production` to any task to enable minification

 
 
  
### Sensible Defaults
The goal was to make a starter-theme with just enough of styles to get you going without adding too much useless features.
This is a starting point to make free themes on WordPress.org, because of that by default it's **Fully PHP 5.2.17** compatible. 

The theme comes packed with a few defaults
* Default Styles
* * a stripped version of normalize.css
* * box-sizing: border-box;
* * Basic style for elements like lists, tables, paragraphs, buttons, etc.
* * Basic container width and alignment
* * Toggleable menu starting point

* Default WordPress Styles
* * Alignment
* * Captions
* * WP Gallery
* * Widgets
* * Posts and Archives

* Clean directory structure
* *  All theme functions and helpers are kept in `/inc/` directory and its subdirectories
* *  All source files for styles, scripts, images, build tools are all kept in `/assets/` diretory and its subdirectories
* *  Compressed and built files are kept in the `/build/` directory
* *  Theme template parts are kept in `/partials` directory. 
