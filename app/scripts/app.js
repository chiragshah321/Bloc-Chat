(function () {

    function config ($stateProvider, $locationProvider) {

        $locationProvider
         .html5Mode({
             "enabled": true,
             "requireBase": false
         });

        $stateProvider
         .state("home", {
             "controller": "RoomCtrl as room",
             "templateUrl": "/templates/home.html",
             "url": "/"
         })
         .state("room", {
             "templateUrl": "/templates/room.html",
             "url": "/room"
         });

    }

    angular /* global angular*/
        .module("blocChat", ["ui.router", "ui.bootstrap", "firebase"])
        .config(config);

})();