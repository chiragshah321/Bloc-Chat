(function () {
    function RoomCtrl($uibModal, Room) {
        this.roomData = Room;

        this.open = function () {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/newroom.html',
                controller: 'NewRoomCtrl',
                controllerAs: 'newRoom'
            });
        };
    }

    angular /* global angular */
        .module('blocChat')
        .controller('RoomCtrl', ['$uibModal', 'Room', RoomCtrl]);
})();
