var app = angular.module('app', []);

app.controller('firstController', function ($http, $scope, factor){	
	$http.get('https://api.nytimes.com/svc/mostpopular/v2/mostshared/Technology/7.json?api-key=1fabf1febc0746158eb08b0135f27586')
		.success(function(result){
			console.log(result);
			console.log(result.results[0].byline);
			
			$scope.results = result.results;
			

		})
		.error(function(data, status){
			console.log(data);
			console.log(status);
		});
	$scope.filt;	
	
	$scope.postInf = {};
	$scope.factor=factor;
	
	
});


app.controller('fromForm', function ($scope, factor, $injector){
  	$scope.postInf = {};	
  	$scope.factor=factor;
  	
	$scope.save = function(post) {
		angular.copy(post, factor.postInf);	
		
	}	
	$scope.click=function(){
		var deps = $injector.annotate($scope.save);
		console.log(deps);
		alert(deps+"\nMore information in console...")
		
	};
});

app.factory('factor',function(){
	return {
		postInf: {
		
		}
	}
});
