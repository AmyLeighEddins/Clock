  var app = angular.module('clockApp', []);
  app.controller('clockController', ["$timeout", function($timeout) {

    this.format = 12;
    this.time = "";

    this.getTime = function() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      if (m < 10) {m = "0" + m;}
      var s = today.getSeconds();
      if (s < 10) {s = "0" + s;}
      if (this.format == "24")
      {
        this.time = h + ":" + m + ":" + s;
        $timeout(this.getTime, null);
        return h + ":" + m + ":" + s;
      }
      else {
        var t = "";
        if (h > 12) {
          h = h - 12;
          t = "PM";
        }
        else {
          t = "AM";
        }
        this.time = h + ":" + m + ":" + s + " " + t;
        $timeout(this.getTime, null);
        return h + ":" + m + ":" + s + " " + t;
      }
    };
  }]);
