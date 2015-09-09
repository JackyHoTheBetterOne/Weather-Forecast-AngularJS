weatherApp.directive("weatherReport", function(){
  return {
    restrict: 'E',
    templateUrl: 'directives/weatherReport',
    replace: true,
    scope: {
      weatherDay: "=",
      convertToStandard: "&",
      convertToDate: "&",
      dateFormat: "@"
    }
  }
})
