// var form = document.getElementById('form');
// form.submit () {
// 	alert ('Заявка отправлена')
// }
// <form onsubmit="alert('submit!');return false">

var btn = document.getElementById('btn-form');

btn.onclick = function (e) {
	// e.preventDefault();
	alert ('Заявка отправлена');
}


$(function () {
	$(window).scroll(function() {
	    $('.icon1').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.icon2').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.icon3').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.form').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("rotateIn");
	        }
	    });
	});
})