/**
 * Created by kedouhaosi on 16/1/5.
 */
//解析HTTP响应
//发起HTTP GET响应以获取指定URL的内容
//当响应到达时,把它以解析后的XML Document对象,解析后的JSON对象或者字符串形式传递给回调函数
function get(url,callback){
    // 创建新的请求
    var request = new XMLHttpRequest();
    // 传递false实现同步
    request.open("GET",url);
    // 定义事件监听器
    request.onreadystatechange = function(){
        // 确定请求完成并且成功
        if(request.readyState === 4&&request.status ===200){
            var type = request.getResponseHeader("Content-Type");

            if(type.indexOf("xml") !== -1 && request.responseXML)
                callback(request.responseXML);
            else if (type === "application/json")
                callback(JSON.parse(request.responseText));
        }
        else
            callback(request.responseText);//字符串响应
    };
    request.send(null);

}