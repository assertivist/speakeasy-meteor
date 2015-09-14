Meteor.startup(function (){
  if (Players.find().count() === 0) {
  }
  Chat.insert({
    uname: "Server",
    text: "Started at " + moment().format('MMMM Do YYYY, h:mm:ss a')
  });

  Meteor.setInterval(function() {
    
  }, 500);
});
