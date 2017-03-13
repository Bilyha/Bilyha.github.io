var app = angular.module('app', []);

app.controller('firstController', ["$http", "$scope", "factor", function ($http, $scope, factor){	
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
	
	
}]);


app.controller('fromForm', ["$scope", "factor", "$injector", function ($scope, factor, $injector){
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
}]);

app.factory('factor',function(){
	return {
		postInf: {
		
		}
	}
});

app.directive('addpost', function(){
	return {
		link: function(scope, element, attrs){
			element.bind('click', function(event){
					
				document.getElementById("showPost").style.display="inline-block"; 
				document.getElementById("fil").style.display="block" ;	
				
			})

			element.bind('keypress', function(event){
					if(event.which === 13){
						document.getElementById("showPost").style.display="inline-block"; 
				document.getElementById("fil").style.display="block" ;	
					}
					else
						console.log('Do not work');
				})
			}

		}
	
});