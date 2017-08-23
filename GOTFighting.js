$(document).ready(function(){
    var hidden = true;
    $("#Astapor").hover(function(){
        if(hidden){
            $("body").css('background-image', "url('astapor.jpg')");
            hidden = false;
        }
        else{
            $("#AstaporPic").hide("slow");
            hidden = true;
        }
    })
    $("#Kings_Landing").hover(function(){
        if(hidden){
            $("body").css('background-image', "url('kingsLanding.jpg')");
            hidden = false;
        }
        else{
            $("#Kings_LandingPic").hide("slow");
            hidden = true;
        }
    })
    $("#Moat_Calin").hover(function(){
        if(hidden){
            $("body").css('background-image', "url('moatCalin.jpg')");
            hidden = false;
        }
        else{
            $("#Moat_CalinPic").hide("slow");
            hidden = true;
        }       
    })
    $("#Winterfell").hover(function(){
        if(hidden){
            $("body").css('background-image', "url('winterfell.jpg')");
            hidden = false;
        }
        else{
            $("#WinterfellPic").hide("slow");
            hidden = true;
        }
        
    })
    $("#Dragonstone").hover(function(){
        if(hidden){
            $("body").css('background-image', "url('dragonstone.jpg')");
            hidden = false;
        }
        else{
            $("#DragonstonePic").hide("slow");
            hidden = true;
        }
        
    })
    $("#Riverrun").hover(function(){
        if(hidden){
            $("body").css('background-image', "url('riverrun.jpg')");
            hidden = false;
        }
        else{
            $("#RiverrunPic").hide("slow");
            hidden = true;
        }
    })

    var arenaChosen = false;

    $(".ChoicesA").click(function(){
        $(".choiceBox").hide("slow");
        arenaChosen = true;

        if(arenaChosen = true){
            $("#champion").show("slow");
        }
    })
     
    $(".fighter").change(function(){
        $(".fighter option:selected").each(function(){
            var x = $(this).attr("img");
            $("#test1").attr("src", x)
        });
    });
    $(".champ").change(function(){
        $(".champ option:selected").each(function(){
            var x = $(this).attr("img");
            $("#test2").attr("src", x)
        });
    });  
});    

        
           