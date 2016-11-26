	
	$(document).ready(function() {
		displayDefaultChart();
		$('select').material_select();
	    $('#fullpage').fullpage({
	        //Navigation
	        menu: '#menu',
	        lockAnchors: false,
	        anchors:['home', 'meet-greet','prowess','webworks','communicate','online-journal'],
	        navigation: false,
	        navigationPosition: 'right',
	        navigationTooltips: ['home', 'meet-greet','prowess','webworks','communicate','online-journal'],
	        showActiveTooltip: false,
	        slidesNavigation: false,
	        slidesNavPosition: 'bottom',

	        //Scrolling
	        css3: true,
	        scrollingSpeed: 700,
	        autoScrolling: true,
	        fitToSection: true,
	        fitToSectionDelay: 1000,
	        scrollBar: false,
	        easing: 'easeInOutCubic',
	        easingcss3: 'ease',
	        loopBottom: false,
	        loopTop: false,
	        loopHorizontal: true,
	        continuousVertical: false,
	        continuousHorizontal: false,
	        scrollHorizontally: false,
	        interlockedSlides: false,
	        dragAndMove: false,
	        offsetSections: false,
	        resetSliders: false,
	        fadingEffect: true,
	        normalScrollElements: '#element1, .element2',
	        scrollOverflow: false,
	        scrollOverflowOptions: null,
	        touchSensitivity: 15,
	        normalScrollElementTouchThreshold: 5,
	        bigSectionsDestination: null,

	        //Accessibility
	        keyboardScrolling: false,
	        animateAnchor: false,
	        recordHistory: true,

	        //Design
	        controlArrows: true,
	        verticalCentered: true,
	        sectionsColor : ['#212626', '#283593', '#ffffff', '#4527a0', '#ef6c00', '#ef5350'],
	        paddingTop: '3em',
	        paddingBottom: '10px',
	        fixedElements: '#header, .footer',
	        responsiveWidth: 0,
	        responsiveHeight: 0,
	        responsiveSlides: true,

	        //Custom selectors
	        sectionSelector: '.section',
	        slideSelector: '.slide',

	        lazyLoading: true,

	        //events
	        onLeave: function(index, nextIndex, direction){
	        	
	        },
	        afterLoad: function(anchorLink, index){
	        	if(anchorLink=="meet-greet"){
	        		 first_intro();
	        	}
	        },
	        afterRender: function(){new WOW().init();},
	        afterResize: function(){},
	        afterResponsive: function(isResponsive){},

	        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
	        	console.log('afterSlideLoad');
	        	switch(slideIndex){
	        		
	        	}
	        },
	        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
	        	console.log('onSlideLeave');
	        	console.log('slideIndex: ' + slideIndex);
	        	
	        	switch(nextSlideIndex){
	        		case 1:
	        			second_intro();
	        			break;
	        		case 2:
	        			third_intro();
	        			break;
	        		case 3:
	        			fourth_intro();
	        			break;
	        		case 4:
	        			fifth_intro();
	        			break;
	        		case 5:
	        			sixth_intro();
	        			break;
	        		case 6:
	        			seventh_intro();
	        			break;
	        	}
	   	    }
	    });

	    $('#trg1st').on("click",function(){
	    	$('#myChart').remove();
	    	chartUpdate(['MaterializeCSS','Bootstrap','Foundation','SemanticUI'],[100,100,53,48]);
	    	
	    });
	    $('#trg2nd').on("click",function(){
	    	$('#myChart').remove();
	    	chartUpdate(['Codeigniter','CakePHP','Laravel'],[65,30,42]);

	    });
	    $('#trg3rd').on("click",function(){
	    	$('#myChart').remove();
	    	chartUpdate(['AngularJS','jQuery','node.js'],[51,78,20]);
	    		    });
	    $('#trg4th').on("click",function(){
	    	$('#myChart').remove();
	    	chartUpdate(['SpringMVC'],[15]);
	    	
	    });
	    $('#trg5th').on("click",function(){
	    	$('#myChart').remove();
	    	chartUpdate(['Cordova','Xamarin'],[88,42]);
	    	
	    });
	    $('#trg6th').on("click",function(){
	    	$('#myChart').remove();
	    	chartUpdate(['.NET'],[92]);
	    	
	    });
	    $('#trg7th').on("click",function(){
	    	$('#myChart').remove();
	    	chartUpdate(['Django','Flask'],[23,64]);
	    	
	    });
	    $('#trg8th').on("click",function(){
	    	$('#myChart').remove();
	    	chartUpdate(['Ruby on Rails'],[50]);
	    	
	    });
	});

	function chartUpdate(labelx,datax){
		$('.graph-container').append("<canvas id='myChart' class='center' width='400' height='400'></canvas>");
		var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		    type: 'pie',
		    data: {
		        labels: labelx,
		        datasets: [{
		            label: '% of framework mastery',
		            data: datax,
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }],
		            xAxes: [{
		            	display: false,

		            }]
		        },
		        responsive: true,
		        showScale: false
		    }
		});
	}

	function displayDefaultChart(){
		var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		    type: 'pie',
		    data: {
		        labels: [],
		        datasets: [{
		            label: '',
		            data: [],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }],
		            xAxes: [{
		            	display: false
		            }]
		        },
		        responsive: true
		    }
		});
	}

	window.onload = function() {
	  Particles.init({
	    selector: '#myCanvas',
	    color: ['#e65100'],
	    maxParticles: '200',
	    connectParticles: true,
	    speed: '1',
	    sizeVariations: '50',
	    minDistance: '100'

	  });
	};

	$(function(){
		$(".quotation").typed({
		    strings: ["\"<b id='left-o'>Never measure</b> <b id='highlight-o'>possibilities</b> ,^1000<br/><b id='left-t'>It</b> <b id='highlight-t'>is endless</b>.^1000\""],
		    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		    stringsElement: null,
		    // typing speed
		    typeSpeed: 100,
		    // time before typing starts
		    startDelay: 0,
		    // backspacing speed
		    backSpeed: 0,
		    // shuffle the strings
		    shuffle: false,
		    // time before backspacing
		    backDelay: 500,
		    // loop
		    loop: false,
		    // false = infinite
		    loopCount: false,
		    // show cursor
		    showCursor: false,
		    // character for cursor
		    cursorChar: "",
		    // attribute to type (null == text)
		    attr: null,
		    // either html or text
		    contentType: 'html',
		    // call when done callback function
		    callback: function() {

		          $("#left-o").animate({color: '#3498db'});
		          $("#left-t").animate({color: '#3498db'});
		    },
		    // starting callback function before each string
		    preStringTyped: function() {},
		    //callback for every typed string
		    onStringTyped: function() {},
		    // callback for reset
		    resetCallback: function() {}
		});
	});

	function first_intro(){
		$(".intro-1").typed({
		    strings: ["Hi there!","I'm Daniel Sarabusing","Computer Science Student,<br/>Freelance developer,<br/>Gamer,<br/>Dubstep","From:<br/><img src='assets/img/ph.png'/><br/>The Pearl of the Orient Seas"],
		    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		    stringsElement: null,
		    // typing speed
		    typeSpeed: 70,
		    // time before typing starts
		    startDelay: 0,
		    // backspacing speed
		    backSpeed: 0,
		    // shuffle the strings
		    shuffle: false,
		    // time before backspacing
		    backDelay: 500,
		    // loop
		    loop: false,
		    // false = infinite
		    loopCount: false,
		    // show cursor
		    showCursor: true,
		    // character for cursor
		    cursorChar: " |",
		    // attribute to type (null == text)
		    attr: null,
		    // either html or text
		    contentType: 'html',
		    // call when done callback function
		    callback: function() {

		    },
		    // starting callback function before each string
		    preStringTyped: function() {},
		    //callback for every typed string
		    onStringTyped: function() {},
		    // callback for reset
		    resetCallback: function() {}
		});
	}
	function second_intro(){
		$(".intro-2").typed({
		    strings: ["I\'m a 19yr. old student who<br/><br/><span id='intro-2-extra'>\"loves to\": { </span><br/><span id='intro-2-extra-think'>\"think\": &nbsp;<i class='fa fa-lightbulb-o' aria-hidden='true'></i></span>" + 
		    				"<br/><span id='intro-2-extra-design'>\"design\": &nbsp; <i class='fa fa-paint-brush' aria-hidden='true'></i></span>" +
		    				"<br/><span id='intro-2-extra-inspire'>\"inspire\": &nbsp; <i class='fa fa-hand-grab-o' aria-hidden='true'></i></span>" +
		    				"<br/><span id='intro-2-extra-collaborate'>\"collaborate\": &nbsp; <i class='fa fa-group' aria-hidden='true'></i></span>" + 
		    				"<br/><span id='intro-2-extra-innovate'>\"innovate\": &nbsp; <i class='fa fa-cogs' aria-hidden='true'></i></span>" +
		    				"<br/><span id='intro-2-extra'>}</span>" +
		    				"<br/>and most of all to be a student to everybody."],
		    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		    stringsElement: null,
		    // typing speed
		    typeSpeed: 70,
		    // time before typing starts
		    startDelay: 0,
		    // backspacing speed
		    backSpeed: 0,
		    // shuffle the strings
		    shuffle: false,
		    // time before backspacing
		    backDelay: 500,
		    // loop
		    loop: false,
		    // false = infinite
		    loopCount: false,
		    // show cursor
		    showCursor: true,
		    // character for cursor
		    cursorChar: " |",
		    // attribute to type (null == text)
		    attr: null,
		    // either html or text
		    contentType: 'html',
		    // call when done callback function
		    callback: function() {
		          $("#left-o").css("color","#3498db");
		          $("#left-t").css("color","#3498db");
		    },
		    // starting callback function before each string
		    preStringTyped: function() {},
		    //callback for every typed string
		    onStringTyped: function() {},
		    // callback for reset
		    resetCallback: function() {}
		});
	}
	function third_intro(){
		$(".intro-3").typed({
		    strings: ["I like toListen(\'to everybody's idea\'); <br/>It helps me see things in different <span class='green accent-4'>perspectives</span> and <span class='red lighten-1'>disciplines</span>."],
		    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		    stringsElement: null,
		    // typing speed
		    typeSpeed: 70,
		    // time before typing starts
		    startDelay: 0,
		    // backspacing speed
		    backSpeed: 0,
		    // shuffle the strings
		    shuffle: false,
		    // time before backspacing
		    backDelay: 500,
		    // loop
		    loop: false,
		    // false = infinite
		    loopCount: false,
		    // show cursor
		    showCursor: true,
		    // character for cursor
		    cursorChar: " |",
		    // attribute to type (null == text)
		    attr: null,
		    // either html or text
		    contentType: 'html',
		    // call when done callback function
		    callback: function() {
		          $("#left-o").css("color","#3498db");
		          $("#left-t").css("color","#3498db");
		    },
		    // starting callback function before each string
		    preStringTyped: function() {},
		    //callback for every typed string
		    onStringTyped: function() {},
		    // callback for reset
		    resetCallback: function() {}
		});
	}
	function fourth_intro(){
		$(".intro-4").typed({
		    strings: ["<sub>I apply</sub><sup class='deep-purple-text darken-4 sub-data-4'>life philosophies</sup><sub> in creating</sub> <sup class='brown-text darken-3 sub-data-4'>design patterns,</sup><sup class='lime-text darken-3 sub-data-4'> data structures</sup> <sub>&amp;</sub> <sup class='deep-orange-text darken-3 sub-data-4'>user interfaces.</sup>"],
		    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		    stringsElement: null,
		    // typing speed
		    typeSpeed: 70,
		    // time before typing starts
		    startDelay: 0,
		    // backspacing speed
		    backSpeed: 0,
		    // shuffle the strings
		    shuffle: false,
		    // time before backspacing
		    backDelay: 500,
		    // loop
		    loop: false,
		    // false = infinite
		    loopCount: false,
		    // show cursor
		    showCursor: true,
		    // character for cursor
		    cursorChar: " |",
		    // attribute to type (null == text)
		    attr: null,
		    // either html or text
		    contentType: 'html',
		    // call when done callback function
		    callback: function() {
		        
		    },
		    // starting callback function before each string
		    preStringTyped: function() {},
		    //callback for every typed string
		    onStringTyped: function() {},
		    // callback for reset
		    resetCallback: function() {}
		});
	}
	function fifth_intro(){
		$(".intro-5").typed({
		    strings: ["I constantly look for different" + 
		    			"<div class='row center'>" + 
			    			"<div class='col s3 center'><i class='fa fa-coffee' aria-hidden='true'></i> meetups</div>" + 
			    			"<div class='col s3 center'><i class='fa fa-bullhorn' aria-hidden='true'></i> seminars</div>" + 
			    			"<div class='col s3 center'><i class='fa fa-building-o' aria-hidden='true'></i> conference</div>" + 
			    			"<div class='col s3 center'><i class='fa fa-laptop' aria-hidden='true'></i> hackathons</div>" +
			    			"<div class='col s12 center'>&amp;</div>" +
			    			"<div class='col s12 center'><i class='fa fa-cubes' aria-hidden='true'></i> community</div>" +
		    			"</div>" +
		    			"to learn new things everyday and grow as long as it is about <sub> technology &amp; design.</sub>"],
		    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		    stringsElement: null,
		    // typing speed
		    typeSpeed: 70,
		    // time before typing starts
		    startDelay: 0,
		    // backspacing speed
		    backSpeed: 0,
		    // shuffle the strings
		    shuffle: false,
		    // time before backspacing
		    backDelay: 500,
		    // loop
		    loop: false,
		    // false = infinite
		    loopCount: false,
		    // show cursor
		    showCursor: true,
		    // character for cursor
		    cursorChar: " |",
		    // attribute to type (null == text)
		    attr: null,
		    // either html or text
		    contentType: 'html',
		    // call when done callback function
		    callback: function() {
		    },
		    // starting callback function before each string
		    preStringTyped: function() {},
		    //callback for every typed string
		    onStringTyped: function() {},
		    // callback for reset
		    resetCallback: function() {}
		});
	}
	function sixth_intro(){
		$(".intro-6").typed({
		    strings: ["<div class='row'><div class='col s12 center'><i class='fa fa-gamepad large' aria-hidden='true'></i></div></div>",
		    		  "any game will do, my stress reliever.",
		    		  "<div class='row'>" + 
		    		  	"<div class='col s12 center'>" + 
		    		  		"<i class='fa fa-cutlery large' aria-hidden='true'></i>" + 
		    		  	"</div>" + 
		    		  	"<div class='col s3'>Coffee</div>" +
		    		  	"<div class='col s3'>Pizza</div>" +
		    		  	"<div class='col s3'>Pasta</div>" +
		    		  	"<div class='col s3'>Apple</div>" +
		    		  "</div>","those are my comfort foods.",
		    		  "<div class='row'>" +
		    		  	"<div class='col s12 center'>" +
		    		  		"<i class='fa fa-music large' aria-hidden='true'></i>" +
		    		  	"</div>" +
		    		  	"<div class='col s12 center'>" +
		    		  		"<ul>" +
		    		  			"<li> Dubstep / Drumstep / Dropstep / Chillstep / Melodic Dubstep" +
		    		  			"<li> Electro Dance Music </li>" +
		    		  			"<li> Acoustic Covers </li>" +
		    		  			"<li> Techno </li>" +
		    		  			"<li> Rock </li>" +
		    		  			"<li> Jazz </li>" +
		    		  		"</ul>" +
		    		  	"</div>" +
		    		  "</div>","favorite types of music <3"],
		    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		    stringsElement: null,
		    // typing speed
		    typeSpeed: 70,
		    // time before typing starts
		    startDelay: 0,
		    // backspacing speed
		    backSpeed: 0,
		    // shuffle the strings
		    shuffle: false,
		    // time before backspacing
		    backDelay: 500,
		    // loop
		    loop: false,
		    // false = infinite
		    loopCount: false,
		    // show cursor
		    showCursor: false,
		    // character for cursor
		    cursorChar: " |",
		    // attribute to type (null == text)
		    attr: null,
		    // either html or text
		    contentType: 'html',
		    // call when done callback function
		    callback: function() {

		    },
		    // starting callback function before each string
		    preStringTyped: function() {},
		    //callback for every typed string
		    onStringTyped: function() {},
		    // callback for reset
		    resetCallback: function() {}
		});
	}
	function seventh_intro(){
		$(".intro-7").typed({
			strings: ["Amazing!","You really did read my story?","Let me know you dropped by!"],
		    // strings: ["Amazing!","You really did read my story?",
		    // 		  "Let me know you dropped by!" +

		    // 		  	"<form>" +
		    // 		  		"<div class='row'>" +
		    // 		  			"<div class='input-field col s4 offset-s2 center'>" +
		    // 		  				"<input id='name' type='text' class='validate'>" +
		    // 		  				"<label for='name'>First Name</label>" +
		    // 		  			"</div>" +
		    // 		  			"<div class='input-field col s4 center'>" +
		    // 		  				"<input id='email' type='email' class='validate'>" +
		    // 		  				"<label for='email'>Email</label>" +
		    // 		  			"</div>" +
		    // 		  			"<div class='input-field col s12'>" +
		    // 		  				"<a class='waves-effect waves-light btn btn-notify'>Submit</a>" + 
		    // 		  			"</div>" +
		    // 		  		"</div>" +
		    // 		  	"</form>"
		    // 		],
		    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		    stringsElement: null,
		    // typing speed
		    typeSpeed: 70,
		    // time before typing starts
		    startDelay: 0,
		    // backspacing speed
		    backSpeed: 0,
		    // shuffle the strings
		    shuffle: false,
		    // time before backspacing
		    backDelay: 500,
		    // loop
		    loop: false,
		    // false = infinite
		    loopCount: false,
		    // show cursor
		    showCursor: false,
		    // character for cursor
		    cursorChar: " |",
		    // attribute to type (null == text)
		    attr: null,
		    // either html or text
		    contentType: 'html',
		    // call when done callback function
		    callback: function() {
		    	$('.form-buzz').removeClass("form-buzz").delay(3000).addClass("animated fadeInUp");
		    },
		    // starting callback function before each string
		    preStringTyped: function() {},
		    //callback for every typed string
		    onStringTyped: function() {},
		    // callback for reset
		    resetCallback: function() {}
		});
	}
	