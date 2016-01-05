/**
 * Created by kedouhaosi on 16/1/5.
 */
function getText(url,callback){
    // 创建新的请求
    var request = new XMLHttpRequest();
    // 指定待获取的URL
    request.open("GET",url);
    //定义事件处理程序
    request.onreadystatechange = function(){
        if(request.readyState === 4&&request.status ===200){
            var type = request.getResponseHeader("Content-Type");
            if(type.match(/^text/))
                callback(request.responseText);
        }
    };
    request.send(null);
}
function getTextSync(url){
    // 创建新的请求
    var request = new XMLHttpRequest();
    // 传递false实现同步
    request.open("GET",url,false);
    // 立即发送请求
    request.send(null);

        if(request.status !==200)throw new Error(request.statusText);
            var type = request.getResponseHeader("Content-Type");
            if(type.match(/^text/))
            throw  new Error("Expected textual response;got:"+type);
        return request.responseText;

}

