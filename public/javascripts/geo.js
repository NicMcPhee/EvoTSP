function MAX_CITIES() {
	// This limit is imposed by Google Maps. You can't have more than 8 waypoints
	// unless you're a "premium" customer (when you can have 23). So we're currently
	// limited to 8 cities plus the start and end cities which, for TSP, have to be
	// the same. This means we have a maximum total of 9 cities.
	// 
	// I'm not yet clear
	// on whether I can hack around this by making multiple requests and displaying
	// them all, or whether this will fundamentally limit what the size of a tour
	// that we can work with.
	return 9;
}

function make_tour_request(cities) {
	var numCities = cities.length;
	if (numCities > MAX_CITIES()) {
		throw "MAX CITIES EXCEEDED";
	}
	var index;
	var start = cities[0];
	// var end = cities[numCities-1];
	var wayPts = new Array();
	for (index=1; index<numCities; ++index) {
		wayPts.push({location: cities[index], stopover:true});
	}
	
	var tourRequest = {
		origin: start,
		destination: start,
		waypoints: wayPts,
		provideRouteAlternatives: false,
		travelMode: google.maps.TravelMode.DRIVING,
		unitSystem: google.maps.UnitSystem.IMPERIAL
	}
	
	return tourRequest;
}