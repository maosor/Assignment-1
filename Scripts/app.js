var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
    $scope.Feed = "Arroz, frijoles, Carne";
    $scope.DarMensaje = function () {
      $scope.Feed = $scope.Feed.split(',');
      $scope.cantidad = $scope.Feed.length;
      if($scope.Feed == ""){
          $scope.Mensaje= "Please enter data first";
          $scope.color = "red"
      }
       else if ($scope.cantidad <= 3)
        {
          $scope.Mensaje= "Enjoy";
          $scope.color = "green"
        }
        else
        {
          $scope.Mensaje ="Too much";
          $scope.color = "green"
        }
    };
});
