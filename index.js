/**
 * Created by ayushimittal on 18/08/17.
 */
var app= angular.module("myApp",[]);
app.controller("myCtrl",function ($scope) {
 $scope.items =["Milk","Bread","Cheese"];
 $scope.add = function (newItem) {
     if(newItem !== "")
     {
         $scope.items.push(newItem);
     }

     $scope.newItem="";
 };
 $scope.deleteItem = function (item) {
     for (var i = 0; i<$scope.items.length ;i++)
     {
         if($scope.items[i] == item)
         {
             $scope.items.splice(i,1);
             break;
         }
     }

 };
});