Template.body.events({
  'submit form': function(event) {
      event.preventDefault();

      const exclamation = document.getElementById('exclamation').value.trim();
      const adverb = document.getElementById('adverb').value.trim();
      const animal = document.getElementById('animal').value.trim();
      const verb = document.getElementById('verb').value.trim();

      const madLib = "Oh, " + exclamation + "! My brother is a " + animal + " and he's " +
      adverb + " " + verb + "ing.";


      console.log(madLib);
  },
});
