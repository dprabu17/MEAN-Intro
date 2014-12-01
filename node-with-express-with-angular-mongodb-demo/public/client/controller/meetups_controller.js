app.controller('meetupsController',['$scope','$resource',function($scope,$resource){
  var Meetup = $resource('/api/meetups');

  
  //$scope.meetups = [
  //{name: "MEAN.js"},
  //{name: "Grunt.js"}];
  $scope.meetups =[];
  Meetup.query(function (results){
    $scope.meetups = results;
  });
  

  $scope.creatMeetup = function (){
    var meetup = new Meetup();
    meetup.name = $scope.meetupName;
    meetup.$save(function(result){
      $scope.meetups.push(result);
      $scope.meetupName="";
    });
  }
}]);
