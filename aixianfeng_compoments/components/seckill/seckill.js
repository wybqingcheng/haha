/**
 * Created by My on 2016/9/30.
 */
define([
        'text!./seckill.html', '$css!./seckill.css'
    ],
    function(html){
        function render(){
            $('.container').html(html);
        }
        return {
            render:render
        }
    }
)