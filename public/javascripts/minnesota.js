function MinnesotaTour() {
	var morris = new google.maps.LatLng(45.586111,-95.913889);
	var fargo = new google.maps.LatLng(46.877186,-96.789803);
	var duluth = new google.maps.LatLng(46.786672,-92.100485);
	var minneapolis = new google.maps.LatLng(44.979965,-93.263836);
	var pipestone = new google.maps.LatLng(43.998582,-96.312812);
	var rochester = new google.maps.LatLng(44.021631,-92.469899);
	
	this.center=morris;

	this.tourCoords = [
		morris, fargo, duluth, minneapolis, pipestone, rochester
	];

	this.tourCoords = shuffle(this.tourCoords);

	var index;
	this.start = this.tourCoords[0];
	this.end = this.tourCoords[this.tourCoords.length-1];
	this.wayPts = new Array();
	for (index=1; index<this.tourCoords.length; ++index) {
		this.wayPts.push({location: this.tourCoords[index], stopover:true});
	}
}