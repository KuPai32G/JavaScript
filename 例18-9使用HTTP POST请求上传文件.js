/**
 * Created by kedouhaosi on 16/1/5.
 */
whenReady( function(){
    var elts = document.getElementsByTagName("input");
    for(var i = 0;i<elts.length;i++){
        var input = elts[i];
        if(input.type !=="file")continue;
        var url = input.getAttribute("data-uploadto");
        if(!url)continue;
        input.addEventListener("change",function(){
            var file = this.files[0];
            if(!file)return;
            var xhr = new XMLHttpRequest();
            xhr.open("POST",url);
            xhr.send(file);
        },false);
    }
});
