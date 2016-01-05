/**
 * Created by kedouhaosi on 16/1/5.
 */
function postData(url,data,callback){
    var request = new XMLHttpRequest();
    request.open("POST",url);
    request.onreadystatechange = function(){
        if(request.readyState ===4&&callback)
            callback(request);
    };
    request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    request.send(endcodeFormData(data));
}
