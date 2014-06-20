function MinnesotaTour() {
	var morris = new google.maps.LatLng(45.586111,-95.913889);
	var fargo = new google.maps.LatLng(46.877186,-96.789803);
	var duluth = new google.maps.LatLng(46.786672,-92.100485);
	var minneapolis = new google.maps.LatLng(44.979965,-93.263836);
	var pipestone = new google.maps.LatLng(43.998582,-96.312812);
	var rochester = new google.maps.LatLng(44.021631,-92.469899);
	var internationalfalls = new google.maps.LatLng(48.596748,-93.409286);
	var roseau = new google.maps.LatLng(48.846093,-95.762766);
	var grandmarais = new google.maps.LatLng(47.750447,-90.334273);
	var ely = new google.maps.LatLng(47.903237,-91.867087);
	var bemidji = new google.maps.LatLng(47.473611,-94.880278);
	var marshall = new google.maps.LatLng(44.446944,-95.788333);
    var brainerd = new google.maps.LatLng(46.3514699,-94.1948972);
    var grandrapids = new google.maps.LatLng(47.228156,-93.5350818);
    var moorhead = new google.maps.LatLng(46.8657639,-96.7363173);
	
	this.center=morris;

	this.cities = [
		morris, moorhead, grandrapids, bemidji, pipestone, rochester, 
		internationalfalls, roseau, grandmarais
	];

	this.cities = shuffle(this.cities);
}