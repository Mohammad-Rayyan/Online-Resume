// Objects
var bio = {
    "name": "Mohammad Rayyan",
    "role": "Web Developer",
    "contacts": {
        "mobile": "052-7568371",
        "email": "mkr.rayyan9@gmial.com",
        "github": "Mohammad-Rayyan",
        "twitter": "@mohamadrayyan",
        "location": "kabul,Israel"
    },
    "welcomeMessage": "Welcome to my Resume",
    "skills": ["FrontEnd", "FullStack", "BackEnd", "Web Developer"],
    "biopic": "https://leadingpersonality.files.wordpress.com/2013/05/smile.jpg"
};
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts,#footerContacts").append(formattedmobile);
    $("#topContacts,#footerContacts").append(formattedemail);
    $("#topContacts,#footerContacts").append(formattedtwitter);
    $("#topContacts,#footerContacts").append(formattedgithub);
    $("#topContacts,#footerContacts").append(formattedlocation);

    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedbioPic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMsg);

    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedskills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedskills);
    }

};

var education = {
    "schools": [{
        "name": "University of Haifa",
        "location": "Haifa",
        "degree": "CS",
        "majors": ["B.A"],
        "dates": "2013-2016",
        "url": "haifa.ac.il"
    }, {
        "name": "University of Haifa",
        "location": "Haifa",
        "degree": "CS",
        "majors": ["B.A", "M.A"],
        "dates": "2013-2016",
        "url": "haifa.ac.il"
    }],
    "onlineCourses": [{
        "title": "FrontEnd nanodegree",
        "school": "Udacity",
        "dates": "2016-now",
        "url": "Udacity.com"
    }, {
        "title": "FrontEnd nanodegree",
        "school": "Udacity",
        "dates": "2016-now",
        "url": "Udacity.com"
    }]
};
education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedname = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formatteddegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedname + formatteddegree);

        var formatteddates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formatteddates);

        var formattedlocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedlocation);

        for (var j = education.schools[i].majors.length - 1; j >= 0; j--) {
            var formattedmajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
            $(".education-entry:last").append(formattedmajor);
        }
    }
    $(".education-entry:last").append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length; i++) {
        var formattedtitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".education-entry:last").append(formattedname + formattedschool);

        var formatteddates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".education-entry:last").append(formatteddates);

        var formattedurl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedurl);
    }
};

var work = {
    "jobs": [{
        "employer": "none",
        "title": "none",
        "location": "Haifa",
        "dates": "never",
        "description": "I have no time"
    }, {
        "employer": "none",
        "title": "none",
        "location": "Haifa",
        "dates": "never",
        "description": "I have no time"
    }]
};
work.display = function() {

    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedemployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedtitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        $(".work-entry:last").append(formattedemployer + formattedtitle);

        var formatteddates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formatteddates);

        var formattedlocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedlocation);

        var formatteddescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formatteddescription);


    }
};

var projects = {
    "projects": [{
        "title": "none",
        "dates": "2016",
        "description": "I have no time",
        "images": ["http://bsdacademy.com/wp-content/uploads/2014/10/html-css-js.png"]
    }, {
        "title": "none",
        "dates": "2016",
        "description": "I have no time",
        "images": ["http://bsdacademy.com/wp-content/uploads/2014/10/html-css-js.png",
            "http://bsdacademy.com/wp-content/uploads/2014/10/html-css-js.png"
        ]
    }]
};
projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (var i = 0; i < projects.projects.length; i++) {
        var formattedtitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedtitle);

        var formatteddates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formatteddates);

        var formatteddescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formatteddescription);

        for (var j = 0; j < projects.projects[i].images.length; j++) {
            projects.projects[i].images[j]
            var formattedurl = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
            $(".project-entry:last").append(formattedurl);
        }
    }
};

//Display
bio.display();
work.display();
education.display();
projects.display();

//map
$('#mapDiv').append(googleMap);