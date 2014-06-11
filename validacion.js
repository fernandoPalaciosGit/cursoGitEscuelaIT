<<<<<<< HEAD
//validacion de formulario en cliente
var inti = function(e_load){
	document.querySelector('[type:"submit"]').addEvenListener('click', validaciones, false);
	var attrCliente = {
		name: 'Pepito',
		surname: 'de los Palotes'
	};
	var cliente = new Cliente(attrCliente);
	if ( cliente.getName() !== '' )
		document.documentElement.lastChild.innerHTML += '<strong>'.cliente.getName().'</strong>';

}
//prototypo de cliente
var Cliente = function(attrClient){
	var attrClient = attrClient || {};
	var name = attrClient.name;
	var surname = attrClient.surname;
	
	var API = {};
	API.getName = function(){
		return name+' '+surname;
	};
	
	return API;
}

//prototipo de proveedor
var Customer = function(attrCustomer){
	var attrCustomer = attrCustomer || {};
	var name = attrCustomer.name;
	var surname = attrCustomer.surname;
	
	var API = {};
	API.getName = function(){
		return name+' '+surname;
	};
	
	return API;
};

var validaciones = function(e_click){
	e.click.preventDefault();
	console.log('validaciones de cliente antes de enviar el formulario');
};

window.onload = init;