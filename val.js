function cancelar(){
	var cancelButton = document.getElementById('cancel');
	document.getElementById("formulario").reset();
};

function MuestraForm(){
	document.getElementById("formulario").reset();
	document.getElementById("formulario").style.display='';
	document.getElementById("MuestraDatos").style.display='none';
	var btnReg = document.getElementById("RegresaForm");
	btnReg.hidden=true;
	location.reload(true);
	document.getElementById("Nombre").focus();
};


function validarFormulario(){

	var Nombre, ApellidoP, ApellidoMat, Rfc, EstadoC, Edad, Sexo, TelCasa, TelMovil, Email, Domi, Nac, Estado, Cd;
	var Grado, Institucion, Titulo, Cedula, FormacionAd;
	var NomEmpresa, DirEmpresa, Puesto, FechaIni, FechaFin, NomUltJef, TelMovilE, TelExt;
	var Ref1, Ref2;
	var Habilidades;

	//DATOS PERSONALES
	Nombre = document.getElementById("Nombre").value;
	if (Nombre == "" || Nombre ==" "){
		alert("Ingrese su nombre");
		document.getElementById("Nombre").focus();
		return false;
	}
	ApellidoP = document.getElementById("apellidoP").value;
	if (ApellidoP == "" || ApellidoP == " "){
		alert("Ingrese su apellido paterno");
		document.getElementById("apellidoP").focus();
		return false;
	}
	ApellidoMat = document.getElementById("apellidoM").value;
	if(ApellidoMat == "" || ApellidoMat == " "){
		alert("Ingrese su apellido materno");
		document.getElementById("apellidoM").focus();
		return false;
	}
	Rfc = document.getElementById("Rfc").value;
	if (Rfc == "" || Rfc ==" "){
		alert("Ingrese su RFC");
		document.getElementById("Rfc").focus();
		return false;
	}
	Edad = document.getElementById('select').value;
	if(Edad == ""){
	alert( "Seleccione su edad" );
	document.getElementById('select').focus();
	return false;
	}
	Sexo = document.getElementsByName("Sexo");
	var seleccionado = false;
		for(var i=0; i<Sexo.length; i++) {
			if(Sexo[i].checked) {
			seleccionado = true;
			break;
			}
		}
	if(!seleccionado) {
		alert("Seleccione su sexo");
		return false;
	}
	TelCasa = document.getElementById("tCasa").value;
	if( !(/^\d{10}$/.test(TelCasa)) ) {
		alert("Numero de telefono de casa invalido");
		document.getElementById("tCasa").focus();
		return false;
	}
	TelMovil = document.getElementById("tMovil").value;
	if( !(/^\d{10}$/.test(TelMovil)) ) {
		alert("Numero de telefono movil invalido");
		document.getElementById("tMovil").focus();
		return false;
	}
	Email = document.getElementById("Email").value;
		if( !(/\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(Email)) ) {
			alert("ingrese un email valido");
			document.getElementById("Email").focus();
			return false;
	}
	Domi = document.getElementById("Domi").value;
	if (Domi == "" || Domi ==" "){
		alert("Ingrese su domicilio");
		document.getElementById("Domicilio").focus();
		return false;
	}
	Nac = document.getElementsByName("Nac");
	var seleccionado = false;
		for(var i=0; i<Nac.length; i++) {
			if(Nac[i].checked) {
			seleccionado = true;
			break;
			}
		}
	if(!seleccionado) {
		alert("Seleccione su nacionalidad");
		return false;
	}
	Estado = document.getElementById('SE').value;
	if(Estado == ""){
	alert( "Seleccione su estado" );
	document.getElementById('SE').focus();
	return false;
	}
	Cd = document.getElementById('Cdd').value;
	if(Cd == ""){
	alert( "Seleccione su ciudad" );
	document.getElementById('Cdd').focus();
	return false;
	}

	//DATOS ACADEMICOS
	Grado = document.getElementsByName("GradoE");
	var seleccionado = false;
		for(var i=0; i<Grado.length; i++) {
			if(Grado[i].checked) {
			seleccionado = true;
			break;
			}
		}
	if(!seleccionado) {
		alert("Seleccione el grado de estudios");
		return false;
	}
	Institucion = document.getElementById('escuela').value;
	if(Institucion == ""){
	alert( "seleccione una Institucion" );
	document.getElementById('escuela').focus();
	return false;
	}
	Titulo = document.getElementsByName("Titulo");
	var seleccionado = false;
		for(var i=0; i<Titulo.length; i++) {
			if(Titulo[i].checked) {
			seleccionado = true;
			break;
			}
		}
	if(!seleccionado) {
		alert("Seleccione opcion titulado");
		return false;
	}
	Cedula = document.getElementById("Cedula").value;
	if( !(/^\d{7}$/.test(Cedula)) ) {
		alert("Numero de cédula inválido");
		document.getElementById("Cedula").focus();
		return false;
	}
	FormacionAd = document.getElementById("formacionA").value;
	if(FormacionAd == "" || FormacionAd == " "){
	alert( "Describa la informacion adicional" );
	document.getElementById("formacionA").focus();
	return false;
	}

	//DATOS PROFESIONALES
	NomEmpresa = document.getElementById("NomEmpresa").value;
	if(NomEmpresa ==""){
		alert( "Ingese el nombre de la ultima empresa" );
		document.getElementById("NomEmpresa").focus();
		return false;
	}
	DirEmpresa = document.getElementById("DirEmpresa").value;
	if(DirEmpresa =="") {
		alert( "Ingese la dirección de la empresa" );
		document.getElementById("DirEmpresa").focus();
		return false;
	}
	Puesto = document.getElementById("Puesto").value;
	if(Puesto ==""){
		alert( "Ingese el ultimo puesto que desempeñó" );
		document.getElementById("Puesto").focus();
		return false;
	}
	FechaIni = document.getElementById("FechaI").value;
	FechaFin = document.getElementById("FechaF").value;
	if(FechaIni > FechaFin || (!isNaN (FechaIni)) || (!isNaN (FechaIni)) || FechaIni == FechaFin ){
		alert ("Ingrese un año de inicio valido");
		document.getElementById("FechaI").focus();
		return false;
	}
	NomUltJef = document.getElementById("NomJefe").value;
	if(NomUltJef == "" ||NomUltJef == " "){
		alert("Ingrese el nombre de su ultimo jefe");
		document.getElementById("NomJefe").focus();
		return false;
	}
	TelMovilE = document.getElementById("telmovil").value;
	if( !(/^\d{10}$/.test(TelMovilE)) ) {
		alert("Numero telefonico movil invalido");
		document.getElementById("telmovil").focus();
		return false;
	}
	TelExt = document.getElementById("ext").value;
	if( TelExt=="") {
		alert("Ingese un numero de extension valida");
		document.getElementById("ext").focus();
		return false;
	}

	//REFERENCIAS
	Ref1 = document.getElementById("Ref1").value;
	if(Ref1 =="" || Ref1 ==" "){
		alert( "Ingese su primer referencia" );
		document.getElementById("Ref1").focus();
		return false;
	}
	Ref2 = document.getElementById("Ref2").value;
	if(Ref2 =="" || Ref2 ==" "){
		alert( "Ingese su segunda referencia" );
		document.getElementById("Ref2").focus();
		return false;
	}
	//HABILIDADES
	Habilidades = document.getElementById("Habilidades").value;
	if(Habilidades =="" || Habilidades ==" "){
		alert( "Ingese sus habilidades" );
		document.getElementById("Habilidades").focus();
		return false;
	}

	obtieneDatos();
};

