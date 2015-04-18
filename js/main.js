$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: 'js/works.json',
		dataType: "json",
   		success:function(data){
			mostrarProyectos(data.works);
					
		},
		error:function(jqXHR, textStatus, errorThrown) {
			console.log("Text Status:" + textStatus + "\nError:" +errorThrown);
		}
	});

function mostrarProyectos(view){
	var works = "";
	for (var i = 0; i < view.length; i++){
		works += '<div class="portfolio-work">' +
		'<img class="proyect-imagen" src='+ view[i].img + '>' +
		'<div class="overlay">' +
			'<a href="work.html" class="see-work">' + 'See work'+'</a>' +
		'</div>' +
		'<h3 class="proyect-subtitle">' + view[i].nombre + '</h3>' +
		'<p class="proyect-text">' + view[i].descripcion + '</p>' +
		'</div>'
	}
	document.getElementById("works-container").innerHTML = works;
}	


});



document.getElementById("submit-button").onclick = function() {

  name_value = document.getElementById("name").value;
  email_value = document.getElementById("email").value;
  message_value = document.getElementById("message").value;

  var characters = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/;
  
  array_values = [];

  if (name_value == null || name_value.length == 0 || /^\s+$/.test(name_value)){
    alert('El Nombre no es permitido');
    return false;
  }else{
    array_values.push(name_value);
  }
  if (email_value == null || email_value.length == 0 || chars.test(email_value) || /^\s+$/.test(email_value)){
    alert('El Email no es permitido');
    return false;
  }else{
    array_values.push(email_value);
  }
  if (message_value == null || message_value.length == 0 || /^\s+$/.test(message_value)){
    alert('Escribe un mensaje');
    return false;

  } else {
    array_values.push(message_value);
    alert('El mensage fue enviado exitosamente, Gracias por tu comentario!');
    document.getElementById("form-contact").reset();
    return false;
  }
}