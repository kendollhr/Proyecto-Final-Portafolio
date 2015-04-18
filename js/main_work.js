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
		var workDetails = "";
			workDetails += '<div id="details" class="details">' +
			'<img class="proyect-imagen-details" id="gallery"class src='+ view[0].img + '>' +
			'<h3 class="proyect-subtitle">' + view[0].nombre + '</h3>' +
			'<p class="proyect-text">' + view[0].descripcion2 + '</p>' +
			'</div>'
			
		document.getElementById("details").innerHTML = workDetails;
	}
});

//Firmsware

var imgNow = 0;
var proyectsGallery = [
	"imagen/iluminada.png",
	"imagen/elblog.png",
	"imagen/elcaminito.png",
	"imagen/drupalcamp.png"
]

var Imgs =  proyectsGallery.length - 1;

function proyectNext() {
	imgNow++;
	if(imgNow > Imgs) imgNow = 0
	document.getElementById("gallery").src =  proyectsGallery[imgNow];
}

function proyectPrevious() {
	imgNow--;
	if(imgNow < 0) imgNow = Imgs;
	document.getElementById("gallery").src =  proyectsGallery[imgNow];
}