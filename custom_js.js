$(document).ready(function(){
	// Tab start---------------------------
    $('.custom_tabs-stage #tab-2').hide();
    $('.custom_tabs-stage #tab-1').show();
    $('.custom_tabs-nav li:first').addClass('tab-active');

    // Change tab class and display content
    $('.custom_tabs-nav a').on('click', function(event){
      event.preventDefault();
      $('.custom_tabs-nav li').removeClass('tab-active');
      $(this).parent().addClass('tab-active');
      $('.custom_tabs-stage #tab-1').hide();
      $($(this).attr('href')).show();
    });
    // Tab End---------------------------

    $(".SwitchToDelivery_click").click(function(){
	  $(".car_pickup_div").removeClass("d-none");
	});
	$(".back_arrow, .City_list_div li").click(function(){
	  $(".car_pickup_div").addClass("d-none");
	});

	$(".Estimated_time_click").click(function(){
	  $(".Delivery_Time_div").removeClass("d-none");
	});
	$(".BackToMainDiv_arrow").click(function(){
	  $(".Delivery_Time_div").addClass("d-none");
	});



	$('input[name="radio_group"]').click(function() {
       if($(this).attr('id') == 'test2') {
            $(".show_schedule_div").removeClass("d-none");           
       }
       else {
            $(".show_schedule_div").addClass("d-none"); 
       }
   });


	$(".Change_language_to_English").click(function(){
		$("#rightDiv").css("order","1");
		$("#leftDiv").css("order","2");
	});
	$(".Change_language_to_arabic").click(function(){
		$("#rightDiv").css("order","2");
		$("#leftDiv").css("order","1");
	});




});