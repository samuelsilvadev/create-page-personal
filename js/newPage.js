/*
	Onde ficara as regras para criar nova pagina
*/

document.getElementById("btn-frm-contact-2").addEventListener("click",function(e){
	e.preventDefault();
	getFormPerson();
	getFormContact();
});

var biografiaNewUSer = {
    name:"",
    role:"",
    idade:0,
    habilidades:[],
    contacts:{
        "mobile":"",
        "email":"",
        "github":"",
        "twitter":"",
        "location":""
    },
    Biografia:"",
    imagemDoPerfil:"images/fry.jpg"
};

function getFormPerson(){
	for (let i = 0; i < document.getElementById("frm-initial").elements.length; i++) {
		
		let name = document.getElementById("frm-initial").elements[i].name;
		let value = document.getElementById("frm-initial").elements[i].value;
		
		if(name === "name"){
			biografiaNewUSer.name = value;
		}else if(name === "office"){
			biografiaNewUSer.role = value;
		}
	 }	 
}

function getFormContact(){
	for (let i = 0; i < document.getElementById("frm-contacts").elements.length; i++) {
		
		let name = document.getElementById("frm-contacts").elements[i].name;
		let value = document.getElementById("frm-contacts").elements[i].value;
		
		if(name === "mobile"){
			biografiaNewUSer.contacts.mobile = value;
		}else if(name === "email"){
			biografiaNewUSer.contacts.email = value;
		}else if(name === "github"){
			biografiaNewUSer.contacts.github = value;
		}else if(name === "twitter"){
			biografiaNewUSer.contacts.twitter = value;
		}else if(name === "location"){
			biografiaNewUSer.contacts.location = value;
		}
	 }	 
}