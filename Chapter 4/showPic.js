/**
 * Created by Mingholy on 2017/2/16.
 */

function showPic(whicpic) {
    var pichref = whicpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", pichref);

    var pictitle = whicpic.getAttribute("title");
    //获取description元素的title值
    var description = document.getElementById("description");
    description.firstChild.nodeValue = pictitle;
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    console.log(body_element);
}

window.onload = countBodyChildren;