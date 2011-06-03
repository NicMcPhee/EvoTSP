beforeEach(function() {
  this.addMatchers({
    toBeLatLng: function(expectedLatLng) {
      var location = this.actual;
	  return location instanceof google.maps.LatLng;
    }
  })
});
