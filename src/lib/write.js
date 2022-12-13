const { writeFile } = require("fs/promises");
const errors = require("../err/errors");

/**
 * @param {string} path - is path for json file
 * @param {object | array} obj - is obj in json file
 * @param {{replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined)}} options
 */

function write(path, obj, options) {
	return new Promise(async (res, rej) => {
		if (!path) {
			rej(errors.path());
		}

		if (path.split(".").at(-1) !== "json") {
			rej(errors.errJson());
		}

		writeFile(path, JSON.stringify(obj, options?.replacer, options?.space), {
			encoding: "utf-8"
		})
			.then(res)
			.catch(rej);
	});
}

module.exports = write;
