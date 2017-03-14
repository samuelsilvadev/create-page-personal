/*
	Onde ficara as regras para criar nova pagina
*/

let experience = [];
let projectsDone = [];
let biographyNewUSer = {
    idade:0,
    habilidades:[],
    contacts:{},
    Biografia:"",
    imagemDoPerfil:"images/fry.jpg"
};

document.getElementById("btn-frm-biografia").addEventListener("click",function(e){
	e.preventDefault();
	Object.assign(biographyNewUSer, createGenericObject(getForm("frm-initial")));
	Object.assign(biographyNewUSer.contacts, createGenericObject(getForm("frm-contacts")));
	console.log(biographyNewUSer);
	console.log(biografia);	
});

document.getElementById("btn-frm-experience").addEventListener("click", function(e){
	e.preventDefault();
	experience.push(createGenericObject(getForm("frm-experience")));
	addExperienceInTable();	
});

document.getElementById("btn-frm-projects-done").addEventListener("click", function(e){
	e.preventDefault();
	projectsDone.push(createGenericObject(getForm("frm-projects-done")));
	console.log(projectsDone);
});

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

function addExperienceInTable(){
	let table = document.querySelector("#tblExperience tbody");
	let indice = experience.length - 1;
	table.innerHTML += 
		"<tr><td>"+experience[indice].employer+"</td><td>"+experience[indice].title+"</td><td>"+experience[indice].location+"</td></tr>";
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

function createGenericObject(fields){
	let finalObject = {};
	for(let i = 0; i < fields.length; i ++){
		let object = fields[i].split(":");
		finalObject[object[0]] = object[1];
	}
	return finalObject;
}

function getForm(idForm){
	let form = document.getElementById(idForm);
	let campos = [];
	for(let element = 0; element < form.elements.length; element++){
		if(form.elements[element].tagName == "INPUT" || form.elements[element].tagName == "TEXTAREA"){
			campos.push(form.elements[element].name+":"+form.elements[element].value);
		}
	}
	return campos;
}
