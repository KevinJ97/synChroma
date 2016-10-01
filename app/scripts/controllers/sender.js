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
    
    vm.generateColors = function() {
    	vm.redCounter=0;
	    vm.greenCounter=1;
	    vm.blueCounter=2;
	 	console.log("\0".charCodeAt(0));
    	vm.interval = $interval( function(){ callAtInterval(); }, 50);
    }

    function callAtInterval() {
		vm.data.r = vm.userInputString.charCodeAt(vm.redCounter);
		console.log("RED: " + vm.data.r);
		vm.data.g = vm.userInputString.charCodeAt(vm.greenCounter);
		console.log("GREEN: " + vm.data.g);
		vm.data.b = vm.userInputString.charCodeAt(vm.blueCounter);
		console.log("BLUE:" + vm.data.b)

		if (vm.blueCounter < vm.userInputString.length-2) {
			vm.redCounter += 3;
			vm.greenCounter += 3;
			vm.blueCounter += 3;
		} else {
			vm.data.b = 0;
			$interval.cancel(vm.interval);
		}
	    console.log("Interval occurred");
	}

  });
