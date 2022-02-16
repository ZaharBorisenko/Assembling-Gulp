import dartSass from "sass"; 
import gulpSass from "gulp-sass";
import rename from "gulp-rename";

import cleanCss from 'gulp-clean-css'; // сжатие css файла
import webpcss from 'gulp-webpcss'; // вывод webp изображений
import autoPrefixer from "gulp-autoprefixer"; // автоматическая кроссбраузерность
import groupCssMediaQueries from "gulp-group-css-media-queries"; //группировка медиа запросов

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SCSS",
                message: "Error: <%= error.message %>"
            })))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(groupCssMediaQueries())
        .pipe(webpcss(
            {
                webpClass: '.webp',
                noWebpClass: '.no-webp'
            }
        ))
        .pipe(autoPrefixer({
            grid: true,
            overrideBrowserslist: ["last 3 version"],
            cascade: true,
        }))
        //раскомментировать если нужен не сжатый файл css
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
}