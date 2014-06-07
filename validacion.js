//prototypo de cliente
var Cliente = function(attrClient){
	var API = {};
	var name = attrClient.name;
	var surname = attrClient.surname;
	API.getName = function(){
		return name+' '+surname;
	};
	
	return API;
}