app.controller('meetupsController',['$scope','$resource',function($scope,$resource){
  $scope.meetupsCount =10;
  $scope.meetups = [
  {name: "MEAN.js"},
  {name: "Grunt.js"}];

  $scope.creatMeetup = function (){
    $scope.meetups.push({name: $scope.meetupName});
    $scope.meetupName ='';
  }
}]);
