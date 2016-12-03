$(document).ready(function() {
  $('#pagepiling').pagepiling({
    direction: 'horizontal',
    verticalCentered: true,
    sectionsColor: ["#ff9900", "#808080", "#b3b3b3"],
    anchors: ["aboutMe", "projects", "contact"],
    menu: '#myMenu',
    navigation: false
  });
});
