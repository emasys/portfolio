$('document').ready(function(){
    
    $('#portfolio').affix({
      offset: {
          top: 450
//        top: $('#header').height()
      }
});	
    
    $('#contact').affix({
      offset: {
          top: 1250
//        top: $('#header').height()
      }
});	

$('#sidebar').affix({
      offset: {
        top: 200
      }
});	
    
    $('#characterLeft').text('140 characters left');
    $('#message').keydown(function () {
        var max = 140;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('You have reached the limit');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');            
        } 
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' characters left');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');            
        }
    });
    
})
//
//$(function(){
//		$(".element").typed({
//			strings: ["First sentence.", "Second sentence."],
//			typeSpeed: 30,
////            startDelay: 10000,
//		});
//	});
