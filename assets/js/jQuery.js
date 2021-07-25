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
})