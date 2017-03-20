/**
 * Created by Mingholy on 2017/3/20.
 */

function prepareSlideshow() {
    //check availability of DOM functions
    if (!document.getElementById) {
        return false;
    }
    if (!document.getElementsByTagName){
        return false;
    }
    //utility
    function $(id) {
        return document.getElementById(id)? document.getElementById(id) : false;
    }
    //check element existence
    if (!$("linklist")){
        return false;
    }
    if(!$("preview")){
        return false;
    }
    var preview = $("preview");
    preview.style.position = "absolute";
    preview.style.left = "0px";
    preview.style.top = "0px";

    var list = $("linklist");
    var links = list.getElementsByTagName("a");
    links[0].onmouseover = function() {
        moveElement("preview", -100, 0, 10);
    }
    links[1].onmouseover = function() {
        moveElement("preview", -200, 0, 10);
    }
    links[2].onmouseover = function() {
        moveElement("preview", -300, 0, 10);
    }
}

addLoadEvent(prepareSlideshow);
