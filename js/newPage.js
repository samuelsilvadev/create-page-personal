/*
	Onde ficara as regras para criar nova pagina
*/

document.getElementById("btn-frm-contact-2").addEventListener("click",function(e){
	e.preventDefault();
	getFormContact();
});

var biografia = {
    name:"Samuel Silva",
    role:"Web Developer",
    idade:20,
    habilidades:["HTML5", "CSS3", "javascript", "jQuery", "less", "Grunt", "Gulp", "Java", "PHP"],
    contacts:{
        "mobile":"(85)99230-9769",
        "email":"samuelsilvawb@gmail.com",
        "github":"samuelsilvadev",
        "twitter":"@samuelsilvadev",
        "location":"Fortaleza - CE"
    },
    Biografia:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    imagemDoPerfil:"images/fry.jpg"
};

function getFormPerson(){

}

function getFormContact(){
	for (var i = document.getElementById("frm-contacts").elements.length - 1; i >= 0; i--) {
		let name = document.getElementById("frm-contacts").elements[i].name;
		let value = document.getElementById("frm-contacts").elements[i].value;
		
		if(name === "mobile"){
			biografia.contacts.mobile = value;
		}else if(name === "email"){
			biografia.contacts.email = value;
		}else if(name === "github"){
			biografia.contacts.github = value;
		}else if(name === "twitter"){
			biografia.contacts.twitter = value;
		}else if(name === "location"){
			biografia.contacts.location = value;
		}
	 }
	 console.log(biografia.contacts);
}