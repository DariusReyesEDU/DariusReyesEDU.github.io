(function() {
    // Purpose of this script is to render a page, based on the ID within the URL.

    // data.json should be refactored rathering than having to create another index...

    var path = window.location.pathname;
    path = path.split("/").slice(0, -1).pop(-2);

    movieIndex = {
	123: 0,
	456: 1
    }
    
    var body = document.querySelector("body"), movieContain = document.querySelector(".movie-select"), movieInfo = document.querySelector(".movie-info"), movieTitle = document.querySelector(".movie-info h2"), movieSyp = document.querySelector(".movie-info .syp"), movieFeat = document.querySelector(".movie-info .movie-ftrs"), runTime = document.querySelector(".runtime");
    
    fetch("https://DariusReyesEDU.github.io/assets/data.json")
    	.then(response => response.json())
	.then(json => {
	    movie = json.movies[movieIndex[path]];

	    body.style.backgroundImage = "url('../../assets/images/banners/"+movie.id+".jpg')";
	    movieTitle.innerHTML = movie.title;
	    movieSyp.innerHTML = movie.desc;

	    len = Object.keys(movie.stars).length;

	    for (var i = 0; i < len; i++) {
		var x = document.createElement("div"), y = document.createElement("img"), z = document.createElement("span");
		x.setAttribute("class", "feature");

		y.src = "../../assets/images/stars/"+movie.stars[i].image;
		z.innerHTML = movie.stars[i].name;
		
		x.append(y);
		x.append(z);
		movieFeat.append(x);
	    };
	    
	    runTime.innerHTML = movie.runTime.minutes+" minutes";

	});
})();
