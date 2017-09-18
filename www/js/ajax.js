function nuevoAjax(){
	var xmlhttp=false;
	try{
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	}catch(e){
		try {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}catch(E){
			xmlhttp = false;
		}
	}	
	if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}

function enviarMail(){
       c = document.getElementById('enviat');
   
       //variable=documenet.nombre_del_form.nombre_del_control.value
       emis=document.enviar_email.emisor.value;
       asun=document.enviar_email.asun.value;
       men= document.enviar_email.codi.value + "<br>" + document.enviar_email.opcio.value;
   
       ajax=nuevoAjax();
       c.innerHTML = '<p style="text-align:center;"><img src="http://www.pastinova.com/imatges/esperando.gif"/><br />Esperando connexion</p>'; 
       ajax.open("POST", "http://carnsvila.cat/envia_mail.php",true);
       ajax.onreadystatechange=function() {
		   if (ajax.readyState==4) {
			   	if ( ajax.responseText != "" ) c.innerHTML = ajax.responseText;
		   }
       		borrarCampos()
       }
       ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
       ajax.send("assum="+asun+"&emisor="+emis+"&missatge="+men)
}

function borrarCampos() {
       
       
}// JavaScript Document