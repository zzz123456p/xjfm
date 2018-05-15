(function(doc,win){
    var docEl=doc.documentElement,
        resize='orientationchange' in window?'orientationchange':'resize'  //重置窗口
    var recal=function(){
        var clientwidth=docEl.clientWidth
        
        console.log(clientwidth)
        //相当于if else
        if(!clientwidth) return;
        docEl.style.fontSize=100*(clientwidth/640)+"px"
    }
    recal() //执行
    if(!doc.addEventListener) return;
    win.addEventListener(resize,recal,false)
    //DOMContentLoaded 浏览器内部加载执行
    doc.addEventListener('DOMContentLoaded',recal,false)
})(document,window)

