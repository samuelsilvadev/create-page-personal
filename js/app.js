var repete = "%data%";

var header          = document.getElementById("header");
var topContacts     = document.getElementById("topContacts");
var footerContacts  = document.getElementById("footerContacts");

//removendo para adicionar depois
header.removeChild(topContacts);

HTMLheaderName = HTMLheaderName.replace(repete, biografia.name);
HTMLheaderRole = HTMLheaderRole.replace(repete, biografia.role);
HTMLbioPic = HTMLbioPic.replace(repete,biografia.imagemDoPerfil);

header.innerHTML += HTMLheaderName;
header.innerHTML += HTMLheaderRole;
//header.innerHTML += internationalizeButton;
                
HTMLmobile      = HTMLmobile.replace(repete, biografia.contacts.mobile);
HTMLemail       = HTMLemail.replace(repete, biografia.contacts.email);
HTMLgithub      = HTMLgithub.replace(repete, biografia.contacts.github);
HTMLtwitter     = HTMLtwitter.replace(repete, biografia.contacts.twitter);
HTMLlocation    = HTMLlocation.replace(repete, biografia.contacts.location);

topContacts.innerHTML += HTMLmobile + HTMLemail + HTMLgithub + HTMLtwitter + HTMLlocation;
header.appendChild(topContacts);
header.innerHTML += HTMLbioPic;
header.innerHTML += HTMLskillsStart;

biografia.habilidades.forEach(function(key){
    document.getElementById("skills").innerHTML += HTMLskills.replace(repete,key);
});
        
footerContacts.innerHTML += HTMLmobile + HTMLemail + HTMLgithub + HTMLtwitter + HTMLlocation;

var workExperience = document.getElementById("workExperience");

if(work.work.length === 0) {
    document.getElementById('workExperience').style.display = 'none';
}else{
    seeWork();                    
};

var projectsPerformed = document.getElementById("projects");

if(!projects.display){
    document.getElementById('projects').style.display = 'none';
}else{
    seeProjects();
} 

function seeWork(){
    work.work.forEach(function(work){
        /*var divWork  = HTMLworkStart;*/
        let employer = HTMLworkEmployer;
        let titleJob = HTMLworkTitle;
        let locationWork = HTMLworkLocation;
        let description = HTMLworkDescription;
        employer = employer.replace(repete, work.employer);
        titleJob = titleJob.replace(repete, work.title);
        locationWork = locationWork.replace(repete, work.location);
        description = description.replace(repete, work.description);
        workExperience.innerHTML += "<div class='work-entry'>" + employer + titleJob + locationWork + description + "<div>";
    });
}

function seeProjects(){
    projects.projects.forEach(function(projects){
        /*var divWork  = HTMLworkStart;*/
        let projectTitle = HTMLprojectTitle;
        let projectDates = HTMLprojectDates;
        let projectDescription = HTMLprojectDescription;
        //var projectImage = HTMLprojectImage;
        projectTitle = projectTitle.replace(repete, projects.title);
        projectDates = projectDates.replace(repete, projects.dates);
        projectDescription = projectDescription.replace(repete, projects.description);
        
        projectsPerformed.innerHTML += "<div class='project-entry'>" + projectTitle + projectDates + projectDescription + "<div>";
    });            
}

var educationMe = document.getElementById("education");
function seeEducationSchools(){        
    education.schools.forEach(function(n){
        let schoolName = HTMLschoolName;
        let schoolDegree = HTMLschoolDegree;
        let schoolDates = HTMLschoolDates;
        let schoolLocation = HTMLschoolLocation;
        let schoolMajor = HTMLschoolMajor;
        schoolName = schoolName.replace(repete, n.name);
        schoolDegree = schoolDegree.replace(repete, n.degree);
        schoolDates = schoolDates.replace(repete, n.degreedates);
        schoolLocation =schoolLocation.replace(repete, n.location);
        educationMe.innerHTML += '<div class="education-entry">'+schoolName + schoolDegree + schoolDates + schoolLocation+'</div><br>'
    });         
}

function seeEducationOnlineCourses(){
    educationMe.innerHTML += HTMLonlineClasses;
    education.onlineCourses.forEach(function(n){
        let onlineTitle =  HTMLonlineTitle.replace(repete, n.title);
        let onlineSchool = HTMLonlineSchool.replace(repete, n.school);
        let onlineDates =  HTMLonlineDates.replace(repete, n.dates);
        let onlineURL = HTMLonlineURL.replace(repete, n.url);
        educationMe.innerHTML += '<div class="education-entry">'+ onlineTitle + onlineSchool + onlineDates + onlineURL + '</div><br>';
    });
}

seeEducationSchools();
seeEducationOnlineCourses();

function seePagePersonal(){
    document.getElementById("main").style.display = "none";
    document.getElementById("main-page-personal").style.display = "block";    
}

function seeMainPage(){
    document.getElementById("main-page-personal").style.display = "none";
    document.getElementById("main").style.display = "block";    
}

document.getElementById("btn-main").addEventListener("click",seePagePersonal);
document.getElementById("btn-main-2").addEventListener("click",seeMainPage);