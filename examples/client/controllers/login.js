angular.module('MyApp')
  .controller('LoginCtrl', function($scope, $mdToast, $auth) {

    // Sign in with email and password
    $scope.handleLogin = function() {
      $auth.login($scope.user)
        .then(function() {
          $mdToast.showSimple('Successfully signed in');
        })
        .catch(function(response) {
          $mdToast.showSimple(response.data.message);
        });
    };

    // Sign in with OAuth
    $scope.handleOauth = function(provider) {
      $auth.authenticate(provider)
        .then(function() {
          $mdToast.showSimple('Successfully signed in');
        })
        .catch(function(response) {
          $mdToast.showSimple(response);
        });
    };
  });