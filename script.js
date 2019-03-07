$(".enter").click(function(){
$(".oasis").fadeOut();
$(".enter").hide();
$(".race").show();
$(".forward").show();
$(".reverse").show();
$(".ready").show();
$(".rc").show();
$("body").css("background-image" , "none");
$("body").css("background-color","sienna");
}); 

$(".reverse").click(function(){
$(".take").show();    
$(".fisrtkey").show();
$(".forward").hide();
$(".reverse").hide();
$(".race").hide();
$(".ready").hide();
$(".firstkey").show();
$(".frst").show();
$(".rc").hide();
$("body").css("background-color","saddlebrown");
}); 

$(".forward").click(function(){
$(".again").show();
$(".race").hide();
$(".ready").hide();
$(".forward").hide();
$(".reverse").hide();
$(".rc").hide();
$("body").css("background-color","red");
});

$(".again").click(function(){
$(".back").show();
$(".again").hide();
});

$(".take").click(function(){
$(".shining").show();
$(".frst").hide();
$("body").css("background-color" , "forestgreen");
});

$(".dance").click(function(){
$(".jadekey").show();
$(".shining").hide();
$("body").css("background-color","darkgreen");
});

$(".dont").click(function(){
$(".again").show();
$(".shining").hide();
$("body").css("background-color","red");
});

$(".wrong").click(function(){
$(".again").show();
$(".adventure").hide();
$("body").css("background-color","red");
});

$(".acc").click(function(){
$(".adventure").show();
$(".jadekey").hide();
$("body").css("background-color","royalblue");
});

$(".ad").click(function(){
$(".fk").show();
$(".adventure").hide();
$("body").css("background-color" , "powderblue");
});

$(".lk").mouseenter(function(){
$(".end").show();
$(".fk").hide();
$("body").css("background-color" , "mediumseagreen");
});

$(".no").click(function(){
$(".final").show();
$(".end").hide();
$(".rttk").text("you finished the hunt , well done!");
$("body").css("background-color","salmon");
});

$(".yes").click(function(){
$(".again").show();
$(".end").hide();
$("body").css("background-color","red");
});



