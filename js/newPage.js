/*
	Onde ficara as regras para criar nova pagina
*/

let experience = [];
let projectsDone = [];

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

document.getElementById("btn-frm-projects-done").addEventListener("click", function(e){
	e.preventDefault();
	getFormProjectsDone();
});


var biographyNewUSer = {
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
			biographyNewUSer.name = value;
		}else if(name === "office"){
			biographyNewUSer.role = value;
		}
	 }	 
}

function getFormContact(){
	let form = document.getElementById("frm-contacts");
	
	for (let i = 0; i < form.elements.length; i++) {
		let name = form.elements[i].name;
		let value = form.elements[i].value;
		
		if(name === "mobile"){
			biographyNewUSer.contacts.mobile = value;
		}else if(name === "email"){
			biographyNewUSer.contacts.email = value;
		}else if(name === "github"){
			biographyNewUSer.contacts.github = value;
		}else if(name === "twitter"){
			biographyNewUSer.contacts.twitter = value;
		}else if(name === "location"){
			biographyNewUSer.contacts.location = value;
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
	let indice = experience.length - 1;
	table.innerHTML += 
		"<tr><td>"+experience[indice].employer+"</td><td>"+experience[indice].title+"</td><td>"+experience[indice].location+"</td></tr>";
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

function createGenericObject(){
	let finalObject = {};
	for(let i = 0; i < arguments.length; i ++){
		let object = arguments[i].split(":");
		finalObject[object[0]] = object[1];
	}
	return finalObject;
}

function getFormProjectsDone(){
	let form = document.getElementById("frm-projects-done");
	let campos = [];
	for(let element = 0; element < form.elements.length; element++){
		if(form.elements[element].tagName == "INPUT" || form.elements[element].tagName == "TEXTAREA"){
			campos.push(form.elements[element].name+":"+form.elements[element].value);
		}
	}
	/*console.log(campos.join(","));
	console.log(createGenericObject(campos.join(",")));*/
	return campos.join(",");
}

