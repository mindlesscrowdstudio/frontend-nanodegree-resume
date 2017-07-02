
console.log('resumeBuilder');

 var bio = {
   "name"    : "Melina Cisneros",
   "role"    : "frontend_developer",
   "contacts" : [{
     "mobile": "2213071467",
     "email" : "melinacisneross@gmail.com",
     "github": "mindlesscrowdstudio",
     "twitter" : "@clementinadrivr",
     "location": "buenos aires, argentina"
   }],
   "welcomeMessage" : "coding for good",
   "skills" : ["HTML5", "CSS3", "JS", "Jquery", "git", "Less"],
   "biopic"  : "images/cv.jpeg"
 }

//EDUCATION bracket notation
var education = {
 	"schools": [{
 			"name": "Universidad La Salle",
 			"location": "Ciudad de México",
 			"degree": "Licenciatura",
 			"majors": ["Comunicacion Audiovisual", "French"],
 			"dates": 2004,
 			"url": "http://www.lasalle.mx/"
 		},

 		{
 			"name": "Universidad Nacional de Arte",
 			"city": "Buenos Aires, Argentina",
 			"degree": "Licenciatura",
 			"majors": ["Artes Multimediales"],
 			"dates": 2017,
 			"url": "http://www.una.edu.ar"
 		}

 	],
 	"onlineCourses": [{
 			"title": "FrontEnd Nanodegree",
 			"school": "Udacity",
 			"dates": 2017,
 			"url": "https://classroom.udacity.com"
 		},
 		{
 			"title": "Full Web Stack Specialization",
 			"school": "Online Coursera Universidad Científica y Tecnológica de Hong Kong",
 			"dates": 2015,
 			"url": "https://www.coursera.org/specializations/full-stack"
 		}
 	]
}

 /*WORK*/
var work = {
  "jobs":[
      {
        "title"      : "frontend developer",
        "employer"   : "MRM/McCann",
        "location"   : "Buenos Aires, Argentina",
        "dates"      : "2016 -in progress",
        "description": "Working with Adobe Experience Manager platform from client-side, use of technlogies like, LESS, and JS frameworks as Require or Jquery, also Vanilla JS"
      },
      {
       "employer"   :"Digital Coaster, Web Agency",
       "title"      :"frontend Jr",
       "location"   :"México City, México",
       "dates"      :"2015",
       "description": "working with Bootstrap Sass,and laravel from the client-side"
      }
    ]
  } 


/*projects*/
var projects = {
   "projects":
     [
       {
         "title" : "Webpage Asetec",
         "dates" : "2015",
         "description" :"Wordpress page for scaffolding bussiness",
         "images" : "images/fry.jpg"
       },
       {
         "title" : "Webpage Luem",
         "dates" : "2015",
         "description" :"Video producer studio in La Plata, Argentina",
         "images" : "images/fry.jpg"
       }
     ]
		}


/**
 * adding name and role
 */

var newName = HTMLheaderName.replace("%data%", bio.name );
var newRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(newName);
$('#header').append(newRole);



/**
 * check if there's any skills in the bio object
 */
if (bio.skills) {
  console.log("has values inside");
 
  $('#header').append(HTMLskillsStart);
  /**
 * replacing the %data% for the values of the objects
 */
  var mySkill = HTMLskills.replace("%data%", bio.skills[0]);
  
  $("#skills").append(mySkill);

  mySkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(mySkill);
  
  mySkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(mySkill);

  mySkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(mySkill);

  mySkill = HTMLskills.replace("%data%", bio.skills[4]);
  $("#skills").append(mySkill);

  mySkill = HTMLskills.replace("%data%", bio.skills[5]);
  $("#skills").append(mySkill);
}



/**
 * loops 
 */

var cameron = {}
cameron.job = "course dev";

var courses = 0;

/**
 * defining the makeCourse function
 */
var makeCourse = function() {
  console.log('made a course');
}

while (cameron.job === "course dev") {
  makeCourse();
  courses = courses + 1;
  if(courses > 10) {
    cameron.job = "learning specialist";
  }
}

/**
 * for in loops let us access to arrays an objects 
 *
 * for (item in object or array ) {
 *  doSomething();
 * 
 * }
 * item is kind of iterator, whic we can givve any name that we want
 * NOTA: forEach or for loops are preferred over for-in loops when iterating over an array.
 *
 *
 * For in loops are considered as a bad practice because can be act weird 
 * instead it's recommenden to use for each or for loops.
 */

work.jobs.forEach(function(job){
  $("#workExperience").append(HTMLworkStart);

  var formatEmployer = HTMLworkEmployer.replace("%data%", job.employer);
  var formatTitle = HTMLworkTitle.replace("%data%", job.title);
  var formatEmployerTitle = formatEmployer + formatTitle;

  $(".work-entry:last").append(formatEmployerTitle);

  var formatDates = HTMLworkDates.replace("%data%", job.dates);
  $(".work-entry:last").append(formatDates);

  var formatLocation = HTMLworkLocation.replace("%data%", job.location);
  $(".work-entry:last").append(formatLocation);

  var formatDescription = HTMLworkDescription.replace("%data%", job.description);
 
   $(".work-entry").append(formatDescription);
  
  
});

/**
 * this is an iteration with the for in loop. only for demostration purposes
 */
/*for (job in work.jobs) {
  
  $("#workExperience").append(HTMLworkStart);

  if(work.jobs.hasOwnProperty(job)){

    var formatEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formatTitle    = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formatEmployerTitle = formatEmployer + formatTitle;
    
    $(".work-entry:last").append(formatEmployerTitle);

    var formatDates    = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formatDates);

    var formatLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    
    $(".work-entry:last").append(formatLocation);
   
    var formatDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formatDescription);   
    
  }    
}
*/















