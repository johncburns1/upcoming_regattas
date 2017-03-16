angular.module("sailingApp", ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "",
        controller: "ListController",
        resolve: {
          contacts: function(Contacts) {
              return Contacts.getContacts();
          }
        }
      })
  })
  .service("Contacts", function($http) {
    this.getContacts = function() {
      return $http.get("/contacts").
        then(function(response) {
            return response;
        }, function(response) {
            alert("Error retrieving contacts.");
        });
    }
  })
  .controller("ListController", function(contacts, $scope) {
    $scope.contacts = contacts.data;
  });
