 <script>
      var app = angular.module('CatanBoardGenerator', []);
      app.controller('MainController', function($scope) {
      $scope.data = [
        {
          "Group Name": "A",
          "Number of people": 3,
          "seniority points": 1,
          "Arrival time": 8,
          "Length": 1,
          "minutes": 32
        },
        {
          "Group Name": "I",
          "Number of people": 1,
          "seniority points": 1,
          "Arrival time": 8,
          "Length": 3,
          "minutes": 0
        },
        {
          "Group Name": "J",
          "Number of people": 4,
          "seniority points": 1,
          "Arrival time": 8,
          "Length": 2,
          "minutes": 16
        },
        {
          "Group Name": "B",
          "Number of people": 6,
          "seniority points": 4,
          "Arrival time": 9,
          "Length": 2,
          "minutes": 38
        },
        {
          "Group Name": "K",
          "Number of people": 4,
          "seniority points": 1,
          "Arrival time": 9,
          "Length": 2,
          "minutes": 50
        },
        {
          "Group Name": "F",
          "Number of people": 1,
          "seniority points": 3,
          "Arrival time": 10,
          "Length": 2,
          "minutes": 31
        },
        {
          "Group Name": "R",
          "Number of people": 3,
          "seniority points": 4,
          "Arrival time": 10,
          "Length": 1,
          "minutes": 27
        },
        {
          "Group Name": "G",
          "Number of people": 3,
          "seniority points": 5,
          "Arrival time": 11,
          "Length": 2,
          "minutes": 24
        },
        {
          "Group Name": "L",
          "Number of people": 1,
          "seniority points": 3,
          "Arrival time": 11,
          "Length": 2,
          "minutes": 45
        },
        {
          "Group Name": "C",
          "Number of people": 1,
          "seniority points": 4,
          "Arrival time": 12,
          "Length": 1,
          "minutes": 46
        },
        {
          "Group Name": "D",
          "Number of people": 6,
          "seniority points": 1,
          "Arrival time": 13,
          "Length": 2,
          "minutes": 40
        },
        {
          "Group Name": "H",
          "Number of people": 6,
          "seniority points": 5,
          "Arrival time": 15,
          "Length": 2,
          "minutes": 43
        },
        {
          "Group Name": "E",
          "Number of people": 3,
          "seniority points": 2,
          "Arrival time": 16,
          "Length": 2,
          "minutes": 49
        }
      ];

        $scope.name = 'World';

        $scope.parseData = function(data){
          for (group in data)
          {


          }
        }

        $scope.parseData($scope.data);
      });

    </script>