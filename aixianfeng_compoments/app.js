/**
 * Created by yupeng on 16/9/29.
 */


require.config({

    paths:{
        'jquery':'./lib/jquery',
        'backbone':'./lib/backbone',
        'underscore':'./lib/underscore',
        'text':'./lib/text',
        '$css':'./lib/css',
        "swiper":"./lib/swiper"
    }
    //shim:{
    //    "swiper":"./lib/swiper"
    //}
});


require(['jquery','backbone','./router.js'],function($,Backbone){

    Backbone.history.start();
})
