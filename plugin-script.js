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
   
})(jQuery);