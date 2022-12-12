const read = require("jsonWorker/src/lib/read");
const write = require("jsonWorker/src/lib/write");
const errors = require("../err/errors");

/**
 * @param {string} path
 * @param {any} item
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