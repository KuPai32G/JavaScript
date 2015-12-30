/**
 * Created by kedouhaosi on 15/12/30.
 */
function factorial(n){
    if(n<=1)return n;
    else return n*factorial(n-1);
}
document.write("<table>");
document.write("<tr><th>n</th><th>n1</th></tr>");
for(var i=1;i<=10;i++){
    document.write("<tr><td>"+i+"</td><td>"+factorial(i)+"</td></tr>");
}
document.write("</table>");
document.write("Generated at"+new Date());
// 根据约定时间处理程序的属性名字是以on开始,后面跟着事件的名字.
window.onload = function () {

};
document.getElementById("button1").onclick = function(){

};
function handleResponse(){

};
request.onreadystatechange = handleResponse;
window.addEventListener("load",function(){},false);
request.addEventListener("readystatechange",function(){},false);