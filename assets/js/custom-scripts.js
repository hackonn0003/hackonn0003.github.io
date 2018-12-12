$(document).ready(function() {
	
	$('.resend-btn').click(function(){
		$(this).parent().next().css('display','block');
	});

	$(window).scroll(function(){
	
	  if ($(window).scrollTop() >= 81) {
		$('.notification-bar').addClass('notification-fixed');
	   }
	   else {
		$('.notification-bar').removeClass('notification-fixed');		
	   }
	});
	$(window).scroll(function(){
	
	  if ($(window).scrollTop() >= 200) {
		$('.top-btn').addClass('display-show');
	   }
	   else {

		$('.top-btn').removeClass('display-show');
	   }
	});
 	// scroll Top 
	$('.top-btn').click(function(){
		$('html,body').animate({ scrollTop: 0 }, "slow");
	 });
	// zoom card 
	$('.zoom-out-icon').click(function(){
		$('.module-true').show();
		$(this).parent().parent().parent().parent().addClass('zoom-card');
	 });
	 $('.zoom-in-icon').click(function(){
		$('.module-true').hide();
		$(this).parent().parent().parent().parent().removeClass('zoom-card');
	 });
	 
 
 	// Dropdown	active	
 	$('.dropdown-block li.dropdown').click(function(){
		$(this).addClass('active');		
	});	
	$('ul.dropdown-menu > li').click(function () {
		$('ul.dropdown-menu > li').removeClass('active');
		$(this).addClass('active');    
	});
		
 	$('.navigation li.dropdown ').click(function(){		
		$('.navigation li.dropdown').removeClass('active');
		$(this).addClass('active');
	});
	
	//  Filter Dropdown
	$('.dropdown-style li').click(function () {
		$('.dropdown-style li').removeClass('active');
		$(this).addClass('active');    
	});
	
	$('.dropdown-filter-block .dropdown-style ul li').click(function () {
		$('.dropdown-filter-block .dropdown-style ul li').removeClass('active');
		$(this).addClass('active');    
	});
	
   
 
	
	// Dropdown	7
	$('.dropdown-7 ul.sub-dropdown-7 li').click(function (){
		$(this).addClass('actives');		
	});
	
	
 
	
	// sub-dropdown
	$('.sub-dropdown li').click(function (){
		$(this).addClass('actives');	
		$(this).siblings().removeClass('actives');		
	});
	
 
 
  // Menu Style
  $('.menu-click').click(function (){
  		$('.module-true').show();
		$(this).next('.menu-style').show();	
  });
  $('.close').click(function (){
	  	$(this).parent('.menu-style').hide();
  		$('.module-true').hide();
  });
  
    // Forgot
  $('.forgot-click ').click(function (){
  		$("body").find('.login-block').hide();	
		$("body").find('.forgot-password').show();
  });
    $('.new-pwd').click(function (){
  		$("body").find('.change-password').show();	
		$("body").find('.forgot-password').hide();
  });
    $('.sign-up-click').click(function (){
        $("body").find('.login-block').hide();
  		$("body").find('.sign-up').show();
  });
  
   $('.virify-click').click(function (){
        $("body").find('.login-block').hide();
  		$("body").find('.block-virify').show();
  });
   $('.verify-clickMB').click(function (){
        $("body").find('.login-block').hide();
  		$("body").find('.block-virify-mb').show();
  });

  
		
	// Popup Box 
	$('.popup-click-share').click(function (){
		$('.module-true').show();
		$('body').find('.share-job-popup').show();	
	});
	$('.popup-click-ferer').click(function (){
		$('.module-true').show();
		$('body').find('.popup-refer-candidate').show();	
	});
	$('.popup-click-apply').click(function (){
		$('.module-true').show();
		$('body').find('.popup-job-apply').show();	
	});
	$('.popup-click-video').click(function (){
		$('.module-true').show();
		$('body').find('.popup-block-video').show();	
	});
	 
	
	$('.close, .popup-small .btn-white').click(function (){
		$('body').find('.popup-small').hide();
		$('.module-true').hide();
	});
	
	$('.close, .popup-section .btn-white').click(function (){
		$('body').find('.popup-section').hide();
		$('.module-true').hide();
	});
	
	// Popup Box 
	$('.popup-small-click').click(function (){
		$('.module-true').show();
		$(this).next('.popup-small').show();	
	});
	$('.close, .popup-small .btn-white').click(function (){
		$(this).parent().parent('.popup-small').hide();
		$('.module-true').hide();
	});
	
 
	
	// Popup Small
	$('.popup-small-click').click(function (){
		$('.module-true').show();
		$(this).next('.popup-section').show();	
	});
	$('.close, .popup-section .btn-white').click(function (){
		$('body').next('.popup-section').hide();
		$('.module-true').hide();
	});
	
	 // Popup Box 
	$('.popup-click').click(function (){
		$('.module-true').show();
		$('body').find('.popup-team').show();	
	});
	$('.close, .popup-section .btn-white').click(function (){
		$('body').find('.popup-team').hide();
		$('.module-true').hide();
	});
	
 
 
		// upload file
	$(".file").change(function(){
	$(".fileValue").text($(this).val());
	});
	

 
   // Mobile Menu 
	var removeClassMobile = true;
	$(".button-mobile-menu").click(function () {
		$("body").toggleClass("menu-open");
		removeClassMobile = false;
	});
	$(".navigation li").click(function() {
		removeClassMobile = false;
	});
	$(".creat-job-block").click(function() {
		removeClassMobile = false;
	});
	$("html").click(function () {
		if (removeClassMobile) {
			$("body").removeClass("menu-open");
		}
		removeClassMobile = true;
	});	
	
	
	// Calendar	
	$('.dropdown-calendar').click(function(){
		$(this).toggleClass('calendar-active');
		$("body").toggleClass('module-calendar');	
	});
	
	
// Show less 		
	
 	
	$('.toggle-jobs').click(function(){
		$(this).prev('.section-filter-inner').slideToggle('fast').siblings('.section-filter-inner:visible').slideDown('fast');
		$(this).parent().parent().toggleClass('filter-show-arrow');
	});	
	
 	
	
// Tabs Script		   
	var tabContainers = $('.tab-details-com');
	tabContainers.hide().filter(':first').show();
	$('.tab-bar-com ul li a').click(function () {
	tabContainers.hide();
	tabContainers.filter(this.hash).show();
	$('.tab-bar-com ul li a').parent("li").removeClass('active');
	$(this).parent("li").addClass('active');
	return false;
	}).filter(':first').click();

});	


