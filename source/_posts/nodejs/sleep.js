const tag = '[sleep.js]';

const sleepFn = async (ms) => {
	await new Promise(resolve => {
		setTimeout(() => { }, ms)
	})
}

const sleep = async () => {
	await new Promise(resolve => {
		setTimeout(() => { resolve()}, 2000)
	})
}

module.exports = {
	sleepFn,
	sleep
}
