var app=angular.module("myApp", ["ngRoute"]);



app.config(function($routeProvider) {
    $routeProvider.when('/detail/:id', {
        controller: DetailCtrl,
        templateUrl:'detail.html'
    }).otherwise({
        redirectTo: '/'
    });
});




function ArtistsController($scope, $http, $location) {
    IMAGE_ROOT = "http://rabidgadfly.com/assets/angular/dataload/";
    DEFAULT_IMAGE = "blank.gif";
    $scope.currentPage = 0;
    $scope.pageSize = 3;
    $scope.data = [];
	$scope.show = 1;
    $scope.selectedArtist = "";
    $scope.selectedArtistImage = IMAGE_ROOT + DEFAULT_IMAGE;

    $http.get('artists.json').success(function(data) {
        $scope.artists = data;
        
    });
	
	
	$scope.goto_detail=function(artist){
	alert("artistId"+artist.artistId);
	$location.url('/detail/' + artist.artistId);
	};
	
	
	
	
	
	
}

function DetailCtrl($scope, $location, $routeParams) {

		alert("in detail page");
	   $http.get('artists.json').success(function(data) {
        $scope.artists = data;
		$scope.item = data[$routeParams.artistId];
    });
    $scope.goto_list = function() {
        $location.url('/');
    };
}

app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});

var images = document.getElementsByClassName("detailimage");

for (i = 0; i < images.length; i++) {
    var childImage = images[i].childNodes[1];

    if (!childImage.complete) {
        images[i].style.opacity = "0";
    }
}

function fadeImg(image) {
    var parentClass = image.parentNode;
    parentClass.style.transition = "opacity ease-out  1.75s";
    parentClass.style.opacity = "1";
}





