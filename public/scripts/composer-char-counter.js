


$(document).ready(function(event){

  console.log("listening....")
  $('.textarea').on('input', function(){
        var limit = 140;
        var count = 0;
        var input = ($(this).val());
        for(let c in input){
          count++
        }
        var remaining = limit - count;
        $('.counter').text(remaining);

        if(remaining < 0){
          $('.counter').css('color', 'red')
        }
  });
});