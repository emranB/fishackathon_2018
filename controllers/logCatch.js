(function () {
  
  app.controller('logCatch',
  ['$window', '$scope', '$routeParams', '$location', '$http', '$q', '$timeout', '$rootScope',
  function (
    $window,
    $scope,
    $routeParams,
    $location,
    $http,
    $q,
    $timeout,
    $rootScope,
    $watch
  ) {
    




    $scope.user = {
      latitude: 'a',
      longitude: 'b'
    };


    var getLocation = function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var lat = position.coords.latitude;
          var long = position.coords.longitude;
    
          $scope.$apply(function () {
            $scope.user.latitude = lat;
            $scope.user.longitude = long;
          });

          drawMap($scope.user);
        });
      } else { 
        $scope.user.latitude = "Geolocation is not supported by this browser.";
        $scope.user.longitude = "Geolocation is not supported by this browser.";
      }

      return $scope.user;
    };
    
    getLocation();

    /**
     * Draw Map
     * @param user 
     */
    var drawMap = function (user) {

      $http.get("/controllers/data.js").then(function (data) {
        console.log(data);
      });

      var svg = d3.select("#map")
                  .append("svg")
                    .attr("width", "100%")
                    .attr("height", "500");
    };



  }]);
  
}());