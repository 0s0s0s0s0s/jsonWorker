const { readFile } = require("fs/promises");
const errors = require("../err/errors");

/**
 * @param {string} path - is path for file json
 * @returns {Promise<array | object>} is method can return array, object
 */

function read(path) {
	return new Promise(async (res, rej) => {
		if (!path) {
			rej(errors.path());
		}

		if (path.split(".").at(-1) !== "json") {
			rej(errors.errJson());
		}

		readFile(path, { encoding: "utf-8" })
			.then(data => {
				res(JSON.parse(data));
			})
			.catch(rej);
	});
}

module.exports = read;
