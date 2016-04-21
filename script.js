$(document).ready(function (){
	
	$('#name').requiredField();
	$('#username').requiredField();
	$('#email').requiredField();
	$('#pswd').requiredField();
	$('#pswdRepeat').requiredField();
	
	$('#name').patternUsername( {pattern: /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłóńśźż]{2,}$/} );
	$('#name').input( {text: "Wpisz imie"}).addClass("Color");
	$('#username').input( {text: "Wpisz nazwe uzytkownika"}).addClass("Color");
	$('#email').input( {text: "Wpisz email"}).addClass("Color");
	$('#pswd').input().addClass("Color");
	$('#pswdRepeat').input().addClass("Color");
	
	$('#username').patternUsername();
	$('#email').patternEmail();
	$('#pswd').passwordStrength();
	$('#pswdRepeat').checkPassword();
	
	$('#yes').magic();

	
	
});