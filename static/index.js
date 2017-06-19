var app = angular.module('contest_app', ['angucomplete-alt']);

app.controller('mainCtrl', function($scope) {
  $scope.selectedObj = {};
  $scope.nationalities = [  
     {
        "NATIONALITY_ID": 1,
        "description":"Afghan"
     },
     {  
        "NATIONALITY_ID": 2,
        "description":"Andorran"
     },
     {  
        "NATIONALITY_ID": 3,
        "description":"Botswanan"
     },
     {  
        "NATIONALITY_ID": 4,
        "description":"Brazilian"
     },
     {  
        "NATIONALITY_ID": 5,
        "description":"Canadian"
     },
     {
        "NATIONALITY_ID": 6,
        "description":"Cypriot"
     }
  ];
});