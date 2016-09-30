/**
 * Created by My on 2016/9/29.
 */
define([
        'text!./home.html',
        '$css!./home.css',
        "$css!./swiper.css"
    ],
    function(html){
        function render(){
            $('.container').html(html);
            getData();
        }
        function slider(){
            var mySwiper = new Swiper('.index_banner', {
                autoplay: 3000,
                loop:true,
                pagination : '.swiper-pagination'
            })
        }
        function getData(){
            $.get("http://www.vrserver.applinzi.com/aixianfeng/apihome.php",function(res){
                var bcData = JSON.parse(res.substring(0,res.indexOf("<script")));
                var str = "";
                for(var n in bcData.data.slide){
                    str+="<div class='swiper-slide'><img src='"+bcData.data.slide[n].activity.img+"'></div>";
                    console.log(bcData.data.slide[n].activity.img);
                }
                $(".swiper-wrapper").html(str);
            })
            slider();
        }
        return {
            render:render,
            slider:slider,
        }
    }
)