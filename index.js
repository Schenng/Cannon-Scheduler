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

  $scope.showForm = false;
  $scope.showConfirm = false;

  $scope.groups = {
    name: "",
    people: 0,
    arrivalTime : 0,
    length: 0
  }

  //Add a group to $scope.data
  $scope.addGroup = function(toggle) {
    if(toggle == "true"){
      $scope.showForm = true;
    }
    else {
      $scope.showForm = false;
    }
  }

  //Create the schedule based off the $scope.data
  $scope.createSchedule = function() {
    $scope.generateGP($scope.data);
    console.log($scope.data);

    var currentMax = 0;
    var nextEntry;

    $scope.schedule = [];

    for (var x = 0; x<=11; x++) {

      currentMax = 0;

      console.log($scope.data[x]["Arrival time"]);
      console.log(x);

      if ($scope.data[x]["Arrival time"] <= x+8){
        console.log("Arrival time condition");

        //Find biggest GP less then or equal to x
        for(group in $scope.data) {
          if($scope.data[group]["Arrival time"] <= x+8){
            if(currentMax < $scope.data[group]["GP"]) {
              currentMax = $scope.data[group]["GP"];
              nextEntry = $scope.data[group];

            }
          }
        }
        $scope.schedule.push(nextEntry);

        if($scope.schedule.length == 1) {
        nextEntry["Arrival time"] = 8;
       }

       else if($scope.schedule.length > 1) {
        nextEntry["Arrival time"] = x + 7;
       }

        x += nextEntry["duration"];

      }
    }

    console.log($scope.data);
    console.log($scope.schedule);
  }

   //Add a group to $scope.data
  $scope.confirm = function(toggle) {
    if(toggle == "true"){
      $scope.showConfirm = true;
    }
    else{
      $scope.showConfirm = false;
    }
  }

  //Add a group to $scope.data
  $scope.scheduleToggle = function(toggle) {
    if(toggle == "true"){
      $scope.showSchedule = true;
    }
    else{
      $scope.showSchedule = false;
    }
  }

   //Parse the data
  $scope.generateGP = function(data) {

    console.log("Number of groups:" + data.length);

    for (groupCounter in data) {

      var group = data[groupCounter];

      group["GP"] =_.has(group,["GP"]) ? group["GP"] : 0;
      group["DP"] =_.has(group,["DP"]) ? group["DP"] : 0;
      group["UTP"] =_.has(group,["UTP"]) ? group["UTP"] : 0;
      group["duration"] =_.has(group,["duration"]) ? group["duration"] : 0;


      group["DP"] = $scope.dp(group);
      group["UTP"] = $scope.utp(group);
      group["duration"] = $scope.duration(group);

      group["GP"] = group["Number of people"] + (2 * group["seniority points"]) + group["DP"] - group["UTP"];

      // Morning time slots 8-12 (8-11)
      /*if (group["Arrival time"] <= 11) {
        $scope.section["morning"] = _.has($scope.section,["morning"]) ? $scope.section["morning"] : [];
        $scope.section["morning"].push(group);
      } */ 

      //Afternoon Time Slots 12-4 (12-3)
      /*else if (group["Arrival time"] >= 12 && group["Arrival time"] <= 15) {
        $scope.section["afternoon"] = _.has($scope.section,["afternoon"]) ? $scope.section["afternoon"] : [];
        $scope.section["afternoon"].push(group);
      } */ 

      //Evening Time Slots 4-7 (4-7)
      /*else if (group["Arrival time"] == 16) {
        $scope.section["evening"] = _.has($scope.section,["evening"]) ? $scope.section["evening"] : [];
        $scope.section["evening"].push(group);
      } */
    }
  }

  $scope.sort = function () {
  }

  //Duration Points
  $scope.dp = function(group) {
    var a = (group["Length"] * 6);
    var b = Math.ceil(group["minutes"] / 10);
    var dp = a + b;

    return dp;
  }
  
  //Unused Time Points
  $scope.utp = function(group) {
    var utp;

    if(group["minutes"] == 0) {
      utp = 0;
    }
    else {
      utp = Math.ceil((60-group["minutes"]) / 10);
    }

    return utp;
  }

  //Duration
  $scope.duration = function(group) {
    var duration;
    if(group["minutes"] > 0){
      duration = group["Length"] + 1;
    }
    else {
      duration = group["Length"];
    }
    return duration;
  }


});

