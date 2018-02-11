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


    // EVENTS

    // menu button
    menuButton.mouseenter(function() {
        menuActive()
    });
    menuButton.mouseleave(function() {
        menuUnActive()
    });

});