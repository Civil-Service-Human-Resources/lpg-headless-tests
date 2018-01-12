module.exports = {
	globalSetup: './setup/setup.js',
	globalTeardown: './setup/teardown.js',
	testEnvironment: './setup/env.js',
	testPathIgnorePatterns: ['./page_object/*', './extension/*'],
}