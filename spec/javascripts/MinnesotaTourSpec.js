describe("MinnesotaTour", function() {
  var minnesota;
  var cities;

  beforeEach(function() {
    minnesota = new MinnesotaTour();
    cities = minnesota.cities;
  });
	
  it("should have cities", function() {
	expect(cities.length).toBeGreaterThan(3);
  });

  describe("cities", function() {
	it("should be instances of Google's LatLng", function() {
		for (x in cities) {
			if (x.hasOwnProperty(minnesota.cities)) {
				expect(x).toBeLatLng();
			}
		}		
	});
  });
});