function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '?rd=4221159546"></script>');
}

function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

/* cookie.JS
 ========================================================*/
include('js/jquery.cookie.js');

/* Easing library
 ========================================================*/
include('js/jquery.easing.1.3.js');

/* PointerEvents  
 ========================================================*/
;
(function ($) {
    if (isIE() && isIE() < 11) {
        include('js/pointer-events.js');
        $('html').addClass('lt-ie11');
        $(document).ready(function () {
            PointerEventsPolyfill.initialize({});
        });
    }
})(jQuery);


/* ToTop
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.ui.totop.js');

        $(document).ready(function () {
            $().UItoTop({
                easingType: 'easeOutQuart',
                containerClass: 'toTop fa fa-angle-up'
            });
        });
    }
})(jQuery);

/* EqualHeights
 ========================================================*/
;
(function ($) {
    var o = $('[data-equal-group]');
    if (o.length > 0) {
        include('js/jquery.equalheights.js');
    }
new ModalVideo('.js-modal-btn', {channel: 'vimeo'});	

	$('.perf').readmore(
	{
		blockCSS: 'display: inline-block;' , 
		moreLink: '<a href="#">VVVV more</a>',
		collapsedHeight: 100
		});
})(jQuery);


/* Photoswipe
 ========================================================*/
;

function  getData() {

  
}

var openPhotoSwipe = function( name) {
  var pswpElement = document.querySelectorAll('.pswp')[0];
    if (name === undefined) {
          name = 'Eger';
    } 

 var items = [];	
   $.getJSON('https://res.cloudinary.com/moscowknot/image/list/'+name+'18p.json', function( data ) {
	  console.log("get"+name); 
   }
   .done(function(data) {
  $.each( data.resources, function( i, it ) {

    items.push( {
	    src: 'https://res.cloudinary.com/moscowknot/image/upload/' + it.public_id + '.jpg',
        w: it.width,
        h: it.height
	});
  });	   
   })
   .fail(function(){
	   console.log("nope"+name); 
   })

 


});	
// build items array

  console.log(items);


// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();

};


(function ($) {
	$('[data-name]').on('click', function(e){ 
	openPhotoSwipe($(this).data('name'));
	e.preventDefault();
	
	})
})(jQuery);

/*
(function ($) {
	$('.photosw').on('click', function(){ 
	openPhotoSwipe($(this).data('name'));
	
	})
})(jQuery);

*/


/* SMOOTH SCROLLIG
 ========================================================*/
;
/*(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.mousewheel.min.js');
        include('js/jquery.simplr.smoothscroll.min.js');

        $(document).ready(function () {
            $.srSmoothscroll({
                step: 150,
                speed: 800
            });

        });
    }
})(jQuery);

/* Copyright Year
 ========================================================*/
;
(function ($) {
    var currentYear = (new Date).getFullYear();
    $(document).ready(function () {
        $("#copyright-year").text((new Date).getFullYear());
    });
})(jQuery);


$('perf').readmore();


/* Google Map1
 ========================================================*/
/* ;
(function ($) {
    var o = document.getElementById("google-map");
    if (o) {
       include('//maps.google.com/maps/api/js?key=AIzaSyCPZr4mCU0Zu6duYsr0N7GbmkEjO13S4eM');
        include('js/jquery.rd-google-map.js');
        $(document).ready(function () {
            var o = $('#google-map');
            if (o.length > 0) {
                o.googleMap({
                        styles: [{
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [{"color": "#e9e9e9"}, {"lightness": 17}]
                        }, {
                            "featureType": "landscape",
                            "elementType": "geometry",
                            "stylers": [{"color": "#f5f5f5"}, {"lightness": 20}]
                        }, {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [{"color": "#ffffff"}, {"lightness": 17}]
                        }, {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [{"color": "#ffffff"}, {"lightness": 29}, {"weight": 0.2}]
                        }, {
                            "featureType": "road.arterial",
                            "elementType": "geometry",
                            "stylers": [{"color": "#ffffff"}, {"lightness": 18}]
                        }, {
                            "featureType": "road.local",
                            "elementType": "geometry",
                            "stylers": [{"color": "#ffffff"}, {"lightness": 16}]
                        }, {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [{"color": "#f5f5f5"}, {"lightness": 21}]
                        }, {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [{"color": "#dedede"}, {"lightness": 21}]
                        }, {
                            "elementType": "labels.text.stroke",
                            "stylers": [{"visibility": "on"}, {"color": "#ffffff"}, {"lightness": 16}]
                        }, {
                            "elementType": "labels.text.fill",
                            "stylers": [{"saturation": 36}, {"color": "#333333"}, {"lightness": 40}]
                        }, {"elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {
                            "featureType": "transit",
                            "elementType": "geometry",
                            "stylers": [{"color": "#f2f2f2"}, {"lightness": 19}]
                        }, {
                            "featureType": "administrative",
                            "elementType": "geometry.fill",
                            "stylers": [{"color": "#fefefe"}, {"lightness": 20}]
                        }, {
                            "featureType": "administrative",
                            "elementType": "geometry.stroke",
                            "stylers": [{"color": "#fefefe"}, {"lightness": 17}, {"weight": 1.2}]
                        }]
                    }
                )
                ;
            }
        });
    }
})
(jQuery);

/* WOW
 ========================================================*/
;
(function ($) {
    var o = $('html');

    if ((navigator.userAgent.toLowerCase().indexOf('msie') == -1 ) || (isIE() && isIE() > 9)) {
        if (o.hasClass('desktop')) {
            include('js/wow.js');

            $(document).ready(function () {
                new WOW().init();
            });
        }
    }
})(jQuery);

/* Contact Form
 ========================================================*/
;
(function ($) {
    var o = $('#contact-form');
    if (o.length > 0) {
        include('js/modal.js');
        include('js/TMForm.js');

        if ($('#contact-form .recaptcha').length > 0) {
            include('//www.google.com/recaptcha/api/js/recaptcha_ajax.js');
        }
    }
})(jQuery);

/* Orientation tablet fix
 ========================================================*/
$(function () {
    // IPad/IPhone
    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
        ua = navigator.userAgent,

        gestureStart = function () {
            viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
        },

        scaleFix = function () {
            if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
                viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                document.addEventListener("gesturestart", gestureStart, false);
            }
        };

    scaleFix();
    // Menu Android
    if (window.orientation != undefined) {
        var regM = /ipod|ipad|iphone/gi,
            result = ua.match(regM);
        if (!result) {
            $('.sf-menus li').each(function () {
                if ($(">ul", this)[0]) {
                    $(">a", this).toggle(
                        function () {
                            return false;
                        },
                        function () {
                            window.location.href = $(this).attr("href");
                        }
                    );
                }
            })
        }
    }
});
var ua = navigator.userAgent.toLocaleLowerCase(),
    regV = /ipod|ipad|iphone/gi,
    result = ua.match(regV),
    userScale = "";
if (!result) {
    userScale = ",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">');
/* Subscribe Form
 ========================================================*/
;
(function ($) {
    var o = $('#subscribe-form');
    if (o.length > 0) {
        include('js/sForm.js');
    }
})(jQuery);
