$(document).ready(function(){

$(".b1").click(function(){
    $("body").append('<div class="f1 grid"></div>');
    var i=0;
    for(i=0;i<=63;i++)
    {
        $(".f1").append('<div class="c1">1<div>');
    }
    $(".b1").css({"background-color":"black","color":"aqua"});
    $(".f1").css({"margin":"0 auto","width":"37%","border":"1px solid #cccccc","display":"inline-block","box-shadow":"1px 1px 6px #666"});
    $(".grid").css({"display":"grid","grid-grap":"1px","grid-template-columns":"repeat(8,1fr)","grid-template-rows":"repeat(8,1fr)"});
    $(".c1").css({"width":"59px","display":"block","border":"1px solid #cccccc","box-shadow":"1px 1px 6px #666"});
       
})  
});