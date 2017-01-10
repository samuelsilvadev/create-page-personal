/*
	Onde ficara as regras para criar nova pagina
*/

document.getElementById("btn-frm-contact-2").addEventListener("click",function(e){
	e.preventDefault();
	getFormContact();
});

function getFormContact(){
	console.log(document.forms[0].elements);
}