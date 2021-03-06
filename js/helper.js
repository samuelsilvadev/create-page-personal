
var HTMLheaderName;
var HTMLheaderRole;
var HTMLcontactGeneric;
var HTMLmobile;
var HTMLemail;
var HTMLtwitter;
var HTMLgithub;
var HTMLblog;
var HTMLlocation;
var HTMLbioPic;
var HTMLwelcomeMsg;

function clearBiografia(){

HTMLheaderName = '<h1 id="name">%data%</h1>';
HTMLheaderRole = '<span>%data%</span><hr>';

HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

HTMLbioPic = '<img src="%data%" class="biopic">';
HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

}

var HTMLskillsStart = '<h3 id="skills-h3">Habilidades:</h3><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

window.onload = function(){
  //botão para alterar internacionalização do nome
  /*document.getElementsByTagName('button')[0].addEventListener('click',function(){
    var name = document.querySelector('#name');
    var iName = inName(name.textContent) || function(){};
    name.innerHTML = iName;
  });*/ 
}

function inName(name){
    var newName = name.trim().split(" ");
    return newName[0] +" "+ newName[1].toUpperCase();
}

//coletar cliques do usuário
var clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

document.addEventListener("click", function(e){
  logClicks(e.clientX, e.clientY); 
});

var map; 

function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  map = new google.maps.Map(document.querySelector('#mapDiv'), mapOptions);

    function locationFinder() {

        let locations = [];

        locations.push(biografia.contacts.location);

        education.schools.forEach(function(school){
          locations.push(school.location);
        });

        work.work.forEach(function(job){
          locations.push(job.location);
        });

        return locations;
    }

    function createMapMarker(placeData) {

        var lat = placeData.geometry.location.lat();
        var lon = placeData.geometry.location.lng();
        var name = placeData.formatted_address;
        var bounds = window.mapBounds;

    
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    google.maps.event.addListener(marker, 'click', function() {

    });

    bounds.extend(new google.maps.LatLng(lat, lon));

    map.fitBounds(bounds);

    map.setCenter(bounds.getCenter());
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  function pinPoster(locations) {

    var service = new google.maps.places.PlacesService(map);


      locations.forEach(function(place){

      var request = {
        query: place
      };

      service.textSearch(request, callback);
    });
  }


  window.mapBounds = new google.maps.LatLngBounds();

  locations = locationFinder();

  pinPoster(locations);

}


window.addEventListener('load', initializeMap);
window.addEventListener('resize', function(e) {
    map.fitBounds(mapBounds);
});


clearBiografia();