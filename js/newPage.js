/*
	Onde ficara as regras para criar nova pagina
*/

let experience = [];

document.getElementById("btn-frm-contact-2").addEventListener("click",function(e){
	e.preventDefault();
	getFormPerson();
	getFormContact();	
});

document.getElementById("btn-frm-experience").addEventListener("click", function(e){
	e.preventDefault();
	addExperience();
	addExperienceInTable();
});


var biografiaNewUSer = {
    name:"",
    role:"",
    idade:0,
    habilidades:[],
    contacts:{},
    Biografia:"",
    imagemDoPerfil:"images/fry.jpg"
};

function getFormPerson(){
	let form = document.getElementById("frm-initial");
	for (let i = 0; i < form.elements.length; i++) {
		let name = form.elements[i].name;
		let value = form.elements[i].value;
		
		if(name === "name"){
			biografiaNewUSer.name = value;
		}else if(name === "office"){
			biografiaNewUSer.role = value;
		}
	 }	 
}

function getFormContact(){
	let form = document.getElementById("frm-contacts");
	
	for (let i = 0; i < form.elements.length; i++) {
		let name = form.elements[i].name;
		let value = form.elements[i].value;
		
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

function getFormExperience(){
	let form = document.getElementById("frm-experience");
	let employer = "";
	let title = "";
	let location = "";
	let dates = "";
	let description = "";
	for (let i = 0; i < form.elements.length; i++){
		let name = form.elements[i].name;
		let value = form.elements[i].value;
		switch (name){
			case "employer":
				employer = value;
			break;
			case "title":
				title = value;
			break;
			case "location":
				location = value;
			break;
			case "date-start":
				dates += value;
			break;
			case "date-finish":
				dates += " "+value;
			break;
			case "description":
				description = value;
			break;
			default:
				console.log("Erro ao ler propriedades do form -> frm-experience");
			break;
		}		
	}
	form.reset();
	return createObjectExperience(employer, title, location, dates, description);
}

function addExperience(){
	experience.push(getFormExperience());
}

function addExperienceInTable(){
	let table = document.querySelector("#tblExperience tbody");
	table.innerHTML += "<tr><td>"+experience.employer+"</td><td>"+experience.title+"</td><td>"+experience.location+"</td></tr>";
}

function createObjectExperience(employer, title, location, dates, description){
	return{
		employer:employer,
		title:title,
		location:location,
		dates:dates,
		description:description
	}
}

function createObjectContacts(mobile, email, github, twitter, location){
	return{
		mobile:mobile,
		email:email,
		github:github,
		twitter:twitter,
		location:location
	}
}