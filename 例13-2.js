/**
 * Created by kedouhaosi on 15/12/30.
 */
function displayTime(){
    var elt = document.getElementById("clock"); //通过id = "clock"找到元素
    var now = new Date();                              // 得到当前时间
    elt.innerHTML = now.toLocaleTimeString();  // 让elt来显示它
   setTimeout(displayTime,1000);                  // 在一秒后再次执行(是异步刷新的,不加的只会显示加载当时的时间)
}
window.onload = displayTime; // 当onload事件发生时开始显示时间