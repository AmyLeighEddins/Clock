  var app = angular.module('clockApp', []);
  app.controller('clockController', ["$timeout", "dateFilter", function($timeout, dateFilter) {

    this.format = 12;
    this.time = "";

    this.getTime = function() {
      var today;
      if (this.format == "24")
      {
        today = dateFilter(Date.now(), 'H:mm:ss');
      }
      else {
        today = dateFilter(Date.now(), 'h:mm:ss a');
      }
      $timeout(this.getTime, null);
      return today;
    };
  }]);
