(function($) {
    $.fn.input = function(options) {
       
        return this.each(function() {
            var settings = $.extend({
            }, options);
 
            var defaultText = settings.text;
            $(this).val(defaultText);
            $(this).focus(function() {
                $(this).css({'background-color' : '#e8e9eb'});
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
			
            if($(this).val() === ''){
                this.setCustomValidity('Pole wymagane!');
			}
            else{
                this.setCustomValidity('');
			}
            $(this).blur(function(){
                if($(this).val() === ''){
                    this.setCustomValidity('Pole wymagane!');
			}
                else{
                    this.setCustomValidity('');
				}
            });
           
        });    
       
    };
	
	
	$.fn.checkPassword = function(options){
        return this.each(function() {
            if($(this).val() != $("#pswd").val()){
				this.setCustomValidity('Hasla nie sa takie same!');
				$(this).css({'border-color' : 'red'});
			}
            else{
                this.setCustomValidity('');
				$(this).css({'border-color' : '#d5d9da'});
			}
            $(this).blur(function(){
                if($(this).val() != $("#pswd").val()){	
					this.setCustomValidity('Hasla nie sa takie same!');
					$(this).css({'border-color' : 'red'});
				}
				else{
					this.setCustomValidity('');
					$(this).css({'border-color' : '#d5d9da'});
				}
			});    
		}); 
    };

	$.fn.patternUsername = function(options) {
       
        return this.each(function() {
            var settings = $.extend({
                pattern : /^[A-Za-z]{1}[A-Za-z0-9]+$/
            }, options);
           
            var $regexname=settings.pattern;
            $(this).blur(function(){
                if (!$(this).val().match($regexname)) {
                    $(this).siblings('.emsg').show();
					$(this).css({'border-color' : 'red'});
                    this.setCustomValidity('Z³a nazwa uzytkownika! Nazwa musi zaczynac sie od litery i miec 3 znaki');
                }
                else{
                    $(this).siblings('.emsg').hide();
                    this.setCustomValidity('');
					$(this).css({'border-color' : '#d5d9da'});
               }
            });
           
        });
    };
	
	 $.fn.patternEmail = function(options) {
       
        return this.each(function() {
            var settings = $.extend({
                pattern : /^([a-zA-Z0-9_.])+\@(([a-zA-Z0-9])+\.)+([a-zA-Z]{2,4})$/
            }, options);
           
            var $regexname=settings.pattern;
			
            $(this).blur(function(){
                if (!$(this).val().match($regexname)) {
					$(this).css({'border-color' : 'red'});
                    $(this).siblings('.emsg').show();
                    this.setCustomValidity('Niepoprawny email!');
					 
                }
                else{
                    $(this).siblings('.emsg').hide();
                    this.setCustomValidity('');
					$(this).css({'border-color' : '#d5d9da'});
               }
            });
           
        });
    };
	
	 $.fn.passwordStrength = function(options){
           
        $(this).on('propertychange input', function (e) {
            var valueChanged = false;
 
            if (e.type=='propertychange') {
                valueChanged = e.originalEvent.propertyName=='value';
            } else {
                valueChanged = true;
            }
            if (valueChanged) {
				
				var password = $(this).val();
				var wynik = 0;
				var warianty = {
					cyfry: /\d/.test(password),
					male: /[a-z]/.test(password),
					duze: /[A-Z]/.test(password),
					specjalne: /\W/.test(password),
					dlugosc: password.length > 4
				};
				for(var war in warianty)
				  if(warianty[war] === true) wynik += 20;
				
				var color = '#e8e9eb';
				
				if(wynik === 0) color ='#e8e9eb';
				else if(wynik > 0 && wynik < 50) color ='red';
				else if(wynik > 50 && wynik < 100) color ='yellow';
				else if(wynik == 100) color = 'lightgreen';
				$("#passwordStrength").text(wynik + '%');
				$("#passwordStrength").css('background-color', color);
               
            }
        });
       
    };
	
   
})(jQuery);