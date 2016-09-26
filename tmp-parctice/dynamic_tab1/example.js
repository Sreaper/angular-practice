var app = angular.module('plunker', ['ngAnimate','ui.bootstrap']);

app.controller("TabsParentController", function ($scope,$uibModal, $timeout, $log) {
    $scope.animationsEnabled = true;

    $scope.open = function (size, workspace) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {

                workspace: function () {
                    return workspace;
                }

            }
        });

        modalInstance.result.then(function (selectedItem) {
            var index=$scope.workspaces.indexOf(selectedItem)
            $scope.workspaces.splice(index,1);
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };



    var setAllInactive = function() {
        //angular.forEach($scope.workspaces, function(workspace) {
        // workspace.active = false;
        // });
    };
    var addNewWorkspace = function() {
        var id = $scope.workspaces.length+1 ;
        $scope.workspaces.push({
            id: id,
            name: "Workspace " + id,

        });
        $timeout(function(){
            $scope.active = $scope.workspaces.length;
        }, 50);
    };

    $scope.workspaces = [];

    $scope.addWorkspace = function () {
        setAllInactive();
        addNewWorkspace();
    };
    $scope.remove=function(item){
        var index=$scope.workspaces.indexOf(item)
        $scope.workspaces.splice(index,1);
    }

});

angular.module('plunker').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, workspace) {
    $scope.selectedworkspace = workspace;

    $scope.ok = function () {
        $uibModalInstance.close( $scope.selectedworkspace );
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});




app.controller ("TabsChildController", function($scope, $log){

});