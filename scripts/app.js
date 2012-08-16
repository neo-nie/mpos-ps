/**
 * Created with JetBrains PhpStorm.
 * User: NieHL
 * Date: 12-7-24
 * Time: 下午4:51
 * To change this template use File | Settings | File Templates.
 */

$.support.cors = true;

if (!window.console) console = {};
console.log = console.log || function () { };
console.warn = console.warn || function () { };
console.error = console.error || function () { };
console.info = console.info || function () { };

// Check if a new cache is available on page load.
var appCache = window.applicationCache;
if (appCache) {
    appCache.addEventListener('updateready', function (e) {
        if (appCache.status == appCache.UPDATEREADY) {
            // Browser downloaded a new app cache.
            // Swap it in and reload the page to get the new hotness.
            appCache.swapCache();
            window.location.reload();
            console.log('Applicatoin cache updated.');
        } else {
            // Manifest didn't changed. Nothing new to server.
        }
    }, false);

    var counter = 1;
    appCacheLog = function() {
        //var p = document.createElement("p");
        var message = Array.prototype.join.call(arguments, " ");
        //p.innerHTML = message;
        //document.getElementById("info").appendChild(p);
        $('#info').text(message);
    }

    // log each of the events fired by appCache
    appCache.onchecking = function(e) {
        appCacheLog("检查更新");
    }

    appCache.onnoupdate = function(e) {
        appCacheLog("无可用更新");
    }

    appCache.onupdateready = function(e) {
        appCacheLog("更新完毕");
    }

    appCache.onobsolete = function(e) {
        appCacheLog("Cache obsolete");
    }

    appCache.ondownloading = function(e) {
        appCacheLog("更新下载中");
    }

    appCache.oncached = function(e) {
        appCacheLog("缓存完毕");
    }

    appCache.onerror = function(e) {
        appCacheLog("缓存错误");
    }

    appCache.onprogress = function(e) {
        appCacheLog("缓存文件下载中 " + counter);
        counter++;
    }

//    //手动检查更新
//    appCache.update();
//    if (appCache.status == appCache.UPDATEREADY) {
//        // Browser downloaded a new app cache.
//        // Swap it in and reload the page to get the new hotness.
//        appCache.swapCache();
//        window.location.reload();
//        console.log('Applicatoin cache updated.');
//    }
}

$(document).ready(function () {

    //禁止文档触摸拖动
    //$(document).on("touchmove", false);
//    document.addEventListener('touchmove', function (e) {e.preventDefault();}, false);

    $("a").click(function (e) {
        e.preventDefault();
        window.location = $(this).attr("href");
    });
});

/*弹出设置框*/
function ShowSetting() {
    art.dialog({
        title:'设置',
        content:"<div><iframe height='362' width='740' scrolling='no' frameborder='0' src='Dialog/Setting.html'/></div>",
        padding:'0'
    });
}