/* Normally I would try to avoid using JQuery in keeping with the current hype
around not useing it, but pagepiling.js requires it and I could use the practice,
so screw it.  */

$(document).ready(function() {
  //Implements the Pagepiling library
  $('#pagepiling').pagepiling({
    direction: 'horizontal',
    verticalCentered: true,
    sectionsColor: ["#ff9900", "#b3b3b3"],
    anchors: ["aboutMe", "projects"],
    menu: '#myMenu',
    navigation: false,
    touchSensitivity: 13
  });

  //Hopefully prevents the bulk of spammers...
  document.getElementById("emailLink").setAttribute("href", "mailto:DStewart1673@gmail.com");
  document.getElementById("emailName").innerHTML = "DStewart1673";
  document.getElementById("emailDomain").innerHTML = "@gmail.com";

  //Implements the Typed.js library.
  $(".hello").typed({
    strings: ["Hello Visitor...", "Hello Web...", "Hello World!"],
    typeSpeed: 200
  });
});