function validaTexto(e){
	key = e.keyCode || e.which;
	tecla = String.fromCharCode(key).toLowerCase();
	letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
	especiales = "8-37-39-46";
	tecla_especial = false;
	for (var i in especiales){
		if(key == especiales[i]){
			tecla_especial=true;
			break;
		}
	}
	if (letras.indexOf(tecla)==-1 && !tecla_especial){
		return false;
	}
}

function obtieneDatos(){
	document.getElementById("formulario").style.display='none';
	var btnReg = document.getElementById("RegresaForm");
	btnReg.hidden=false;
	var btnMuestra = document.getElementById("MuestraDatos");
	btnMuestra.hidden=false;

	var Nombre, ApellidoP, ApellidoMat, Rfc, EstadoC, Edad, Sexo, TelCasa, TelMovil, Email, Domi, Nac, Estado, Cd;
	var Val;
	var Grado, Institucion, Titulo, Cedula, FormacionAd;
	var NomEmpresa, DirEmpresa, Puesto, FechaIni, FechaFin, NombreJefe, TelMovilE, TelExt;
	var Ref1, Ref2;
	var Habilidades;

	Nombre = document.getElementById('Nombre').value;
	ApellidoP = document.getElementById('ApellidoP').value;
	ApellidoM = document.getElementById('ApellidoM').value;
	Val = Nombre + " " + ApellidoP + " " + ApellidoM;
	Val = Val.toUpperCase();
	Rfc = document.getElementById('Rfc').value;
	EstadoC = document.getElementsByName("EstadoC");
	var SelectEs;
	for(var i=0; i<EstadoC.length; i++) {
		if(EstadoC[i].checked) {
			seleccionado = true;
			SelectEs = EstadoC[i].value;
			break;
		}
	}
	Edad = document.getElementById('select').value;
	Sexo = document.getElementsByName("Sexo");
	var SelectSex;
	for(var i=0; i<Sexo.length; i++) {
		if(Sexo[i].checked) {
			seleccionado = true;
			SelectSex = Sexo[i].value;
			break;
		}
	}
	TelCasa = document.getElementById('tCasa').value;
	TelMovil = document.getElementById('tMovil').value;
	Email = document.getElementById('Email').value;
	Domi = document.getElementById('Domi').value;
	Nac = document.getElementsByName("Nac");
	var SelectNac;
	for(var i=0; i<Nac.length; i++) {
		if(Nac[i].checked) {
			seleccionado = true;
			SelectNac = Nac[i].value;
			break;
		}
	}
	Estado = document.getElementById('SelectEs').value;
	Cd = document.getElementById('Cdd').value;

	//----------------------------------------------------------------------------

	Grado = document.getElementsByName("GradoE");
	var SelectGrad;
	for(var i=0; i<Grado.length; i++) {
		if(Grado[i].checked) {
			seleccionado = true;
			SelectGrad = Grado[i].value;
			break;
		}
	}
	Institucion = document.getElementById('escuela').value;
	Titulo = document.getElementsByName("Titulo");
	var SelectTit;
	for(var i=0; i<Titulo.length; i++) {
		if(Titulo[i].checked) {
			seleccionado = true;
			SelectTit = Titulo[i].value;
			break;
		}
	}
	Cedula = document.getElementById('Cedula').value;
	FormacionAd = document.getElementById("formacionA").value;

	//----------------------------------------------------------------------------

	NomEmpresa = document.getElementById('NomEmpresa').value;
	DirEmpresa = document.getElementById('DirEmpresa').value;
	Puesto = document.getElementById('PuestoD').value;
	FechaIni = document.getElementById("FechaI").value;
	FechaFin = document.getElementById("FechaF").value;
	NombreJefe = document.getElementById('NomJefe').value;
	TelMovilE = document.getElementById('telmovil').value;
	TelExt = document.getElementById('ext').value;

	//----------------------------------------------------------------------------

	Ref1 = document.getElementById("Ref1").value;
	Ref2 = document.getElementById("Ref2").value;

	//----------------------------------------------------------------------------

	Habilidades = document.getElementById("Habilidades").value;


	document.getElementById("Titulo").innerHTML=Val;//de tipo TagName body, append hace que cuando refresque se vea en la etiqueta body
	document.getElementById("Rfc").innerHTML=Rfc;
	document.getElementsById("EstadoC").innerHTML=SelectEs;
	document.getElementById("pEdad").innerHTML=Edad;
	document.getElementById("pSexo").innerHTML=SelectSex;
	document.getElementById("pTel1").innerHTML=TelCasa;
	document.getElementById("pTel2").innerHTML=TelMovil;
	document.getElementById("pEmail").innerHTML=Email;
	document.getElementById("Domi").innerHTML=Domi;
	document.getElementsById("Nac").innerHTML=SelectNac;
	document.getElementById("Estado").innerHTML=SelectEs;
	document.getElementById("Cd").innerHTML=Cdd;

	document.getElementById("GradoEst").innerHTML=SelectGrad;
	document.getElementById("NomInst").innerHTML=Institucion;
	document.getElementById("Titulado").innerHTML=SelectTit;
	document.getElementById("Cedula").innerHTML=Cedula;
	document.getElementById("Formacion").innerHTML=FormacionAd;

	document.getElementById("NomEmp").innerHTML=NomEmpresa;
	document.getElementById("DirEmp").innerHTML=DirEmpresa;
	document.getElementById("Puesto").innerHTML=Puesto;
	document.getElementById("FI").innerHTML=FechaIni;
	document.getElementById("FT").innerHTML=FechaFin;
	document.getElementById("NombreJefe").innerHTML=NombreJefe;
	document.getElementById("Movil").innerHTML=TelMovilE;
	document.getElementById("Extension").innerHTML=TelExt;

	document.getElementById("Ref1").innerHTML=Ref1;
	document.getElementById("Ref2").innerHTML=Ref2;

	document.getElementById("habilidad").innerHTML=Habilidades;



};