// Tabs second Script		   
	var tabSecondContainers = $('.tab-details-com2');
	tabSecondContainers.hide().filter(':first').next().show();
	$('.tab-bar-com2 ul li a').click(function () {
	tabSecondContainers.hide();
	tabSecondContainers.filter(this.hash).show();
	$('.tab-bar-com2 ul li a').parent("li").removeClass('active');
	$(this).parent("li").addClass('active');
	return false;
	}).filter(':first').next().click();
	
	
	   // Mobile Menu 
	var removeClassLG = true;
	$(".language-dropdown").click(function () {
		$(this).toggleClass('open');
		removeClassLG = false;
	});
	$(".language-dropdown .dropdown-style li").click(function() {
		removeClassLG = false;
	});


 

	// Profile Options 
 
	var removeClass = true; 	
	// My Profile
	$(".cadidate-profile").click(function () {
		$("body").toggleClass("show-open");
		$(this).toggleClass('active');
		removeClass = false;
	});
 	
	$(".more-options li").click(function() {
		removeClass = false;
	});
	$("html").click(function () {
		if (removeClass) {
			$("body").removeClass("show-open");
		}
		removeClass = true;
	});
	

	$(".more-options li").click(function() {
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});
	
	// Tooltip
 	 $('[data-toggle="tooltip"]').tooltip();   
 	 
	 // CheckBox	 
 	$('.dropdown-form-destop').on('click', function(e){
        if($(this).hasClass('dropdown-style')){
            e.stopPropagation();
        }
	});	
	
 



// Vertical Scrollbox 
	$('.vertical-scrollbox').enscroll({
		verticalTrackClass: 'track',
		verticalHandleClass: 'handle',
		minScrollbarLength: 28
	});
	
// Horizontal Scrollbox 	
	$('.horizontal-scrollbox').enscroll({
		horizontalScrolling: true, 
		horizontalTrackClass: 'horizontal-track2',
		horizontalHandleClass: 'horizontal-handle2',
		minScrollbarLength: 28		 
	});	
	
	
 // JS for Mobile

	
	if ($(window).width() <= 1023){		
	
	
	// Dropdown	filter height fixed  
	$('.dropdown-filter-block li').click(function (){		
		var LiHeightM = $(this).children('div').innerHeight();		
		var parentHeightM = $(this).parent('ul').height();		
		if(parentHeightM > LiHeightM){
			$('.dropdown-common').css({
				'height': 'auto'
				})
		}
		else { $(this).parent('ul').height(LiHeightM); }
	});
	
	
	// sub-dropdown
	$('.sub-dropdown li').click(function (){
		$(this).addClass('actives');	
		$(this).siblings().removeClass('actives');		
	});
		
	// Dropdown	active	
 	$('.dropdown-block li.dropdown').click(function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');		
	});
	
	// Filter Tab 1
 
	$(".section-filter-inner ul li .filter-cell").click(function () {
		$(this).parent().addClass("filter-open"); 
		$(this).parent().removeClass('filter-cel-active');
		$(this).parent().siblings().removeClass("filter-open");
		$(this).parent().siblings().addClass('filter-cel-active');
	});
	

 
 

	
	 // CheckBox	 
 	$('ul.dropdown-style').on('click', function(e){
        if($(this).hasClass('dropdown-style')){
            e.stopPropagation();
        }
	});
	 }
	 
	 
 