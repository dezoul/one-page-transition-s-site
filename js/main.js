$( document ).ready(function() {

  $(".screen-vertical-wipe").click(function(){
    var target = $(this).attr("data-vert-target");
    $(".sec").each(function(){
      if($(this).attr("data-vert-sec") == target){
        $(this).removeClass("inactive");
      }
      else {
       $(this).addClass("inactive")
      }
    })
  })
  $(".screen-horizontal-wipe").click(function(){
    var target = $(this).attr("data-horizontal-target");
    $(".horizontal-sec").each(function(){
      if($(this).attr("data-horizontal-sec") == target){
        $(this).removeClass("inactive").addClass("active");
      }
      else {
       $(this).addClass("inactive").removeClass("active")
      }
    })
  })
  $(".reset-horizontal").click(function(){
    $(".horizontal-sec").removeClass("inactive")
  })

})
