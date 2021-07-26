$(document).ready(function(){
    /* img1*/ 
    $(".img-1").click(function(){
        $(this).hide()
        $(".desc-1").toggle();
    })
    $(".desc-1").click(function(){
        $(this).hide()
        $(".img-1").show()
    })
    
    // img2
    $(".img-2").click(function(){
        $(this).hide()
        $(".desc-2").toggle();
    })
    $(".desc-2").click(function(){
        $(this).hide()
        $(".img-2").show()
    })

    // img3
    $(".img-3").click(function(){
        $(this).hide()
        $(".desc-3").toggle();
    })
    $(".desc-3").click(function(){
        $(this).hide()
        $(".img-3").show()
    })
    // Change effects on hover
    $(".thumbnail-image").hover(function(){
        $(".hover-border").removeClass("d-none");
    }, function(){
        $(".hover-border").addClass("d-none");
    })



    // project 1
    $("#project").mouseenter(function(){
        $(this).css("opacity", "0.5");
        $("#prjName-1").show();
    })
    $("#project").mouseleave(function(){
        $(this).css("opacity", "1");
        $("#prjName-1").hide();
    });
    // project 2
    $("#project2").mouseenter(function(){
        $(this).css("opacity", "0.5");
        $("#prjName-2").show();
    })
    $("#project2").mouseleave(function(){
        $(this).css("opacity", "1");
        $("#prjName-2").hide();
    });
    // project 3
    $("#project3").mouseenter(function(){
        $(this).css("opacity", "0.5");
        $("#prjName-3").show();
    })
    $("#project3").mouseleave(function(){
        $(this).css("opacity", "1");
        $("#prjName-3").hide();
    });
    // project 4
    $("#project4").mouseenter(function(){
        $(this).css("opacity", "0.5");
        $("#prjName-4").show();
    })
    $("#project4").mouseleave(function(){
        $(this).css("opacity", "1");
        $("#prjName-4").hide();
    });
    // project 5
    $("#project5").mouseenter(function(){
        $(this).css("opacity", "0.5");
        $("#prjName-5").show();
    })
    $("#project5").mouseleave(function(){
        $(this).css("opacity", "1");
        $("#prjName-5").hide();
    });

    // project 6
    $("#project6").mouseenter(function(){
        $(this).css("opacity", "0.5");
        $("#prjName-6").show();
    })
    $("#project6").mouseleave(function(){
        $(this).css("opacity", "1");
        $("#prjName-6").hide();
    });
    
    // project 7
    $("#project7").mouseenter(function(){
        $(this).css("opacity", "0.5");
        $("#prjName-7").show();
    })
    $("#project7").mouseleave(function(){
        $(this).css("opacity", "1");
        $("#prjName-7").hide();
    });


    //project 8
    $("#project8").mouseenter(function(){
        $(this).css("opacity", "0.5");
        $("#prjName-8").show();
    })
    $("#project8").mouseleave(function(){
        $(this).css("opacity", "1");
        $("#prjName-8").hide();
    });

    // function to show when form is submitted
    $("form").submit(function(){
        alert("Submitted the form");
    })
})