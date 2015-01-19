// Contact Information
var bio = {
    "name": "Sharif Mamun",
    "role": "Software Developer",
    "contacts": {
        "mobile": "+1-778-689-2015",
        "email": "sharif.mamun@gmail.com",
        "github": "sharifmamun",
        "twitter": "@sharifmamun",
        "location": "Vancouver, Canada"
    },
    "welcomeMessage": "Hello, Welcome to my SPA",
    "skills": [
        "C/C++",
        "Java",
        "Python",
        "JavaScript/JQuery",
        "Backbone.js"
    ],
    "biopic": "https://media.licdn.com/mpr/mpr/shrink_500_500/p/5/005/0a3/0a5/2cfe5de.jpg"
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name),
		formattedRole = HTMLheaderRole.replace("%data%", bio.role),
		formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
		formattedEmail = HTMLemail.replace("%data%", bio.contacts.email),
		formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github),
		formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter),
		formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#header").prepend(formattedRole)
				.prepend(formattedName);

	$("#topContacts").append(formattedMobile)
					 .append(formattedEmail)
					 .append(formattedGithub)
					 .append(formattedTwitter)
					 .append(formattedLocation);

	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
	$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));

	if (bio["skills"].length > 0){
		$("#header").append(HTMLskillsStart);
	    bio.skills.forEach(function(skill) {
	        var formattedSkill = HTMLskills.replace("%data%", skill);
	        $("#skills").append(formattedSkill);
	    });
	}


	$("#footerContacts").append(formattedMobile)
	    .append(formattedEmail)
	    .append(formattedGithub)
	    .append(formattedTwitter)
	    .append(formattedLocation);
}

bio.display();

// Education Section

var education = {
	"schools": [
		{
			"name": "University of Manitoba",
			"location": "Winnipeg, Canada",
			"degree": "MSc",
			"majors": ["Computer Science"],
			"dates": 2013,
			"url": "http://umanitoba.ca/"
		},
		{
			"name": "IUT",
			"location": "Dhaka, Bangladesh",
			"degree": "BSc",
			"majors": ["Computer Science"],
			"dates": 2009,
			"url": "http://iutoic-dhaka.edu/"
		}
	],

    "onlineCourses" : [
        {
            "title" : "Intro to HTML and CSS",
            "school" : "Udacity",
            "dates" : "2014",
            "url" : "https://www.udacity.com/course/ud304"
        },
        {
            "title" : "JavaScript Basics",
            "school" : "Udacity",
            "dates" : "2015",
            "url" : "http://www.udacity.com/course/ud804"
        }
    ]
};

education.display = function() {
   education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", school.name),
	        formattedLocation = HTMLschoolLocation.replace("%data%", school.location),
	        formattedDates = HTMLworkDates.replace("%data%", school.dates),
	        formattedDegree = HTMLschoolDegree.replace("%data%", school.degree),
	        formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);


        $(".education-entry:last").append(formattedName + formattedDegree)
            .append(formattedDates)
            .append(formattedLocation)
            .append(formattedMajor);
    });

    //Online Classes
    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses)
        			   .append(HTMLschoolStart);
        education.onlineCourses.forEach(function (course) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace('#', course.url),
            	formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school),
            	formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);

            $(".education-entry:last")
                .append(formattedOnlineTitle + formattedOnlineSchool)
                .append(formattedOnlineDates)
                .append('<br>');
        });
    }
};

education.display();

// Work Section
var work = {
	"jobs":[
		{
			"employer": "Beanworks Solutions Inc.",
			"title": "Software Developer in Test",
			"location": "Vancouver, British Columbia",
			"dates": "December, 2013 - Present",
			"description": "Working as a developer on automation and frontend stuffs."
		},
		{
			"employer": "Seytrack",
			"title": "Freelance Software Developer",
			"location": "Mahe, Seychelles",
			"dates": "July, 2013 - October, 2013 ",
			"description": "Worked as full stack developer on the largest GPS tracked vehicle system of Seychelles."
		},
		{
			"employer": "University of Manitoba",
			"title": "Research/Teaching Assistant",
			"location": "Winnipeg, Manitoba",
			"dates": "September, 2010 - November, 2013 ",
			"description": "Worked as RA for my thesis and TA for undergraduate courses."
		},
	]
};

//display work object
work.display = function() {
   work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer),
	        formattedTitle = HTMLworkTitle.replace("%data%", job.title),
	        formattedEmployerTitle = formattedEmployer + formattedTitle,
	        formattedEmployerLocation = HTMLworkLocation.replace("%data%", job.location),
	        formattedDates = HTMLworkDates.replace("%data%", job.dates),
	        formattedDescription = HTMLworkDescription.replace("%data%", job.description);

        $(".work-entry:last").append(formattedEmployerTitle)
            .append(formattedEmployerLocation)
            .append(formattedDates)
            .append(formattedDescription);
    });
};

work.display();

// Projects Section

var projects = {
	"projects": [
	{
		"title": "BeanworksAP",
		"dates": "2013 - Present",
		"description": "AP Automation",
		"images": ["images/automation.jpg"]
	},
	{
		"title": "Alignment Automation",
		"dates": "2010 - 2013",
		"description": "Worked on this project as part of my Master's thesis.",
		"images": ["images/alignment.png"]
	}
	]
};


projects.display = function() {
   projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title),
	        formattedDates = HTMLprojectDates.replace("%data%", project.dates),
	        formattedDescription = HTMLprojectDescription.replace("%data%", project.description),
	        formattedImage = "";

        $(".project-entry:last").append(formattedProjectTitle)
            .append(formattedDates)
            .append(formattedDescription);

	    if (project["images"].length > 0) {
	        project.images.forEach(function (image) {
	        	formattedImage = HTMLprojectImage.replace("%data%", image);
	            $(".project-entry:last").append(formattedImage);
	        });
	    }
    });
};

projects.display();

$("#letsConnect").prepend(work["current_job"]);
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);