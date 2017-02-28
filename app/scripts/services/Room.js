(function () {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child('rooms');/* global firebase */
        var rooms = $firebaseArray(ref);
        return {'all': rooms};
    }

    angular /* global angular */
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
