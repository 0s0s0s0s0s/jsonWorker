function errPath() {
	return new TypeError("Expected a filepath");
}

function errJson() {
	return new TypeError("Is file ain't json");
}

module.exports = {
	path: errPath,
	errJson
};
