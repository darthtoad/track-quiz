$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var design = $("input:radio[name=1]:checked").val();
    var microsoft = $("input:radio[name=2]:checked").val();
    var java = $("input:radio[name=3]:checked").val();
    var react = $("input:radio[name=4]:checked").val();
    var ruby = $("input:radio[name=5]:checked").val();
    $(".design").hide();
    $(".microsoft").hide();
    $(".java").hide();
    $(".react").hide();
    $(".ruby").hide();

    if (!name || !design || !microsoft || !java || !react || !ruby) {
      alert("Please fill out all fields")
    } else {
      $(".name").text(name);
      if (design === "yes") {
        $(".design").fadeIn();
      } else if (microsoft === "yes") {
        $(".microsoft").fadeIn();
      } else if (java === "yes") {
        $(".java").fadeIn();
      } else if (react === "yes") {
        $(".react").fadeIn();
      } else if (ruby === "yes") {
        $(".ruby").fadeIn();
      } else {
        alert('Did you say no or not respond to every question? Try saying "yes" to a question.');
      };
    };
  });
});
