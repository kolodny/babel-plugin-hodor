var assert = require('assert');
var babel = require('babel-core');
var chalk = require('chalk');
var clear = require('clear');
var diff = require('diff');
var fs = require('fs');
var path = require('path');

require('babel-register');

var pluginPath = require.resolve('../src');

function runTests() {
	var testsPath = __dirname + '/fixtures/';

	fs.readdirSync(testsPath).map(function(item) {
		return {
			path: path.join(testsPath, item),
			name: item,
		};
	}).filter(function(item) {
		return fs.statSync(item.path).isDirectory();
	}).forEach(runTest);
}

function runTest(dir) {
	var output = babel.transformFileSync(dir.path + '/actual.js', {
		plugins: [pluginPath]
	});

	var expected = fs.readFileSync(dir.path + '/expected.js', 'utf-8');

	function normalizeLines(str) {
		return str.trimRight().replace(/\r\n/g, '\n');
	}

	process.stdout.write(chalk.bgWhite.black(dir.name));
	process.stdout.write('\n\n');

	if (normalizeLines(output.code) !== normalizeLines(expected)) {
		diff.diffLines(normalizeLines(output.code), normalizeLines(expected))
		.forEach(function (part) {
			var value = part.value;
			if (part.added) {
				value = chalk.green('+ ' + part.value);
			} else if (part.removed) {
				value = chalk.red('- ' + part.value);
			} else {
				value = '  ' + value;
			}


			process.stdout.write(value);
		});
		process.stdout.write('\n\n\n');
		process.exit(1);

	} else {
		process.stdout.write('  passed')
		process.exit(0);
	}



}

runTests();
