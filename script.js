$(document).ready(function() {

    // VARIABLES

    // colors
    var white = "#FCFCFC";
    var gray0 = "#EEE";
    var gray1 = "#CCC";
    var gray2 = "#999";
    var black = "#0F0F0F";


    // menu button
    var menuButton = $('#menu-b');
    var menuLine0 = $('#menu-b-l0');
    var menuLine1 = $('#menu-b-l1');
    var menuLine2 = $('#menu-b-l2');

    // intro
    var intro = $('#intro');
    var introArrow = $('#intro-arrow');
    var introText = $('#intro-text');
    var introH1 = $('#intro-h1');
    var introH2 = $('#intro-h2');
    var colors = ['#007EA7', '#69CA55', '#1D201F'];


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

    // intro
    function introColor() {
        var i = 0;
        setInterval(function() {
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
            top: '-=100%'
        }, 1000).fadeOut();
        introArrow.hide();
    }


    // EVENTS

    // enter site
    introColor();
    enterSite();

    // menu button
    menuButton.mouseenter(function() {
        menuActive();
    });
    menuButton.mouseleave(function() {
        menuUnActive();
    });

    // leave intro
    intro.scroll(function() {
        leaveIntro();
    });
});