/**
 * Created by Mingholy on 2017/3/20.
 */
function positionMessage() {
    if (!document.getElementById) {
        return false;
    }
    if (!document.getElementById("message")) {
        return false;
    }
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px" ;
    elem.style.top = "100px";
    moveElement("message", 125, 25, 20);
}
addLoadEvent(positionMessage);

function moveElement(element_id, final_x, final_y, interval) {
    if (!document.getElementById) {
        return false;
    }
    if (!document.getElementById(element_id)) {
        return false;
    }
    var elem = document.getElementById(element_id);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);

    if (xpos === final_x && ypos === final_y) {
        return true;
    }
    if (xpos < final_x) {
        xpos++;
    }
    if (ypos < final_y) {
        ypos++;
    }
    if (xpos > final_x) {
        xpos--;
    }
    if (ypos > final_y) {
        ypos--;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('" + element_id + "'," + final_x + "," + final_y + "," + interval + ")";
    movement = setTimeout(repeat, interval);
}