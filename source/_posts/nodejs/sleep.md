---
title: nodejs sleep
date: 2018-05-1 17:21:51
tags: [nodejs, sleep, async/await promise]
---

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
