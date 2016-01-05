/**
 * Created by kedouhaosi on 16/1/5.
 */
/*
   编码对象的属性,
   如果他们是来自HTML表单的健/值对,使用application/x-www-form-urlencoded格式
 */
function endcodeFormData(data){
    if(!data)return "";
    var pairs = [];
    for(var name in data){
        //跳过继承属性
        if(!data.hasOwnProperty(name))continue;
        //跳过方法
        if(typeof data[name] === "function")continue;
        //把值转成字符串
        var value = data[name].toString();
        //编码名字
        name = encodeURIComponent(name.replace("%20","+"));
        //编码值
        value = encodeURIComponent(value.replace("%20","+"));
        pairs.push(name+"="+value);
    }
    //返回使用'&'连接的健/值对
    return pairs.join('&');
}
