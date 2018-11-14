$( document ).ready(function() {

  $(".screen-vertical-wipe").click(function(){
    var target = $(this).attr("data-target");
    $(".sec").each(function(){
      if($(this).attr("data-sec") == target){
        $(this).removeClass("inactive");
      }
      else {
       $(this).addClass("inactive")
      }
    })
  })
})
