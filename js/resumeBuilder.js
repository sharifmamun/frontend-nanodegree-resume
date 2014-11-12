var formattedName = HTMLheaderName.replace("%data%", "S.M. Al Mamun");
var formattedRole = HTMLheaderRole.replace("%data%", "Software Developer");

//HTMLheaderName.replace("%data%", formattedName);
//HTMLheaderRole.replace("%data%", formattedRole);

var bio = {
    "name": "S. M. Al Mamun",
    "role": "Software Developer",
    "contacts": {
        "mobile": "+1-778-689-2015",
        "email": "sharif.mamun@gmail.com",
        "github": "https://github.com/sharifmamun",
        "location": "Vancouver"
    },
    "welcome_msg": "Hello",
    "skills": [
        "C/C++",
        "Java",
        "Python"
    ],
    "picture_url": "https://media.licdn.com/media/p/7/005/05d/1e4/38563d1.jpg"
};

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#header").append(HTMLcontactGeneric.replace("%data%", bio.contacts.mobile));
$("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#header").append(HTMLgithub.replace("%data%", bio.contacts.github));
//$("#header").append(bio.contacts.email);

// if (bio["skills"].length > 0){
 	$("#skillsChart").append(HTMLskillsStart);
// 	//$("#header").append(HTMLskills);
 	$("#skills").append(HTMLskills.replace("%data%", bio.skills[0]));
// }

var work = {
	"jobs":[{
	"title": "Software Developer in Test",
	"employer": "Beanworks Solutions Inc.",
	"location": "Vancouver",
	"dates": "December, 2013 - Present",
	"description": "Working as a developer on automation and backend stuffs."	
	},
	{
	"title": "Freelance Software Developer",
	"employer": "Seytrack",
	"location": "Seychelles",
	"dates": "July, 2013 - October, 2013 ",
	"description": "Working as a developer on automation and backend stuffs."	
	},
	]
};

for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	$(".work-entry:last").append(HTMLworkTitle.replace("%data%", work["jobs"][job]["title"]));
	$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work["jobs"][job]["employer"]));
	$(".work-entry:last").append(HTMLworkDates.replace("%data%", work["jobs"][job]["dates"]));	
	$(".work-entry:last").append("<br>");
}

var education = {
	"schools": [
	{
		"name": "University of Manitoba",
		"location": "Winnipeg, Manitoba",
		"degree": "MSc",
		"major":["CompSci"]	
	},
	{
		"name": "IUT",
		"location": "Dhaka, Bangladesh",
		"degree": "BSc",
		"major":["CompSci"]		
	}
	]
};

for (school in education.schools){
	$("#education").append(HTMLschoolStart);
	$(".education-entry:last").append(HTMLschoolName.replace("%data%", education["schools"][school]["degree"]));
	$(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education["schools"][school]["name"]));
	$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education["schools"][school]["major"]));		
}

var project = {
	"projects": [
	{
		"title": "BeanworksAP",
		"dates": "2013-",
		"description": "AP Automation",
		"image": "https://www.beanworks.com/wp-content/uploads/2014/02/slide1-work-smarter-not-harder.png"	
	},
	{
		"title": "Alignment Automation",
		"dates": "2013-",
		"description": "AP Automation",
		"image": "file://C:/Users/Mamun/Desktop/seytrax.png"	
	}
	]
};

abc();
//project.display = 
function abc() {
	
	for (val in project.projects){
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project["projects"][val]["title"]));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", project["projects"][val]["dates"]));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project["projects"][val]["description"]));
		if (project["projects"][val]["image"]) {
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", project["projects"][val]["image"]));	
		}
	}
}
//};


//$("#topContacts").append("<br/>");
//$("#topContacts").append(HTMLskills.replace("%data%", "Python"));
$("#letsConnect").prepend(work["current_job"]);
//$("#letsConnect").prepend("<br/>");
//$("#main").prepend(education.schools);
//$("#workExperience").append(HTMLskills.replace("%data%", "Python"));
$("#mapDiv").append(googleMap);
//$("#mapDiv").append(internationalizeButton);