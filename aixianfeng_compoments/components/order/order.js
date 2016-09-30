/**
 * Created by My on 2016/9/29.
 */
define([
        'text!./order.html', '$css!./order.css'
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