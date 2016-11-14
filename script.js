$(document).ready(function() {
  $('#pagepiling').pagepiling({
    direction: 'horizontal',
    verticalCentered: true,
    sectionsColor: ['#ffffff', '#4EFFEF', "#ffffff"],
    anchors: ["aboutMe", "projects", "contact"],
    menu: '#myMenu'
  });
});
