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
    vm.countColors = 0;
    // vm.black = "\2\2\2";
    vm.generateColors = function() {
    	vm.totalBaseThree = [];
    	vm.i = 0;
    	while(vm.i<vm.userInputString.length) {
	    	// vm.totalBaseThree.push(vm.convertCharToBaseThree(vm.userInputString[0]));
	    	vm.totalBaseThree.push(vm.convertCharToBaseThree(vm.userInputString[vm.i]));
	    	vm.i = vm.i+1;
    	}
    	vm.totalBaseThree = vm.totalBaseThree.join(",5,");
    	vm.totalBaseThree = vm.totalBaseThree.split(",");
    	for(vm.i=0; vm.i<vm.totalBaseThree.length-1; vm.i++) {
    		if (vm.totalBaseThree[vm.i+1] == vm.totalBaseThree[vm.i] ) {
    			vm.totalBaseThree[vm.i+1] = "4";
    		}
    	}
    	vm.totalBaseThree = ["5", "4", "5"].concat(vm.totalBaseThree);
        vm.totalBaseThree = vm.totalBaseThree.concat(["5", "4", "5"]);
    	// console.log(vm.totalBaseThree);
    	vm.interval = $interval( function(){ callAtInterval(); }, 1000);
    }

    vm.stop = function() {
    	vm.countColors = 0;
	    vm.data = {
	    	'r': 0,
	    	'g': 0,
	    	'b': 0
	    }
		$interval.cancel(vm.interval);
    }

    vm.convertCharToBaseThree = function(myChar) {
    	vm.n = myChar.charCodeAt(0);
    	vm.lastChar = '';
    	vm.baseThree = [];
    	while(vm.n > 0){
    		vm.baseThree.push(vm.n % 3);
    		vm.n = Math.floor(vm.n / 3);
    	}
    	vm.baseThree.reverse();
    	return vm.baseThree;
    	// console.log(vm.baseThree);
    }


    function callAtInterval() {
    	vm.temp = vm.totalBaseThree[vm.countColors];
    	console.log(vm.temp);
    	vm.countColors = (vm.countColors + 1) % vm.totalBaseThree.length;
    	if (vm.temp == "0") {
    		vm.data = {
    			'r': 255,
	    		'g': 0,
	    		'b': 0
    		}
    	} else if (vm.temp == "1") {
    		vm.data = {
    			'r': 0,
	    		'g': 200,
	    		'b': 0
    		}
    	} else if (vm.temp == "2") {
    		vm.data = {
    			'r': 0,
	    		'g': 0,
	    		'b': 255
    		}
    	} else if (vm.temp == "4") {
    		vm.data = {
    			'r': 255,
	    		'g': 255,
	    		'b': 255
    		}
    	} else if (vm.temp == "5") {
    		vm.data = {
    			'r': 0,
	    		'g': 0,
	    		'b': 0
    		}
    	}
	    console.log("Interval occurred");
	}

  });
