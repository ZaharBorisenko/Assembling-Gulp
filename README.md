# Сборка Gulp🚀
## В эту сборку входят основные функции и плагины для работы.

### Общие плагины
+ [A string replace plugin for gulp](https://www.npmjs.com/package/gulp-replace) ✅
+ [Error handling of gulp plugins](https://www.npmjs.com/package/gulp-plumber) ✅
+ [Notification plugin for gulp](https://www.npmjs.com/package/gulp-notify) ✅
+ [Browser sync](https://www.npmjs.com/package/browser-sync) ✅
+ [Grouping media queries](https://www.npmjs.com/package/gulp-group-css-media-queries) ✅
+ [Gulp webpcss](https://www.npmjs.com/package/gulp-webpcss) ✅
+ [Automatic cross-browser compatibility](https://www.npmjs.com/package/eslint-plugin-cross-browser-compatibility-check) ✅

### Обработка html файлов(разбивка по компонентам)
+ [Gulp file include](https://www.npmjs.com/package/gulp-file-include) ⚡️
+ [Gulp webp html nosvg](https://www.npmjs.com/package/gulp-webp-html-nosvg) ⚡️

### Обработка SCSS/SASS файлов(разбивка по компонентам)
+ [Gulp](https://www.npmjs.com/package/sass) 🔥
+ [Gulp-Sass](https://www.npmjs.com/package/gulp-sass) 🔥
+ [Gulp-rename](https://www.npmjs.com/package/gulp-rename) 🔥
+ [Gulp clean css](https://www.npmjs.com/package/gulp-clean-css) 🔥

### Обработка Js файлов(разбивка по компонентам)
+ [Webpack-stream](https://www.npmjs.com/package/webpack-stream) 🚨

### Оптимизация картинок(Webp)
+ [Gulp-Webp](https://www.npmjs.com/package/gulp-webp) 💥
+ [Gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) 💥

### Использования Gulp сборки для нового проекта:
## для этого нужно:
+ скопировать папку gulp,src,а так же файлы gulpfile.js и package.json
+ и прописать команду в терминале - npm i
## Исправление ошибок
##### при запуске gulp вылезает ошибка - Error: Cannot find module 'webp-converter/cwebp', чтобы исправить эту ошибку нужно установить convert плагин командой - npm install webp-converter@2.2.3 --save-dev
