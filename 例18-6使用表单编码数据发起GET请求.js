/**
 * Created by kedouhaosi on 16/1/5.
 */
function getData(url,data,callback){
    var request = new XMLHttpRequest();
    request.open("GET",url+"?"+endcodeFormData());
    request.onreadystatechange = function(){
        if(request.readyState ===4&&callback)callback(request);
    };
    request.send(null);
}
