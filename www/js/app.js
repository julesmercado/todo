// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.controller('TodoCtrl', function($rootScope, $scope, $ionicModal, $ionicPopup) {
  
  $scope.tasks = [{task_name:'asdf'}]
  
  
  $scope.newTask = function( mode , task ){
    
    $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
      $scope.taskModal = modal;
      $scope.taskModal.show();
      $scope.title = task.task_name;
    }, {
      scope: $scope,
      animation: 'slide-in-up'
    });
    
  }

  $scope.delete = function( id ){
    $scope.tasks.splice( id , 1 )
  }

  $scope.hideModal = function(){
    $scope.taskModal.remove();
  }

  $scope.addTodo = function(title){
    
      $scope.tasks.push( {task_name:title} )
      console.log( $rootScope.mode )
      $scope.hideModal();

    
  }

  

  $scope.deletetask = function(index){
    $ionicPopup.confirm({
      title: 'Confirm Delete',
      content: 'Are you sure you want to delete this task?'
    }).then(function(res) {
      if(res) {
        $scope.delete(index)
      } 
    });
  }
})

.run(function($ionicPlatform) {
  console.log( "init" )
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
