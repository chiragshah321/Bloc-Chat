(function() {
     function RoomCtrl(Room) {
         this.roomData = Room;
     } 
 
     angular /*global angular*/
         .module('blocChat')
         .controller('RoomCtrl', ['Room', RoomCtrl]);
 })();