/**
 * 添加onload事件队列
 * @param func
 */
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof oldonload !== 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}