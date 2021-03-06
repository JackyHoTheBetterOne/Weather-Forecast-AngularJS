weatherApp.controller('homeController', ['$scope', "cityService", "$location",
function($scope, cityService, $location) {
  $scope.city = cityService.city;
  $scope.$watch('city', function(){
    cityService.city = $scope.city;
  });

  $scope.submit = function () {
    $location.path("/forecast");
  }
}]);

weatherApp.controller('forecastController', ['$scope', "weatherService", "$routeParams", "cityService",
function($scope, weatherService, $routeParams, cityService) {
  $scope.city = cityService.city;

  $scope.days = $routeParams.days || "2";

  $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);

  $scope.day_options = ["2", "5", "7"]

  $scope.convertToFahrenheit = function(degK) {
    return Math.round((1.8 * (degK - 273) + 32));
  }

  $scope.convertToDate = function (dt) {
    return new Date(dt * 1000);
  }
}]);
