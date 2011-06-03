describe("MAX_CITIES", function() {
  it("should be 9", function() {
	// Assuming a non-pro Google account and that I don't have a way to
	// stitch together multiple segments into a larger tour, our
	// max is 9.
	expect(MAX_CITIES()).toBe(9);
  });
});

describe('make_tour_request', function() {
	var cities = [5, 8, 9, 6, 3, 2, 0];
	var request;
	
	beforeEach(function() {
		request = make_tour_request(cities);
	});
	
	it("should start and end at 5", function() {
		expect(request.origin).toBe(5);
		expect(request.destination).toBe(5);
	});
	
	it("should have 6 waypoints, all stopovers", function() {
		var waypoints = request.waypoints;
		expect(request.waypoints.length).toBe(6);
		for (var i in waypoints) {
			expect(waypoints[i].location).toBe(cities[(parseInt(i)+1)]);
			expect(waypoints[i].stopover).toBeTruthy();
		}
	});
	
	it("should not request alternative routes", function() {
		expect(request.provideRouteAlternatives).not.toBeTruthy();
	});
	
	// TODO
	// I'm not sure whether I should test driving and imperial or not.
	// I suspect not, as these are things that we may want people to be
	// able to set. I should probably have optional arguments to
	// make_tour_request that allows me to specify values for these,
	// and then test that they default to something like metric and
	// driving.
	it("should use driving by default", function() {
		expect(request.travelMode).toBe(google.maps.TravelMode.DRIVING);
	});
});