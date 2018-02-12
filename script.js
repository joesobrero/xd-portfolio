$(document).ready(function() {

    // VARIABLES

    var view = 0;

    // colors
    var white = "#FCFCFC";
    var gray0 = "#EEE";
    var gray1 = "#CCC";
    var gray2 = "#999";
    var black = "#0F0F0F";

    // menu
    var menu = $('#menu');
    var menuUl = $('#menu-ul');
    var menuButton = $('#menu-b');
    var menuButtonC = $('#menu-c');
    var menuLine0 = $('#menu-b-l0');
    var menuLine1 = $('#menu-b-l1');
    var menuLine2 = $('#menu-b-l2');
    var menuCLine0 = $('#menu-c-l0');
    var menuCLine1 = $('#menu-c-l1');

    // intro
    var intro = $('#intro');
    var introBg = $('#intro-bg');
    var introArrow = $('#intro-arrow');
    var introText = $('#intro-text');
    var introH1 = $('#intro-h1');
    var introH2 = $('#intro-h2');
    var colors = ['#007EA7', '#69CA55', '#1D201F'];
    var colorInt;

    // work
    var bract = $('#bract');
    var bractP = $('#bract-prev-p');
    var bractA = $('#bract-prev-a');
    var bractImg = $('#bract-prev-img');
    var grow = $('#grow');
    var growP = $('#grow-prev-p');
    var growA = $('#grow-prev-a');
    var growImgBox = $('#grow-prev-img-box');
    var poly = $('#poly');
    var polyP = $('#poly-prev-p');
    var polyA = $('#poly-prev-a');
    var polyImg = $('#poly-prev-img');


    // FUNCTIONS

    // menu button
    function menuActive() {
        menuLine0.animate({
            backgroundColor: black
        });
        menuLine1.animate({
            backgroundColor: black
        });
        menuLine2.animate({
            backgroundColor: black,
            width: '+=34%'
        });
    }
    function menuUnActive() {
        menuLine0.animate({
            backgroundColor: gray2
        });
        menuLine1.animate({
            backgroundColor: gray2
        });
        menuLine2.animate({
            backgroundColor: gray2,
            width: '-=34%'
        });
    }
    function menuCActive() {
        menuCLine0.animate({
            backgroundColor: white
        });
        menuCLine1.animate({
            backgroundColor: white
        });
    }
    function menuCUnActive() {
        menuCLine0.animate({
            backgroundColor: gray2
        });
        menuCLine1.animate({
            backgroundColor: gray2
        });
    }

    // menu
    function menuOpen() {
        menuButton.fadeOut();
        menuButtonC.delay(200).fadeIn();
        menu.fadeIn().animate({
            width: '+=100%',
            backgroundColor: black
        }, 800);
        menuUl.delay(400).fadeIn(600);
    }
    function menuClose() {
        menuButton.delay(200).fadeIn();
        menuButtonC.fadeOut();
        menu.animate({
            width: '-=100%'
        }, 800).fadeOut();
        menuUl.fadeOut(600);
    }

    // intro
    function introColor() {
        var i = 0;
        colorInt = setInterval(function() {
            introH1.animate({
                color: colors[i]
            }, 5000);
            i++;
            if(i == colors.length) {
                i = 0;
            }
        }, 5000)
    }
    function enterSite() {
        introText.delay(1000).fadeIn(1200);
        introArrow.delay(2000).fadeIn(600);
        menuButton.delay(2000).fadeIn(600);
    }
    function leaveIntro() {
        introText.animate({
            top: '-=50%',
            opacity: '-=1'
        }, 800).fadeOut();
        introArrow.hide();
        intro.delay(2000).fadeOut();
    }

    // work
    function showBract() {
        bract.delay(800).fadeIn().animate({
            top: '-=50vh'
        }, 1000);
        bractImg.delay(1300).fadeIn(1500);
        bractP.delay(1800).animate({
            left: '+=60px',
            opacity: '+=100'
        }, 1000);
        bractA.delay(1800).animate({
            bottom: '+=40px',
            opacity: '+=100'
        }, 1000);
    }
    function hidebract() {
        bract.animate({
            top: '-=100vh'
        }, 2000).fadeOut();
        bractImg.fadeOut(1000);
        bractP.animate({
            opacity: '-=100'
        }, 1000).delay(1000).animate({
            left: '-=60px'
        });
        bractA.animate({
            opacity: '-=100'
        }, 1000).delay(1000).animate({
            bottom: '-=40px'
        });
    }
    function showGrow() {
        grow.delay(800).fadeIn().animate({
            top: '-=50vh'
        }, 1000);
        growImgBox.delay(1300).fadeIn(1500);
        growP.delay(1800).animate({
            left: '+=60px',
            opacity: '+=100'
        }, 1000);
        growA.delay(1800).animate({
            bottom: '+=40px',
            opacity: '+=100'
        }, 1000);
    }
    function hideGrow() {
        grow.animate({
            top: '-=100vh'
        }, 2000).fadeOut();
        growImgBox.fadeOut(1000);
        growP.animate({
            opacity: '-=100'
        }, 1000).delay(1000).animate({
            left: '-=60px'
        });
        growA.animate({
            opacity: '-=100'
        }, 1000).delay(1000).animate({
            bottom: '-=40px'
        });
    }
    function showPoly() {
        poly.delay(800).fadeIn().animate({
            top: '-=50vh'
        }, 1000);
        polyImg.delay(1300).fadeIn(1500);
        polyP.delay(1800).animate({
            left: '+=60px',
            opacity: '+=100'
        }, 1000);
        polyA.delay(1800).animate({
            bottom: '+=40px',
            opacity: '+=100'
        }, 1000);
    }
    function hidePoly() {
        poly.animate({
            top: '-=100vh'
        }, 2000).fadeOut();
        polyImg.fadeOut(1000);
        polyP.animate({
            opacity: '-=100'
        }, 1000).delay(1000).animate({
            left: '-=60px'
        });
        polyA.animate({
            opacity: '-=100'
        }, 1000).delay(1000).animate({
            bottom: '-=40px'
        });
    }

    // EVENTS

    // enter site
    introColor();
    enterSite();

    // menu
    menuButton.mouseenter(function() {
        menuActive();
    });
    menuButton.mouseleave(function() {
        menuUnActive();
    });
    menuButton.click(function() {
        menuOpen();
    });
    menuButtonC.click(function() {
        menuClose();
    });
    menuButtonC.mouseenter(function() {
        menuCActive();
    });
    menuButtonC.mouseleave(function() {
        menuCUnActive();
    });
    menu.click(function() {
        menuClose();
    });

    // leave intro
    intro.scroll(function() {
        leaveIntro();
        showBract();
        clearInterval(colorInt);
    });
    bract.scroll(function() {
        hidebract();
        showGrow();
    });
    grow.scroll(function() {
        hideGrow();
        showPoly();
    });
    poly.scroll(function() {
        hidePoly();
    });
});