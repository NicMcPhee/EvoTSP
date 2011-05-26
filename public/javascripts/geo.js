function MAX_CITIES() {
	return 9;
}

function make_tour_request(cities) {
	var numCities = cities.length;
	if (numCities > MAX_CITIES()) {
		throw "MAX CITIES EXCEEDED";
	}
	var index;
	var start = cities[0];
	var end = cities[numCities-1];
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