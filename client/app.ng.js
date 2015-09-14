angular.module('speakeasy', ['angular-meteor']);

angular.module('speakeasy').controller('PlayerListCtrl', function($scope, $meteor){
  $scope.players = $meteor.collection(Players);
});

angular.module('speakeasy').controller('UserListCtrl', function($scope, $meteor) {
});

angular.module('speakeasy').controller('ChatCtrl', function($scope, $meteor) {
  $scope.chat = $meteor.collection(Chat);
});

angular.module('speakeasy').controller('InputCtrl', function($scope, $meteor) {
  chat = $meteor.collection(Chat);
  $scope.handle_input = function(input) {
    console.log(input);
    var text = input;
    if (text.charAt(0) == "/") {
      var command = text.slice(1);
      //handle command
      console.log('command received: ' + command);
    }
    else {
      //send message
      chat.insert({
        uname: Meteor.user().nickname,
        text: text
      });
    }
  };
});

angular.module('speakeasy').controller('SignupLoginCtrl', function($scope, $meteor) {
  $scope.signup = function (user_obj) { 
    
  };
  $scope.login = function (user_obj) { };
});

angular.module('speakeasy').directive('enterPressed', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.enterPressed);
                });
                event.preventDefault();
            }
        });
    };
});

angular.module('speakeasy').run(function($rootScope) {
  console.log('startup');
  if(!Meteor.user()) {
    console.log ("no user!");
    $('#login-modal').foundation('reveal','open');
  }
});

Template.loginButtons.rendered = function () {
  Accounts._loginButtonsSession.set('dropdownVisible', true);
};

Accounts.ui.config({
   passwordSignupFields: "USERNAME_AND_OPTIONAL_EMAIL"
});
