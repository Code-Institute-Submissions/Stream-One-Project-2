angular.module('slideShowExample', ['simple-slideshow'])
	.controller('slideShowCtrl', ['$scope', function($scope){
		$scope.slides = [
			{name: 'Not my cat.', url: 'https://farm2.staticflickr.com/1318/5114665665_e55b2c2169_n.jpg'},
			{name: 'Again, not my cat.', url: 'https://farm2.staticflickr.com/1079/901626554_8bc51ec160_n.jpg'}]
	}]);




var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}


