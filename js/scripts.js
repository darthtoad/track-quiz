$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
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

    if (design === "yes") {
      $(".design").show();
    } else if (microsoft === "yes") {
      $(".microsoft").show();
    } else if (java === "yes") {
      $(".java").show();
    } else if (react === "yes") {
      $(".react").show();
    } else if (ruby === "yes") {
      $(".ruby").show();
    } else {
      alert('Did you say no or not respond to every question? Try saying "yes" to a question.');
    };
  });
});
