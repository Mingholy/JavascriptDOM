/**
 * Created by Mingholy on 2017/3/20.
 */
function addLoadEvent(func) {
    var oldOnload = window.onload;
    if (typeof oldOnload !== 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldOnload();
            func();
        }
    }
}

