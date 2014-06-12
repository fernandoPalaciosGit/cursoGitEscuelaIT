var	AJAX = {
	xhr: null,
	cuentaAtras: null,
	timeoutAjax : 4000, //limite de tiempo de espera de petición
	shim: function(){
		if( window.XMLHttpRequest )
			this.xhr = new XMLHttpRequest();
		else if( window.ActiveXObject )
			this.xhr = new ActiveXObject("Microsoft.XMLHTTP");
		else
			this.xhr = null;
		return this.xhr;
	},
	state: {
		READY_STATE_UNINITIALIZED : 0,
		READY_STATE_LOADING : 1,
		READY_STATE_LOADED : 2,
		READY_STATE_INTERACTIVE : 3,
		READY_STATE_COMPLETE : 4 //si ha terminado de recibir los datos
	}
};


//validacion de formulario en cliente
var init = function(e_load){
	document.querySelector('[type:"submit"]').addEvenListener('click', validaciones, false);
	var attrCliente = {
		name: 'Pepito',
		surname: 'de los Palotes'
	};

	//validacion cliente
	var cliente = new Cliente(attrCliente);
	if ( cliente.getName() !== '' )
		document.documentElement.lastChild.innerHTML += '<strong>'.cliente.getName().'</strong>';

	//cargar datos customer
	AJAX.xhr = AJAX.shim(); 
	if( AJAX.xhr != null ){
		document.querySelector("#loadDataCustomer").addEventListener("click", function(){
			var ajaxParams = {
				url: '/templ/customer',
				type: 'POST',
				dataType: 'text',
				data: null
			};
			ajaxRequest(ajaxParams.url, ajaxParams.type, ajaxParams.dataType, ajaxParams.data);
		}, false);
	} else
		console.log("Este navegador no soporta peticiones asíncronas");
}

//recuperar petioc ajax
var ajaxRequest = function(paramsRequest){
	//controlar peticion ajax
};

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