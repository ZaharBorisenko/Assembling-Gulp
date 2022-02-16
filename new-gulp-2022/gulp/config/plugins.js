import replace from "gulp-replace"; // замена и поиск.
import plumber from "gulp-plumber"; //обработка ошибок.
import notify from "gulp-notify"; // Вывод сообщений.
import browsersync from "browser-sync"; //Локальный сервер/ автообновление 
import newer from "gulp-newer"; //проверка обновлений

//экспортируем объект
export const plugins = { 
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
}