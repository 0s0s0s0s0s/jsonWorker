const read = require("./read");
const write = require("./write");
const errors = require("../err/errors");

/**
 * @param {string} path - is path for json file
 * @param {any} item - add item in json-array
 * @param {{replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined)}} options
 */

function push(path, item, options) {
	return new Promise(async (res, rej) => {
		if (!path) {
			rej(errors.path());
		}

		if (path.split(".").at(-1) !== "json") {
			rej(errors.errJson());
		}

		if (!Array.isArray(await read(path))) {
			rej(new TypeError("Is json file ain't array"));
		}

		const data = await read(path);
		data.push(item);

		res(write(path, data, options));
	});
}

module.exports = push;
