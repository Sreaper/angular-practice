function EventController($scope) {
	$scope.count = 0;
	$scope.$on('MyEvent', function () {
		$scope.count++;
		console.log($scope.count);
	});
}

function EventController1($scope) {
	$scope.count = 0;
	$scope.$on('MyEvent1', function () {
		$scope.count++;
		console.log($scope.count);
	});
}
