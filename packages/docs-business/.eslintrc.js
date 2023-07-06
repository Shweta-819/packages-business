module.exports = {
	extends        : ['@cogoport/eslint-config/next', '@cogoport/eslint-config/alias-monorepo'],
	ignorePatterns : ['dist/**/*', '.next/**/*', 'out/**/*', '!.stylelintrc.js'],
	env            : { browser: true },
	root           : true,
};
