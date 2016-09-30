/**
 * Created by My on 2016/9/26.
 */
(function(window){
    //根据屏幕宽度动态改变html的font-size大小
    //获取屏幕宽度
    var winW = document.documentElement.clientWidth||document.body.clientWidth;
    document.documentElement.style.fontSize = winW/20+"px";
    window.onresize = function(){
        var winW = document.documentElement.clientWidth||document.body.clientWidth;
        document.documentElement.style.fontSize = winW/20+"px";
    }
})(window);
