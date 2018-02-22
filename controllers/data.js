(function () {
  
    app.controller('data',
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
      
      var getData = function () {
        return $http.get("/data").then(function(data) {
          $scope.data = data;
        });
      };

      var drawMap = function () {

        var map = new Datamap({element: document.getElementById("map")});

        var mapData = $scope.data.data.features;

        var svg = d3.select("#map")
                    .append("svg")
                      .attr("width", "100%")
                      .attr("height", "500px")
                      .attr("transform", "translate(137.5, -575)")
                      .style("opacity", "0.4");
                      
        var projection = d3.geo.mercator()
                           .scale(130);
                          //  .translate( [700, 500 / 1.5]);
        var path = d3.geo.path().projection(projection);
        
        // var projection = d3.geoMercator();
        // var path = d3.geoPath().projection(projection);
        
        var setMap = svg.append("g")
                        .selectAll("g")
                            .data(mapData)
                            .enter()
                        .append("g")
                        .append("path")
                            .attr("d", path)
                            .attr("fill", "steelblue");
      };




      var loadPage = function () {
        getData()
          .then(drawMap);
      };
      loadPage();
  
    }]);
    
  }());