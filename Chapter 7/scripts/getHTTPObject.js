/**
 * Created by Mingholy on 2017/3/17.
 */
/**
 * 获取XMLHTTP对象
 * @returns {XMLHttpRequest}
 */
function getHTTPObject() {
    //兼容性检查
    if (typeof XMLHttpRequest == 'undefined') {
       XMLHttpRequest = function() {
           try {
               return new ActiveXObject("Msxml2.XMLHTTP.6.0");
           } catch (e) {}
           try {
               return new ActiveXObject("MSxml2.XMLHTTP.3.0");
           } catch (e) {}
           try {
               return new ActiveXObject("Msxml2.XMLHTTP");
           } catch (e) {}
           return false;
       }
    }
    return new XMLHttpRequest();
}
