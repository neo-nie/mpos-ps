/**
 * Created with JetBrains PhpStorm.
 * User: NieHL
 * Date: 12-7-24
 * Time: 下午4:51
 * To change this template use File | Settings | File Templates.
 */

seajs.config({
    alias: {
        'jquery':           './jquery-1.8.0-sea.js',
        'artDialog' :       './artDialog-5.0.0-sea.js',
        'highcharts' :      './highcharts-2.2.5-sea.js',
        'jquery-ui' :       './jquery-ui-1.8.22-sea.js',
        'jquery.jqGrid' :   './jquery.jqGrid-4.4.0-sea.js',
        'jquery.ztree' :    './jquery.ztree-3.3.0-sea.js'
    }
});

define(function (require, exports, module) {
    var $ = require('jquery');
    var artDialog = require('./artDialog-5.0.0-sea');

    $.support.cors = true;

    if (!window.console) console = {};
    console.log = console.log || function () { };
    console.warn = console.warn || function () { };
    console.error = console.error || function () { };
    console.info = console.info || function () { };

    // Check if a new cache is available on page load.
    var appCache = window.applicationCache;
    appCache.addEventListener('updateready', function (e) {
        if (appCache.status == appCache.UPDATEREADY) {
            appCache.swapCache();
            window.location.reload();
            console.log('Applicatoin cache updated.');
        } else {
            // Manifest didn't changed. Nothing new to server.
        }
    }, false);

    $(document).ready(function () {

        //禁止文档触摸拖动
        //$(document).on("touchmove", false);
//    document.addEventListener('touchmove', function (e) {e.preventDefault();}, false);

        $("a").click(function (e) {
            e.preventDefault();
            window.location = $(this).attr("href");
        });

        $('#settings').click(function () {
            artDialog({
                title:'设置',
                lock:true,
                content:"<img src='images/setup.jpg' width='740' height='362'/>",
                padding:'0'
            });
        });
    });
});