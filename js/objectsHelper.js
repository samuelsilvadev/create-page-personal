var work = {
	work:
	[
		{
			employer:"Sotech Saúde e Tecnologia", 
			title:"Full stack Developer", 
			location:"Eusébio - CE", 
			dates:"2015 - 2016",
			description:"Desenvolvimento de ERP na área da saúde utilizando JAVA no Backend. JSF como framework component based."
		},
		{
			employer:"S&S", 
			title:"Frontend Developer", 
			location:"Pacajus - CE", 
			dates:"2014- 2014",
			description:"Desenvolvimento de aplicações internas, utilizando PHP e as bases do frontend. Experiência com Bootstrap."
		},
		{
			employer:"Armtec", 
			title:"Web Developer", 
			location:"Fortaleza - CE", 
			dates:"2013 - 2016",
			description:"Desenvolvimento de aplicações web utilizando PHP no backend e os pilares do frontend(HTML5, CSS3 e javascript + JQuery)"
		}
	]
};

var projects = {
	projects:
	[
		{
			title:"Vaccinação", 
			dates:"2016",
			description:"Projeto criado para retirar cartão de vacina manual, tornando-o digital",
			urlImage:""
		},
        {
			title:"Task", 
			dates:"2016",
			description:"Projeto realizado para facilitar o acompanhamento de tarefas em qualquer ambiente",
			urlImage:""
		},
        {
			title:"SOS", 
			dates:"2015",
			description:"Projeto desenvolvido para facilitar o envio de chamados para qualquer setor de uma empresa",
			urlImage:""
		},
		{
			title:"Altair Diário Virtual",
			dates:"2014",
			description:"Projeto para retirar utilização do diário de classe manual",
			urlImage:""
		}
	],
    display:function(){
        if(this.projects.length > 0){
            return true;
        }       
        return false;
    }
};

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
        
var education = {
	schools:
		[
			{
				name:"Faculdade Ateneu", 
				location:"Fortaleza - CE", 
				degreedates:"2014 - 2016",
				site:"http://fate.edu.br/",
				degree:"Ensino Superior",
				majors:[]
			},
			{
				name:"EEEP José Maria Falcão", 
				location:"Pacajus - CE", 
				degreedates:"2011 - 2013",
				site:"http://escolaprofissionalpacajus.blogspot.com.br/",
				degree:"Ensino Profissional",
				majors:[]
			}
		],
	onlineCourses:
		[
			{
				title:"HTML Básico", 
				school:"Fundação bradesco", 
				dates:"2011",
				url:"http://www.ev.org.br/Paginas/Home.aspx"
			},
			{
				title:"HTML Avançado", 
				school:"Fundação bradesco", 
				dates:"2011",
				url:"http://www.ev.org.br/Paginas/Home.aspx"
			},
			{
				title:"Inovando com CSS", 
				school:"Fundação bradesco", 
				dates:"2011",
				url:"http://www.ev.org.br/Paginas/Home.aspx"
			}
		]
};