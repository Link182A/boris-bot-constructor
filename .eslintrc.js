module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'@vue/standard',
		'@vue/typescript/recommended'
	],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-mixed-spaces-and-tabs': 0,
		'vue/no-unused-vars': 'off',
		'@typescript-eslint/camelcase': ['error', { properties: 'never' }],
		'space-before-function-paren': ['error', {
			anonymous: 'always',
			named: 'never',
			asyncArrow: 'always'
		}],
		indent: ['error', 'tab'],
		semi: [
			'error',
			'always'
		]
		// 'object-curly-spacing': ['error','never']
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)'
			],
			env: {
				jest: true
			}
		},
		{
			files: ['*.vue'],
			rules: {
				indent: 'off'
			}
		}
	]

};
