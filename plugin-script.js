(function($) {
   
   
    $.fn.requiredField = function(options){
        return this.each(function() {
            if($(this).val() === '')
                this.setCustomValidity('This field is required!');
            else
                this.setCustomValidity('');
           
            $(this).blur(function(){
                if($(this).val() === '')
                    this.setCustomValidity('This field is required!');
                else
                    this.setCustomValidity('');
            });
           
        });    
       
    };
   
})(jQuery);