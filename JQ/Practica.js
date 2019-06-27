$(document).ready(function(){

$(".b1").click(function(){
    $("body").append('<div class="f1 grid"></div>');
    var i=0;
    for(i=1;i<=64;i++)
    {
        $(".f1").append('<div class="c1">'+i+'<div>');
    }
    $(".b1").attr('disabled',true);   
}); 
$(".b2").click(function(){
    $(".f1").remove();
    $(".b1").attr('disabled',false);
});
});