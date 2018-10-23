$("#body").animate({width:'100%'},1000,function(){
    $("#body").animate({height:window.innerHeight},1000, function(){
        $('.home-txt p').slideDown(1000,function(){
            $('.btns').fadeIn(1000)
        })
    })
})
var Off = $("#home").offset().top
$(window).scroll(function(){

 var windowScroll = $(window).scrollTop()
 
 if(windowScroll > Off)
     {         
    $("#btnUp").fadeIn(500)     
     }
else
    {
$(".customNav").css("backgroundColor","transparent")  
        
        $("#btnUp").fadeOut(500)     
    
    }
   
})
$("#btnUp").click(function(){
    
    $("html,body").animate({scrollTop:'0'},1000)

})
