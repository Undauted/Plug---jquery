(function($) {
    $.fn.input = function(options) {
       
        return this.each(function() {
            var settings = $.extend({
            }, options);
 
            var defaultText = settings.text;
            $(this).val(defaultText);
            $(this).focus(function() {
                $(this).css({'background-color' : 'lightgray'});
                if ($(this).val() === defaultText) {
                    $(this).val("");
                }
            });
            $(this).blur(function() {
                $(this).css({'background-color' : '#FFFFFF'});
                if ($(this).val() === "") {
                    $(this).val(defaultText);  
                }
            });
        });
    };

   
    $.fn.requiredField = function(options){
        return this.each(function() {
            if($(this).val() === '')
                this.setCustomValidity('Pole wymagane!');
            else
                this.setCustomValidity('');
           
            $(this).blur(function(){
                if($(this).val() === '')
                    this.setCustomValidity('Pole wymagane!');
                else
                    this.setCustomValidity('');
            });
           
        });    
       
    };
	
	
	$.fn.validateUsername = function(options) {
       
        return this.each(function() {
            var settings = $.extend({
                pattern : /^[A-Za-z]{1}[A-Za-z0-9]+$/
            }, options);
           
            var $regexname=settings.pattern;
            $(this).blur(function(){
                if (!$(this).val().match($regexname)) {
                    $(this).siblings('.emsg').show();
                    this.setCustomValidity('Z³a nazwa uzytkownika! Nazwa musi zaczynac sie od litery i miec 3 znaki');
                }
                else{
                    $(this).siblings('.emsg').hide();
                    this.setCustomValidity('');
               }
            });
           
        });
    };
   
})(jQuery);