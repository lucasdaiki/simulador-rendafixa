module.exports = {
	'root': true,
	'env': {
		'es6': true,
		'browser': true
	},
	'globals': {
		'axios': true,
		'vanillaTextMask': true,
		'createNumberMask': true
	},
	'extends': 'eslint:recommended',
	'rules': {
		'indent': ['error', 2],
		'semi': ['error', 'never'],
		'linebreak-style': ['error', 'unix'],
		'no-console': ['error', {
			'allow': ['log', 'warn', 'error', 'debug']
		}],
		'quotes': ['error', 'single'],
		'camelcase': 'error',
		'no-var': ['error']
	}
};
