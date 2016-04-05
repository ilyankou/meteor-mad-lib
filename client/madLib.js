Template.body.events({
  'submit form': function(event) {
      event.preventDefault();

      const exclamation = $("#exclamation").val().trim();
      const adverb = $("#adverb").val().trim();
      const animal = $("#animal").val().trim();
      const verb = $("#verb").val().trim();

      const madLib = "Oh, " + exclamation + "! My brother is a " + animal + " and he's " +
      adverb + " " + verb + "ing.";


      console.log(madLib);

      $("#myTitle").text(madLib).css({"color": "#0000ff"}).fadeOut(0).fadeIn(2000);
  },
});


$(document).ready(function() {

})
