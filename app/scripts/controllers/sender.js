'use strict';

/**
 * @ngdoc function
 * @name synChromaApp.controller:SenderCtrl
 * @description
 * # SenderCtrl
 * Controller of the synChromaApp
 */
angular.module('synChromaApp')
  .controller('SenderCtrl', function ($interval) {
  	var vm = this;
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    vm.data = {
    	'r': 0,
    	'g': 0,
    	'b': 0
    }
    vm.userInputString = "";
    vm.black = "\0\0\0";
    var res = String.fromCharCode(255);
    vm.white = res + res + res;
    // vm.black = "\2\2\2";
    vm.generateColors = function() {
    	vm.redCounter=0;
	    vm.greenCounter=1;
	    vm.blueCounter=2;
	    vm.loopString = vm.white + vm.black + vm.white + vm.userInputString;
    	vm.interval = $interval( function(){ callAtInterval(); }, 50);
    }

    vm.stop = function() {
    	vm.redCounter=0;
	    vm.greenCounter=1;
	    vm.blueCounter=2;
	    vm.data = {
	    	'r': 0,
	    	'g': 0,
	    	'b': 0
	    }
		$interval.cancel(vm.interval);
    }
    function callAtInterval() {
		vm.data.r = vm.loopString.charCodeAt(vm.redCounter);
		console.log("RED: " + vm.data.r);
		vm.data.g = vm.loopString.charCodeAt(vm.greenCounter);
		console.log("GREEN: " + vm.data.g);
		vm.data.b = vm.loopString.charCodeAt(vm.blueCounter);
		console.log("BLUE:" + vm.data.b)

		if (vm.blueCounter < vm.loopString.length-2) {
			vm.redCounter += 3 ;
			vm.greenCounter += 3;
			vm.blueCounter += 3;
		} else {
			vm.data.b = 0;
			vm.redCounter=0;
		    vm.greenCounter=1;
		    vm.blueCounter=2;
		}
	    console.log("Interval occurred");
	}

  });
