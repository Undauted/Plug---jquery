$(document).ready(function (){
	

	$('#username').requiredField();
	$('#email').requiredField();
	$('#pswd').requiredField();
	$('#pswd-repeat').requiredField();
	
	
	$('#username').input( {text: "Wpisz nazwe uzytkownika"}).addClass("Color");
	$('#email').input( {text: "Wpisz email"}).addClass("Color");
	$('#pswd').input().addClass("Color");
	$('#pswd-repeat').input().addClass("Color");
	
	$('#username').validateUsername();


});