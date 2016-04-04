Template.body.events({
  'submit form': function(event, instance) {
      event.preventDefault();
      console.log("Hello, world!");
  },
});
