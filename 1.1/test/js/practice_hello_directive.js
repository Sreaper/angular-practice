/**
 * Created by szm on 2016/9/11.
 */
var szmModule = angular.module("szmHello", []);
szmModule.controller("helloController", ["$scope", function ($scope) {
	$scope.name = "szm";
}])
szmModule.directive("hello", function () {
	return {
		restrict: "E",
		template: '<div> hello lyl<div',
		replace: true
	};
});
