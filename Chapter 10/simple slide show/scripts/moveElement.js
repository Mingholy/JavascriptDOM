/**
 * Created by Mingholy on 2017/3/20.
 */

function moveElement(element_id, final_x, final_y, interval) {
    if (!document.getElementById) {
        return false;
    }
    if (!document.getElementById(element_id)) {
        return false;
    }
    var elem = document.getElementById(element_id);
    if (elem.movement) {
        clearTimeout(elem.movement);
    }

    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var dist = 0;

    if (xpos === final_x && ypos === final_y) {
        return true;
    }
    if (xpos < final_x) {
        dist = Math.ceil((final_x - xpos) / 10);
        xpos += dist;
    }
    if (ypos < final_y) {
        dist = Math.ceil((final_y - xpos) / 10);
        ypos += dist;
    }
    if (xpos > final_x) {
        dist = Math.ceil((xpos - final_x) / 10);
        xpos -= dist;
    }
    if (ypos > final_y) {
        dist = Math.ceil((ypos - final_y) / 10)
        ypos -= dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('" + element_id + "'," + final_x + "," + final_y + "," + interval + ")";
    elem.movement = setTimeout(repeat, interval);
}